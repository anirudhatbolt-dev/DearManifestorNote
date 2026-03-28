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
      // CHANGED: Using Supabase Edge Function
      const response = await fetch(
        "https://fkdwhiwlxnrxxkirtzjj.supabase.co/functions/v1/create-subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            email: user.email,
          }),
        }
      );

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
console.log('Auth header:', `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20)}...`);
            
const verifyResponse = await fetch(
  "https://fkdwhiwlxnrxxkirtzjj.supabase.co/functions/v1/verify-payment",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
    },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_subscription_id: response.razorpay_subscription_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (verifyResponse.ok) {
              router.push("/gallery");
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
  <div className="max-w-xl mx-auto text-center">

    <h1
      className="text-5xl sm:text-6xl md:text-7xl mb-8"
      style={{ color: "#3D3331", fontWeight: 500 }}
    >
      That feeling you just had?
    </h1>

    <p
      className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-poppins)] mb-10"
      style={{ color: "#3D3331" }}
    >
      That's your 4D.
    </p>

    <p
      className="text-lg sm:text-xl leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
      style={{ color: "#3D3331", opacity: 0.85 }}
    >
      Imagine starting every morning there. A new note at 11:11 —
    </p>

    <p
      className="text-lg sm:text-xl leading-relaxed font-[family-name:var(--font-poppins)] mb-10"
      style={{ color: "#3D3331", opacity: 0.85 }}
    >
      written for you, about exactly what you're calling in.
    </p>

    <p
      className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-poppins)] mb-16"
      style={{ color: "#3D3331" }}
    >
      Every single day. Already yours.
    </p>

    <p
      className="text-base font-[family-name:var(--font-poppins)] mb-4"
      style={{ color: "#3D3331", opacity: 0.6 }}
    >
      $11.11/month · billing starts April 11th · cancel anytime
    </p>

    <button
      onClick={handleSubscribe}
      disabled={loading}
      className="w-full rounded-full px-10 py-5 text-white font-medium text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg font-[family-name:var(--font-poppins)]"
      style={{ backgroundColor: "#3D3331" }}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-3">
          <Loader2 className="w-5 h-5 animate-spin" />
          Processing...
        </span>
      ) : (
        <>
          <Sparkles className="hidden sm:inline w-5 h-5 mr-2" />
          Yes — lock in my spot
        </>
      )}
    </button>

  </div>
</div>
);
}