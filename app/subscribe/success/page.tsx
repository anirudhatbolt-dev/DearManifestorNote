"use client";

import Link from "next/link";
import { CheckCircle, Sparkles } from "lucide-react";

export default function SubscribeSuccessPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#E5DDD5" }}>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border-2 border-[#D4C4B8] text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20" style={{ color: "#3D3331" }} />
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6"
            style={{ color: "#3D3331", fontFamily: "Crimson Pro" }}
          >
            Welcome to the Wave
          </h1>

          <div className="space-y-6 mb-10">
            <p
              className="text-xl sm:text-2xl font-semibold"
              style={{ color: "#3D3331" }}
            >
              You're in. ✨
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#3D3331" }}
            >
              Your first manifestation note will arrive on{" "}
              <span className="font-semibold">February 22nd at 11:11 AM</span> in your timezone.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#3D3331" }}
            >
              Every morning after that, like clockwork. Like magic.
            </p>

            <div className="bg-[#E5DDD5] rounded-2xl p-6 mt-8">
              <p
                className="text-base font-medium mb-2"
                style={{ color: "#3D3331" }}
              >
                What happens next?
              </p>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#3D3331" }} />
                  <span style={{ color: "#3D3331" }}>
                    You'll receive a confirmation email
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#3D3331" }} />
                  <span style={{ color: "#3D3331" }}>
                    Your billing starts February 22nd
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#3D3331" }} />
                  <span style={{ color: "#3D3331" }}>
                    Your daily notes begin the same day
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/setup"
              className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-white font-medium text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#3D3331" }}
            >
              Complete Your Setup
            </Link>
            <p
              className="text-sm"
              style={{ color: "#3D3331", opacity: 0.7 }}
            >
              Set your timezone, delivery preferences, and personalize your notes
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p
            className="text-base"
            style={{ color: "#3D3331", opacity: 0.8 }}
          >
            Questions? We're here:{" "}
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
