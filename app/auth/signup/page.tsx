"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("there");
  const [noteImageUrl, setNoteImageUrl] = useState("");

  useEffect(() => {
    // Handle OAuth redirect hash
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    if (accessToken) {
      // OAuth callback - check if user has profile to determine redirect
      const checkUserProfile = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const { data: profile } = await supabase
            .from('user_profiles')
            .select('id')
            .eq('id', session.user.id)
            .maybeSingle();

          // If profile exists, user is signing in -> gallery
          // If no profile, user is signing up -> setup
          router.push(profile ? '/gallery' : '/setup');
        }
      };
      checkUserProfile();
      return;
    }

    const manifestationData = localStorage.getItem("manifestation_data");
    if (manifestationData) {
      try {
        const data = JSON.parse(manifestationData);
        if (data.name) setUserName(data.name);
        if (data.firstNoteUrl) {
          setNoteImageUrl(data.firstNoteUrl);
        } else if (data.generatedImageUrl) {
          setNoteImageUrl(data.generatedImageUrl);
        }
      } catch (e) {
        console.error("Error parsing manifestation data:", e);
      }
    }
  }, [router]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignUp) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/setup`,
          },
        });
        if (signUpError) throw signUpError;

        if (data?.user && data?.session) {
          router.push("/setup");
        } else if (data?.user && !data?.session) {
          setError("Please check your email to confirm your account before signing in.");
          setLoading(false);
        }
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;

        if (data?.session) {
          router.push("/gallery");
        }
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during authentication");
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/signup`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || "An error occurred with Google sign-in");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E5DDD5] flex flex-col-reverse lg:flex-row">
      {/* Auth Form - Left Side */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#3D3331] mb-3">
              Ready to make this your reality, {userName} ?
            </h1>
            <p className="text-[#3D3331]/70 text-base lg:text-lg">
              {isSignUp ? (
                <>
                  Sign up now. Tomorrow at 11:11, your first note arrives.<br />
                  Every morning after that, the universe reminds you what's already yours ✨
                </>
              ) : (
                "Welcome back! Sign in to continue your manifestation journey"
              )}
            </p>
          </div>

          <form onSubmit={handleEmailAuth} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full px-6 py-4 rounded-full bg-[#F5F0EB] border-2 border-[#D4C4B8] text-[#3D3331] placeholder:text-[#3D3331]/40 focus:outline-none focus:border-[#3D3331] transition-colors"
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                minLength={6}
                className="w-full px-6 py-4 rounded-full bg-[#F5F0EB] border-2 border-[#D4C4B8] text-[#3D3331] placeholder:text-[#3D3331]/40 focus:outline-none focus:border-[#3D3331] transition-colors"
              />
            </div>

            {error && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 rounded-full bg-[#3D3331] text-white font-semibold hover:bg-[#3D3331]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                isSignUp ? "Start manifesting daily" : "Sign in with Email"
              )}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#D4C4B8]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#E5DDD5] text-[#3D3331]/60">or</span>
            </div>
          </div>

          <button
            onClick={handleGoogleAuth}
            disabled={loading}
            className="w-full px-6 py-4 rounded-full bg-white border-2 border-[#D4C4B8] text-[#3D3331] font-semibold hover:bg-[#F5F0EB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </>
            )}
          </button>

          <div className="text-center">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
              }}
              className="text-[#3D3331]/70 hover:text-[#3D3331] transition-colors text-sm"
            >
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <span className="font-semibold underline">
                {isSignUp ? "Sign in" : "Sign up"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Image Display - Right Side */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-lg">
          {noteImageUrl ? (
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
              <Image
                src={noteImageUrl}
                alt="Your manifestation note"
                width={600}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          ) : (
            <div className="rounded-3xl shadow-2xl bg-[#F5F0EB] border-2 border-[#D4C4B8] p-12 flex items-center justify-center min-h-[400px]">
              <p className="text-[#3D3331]/50 text-center text-lg">
                Your manifestation note will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}