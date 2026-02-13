import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!razorpayKeyId || !razorpaySecret) {
      return NextResponse.json(
        { error: "Payment gateway not configured" },
        { status: 500 }
      );
    }

    const planId = process.env.RAZORPAY_PLAN_ID;

    const auth = Buffer.from(`${razorpayKeyId}:${razorpaySecret}`).toString("base64");

    const subscriptionResponse = await fetch("https://api.razorpay.com/v1/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        plan_id: planId,
        customer_notify: 1,
        quantity: 1,
        total_count: 12,
        start_at: Math.floor(new Date("2025-02-22T00:00:00Z").getTime() / 1000),
        notes: {
          cohort: "february_22_2025",
        },
      }),
    });

    if (!subscriptionResponse.ok) {
      const error = await subscriptionResponse.json();
      console.error("Razorpay error:", error);
      return NextResponse.json(
        { error: "Failed to create subscription" },
        { status: 500 }
      );
    }

    const subscription = await subscriptionResponse.json();

    const { data: userData } = await supabase.auth.getUser();

    if (userData.user) {
      const { error: dbError } = await supabase
        .from("subscriptions")
        .upsert({
          user_id: userData.user.id,
          razorpay_subscription_id: subscription.id,
          subscription_status: "created",
          batch_cohort: "february_22_2025",
          billing_start_date: new Date("2025-02-22T00:00:00Z").toISOString(),
          trial_start_date: new Date("2025-02-22T00:00:00Z").toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: "user_id",
        });

      if (dbError) {
        console.error("Database error:", dbError);
      }
    }

    return NextResponse.json({
      subscriptionId: subscription.id,
    });
  } catch (error) {
    console.error("Subscription creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
