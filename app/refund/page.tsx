import Link from 'next/link';
import { RefreshCw, Gift, Calendar, AlertCircle, Clock, CheckCircle, Mail, Heart } from 'lucide-react';

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
          <div
            className="text-base sm:text-lg font-[family-name:var(--font-poppins)] space-y-2"
            style={{ color: '#3D3331', opacity: 0.85 }}
          >
            <p>Effective Date: February 12, 2026</p>
            <p>Last Updated: February 12, 2026</p>
          </div>
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
              At Dear Manifestor, we're committed to delivering a transformative daily manifestation experience. This policy outlines our refund and cancellation terms.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Free Trial Period (Feb 20 - March 1, 2026)
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              During your 10-day free trial:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li><strong>No charges applied</strong></li>
              <li><strong>Cancel anytime</strong> with no questions asked</li>
              <li><strong>Full access</strong> to all features</li>
              <li><strong>No refund needed</strong> (you haven't been charged yet)</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                After First Charge (March 1, 2026 onwards)
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Cancellation Policy
                </h3>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  You can cancel your subscription <strong>anytime</strong> through:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-4"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Your account dashboard</li>
                  <li>Email: mail@dearmanifestor.com</li>
                </ul>

                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3 font-semibold"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  What happens when you cancel:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Your subscription will remain <strong>active until the end of your current billing period</strong></li>
                  <li>You'll continue receiving daily notes until your paid period ends</li>
                  <li><strong>No refunds</strong> for partial months (your service continues through the paid period)</li>
                  <li>Your account and note gallery remain accessible until subscription expires</li>
                </ul>

                <div className="mt-4 p-4 bg-[#3D3331]/5 rounded-xl">
                  <p
                    className="text-base leading-relaxed font-[family-name:var(--font-poppins)] italic"
                    style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                  >
                    <strong>Example:</strong> If you cancel on March 15th, you'll continue receiving notes until April 1st (when your next billing cycle would begin).
                  </p>
                </div>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Why No Partial Refunds?
                </h3>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  When you sign up, we immediately:
                </p>
                <ol
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-decimal pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Create a personalized AI model trained on your specific manifestation goals</li>
                  <li>Generate unique, high-frequency content tailored to your journey</li>
                  <li>Allocate dedicated resources for daily note generation</li>
                </ol>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mt-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  This upfront investment is made at the start of each billing cycle, which is why we cannot offer partial refunds.
                </p>
              </div>
            </div>
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
              <CheckCircle className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Exceptional Circumstances
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We may offer refunds on a case-by-case basis for:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Technical failures on our end lasting more than 3 consecutive days</li>
              <li>Unauthorized charges</li>
              <li>Billing errors</li>
            </ul>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3 font-semibold"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              To request an exception:
            </p>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Email mail@dearmanifestor.com with detailed explanation. We'll review within 48 hours.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: '#3D3331' }}
            >
              Payment Disputes
            </h2>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              If you have a payment dispute:
            </p>
            <ol
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-decimal pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Contact us first at mail@dearmanifestor.com (we resolve 99% of issues quickly)</li>
              <li>If unresolved, you may dispute through your payment provider (Razorpay)</li>
            </ol>
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
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Approved refunds are processed within:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mt-3"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li><strong>5-7 business days</strong> to your original payment method</li>
              <li>Depending on your bank, it may take an additional 3-5 days to reflect in your account</li>
            </ul>
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
                We're here to support your manifestation journey. If you're ever unhappy with our service, let us know — we'll make it right.
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
