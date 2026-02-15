import Link from 'next/link';
import { RefreshCw, Heart, AlertCircle, Clock, Mail } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: '#E5DDD5' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#3D3331]/10">
              <RefreshCw className="w-8 h-8" style={{ color: '#3D3331' }} />
            </div>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6"
            style={{ color: '#3D3331' }}
          >
            Refund Policy
          </h1>
        </div>

        <div className="space-y-8">
          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: '#3D3331' }}
            >
              Our Commitment
            </h2>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              At Dear Manifestor, we're committed to delivering a transformative daily manifestation experience. Your satisfaction is our priority.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: '#3D3331' }}
            >
              Our Simple Promise
            </h2>
            <div className="bg-gradient-to-r from-[#3D3331]/5 to-[#3D3331]/10 rounded-xl p-6 mb-6">
              <p
                className="text-xl font-bold text-center"
                style={{ color: '#3D3331', lineHeight: '1.6' }}
              >
                FULL REFUND WHENEVER YOU WANT IT, NO QUESTIONS ASKED.
              </p>
            </div>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We don't want anyone using our service if they're not absolutely loving it. Your manifestation journey should feel aligned and abundant — never obligated.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: '#3D3331' }}
            >
              How to Get Your Refund
            </h2>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Want a refund? Simply:
            </p>
            <ol
              className="space-y-3 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-decimal pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Cancel via your billing page on the dashboard, OR</li>
              <li>
                Contact us at{' '}
                <Link href="/contact" className="font-semibold hover:opacity-80 transition-opacity">
                  /contact
                </Link>
              </li>
            </ol>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mt-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              That's it. We'll process your full refund promptly.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Technical Issues & Service Guarantee
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              If you experience technical issues that prevent note delivery:
            </p>

            <div className="mb-6">
              <p
                className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3 font-semibold"
                style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
              >
                We will:
              </p>
              <ul
                className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
              >
                <li>Investigate and resolve issues within 24 hours</li>
                <li>Extend your subscription by the number of days affected</li>
                <li>Provide make-up notes for any missed days</li>
              </ul>
            </div>

            <div>
              <p
                className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3 font-semibold"
                style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
              >
                To report issues:
              </p>
              <p
                className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
              >
                Email mail@dearmanifestor.com with:
              </p>
              <ul
                className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
              >
                <li>Your account email</li>
                <li>Date(s) of missed delivery</li>
                <li>Screenshot (if applicable)</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-[#3D3331]/5 to-[#3D3331]/10 rounded-xl">
              <p
                className="text-base leading-relaxed font-[family-name:var(--font-poppins)] font-semibold text-center"
                style={{ color: '#3D3331', opacity: 0.9, lineHeight: '1.8' }}
              >
                We stand by our promise: A note every single day at 11:11 AM.
              </p>
            </div>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Refund Processing Time
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Approved refunds are processed within 5-7 business days to your original payment method. Depending on your bank, it may take an additional 3-5 days to reflect in your account.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: '#3D3331' }}
            >
              Changes to This Policy
            </h2>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We may update this policy periodically. Significant changes will be communicated via email.
            </p>
          </section>

          <section className="bg-gradient-to-br from-white/40 to-white/60 rounded-3xl p-8 sm:p-12 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Mail className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Questions?
              </h2>
            </div>
            <p
              className="text-base leading-relaxed text-center font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Contact us at
            </p>
            <p className="text-center">
              <a
                href="mailto:mail@dearmanifestor.com"
                className="text-lg font-semibold hover:opacity-80 transition-opacity"
                style={{ color: '#3D3331' }}
              >
                mail@dearmanifestor.com
              </a>
            </p>
          </section>

          <section className="border-t border-[#D4C4B8] pt-12 mt-8">
            <div className="text-center bg-gradient-to-r from-[#3D3331]/5 to-[#3D3331]/10 rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <Heart className="w-6 h-6" style={{ color: '#3D3331' }} />
              </div>
              <p
                className="text-lg italic font-[family-name:var(--font-poppins)]"
                style={{ color: '#3D3331', opacity: 0.9 }}
              >
                We're here to support your manifestation journey.
              </p>
            </div>
          </section>

          <div className="text-center pt-8">
            <Link
              href="/"
              className="text-base font-medium hover:opacity-80 transition-opacity font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331' }}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
