"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#E5DDD5] border-t border-[#3D3331]/10 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base">
            <Link
              href="/about"
              className="transition-opacity hover:opacity-70"
              style={{ color: '#3D3331' }}
            >
              About Us
            </Link>
            <Link
              href="/pricing"
              className="transition-opacity hover:opacity-70"
              style={{ color: '#3D3331' }}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="transition-opacity hover:opacity-70"
              style={{ color: '#3D3331' }}
            >
              Contact Us
            </Link>
            <Link
              href="/privacy"
              className="transition-opacity hover:opacity-70"
              style={{ color: '#3D3331' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund"
              className="transition-opacity hover:opacity-70"
              style={{ color: '#3D3331' }}
            >
              Refund Policy
            </Link>
            <Link
              href="/terms"
              className="transition-opacity hover:opacity-70"
              style={{ color: '#3D3331' }}
            >
              Terms and Conditions
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm md:text-base text-center" style={{ color: '#3D3331' }}>
            © {new Date().getFullYear()} Dear Manifestor. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
