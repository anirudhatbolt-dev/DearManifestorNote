"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Sparkles, Loader2 } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function SubscribePage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubscribe = async () => {
    if (!user) {
      router.push("/auth/signup?redirect=/subscribe");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create subscription");
      }

      if (!scriptLoaded) {
        alert("Payment gateway is loading. Please try again in a moment.");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: data.subscriptionId,
        name: "Dear Manifestor",
        description: "Daily Manifestation Notes",
        handler: async function (response: any) {
          try {
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_subscription_id: response.razorpay_subscription_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (verifyResponse.ok) {
              router.push("/subscribe/success");
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            alert("An error occurred. Please contact support.");
          }
        },
        prefill: {
          email: user.email,
        },
        theme: {
          color: "#3D3331",
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Subscription error:", error);
      alert("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#E5DDD5" }}>
        <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#3D3331" }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#E5DDD5" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-medium mb-8"
            style={{ color: "#3D3331", fontFamily: "Crimson Pro" }}
          >
            Become a Daily Manifestor
          </h1>
          <div className="space-y-6 max-w-2xl mx-auto">
            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: "#3D3331" }}
            >
              Right now, thousands are waking up to their manifestation note at 11:11
            </p>
            <p
              className="text-lg sm:text-xl leading-relaxed font-medium"
              style={{ color: "#3D3331" }}
            >
              You've felt what one note can do.
            </p>
            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: "#3D3331" }}
            >
              Imagine that clarity. Every single morning. At the universe's most powerful moment.
            </p>
            <p
              className="text-xl sm:text-2xl font-semibold mt-8"
              style={{ color: "#3D3331" }}
            >
              The next wave of manifestors begins February 22nd.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border-2 border-[#D4C4B8]">
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-10 text-center"
            style={{ color: "#3D3331", fontFamily: "Crimson Pro" }}
          >
            What Daily Manifestors Get
          </h2>

          <div className="space-y-8 mb-10">
            <div className="text-center pb-6 border-b-2 border-[#D4C4B8]">
              <h3
                className="text-xl sm:text-2xl font-semibold mb-3"
                style={{ color: "#3D3331" }}
              >
                Your personalized note at 11:11 AM
              </h3>
              <p
                className="text-base sm:text-lg"
                style={{ color: "#3D3331", opacity: 0.8 }}
              >
                Every single day. Aligned to YOUR goals. YOUR journey. YOUR reality.
              </p>
            </div>

            <div className="text-center pb-6 border-b-2 border-[#D4C4B8]">
              <h3
                className="text-xl sm:text-2xl font-semibold mb-3"
                style={{ color: "#3D3331" }}
              >
                You become part of the 11:11 ritual
              </h3>
              <p
                className="text-base sm:text-lg"
                style={{ color: "#3D3331", opacity: 0.8 }}
              >
                Join thousands who start their mornings with the universe's most powerful reminder.
              </p>
            </div>

            <div className="text-center pb-6 border-b-2 border-[#D4C4B8]">
              <h3
                className="text-xl sm:text-2xl font-semibold mb-3"
                style={{ color: "#3D3331" }}
              >
                Your first note arrives February 22nd
              </h3>
              <p
                className="text-base sm:text-lg"
                style={{ color: "#3D3331", opacity: 0.8 }}
              >
                11:11 AM sharp. The universe doesn't wait for anyone.
              </p>
            </div>

            <div className="text-center pt-2">
              <div className="inline-flex items-baseline gap-2 mb-3">
                <span
                  className="text-6xl sm:text-7xl font-bold"
                  style={{ color: "#3D3331", fontFamily: "Crimson Pro" }}
                >
                  $11.11
                </span>
                <span
                  className="text-2xl font-medium"
                  style={{ color: "#3D3331" }}
                >
                  /month
                </span>
              </div>
              <p
                className="text-base sm:text-lg"
                style={{ color: "#3D3331", opacity: 0.8 }}
              >
                The universe's number. Your daily manifestation ritual. Cancel anytime.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="inline-flex items-center gap-3 rounded-full px-10 py-5 text-white font-medium text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              style={{ backgroundColor: "#3D3331" }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Become a Daily Manifestor
                </>
              )}
            </button>
            <p
              className="text-sm mt-4"
              style={{ color: "#3D3331", opacity: 0.7 }}
            >
              Billing starts February 22. Your manifestation ritual starts the same day.
            </p>
            <p
              className="text-sm mt-2 italic"
              style={{ color: "#3D3331", opacity: 0.6 }}
            >
              (We've already personalized 2 notes for you—now let us remind you every morning what you're calling in.)
            </p>
          </div>
        </div>

<div className="text-center">
  <p
    className="text-base"
    style={{ color: "#3D3331", opacity: 0.8 }}
  >
    Questions? Email us at{" "}
    <a
      href="mailto:mail@dearmanifestor.com"
      className="underline hover:opacity-70 transition-opacity"
    >
      mail@dearmanifestor.com
    </a>
  </p>
</div>
      </div>
    </div>
  );
}