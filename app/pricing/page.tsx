"use client";

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #1a1625 0%, #2d1b3d 25%, #3d2749 50%, #2d1b3d 75%, #1a1625 100%)'
        }}
      />

      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-200 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-pink-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200"
            style={{ fontFamily: 'Crimson Pro' }}
          >
            The February 22nd Wave
          </h1>

          <p className="text-xl sm:text-2xl text-purple-100 mb-6 leading-relaxed font-light max-w-xl mx-auto">
            Right now, thousands are waking up to their manifestation note at{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-yellow-200">11:11</span>
              <span className="absolute inset-0 blur-lg bg-yellow-200 opacity-50 animate-pulse" />
            </span>
            .
          </p>

          <p className="text-lg sm:text-xl text-purple-100/90 mb-4 leading-relaxed max-w-xl mx-auto">
            You've felt what one note can do.
          </p>

          <p className="text-lg sm:text-xl text-purple-100/90 mb-8 leading-relaxed max-w-xl mx-auto">
            Imagine that clarity. Every single morning. At the universe's most powerful moment.
          </p>

          <div className="inline-block relative">
            <p className="text-2xl sm:text-3xl font-semibold text-yellow-200 mb-2">
              The next wave begins February 22nd.
            </p>
            <div className="absolute inset-0 blur-2xl bg-yellow-200 opacity-30" />
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-12" />

        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-8 border border-purple-400/30 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-purple-100" style={{ fontFamily: 'Crimson Pro' }}>
            What You Get
          </h2>

          <div className="space-y-8 mb-10">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-200 mb-3">
                Daily manifestation notes at{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">11:11 AM</span>
                  <span className="absolute inset-0 blur-md bg-yellow-200 opacity-40 animate-pulse" />
                </span>
              </h3>
              <p className="text-lg text-purple-100/80">
                Personalized to YOUR goals. YOUR journey. YOUR reality.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-200 mb-3">
                Your first note arrives February 22nd
              </h3>
              <p className="text-lg text-purple-100/80">
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold text-yellow-200">11:11 AM</span>
                  <span className="absolute inset-0 blur-lg bg-yellow-200 opacity-40 animate-pulse" />
                </span>{' '}
                sharp. The universe doesn't wait.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
                  $11.11
                </span>
                <span className="text-2xl text-purple-100">/month</span>
              </div>
              <p className="text-lg text-purple-100/80">
                The universe's number. Your daily ritual. Cancel anytime.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/try/name"
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
              <div className="relative inline-flex items-center gap-3 rounded-full px-12 py-5 text-white font-semibold text-xl bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 transition-all shadow-2xl">
                <Sparkles className="w-6 h-6" />
                <span>Join the February 22nd Wave</span>
                <Sparkles className="w-6 h-6" />
              </div>
            </Link>
          </div>

          <p className="text-center text-sm text-purple-200/60 mt-6">
            Billing starts February 22. Your manifestation ritual starts the same day.
          </p>
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="flex justify-center gap-8 text-purple-200/40 text-xs">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>
          <p className="text-purple-200/60 text-sm max-w-md mx-auto">
            Join thousands who've aligned with the universe's rhythm. Your transformation begins at{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-yellow-200 font-semibold">11:11</span>
              <span className="absolute inset-0 blur-md bg-yellow-200 opacity-40" />
            </span>
            .
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
