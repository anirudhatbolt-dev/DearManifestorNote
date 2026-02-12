import Link from 'next/link';
import { Shield, Lock, Eye, Database, UserCheck, Globe, Mail, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: '#E5DDD5' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#3D3331]/10">
              <Shield className="w-8 h-8" style={{ color: '#3D3331' }} />
            </div>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6"
            style={{ color: '#3D3331' }}
          >
            Privacy Policy
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
              Introduction
            </h2>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Dear Manifestor ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our service at dearmanifestor.com.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Information We Collect
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Information You Provide
                </h3>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li><strong>Account Information:</strong> Name, email address, phone number (optional)</li>
                  <li><strong>Manifestation Details:</strong> Your manifestation goals and preferences (used solely to personalize your daily notes)</li>
                  <li><strong>Timezone:</strong> Automatically detected or manually provided to ensure timely delivery</li>
                  <li><strong>Payment Information:</strong> Processed securely through Razorpay (we do not store your card details)</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#3D3331' }}
                >
                  Automatically Collected Information
                </h3>
                <ul
                  className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
                >
                  <li><strong>Usage Data:</strong> Pages visited, features used, time spent on our service</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
                  <li><strong>Email Engagement:</strong> Whether you open and interact with our emails</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                How We Use Your Information
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We use your information to:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Generate personalized manifestation notes tailored to your goals</li>
              <li>Deliver your daily notes at 11:11 AM in your timezone</li>
              <li>Process payments and manage your subscription</li>
              <li>Send service-related emails (delivery confirmations, account updates)</li>
              <li>Improve our service and user experience</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Information Sharing
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We <strong>do not sell, rent, or share</strong> your personal information with third parties except:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li><strong>Payment Processing:</strong> Razorpay processes payments securely (see their privacy policy)</li>
              <li><strong>Email Delivery:</strong> Resend delivers your daily notes (see their privacy policy)</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Data Security
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We implement industry-standard security measures to protect your information:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure database storage (Supabase)</li>
              <li>Regular security audits</li>
              <li>Limited employee access to personal data</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                Your Rights
              </h2>
            </div>

            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              You have the right to:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of marketing emails (service emails will continue)</li>
              <li>Export your data</li>
            </ul>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mt-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              To exercise these rights, contact us at mail@dearmanifestor.com.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: '#3D3331' }}
            >
              Data Retention
            </h2>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We retain your data while your account is active and for 30 days after cancellation to allow for reactivation. After 30 days, we permanently delete:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Personal information (name, email, phone)</li>
              <li>Manifestation goals</li>
              <li>Payment history</li>
              <li>Generated notes</li>
            </ul>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: '#3D3331' }}
            >
              Cookies
            </h2>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)] mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We use essential cookies to:
            </p>
            <ul
              className="space-y-2 text-base leading-relaxed font-[family-name:var(--font-poppins)] list-disc pl-6 mb-4"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              <li>Keep you logged in</li>
              <li>Remember your preferences</li>
              <li>Analyze site performance</li>
            </ul>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              You can disable cookies in your browser settings, but some features may not work properly.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: '#3D3331' }}
            >
              Children's Privacy
            </h2>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Our service is not intended for children under 13. We do not knowingly collect information from children. If you believe a child has provided us with personal information, contact us immediately.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-10 border border-[#D4C4B8]">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6" style={{ color: '#3D3331' }} />
              <h2
                className="text-2xl sm:text-3xl font-semibold"
                style={{ color: '#3D3331' }}
              >
                International Users
              </h2>
            </div>
            <p
              className="text-base leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              Your information may be stored and processed in servers located in various countries. By using our service, you consent to this transfer.
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
              We may update this Privacy Policy periodically. We'll notify you of significant changes via email or a notice on our website.
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
              Questions about this Privacy Policy?
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
              <p
                className="text-lg italic font-[family-name:var(--font-poppins)]"
                style={{ color: '#3D3331', opacity: 0.9 }}
              >
                Your privacy is sacred to us, just like your manifestation journey.
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
