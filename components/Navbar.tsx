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
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E5DDD5]/80 backdrop-blur-sm border-b border-[#D4C4B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-[#3D3331] hover:opacity-80 transition-opacity"
          >
            Dear Manifestor
          </Link>

          <div className="flex items-center gap-4">
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
                className="px-6 py-2 rounded-full bg-[#3D3331] text-white font-medium hover:opacity-90 transition-opacity text-sm"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
