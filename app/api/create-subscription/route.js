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
      return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
    }

    const user = users?.find(u => u.email === email);
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('name, phone, country_code')
      .eq('id', user.id)
      .single();

try {
  const customer = await razorpay.customers.create({
    name: profile?.name || 'Manifestor',
    email: email,
    contact: profile?.phone || '+919999999999', // Dummy number if missing
    notes: {
      user_id: user.id,
    },
  });
} catch (razorpayError) {
  console.error('RAZORPAY CUSTOMER ERROR:', JSON.stringify(razorpayError, null, 2));
  throw razorpayError;
}

    const subscription = await razorpay.subscriptions.create({
      plan_id: process.env.RAZORPAY_PLAN_ID,
      customer_notify: 1,
      quantity: 1,
      total_count: 12,
      start_at: Math.floor(new Date('2026-02-22T00:00:00Z').getTime() / 1000),
      notes: {
        user_id: user.id,
        batch_cohort: 'feb_22_wave',
      },
    });

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
      throw subError;
    }

    return NextResponse.json({
      success: true,
      subscriptionId: subscription.id,
      customerId: customer.id,
    });

  } catch (error) {
    console.error('Create subscription error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create subscription' },
      { status: 500 }
    );
  }
}
