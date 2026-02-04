import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 lg:pt-0" style={{ backgroundColor: '#E5DDD5' }}>
        <div className="w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 lg:px-8">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight mb-6 lg:mb-10"
                style={{ color: '#3D3331', fontWeight: 500 }}
              >
                How would you feel if the universe sent you a personal note every morning?
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-xl mb-8 lg:mb-12"
                style={{ color: '#3D3331' }}
              >
                <em>The only manifestation practice I've actually stuck with, 47 days and counting</em> — Anna
              </p>
              <div className="lg:hidden flex flex-col items-center justify-center">
                <div className="flex flex-col items-center mb-8">
                  <button
                    className="rounded-full px-8 py-3 text-white font-medium text-base flex items-center gap-2 hover:opacity-90 transition-opacity min-w-[260px] justify-center font-[family-name:var(--font-poppins)]"
                    style={{ backgroundColor: '#3D3331' }}
                  >
                    Try it yourself
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p
                    className="text-xs mt-3 text-center"
                    style={{ color: '#3D3331' }}
                  >
                    No signup required | No credit card required
                  </p>
                </div>
                <div className="w-full flex items-center justify-center py-4">
                  <div className="relative w-full max-w-sm aspect-square">
                    <Image
                      src="/studio-image31_(2).jpg"
                      alt="Studio setup"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:justify-start">
                <div className="flex flex-col items-center">
                  <button
                    className="rounded-full px-12 py-4 text-white font-medium text-lg flex items-center gap-3 hover:opacity-90 transition-opacity font-[family-name:var(--font-poppins)]"
                    style={{ backgroundColor: '#3D3331' }}
                  >
                    Try it yourself
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p
                    className="text-sm mt-4 text-center"
                    style={{ color: '#3D3331' }}
                  >
                    No signup required | No credit card required
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 justify-start items-center">
              <div className="relative w-full aspect-square">
                <Image
                  src="/studio-image31_(2).jpg"
                  alt="Studio setup"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <CTASection />
    </>
  );
}