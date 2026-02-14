import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { createClient } from '@supabase/supabase-js';

export async function POST(req) {
  try {
    const { email } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data: { users }, error: authError } = await supabase.auth.admin.listUsers();
    
    if (authError) {
      console.error('Auth error:', authError);
      return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
    }

    const user = users?.find(u => u.email === email);
    
    if (!user) {
      console.error('User not found:', email);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('name, phone, country_code')
      .eq('id', user.id)
      .single();

    console.log('Creating customer for:', email);

    // Create customer - REMOVE THE INNER TRY/CATCH
    const customer = await razorpay.customers.create({
      name: profile?.name || 'Manifestor',
      email: email,
      contact: profile?.phone || '+919999999999',
      notes: {
        user_id: user.id,
      },
    });

    console.log('Customer created:', customer.id);

    // Create subscription
    const subscription = await razorpay.subscriptions.create({
      plan_id: process.env.RAZORPAY_PLAN_ID,
      customer_id: customer.id, // ADD THIS - it was missing!
      customer_notify: 1,
      quantity: 1,
      total_count: 12,
      start_at: Math.floor(new Date('2026-02-22T00:00:00Z').getTime() / 1000),
      notes: {
        user_id: user.id,
        batch_cohort: 'feb_22_wave',
      },
    });

    console.log('Subscription created:', subscription.id);

    // Save to Supabase
    const { error: subError } = await supabase
      .from('subscriptions')
      .upsert({
        user_id: user.id,
        razorpay_customer_id: customer.id,
        razorpay_subscription_id: subscription.id,
        subscription_status: subscription.status,
        billing_start_date: new Date('2026-02-22'),
        trial_start_date: new Date(),
        trial_end_date: new Date('2026-02-22'),
        batch_cohort: 'feb_22_wave',
        email_enabled: true,
        phone_enabled: !!profile?.phone,
        notes_sent_count: 0,
      });

    if (subError) {
      console.error('Supabase error:', subError);
      throw subError;
    }

    console.log('Success!');

    return NextResponse.json({
      success: true,
      subscriptionId: subscription.id,
      customerId: customer.id,
    });

  } catch (error) {
    console.error('Create subscription error:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to create subscription',
        details: error.toString()
      },
      { status: 500 }
    );
  }
}