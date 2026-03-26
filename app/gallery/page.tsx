"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase-client";
import { Loader2, ArrowRight } from "lucide-react";
import Image from "next/image";

interface DailyNote {
  id: string;
  message_text: string;
  image_url: string;
  template_id: number;
  created_at: string;
}

export default function GalleryPage() {
  const router = useRouter();
  const [notes, setNotes] = useState<DailyNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [hasSubscription, setHasSubscription] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
          router.push("/auth/signup");
          return;
        }

        const { data: profile } = await supabase
          .from("user_profiles")
          .select("name")
          .eq("id", user.id)
          .single();

        if (profile) {
          setUserName(profile.name);
        }

        const { data: subscription } = await supabase
          .from("subscriptions")
          .select("id")
          .eq("user_id", user.id)
          .eq("subscription_status", "active")
          .maybeSingle();

        setHasSubscription(!!subscription);

        const { data: notesData, error } = await supabase
          .from("daily_notes")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error loading notes:", error);
        } else {
          setNotes(notesData || []);
        }
      } catch (err) {
        console.error("Error in loadUserData:", err);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#E5DDD5] flex items-center justify-center pt-20">
        <Loader2 className="w-8 h-8 animate-spin text-[#3D3331]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E5DDD5] pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D3331] mb-4">
            Welcome, {userName}! 🌟
          </h1>
          <p className="text-lg text-[#3D3331]/70 mb-3">
            Your next manifestation note will arrive on <span className="font-bold">April 11th</span> at <span className="font-bold">11:11 AM</span>.
          </p>
          {!hasSubscription && (
            <div className="mt-6 flex flex-col items-center gap-4">
              <p className="text-base text-[#3D3331]/80">
                Want such notes to arrive daily at 11:11am?
              </p>
              <Link
                href="/subscribe"
                className="rounded-full px-8 py-3 text-white font-medium text-base flex items-center gap-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#3D3331' }}
              >
                Become a daily manifestor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        {notes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-[#3D3331]/60 mb-6">
              Your manifestation notes will appear here
            </p>
            <p className="text-[#3D3331]/50">
              You'll receive your first note at 11:11
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={note.image_url}
                  alt="Manifestation note"
                  width={400}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <p className="text-sm text-[#3D3331]/60">
                    {new Date(note.created_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
