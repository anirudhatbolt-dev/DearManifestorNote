"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E5DDD5]/80 backdrop-blur-sm border-b border-[#D4C4B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-[#3D3331] hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Crimson Pro' }}
          >
            Dear Manifestor
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all font-[family-name:var(--font-poppins)] ${
                  isActive(link.href)
                    ? "text-[#3D3331] border-b-2 border-[#3D3331]"
                    : "text-[#3D3331]/70 hover:text-[#3D3331]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#3D3331] hover:bg-[#D4C4B8]/30 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {loading ? (
              <div className="w-10 h-10 rounded-full bg-[#D4C4B8] animate-pulse"></div>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none focus:ring-2 focus:ring-[#3D3331] rounded-full">
                    <Avatar className="h-10 w-10 cursor-pointer hover:opacity-80 transition-opacity border-2 border-[#D4C4B8]">
                      <AvatarFallback className="bg-[#3D3331] text-white font-semibold">
                        {user.email ? getInitials(user.email) : <User className="w-5 h-5" />}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white border-[#D4C4B8]">
                  <div className="px-3 py-2 border-b border-[#D4C4B8]">
                    <p className="text-sm font-medium text-[#3D3331]">{user.email}</p>
                  </div>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer text-[#3D3331] focus:bg-[#F5F0EB] focus:text-[#3D3331]"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href="/auth/signup"
                className="px-6 py-2 rounded-full bg-[#3D3331] text-white font-medium hover:opacity-90 transition-opacity text-sm font-[family-name:var(--font-poppins)]"
              >
                Log In
              </Link>
            )}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#D4C4B8] bg-[#E5DDD5]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 font-[family-name:var(--font-poppins)] ${
                    isActive(link.href)
                      ? "text-[#3D3331] font-semibold"
                      : "text-[#3D3331]/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
