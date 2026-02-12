import Link from 'next/link';
import { ArrowRight, Sparkles, Heart, Clock, Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: '#E5DDD5' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6"
            style={{ color: '#3D3331' }}
          >
            Manifesting Your Dreams, One Note at a Time
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed font-[family-name:var(--font-poppins)]"
            style={{ color: '#3D3331', opacity: 0.9 }}
          >
            Dear Manifestor was born from a simple belief: the right reminder at the right moment can transform your reality.
          </p>
        </div>

        <div className="space-y-16">
          <section className="text-center">
            <p
              className="text-base sm:text-lg leading-relaxed font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We believe in the power of daily affirmations, the magic of 11:11, and the Universe's infinite abundance. Every morning at 11:11 AM — the Universe's most powerful number — we deliver personalized, handwritten manifestation notes directly to you.
            </p>
          </section>

          <section className="bg-white/50 rounded-3xl p-8 sm:p-12 border border-[#D4C4B8]">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-full bg-[#3D3331]/10">
                <Sparkles className="w-6 h-6" style={{ color: '#3D3331' }} />
              </div>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center"
              style={{ color: '#3D3331' }}
            >
              Our Mission
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed text-center font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              To help dreamers, manifestors, and believers align with their highest reality through consistent, personalized daily reminders that you are already living your dream life.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 rounded-full bg-[#3D3331]/10">
                <Heart className="w-6 h-6" style={{ color: '#3D3331' }} />
              </div>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-8 text-center"
              style={{ color: '#3D3331' }}
            >
              How It Works
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/50 rounded-2xl p-6 border border-[#D4C4B8]">
                <div className="text-2xl font-semibold mb-3" style={{ color: '#3D3331' }}>
                  01
                </div>
                <p
                  className="text-sm sm:text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.7' }}
                >
                  Share your specific manifestation goals with us
                </p>
              </div>
              <div className="bg-white/50 rounded-2xl p-6 border border-[#D4C4B8]">
                <div className="text-2xl font-semibold mb-3" style={{ color: '#3D3331' }}>
                  02
                </div>
                <p
                  className="text-sm sm:text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.7' }}
                >
                  We create personalized affirmations using advanced AI
                </p>
              </div>
              <div className="bg-white/50 rounded-2xl p-6 border border-[#D4C4B8]">
                <div className="text-2xl font-semibold mb-3" style={{ color: '#3D3331' }}>
                  03
                </div>
                <p
                  className="text-sm sm:text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.7' }}
                >
                  Receive fresh, unique notes at 11:11 AM every day
                </p>
              </div>
              <div className="bg-white/50 rounded-2xl p-6 border border-[#D4C4B8]">
                <div className="text-2xl font-semibold mb-3" style={{ color: '#3D3331' }}>
                  04
                </div>
                <p
                  className="text-sm sm:text-base leading-relaxed font-[family-name:var(--font-poppins)]"
                  style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.7' }}
                >
                  Align with your highest reality through consistent reminders
                </p>
              </div>
            </div>
            <p
              className="text-sm sm:text-base leading-relaxed text-center mt-8 font-[family-name:var(--font-poppins)] italic"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.7' }}
            >
              Each note is uniquely crafted for you based on your specific manifestation goals. Using advanced AI technology, we create fresh, personalized affirmations that resonate with your journey. No two notes are ever the same.
            </p>
          </section>

          <section className="bg-gradient-to-br from-white/40 to-white/60 rounded-3xl p-8 sm:p-12 border border-[#D4C4B8]">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-full bg-[#3D3331]/10">
                <Clock className="w-6 h-6" style={{ color: '#3D3331' }} />
              </div>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center"
              style={{ color: '#3D3331' }}
            >
              Why 11:11?
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed text-center font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              In numerology and manifestation practices, 11:11 is considered the Universe's wake-up call — a powerful moment when the veil between your current reality and your desired reality is thinnest. We harness this energy by delivering your daily reminder at exactly this time.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-full bg-[#3D3331]/10">
                <Star className="w-6 h-6" style={{ color: '#3D3331' }} />
              </div>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center"
              style={{ color: '#3D3331' }}
            >
              Our Commitment
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed text-center font-[family-name:var(--font-poppins)]"
              style={{ color: '#3D3331', opacity: 0.85, lineHeight: '1.8' }}
            >
              We're a small team of manifestation believers and technology enthusiasts dedicated to making high-frequency living accessible to everyone. We stand behind our service 100% and are committed to delivering your daily note without fail.
            </p>
          </section>

          <section className="border-t border-[#D4C4B8] pt-12 mt-8">
            <div className="text-center">
              <h3
                className="text-2xl sm:text-3xl font-semibold mb-6"
                style={{ color: '#3D3331' }}
              >
                Ready to manifest your dreams?
              </h3>
              <p
                className="text-base sm:text-lg mb-8 font-[family-name:var(--font-poppins)]"
                style={{ color: '#3D3331', opacity: 0.85 }}
              >
                Join our community of manifestors receiving daily reminders at the Universe's most powerful hour.
              </p>
              <Link
                href="/try/name"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-white font-medium text-lg hover:opacity-90 transition-opacity font-[family-name:var(--font-poppins)]"
                style={{ backgroundColor: '#3D3331' }}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
