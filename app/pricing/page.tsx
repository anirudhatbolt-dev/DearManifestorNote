import Link from 'next/link';
import { Check, Mail, Calendar, Clock, Shield, Sparkles } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#E5DDD5' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6"
            style={{ color: '#3D3331', fontFamily: 'Crimson Pro' }}
          >
            Pricing
          </h1>
          <p
            className="text-xl sm:text-2xl mb-2"
            style={{ color: '#3D3331' }}
          >
            Simple, Transparent, Manifestation-Aligned
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 mb-12 border-2 border-[#D4C4B8]">
          <div className="text-center mb-10">
            <div className="inline-flex items-baseline gap-2 mb-4">
              <span
                className="text-6xl sm:text-7xl font-bold"
                style={{ color: '#3D3331', fontFamily: 'Crimson Pro' }}
              >
                $11.11
              </span>
              <span
                className="text-2xl font-medium"
                style={{ color: '#3D3331' }}
              >
                /month
              </span>
            </div>
            <p
              className="text-lg mb-2"
              style={{ color: '#3D3331' }}
            >
              The Universe's number. Your daily reminder.
            </p>
            <p
              className="text-base"
              style={{ color: '#3D3331', opacity: 0.7 }}
            >
              Delivered exactly when manifestation is strongest.
            </p>
          </div>

          <div className="mb-10">
            <h3
              className="text-xl font-semibold mb-6 text-center"
              style={{ color: '#3D3331' }}
            >
              What's Included:
            </h3>
            <div className="grid gap-4">
              {[
                'Personalized handwritten manifestation note every day',
                'Delivered at 11:11 AM in your timezone',
                'Unique affirmations tailored to your specific goals',
                'Access to your note gallery (all past notes saved)',
                'Email delivery with high-quality image',
                'Cancel anytime'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check
                      className="w-6 h-6"
                      style={{ color: '#3D3331' }}
                    />
                  </div>
                  <p
                    className="text-base"
                    style={{ color: '#3D3331' }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-white font-medium text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#3D3331' }}
            >
              <Sparkles className="w-5 h-5" />
              Get Started
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-lg p-8 sm:p-12 mb-12 border-2 border-amber-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-3"
              style={{ color: '#3D3331', fontFamily: 'Crimson Pro' }}
            >
              Founding Member Offer
            </h2>
            <p
              className="text-lg font-medium text-amber-900 mb-2"
            >
              Limited to 50 Spots
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-white rounded-2xl border border-amber-200">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-amber-600" />
              <p className="text-sm font-semibold text-amber-900 mb-1">Launch Date</p>
              <p className="text-lg font-bold" style={{ color: '#3D3331' }}>February 20, 2026</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-amber-200">
              <Clock className="w-8 h-8 mx-auto mb-3 text-amber-600" />
              <p className="text-sm font-semibold text-amber-900 mb-1">Free Trial</p>
              <p className="text-lg font-bold" style={{ color: '#3D3331' }}>10 Days</p>
              <p className="text-xs text-amber-800 mt-1">Feb 20 - Mar 1</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-amber-200">
              <Shield className="w-8 h-8 mx-auto mb-3 text-amber-600" />
              <p className="text-sm font-semibold text-amber-900 mb-1">First Charge</p>
              <p className="text-lg font-bold" style={{ color: '#3D3331' }}>March 1, 2026</p>
            </div>
          </div>

          <p
            className="text-center text-base"
            style={{ color: '#3D3331' }}
          >
            Lock in your spot now and start your manifestation journey with our founding member community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 border-2 border-[#D4C4B8]">
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: '#3D3331', fontFamily: 'Crimson Pro' }}
            >
              Payment & Billing
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1" style={{ color: '#3D3331' }}>Billing Cycle</p>
                <p style={{ color: '#3D3331', opacity: 0.7 }}>
                  Monthly, starting March 1st, 2026
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#3D3331' }}>Payment Methods</p>
                <p style={{ color: '#3D3331', opacity: 0.7 }}>
                  Credit/Debit cards, UPI, Net Banking (via Razorpay)
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#3D3331' }}>Currency</p>
                <p style={{ color: '#3D3331', opacity: 0.7 }}>
                  USD (International) / INR (India)
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#3D3331' }}>Automatic Renewal</p>
                <p style={{ color: '#3D3331', opacity: 0.7 }}>
                  Yes, billed monthly until cancelled
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#3D3331' }}>Cancellation</p>
                <p style={{ color: '#3D3331', opacity: 0.7 }}>
                  Cancel anytime — service continues until end of current billing period
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-[#D4C4B8]">
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: '#3D3331', fontFamily: 'Crimson Pro' }}
            >
              Money-Back Guarantee
            </h3>
            <div className="flex items-start gap-3 mb-6">
              <Shield className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#3D3331' }} />
              <p style={{ color: '#3D3331' }}>
                If you experience technical issues that prevent you from receiving your daily notes,
                we'll extend your subscription by the number of days affected.
              </p>
            </div>
            <p className="font-medium" style={{ color: '#3D3331' }}>
              We stand by our promise: a note every single day at 11:11 AM.
            </p>
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl p-8 border-2 border-[#D4C4B8]">
          <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: '#3D3331' }} />
          <h3
            className="text-2xl font-semibold mb-3"
            style={{ color: '#3D3331', fontFamily: 'Crimson Pro' }}
          >
            Questions about pricing?
          </h3>
          <p className="mb-6" style={{ color: '#3D3331', opacity: 0.7 }}>
            We're here to help with any questions you may have.
          </p>
          <a
            href="mailto:mail@dearmanifestor.com"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#3D3331' }}
          >
            <Mail className="w-5 h-5" />
            Contact us at mail@dearmanifestor.com
          </a>
        </div>
      </div>
    </div>
  );
}
