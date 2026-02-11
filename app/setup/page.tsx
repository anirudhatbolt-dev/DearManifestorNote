"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SetupPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("there");
  const [error, setError] = useState("");
  const [isRetrying, setIsRetrying] = useState(false);

  const saveUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        console.log("No authenticated user found, redirecting to signup");
        router.push("/auth/signup");
        return;
      }

      const manifestationDataStr = localStorage.getItem("manifestation_data");
      if (!manifestationDataStr) {
        console.error("No manifestation data found in localStorage");
        setError("No data found. Please start over.");
        return;
      }

      const data = JSON.parse(manifestationDataStr);
      setUserName(data.name || "there");

      console.log("Starting data save for user:", user.id);

      const userEmail = user.email || data.email || "";

      console.log("Step 1: Saving user profile...");
      const { error: profileError } = await supabase
        .from("user_profiles")
        .insert({
          id: user.id,
          name: data.name || "",
          pronouns: data.pronouns || "they/them",
          email: userEmail,
          phone: data.phone || null,
          country_code: data.country_code || null,
        });

      if (profileError) {
        console.error("Profile error:", profileError);
        throw new Error(`Failed to save profile: ${profileError.message}`);
      }

      console.log("Step 2: Saving user goal...");
      const { data: goalData, error: goalError } = await supabase
        .from("user_goals")
        .insert({
          user_id: user.id,
          goal: data.goal || "",
          details: data.details || "",
          additional_manifestation: data.additionalManifestation || null,
          more: data.More || null,
          is_active: true,
        })
        .select()
        .single();

      if (goalError || !goalData) {
        console.error("Goal error:", goalError);
        throw new Error(`Failed to save goal: ${goalError?.message}`);
      }

      console.log("Step 3: Saving first note...");
      if (data.firstNoteUrl && data.firstNoteMessage) {
        const { error: firstNoteError } = await supabase
          .from("daily_notes")
          .insert({
            user_id: user.id,
            goal_id: goalData.id,
            message_text: data.firstNoteMessage,
            image_url: data.firstNoteUrl,
            template_id: 1,
            created_at: data.firstNoteDate || new Date().toISOString(),
          });

        if (firstNoteError) {
          console.error("First note error:", firstNoteError);
          throw new Error(`Failed to save first note: ${firstNoteError.message}`);
        }
      }

      console.log("Step 4: Saving second note (if exists)...");
      if (data.secondNoteUrl && data.secondNoteMessage) {
        const { error: secondNoteError } = await supabase
          .from("daily_notes")
          .insert({
            user_id: user.id,
            goal_id: goalData.id,
            message_text: data.secondNoteMessage,
            image_url: data.secondNoteUrl,
            template_id: 2,
            created_at: data.secondNoteDate || new Date().toISOString(),
          });

        if (secondNoteError) {
          console.error("Second note error:", secondNoteError);
          throw new Error(`Failed to save second note: ${secondNoteError.message}`);
        }
      }

      console.log("Step 5: Saving user preferences...");
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const { error: preferencesError } = await supabase
        .from("user_preferences")
        .insert({
          user_id: user.id,
          delivery_time: "11:11:00",
          timezone: timezone,
          is_active: true,
        });

      if (preferencesError) {
        console.error("Preferences error:", preferencesError);
        throw new Error(`Failed to save preferences: ${preferencesError.message}`);
      }

      console.log("All data saved successfully!");

      localStorage.removeItem("manifestation_data");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      router.push("/gallery");
    } catch (err: any) {
      console.error("Error in saveUserData:", err);
      setError(err.message || "Something went wrong. Please try again.");
      setIsRetrying(false);
    }
  };

  useEffect(() => {
    saveUserData();
  }, []);

  const handleRetry = () => {
    setError("");
    setIsRetrying(true);
    saveUserData();
  };

  if (error) {
    return (
      <div className="min-h-screen bg-[#E5DDD5] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <Image
              src="/transparent-cute.gif"
              alt="Loading"
              width={200}
              height={200}
              className="mx-auto"
              unoptimized
            />
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 mb-6">
            <p className="text-red-600 font-medium mb-2">Oops!</p>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="px-8 py-4 rounded-full bg-[#3D3331] text-white font-semibold hover:bg-[#3D3331]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
          >
            {isRetrying ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Retrying...
              </>
            ) : (
              "Try Again"
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E5DDD5] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/transparent-cute.gif"
            alt="Setting up"
            width={200}
            height={200}
            className="mx-auto"
            unoptimized
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#3D3331] mb-4">
          Setting up your manifestation ritual, {userName}...
        </h1>
        <p className="text-lg text-[#3D3331]/70 mb-8">
          Aligning your notes with the universe's timing
        </p>
        <Loader2 className="w-8 h-8 animate-spin text-[#3D3331] mx-auto" />
      </div>
    </div>
  );
}
