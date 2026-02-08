"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#E5DDD5] py-16 px-4 md:px-8 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 lg:mb-8" style={{ color: '#3D3331' }}>
          What would your note say?
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 lg:mb-12" style={{ color: '#3D3331' }}>
          Every manifestor gets a different message. Based on YOUR specific desire.
          <br />
          <br />
          Yours could be about your SP, your dream apartment, your business, your glow up —whatever you're calling in right now.
          <br />
          <br />
          <em>See what the universe ✨ has to say to you today</em>
        </p>

        <div className="flex flex-col items-center justify-center">
          <Link
            href="/try/name"
            className="rounded-full px-8 py-3 lg:px-12 lg:py-4 text-white font-medium text-base lg:text-lg flex items-center gap-2 lg:gap-3 hover:opacity-90 transition-opacity font-[family-name:var(--font-poppins)]"
            style={{ backgroundColor: '#3D3331' }}
          >
            Create my note
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <p
            className="text-xs lg:text-sm mt-3 lg:mt-4 text-center"
            style={{ color: '#3D3331' }}
          >
            FREE | No Signup
          </p>
        </div>
      </div>
    </section>
  );
}
