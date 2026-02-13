import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "No signature provided" },
        { status: 400 }
      );
    }

    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("Webhook secret not configured");
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 500 }
      );
    }

    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("Invalid webhook signature");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);

    switch (event.event) {
      case "subscription.activated":
        await handleSubscriptionActivated(event.payload.subscription.entity);
        break;

      case "subscription.charged":
        await handleSubscriptionCharged(event.payload.payment.entity);
        break;

      case "subscription.cancelled":
        await handleSubscriptionCancelled(event.payload.subscription.entity);
        break;

      case "subscription.paused":
        await handleSubscriptionPaused(event.payload.subscription.entity);
        break;

      case "subscription.resumed":
        await handleSubscriptionResumed(event.payload.subscription.entity);
        break;

      case "subscription.completed":
        await handleSubscriptionCompleted(event.payload.subscription.entity);
        break;

      default:
        console.log(`Unhandled event type: ${event.event}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

async function handleSubscriptionActivated(subscription: any) {
  const { error } = await supabase
    .from("subscriptions")
    .update({
      subscription_status: "active",
      razorpay_customer_id: subscription.customer_id,
      current_period_start: new Date(subscription.current_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_end * 1000).toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("razorpay_subscription_id", subscription.id);

  if (error) {
    console.error("Error updating subscription on activation:", error);
  }
}

async function handleSubscriptionCharged(payment: any) {
  const { error } = await supabase
    .from("subscriptions")
    .update({
      payment_method_last4: payment.card_id ? payment.card_id.slice(-4) : null,
      updated_at: new Date().toISOString(),
    })
    .eq("razorpay_subscription_id", payment.subscription_id);

  if (error) {
    console.error("Error updating subscription on charge:", error);
  }
}

async function handleSubscriptionCancelled(subscription: any) {
  const { error } = await supabase
    .from("subscriptions")
    .update({
      subscription_status: "cancelled",
      cancelled_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("razorpay_subscription_id", subscription.id);

  if (error) {
    console.error("Error updating subscription on cancellation:", error);
  }
}

async function handleSubscriptionPaused(subscription: any) {
  const { error } = await supabase
    .from("subscriptions")
    .update({
      subscription_status: "paused",
      updated_at: new Date().toISOString(),
    })
    .eq("razorpay_subscription_id", subscription.id);

  if (error) {
    console.error("Error updating subscription on pause:", error);
  }
}

async function handleSubscriptionResumed(subscription: any) {
  const { error } = await supabase
    .from("subscriptions")
    .update({
      subscription_status: "active",
      updated_at: new Date().toISOString(),
    })
    .eq("razorpay_subscription_id", subscription.id);

  if (error) {
    console.error("Error updating subscription on resume:", error);
  }
}

async function handleSubscriptionCompleted(subscription: any) {
  const { error } = await supabase
    .from("subscriptions")
    .update({
      subscription_status: "completed",
      updated_at: new Date().toISOString(),
    })
    .eq("razorpay_subscription_id", subscription.id);

  if (error) {
    console.error("Error updating subscription on completion:", error);
  }
}
