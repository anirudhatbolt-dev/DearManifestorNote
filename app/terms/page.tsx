import Link from 'next/link';
import { FileText, User, CreditCard, Shield, AlertTriangle, Scale, Globe, Mail, Sparkles } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: '#E5DDD5' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#3D3331]/10">
              <FileText className="w-8 h-8" style={{ color: '#3D3331' }} />
            </div>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6"
            style={{ color: '#3D3331' }}
          >
            Terms and Conditions
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
              Agreement to Terms
            </h2>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              By accessing or using Dear Manifestor ("the Service"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our Service.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Description of Service
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Dear Manifestor provides:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Personalized, AI-generated manifestation affirmations</li>
              <li>Daily delivery of handwritten-style notes at 11:11 AM</li>
              <li>Email-based delivery system</li>
              <li>Access to a gallery of past notes</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Eligibility
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              You must be:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>At least 18 years old</li>
              <li>Capable of entering into legally binding contracts</li>
              <li>Not prohibited from using the Service under applicable laws</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              Account Registration
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              To use the Service, you must:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Provide accurate, current information (name, email, manifestation goals)</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of unauthorized access</li>
            </ul>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              You are responsible for all activities under your account.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Subscription & Billing
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Free Trial
                </h3>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>10-day free trial (February 20 - March 1, 2026)</li>
                  <li>Access to full Service features</li>
                  <li>Can cancel anytime during trial with no charge</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Paid Subscription
                </h3>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li><strong>Price:</strong> $11.11/month (or ₹935/month for Indian users)</li>
                  <li><strong>Billing Date:</strong> 1st of each month (starting March 1, 2026)</li>
                  <li><strong>Auto-Renewal:</strong> Automatically renews until cancelled</li>
                  <li><strong>Payment Methods:</strong> Credit/Debit cards, UPI, Net Banking (via Razorpay)</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Cancellation
                </h3>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Cancel anytime through your account dashboard or email</li>
                  <li>Service continues until end of current billing period</li>
                  <li>No refunds for partial months (see Refund Policy)</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Price Changes
                </h3>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  We reserve the right to change pricing with 30 days' notice. Existing subscribers will be grandfathered at their current rate for 90 days.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              User Obligations
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              You agree to:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Use the Service for personal, non-commercial purposes</li>
              <li>Not share your account with others</li>
              <li>Not reverse-engineer, copy, or reproduce our content</li>
              <li>Not use the Service for illegal or harmful purposes</li>
              <li>Provide truthful manifestation goals and information</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Intellectual Property
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Our Content
                </h3>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  All content generated by Dear Manifestor, including:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Personalized affirmation text</li>
                  <li>Note designs and templates</li>
                  <li>Website content and branding</li>
                </ul>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  ...remains our intellectual property.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Your License
                </h3>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  We grant you a <strong>personal, non-transferable, non-exclusive license</strong> to:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-4"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Receive and view your personalized notes</li>
                  <li>Save notes for personal use</li>
                  <li>Share notes on social media (with attribution appreciated but not required)</li>
                </ul>

                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  You may <strong>not</strong>:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Resell or redistribute our content</li>
                  <li>Use our content for commercial purposes</li>
                  <li>Claim our content as your own creation</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Your Data
                </h3>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  You retain ownership of:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Your manifestation goals</li>
                  <li>Personal information you provide</li>
                </ul>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  By using the Service, you grant us a license to use this information solely to provide and improve the Service.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              Service Availability
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We strive for 99.9% uptime but cannot guarantee:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Uninterrupted service</li>
              <li>Error-free operation</li>
              <li>Specific delivery times (though we target 11:11 AM daily)</li>
            </ul>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We are not liable for:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Email provider delays or filtering (spam folders)</li>
              <li>Internet connectivity issues</li>
              <li>Force majeure events (natural disasters, server outages beyond our control)</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Content Disclaimer
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Our manifestation notes are:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>For inspirational and motivational purposes only</li>
              <li>Not a substitute for professional advice (medical, financial, legal, or psychological)</li>
              <li>Based on Law of Attraction principles, which are not scientifically proven</li>
            </ul>

            <div className="p-4 bg-[#3D3331]/5 rounded-xl">
              <p
                className="text-base leading-relaxed font-[family-name:var(--font-poppins)] font-semibold"
                style={{ color: '#3D3331', opacity: 0.9, lineHeight: '1.8' }}
              >
                We make no guarantees that using our Service will result in specific manifestations or outcomes.
              </p>
            </div>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              User-Generated Content
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              If you share feedback, testimonials, or success stories:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>You grant us permission to use them in marketing (anonymously or with your permission)</li>
              <li>You confirm the content is truthful and your own</li>
              <li>We may edit for length or clarity</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              Privacy
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Your use of the Service is also governed by our{' '}
              <Link href="/privacy" className="font-semibold underline hover:opacity-80 transition-opacity">
                Privacy Policy
              </Link>{' '}
              (see separate page).
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              Termination
            </h2>

            <div className="space-y-6">
              <div>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  We reserve the right to:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Suspend or terminate accounts that violate these Terms</li>
                  <li>Discontinue the Service with 30 days' notice</li>
                  <li>Refuse service to anyone for any reason</li>
                </ul>
              </div>

              <div>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  Upon termination:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Your access to the Service ends immediately</li>
                  <li>We'll delete your data within 30 days (see Privacy Policy)</li>
                  <li>No refunds for remaining subscription time (unless termination was our error)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              Limitation of Liability
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              To the fullest extent permitted by law:
            </p>

            <div className="space-y-6">
              <div>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3 font-semibold"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  We are not liable for:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Lost profits or opportunities</li>
                  <li>Emotional distress</li>
                  <li>Manifestation outcomes</li>
                </ul>
              </div>

              <div className="p-4 bg-[#3D3331]/5 rounded-xl">
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] font-semibold"
                  style={{ color: '#3D3331', opacity: 0.9, lineHeight: '1.8' }}
                >
                  Maximum liability: The amount you paid in the last 12 months (maximum $133.32).
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              Indemnification
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              You agree to indemnify and hold Dear Manifestor harmless from any claims arising from:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Your violation of these Terms</li>
              <li>Your misuse of the Service</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Dispute Resolution
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Governing Law
                </h3>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  These Terms are governed by the laws of India (since we're India-based), without regard to conflict of law provisions.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Disputes
                </h3>
                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  Before filing any legal action, you agree to:
                </p>
                <ol
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-decimal pl-6 mb-4"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li>Contact us at mail@dearmanifestor.com to resolve the issue</li>
                  <li>Allow 30 days for good-faith negotiation</li>
                </ol>

                <p
                  className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-3"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  If unresolved, disputes will be settled through:
                </p>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li><strong>Binding arbitration</strong> (location: India)</li>
                  <li><strong>Not class action</strong> (individual claims only)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              Modifications to Terms
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We may update these Terms periodically. Changes will:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Be posted on this page with updated "Last Updated" date</li>
              <li>Be communicated via email for material changes</li>
              <li>Take effect 7 days after posting</li>
            </ul>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Continued use after changes = acceptance of new Terms.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              Severability
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              If any provision of these Terms is found unenforceable, the remaining provisions remain in full effect.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: '#3D3331' }}
            >
              Entire Agreement
            </h2>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              These Terms, along with our{' '}
              <Link href="/privacy" className="font-semibold underline hover:opacity-80 transition-opacity">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/refund" className="font-semibold underline hover:opacity-80 transition-opacity">
                Refund Policy
              </Link>
              , constitute the entire agreement between you and Dear Manifestor.
            </p>
          </section>

          <section className="bg-gradient-to-br from-white/40 to-white/60 rounded-3xl p-8 sm:p-12 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Mail className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Contact Us
              </h2>
            </div>
            <p
              className="text-base leading-relaxed text-center font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Questions about these Terms?
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
                <Globe className="w-6 h-6" style={{ color: '#3D3331' }} />
              </div>
              <p
                className="text-lg italic font-[family-name:var(--font-poppins)] mb-4"
                style={{ color: '#3D3331', opacity: 0.9 }}
              >
                By using Dear Manifestor, you acknowledge that you've read, understood, and agree to these Terms and Conditions.
              </p>
              <p
                className="text-lg italic font-[family-name:var(--font-poppins)]"
                style={{ color: '#3D3331', opacity: 0.9 }}
              >
                Manifest your dreams responsibly.
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
