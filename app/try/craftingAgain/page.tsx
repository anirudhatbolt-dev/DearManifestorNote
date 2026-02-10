"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getManifestationData, saveGeneratedNote } from "@/lib/manifestation-storage";
import { generateManifestationNote } from "@/lib/generate-note";
import { Loader2, Check } from "lucide-react";
import Image from "next/image";

export default function CraftingAgainPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [stage, setStage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const data = getManifestationData();
    setFirstName(data.name || "you");

    // Start the generation process
async function generateNote() {
  try {
    // Stage 1: Writing message
    setStage(1);

    // Call the Edge Function with Template 2
    const result = await generateManifestationNote({
      name: data.name || "",
      pronouns: data.pronouns || "",
      goal: data.goal || "",
      details: data.details || "",
      templateId: 2, // <--- ADD THIS
    });

    if (!result.success) {
      throw new Error(result.error || "Failed to generate note");
    }

    // Stage 2: Taking time
    setStage(2);
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Stage 3: Perfect words
    setStage(3);
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Save the generated note
    saveGeneratedNote(result.message, result.imageUrl);

    // Navigate to NewNote page
    router.push("/try/NewNote");
  } catch (err) {
    console.error("Error generating note:", err);
    setError(err instanceof Error ? err.message : "Something went wrong");
  }
}

    generateNote();
  }, [router]);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#E5DDD5] px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl font-medium mb-4" style={{ color: "#3D3331" }}>
            Oops, something went wrong
          </h1>
          <p className="text-lg mb-8" style={{ color: "#3D3331" }}>
            {error}
          </p>
          <button
            onClick={() => router.push("/try/details")}
            className="rounded-full px-8 py-3 text-white font-medium hover:opacity-90"
            style={{ backgroundColor: "#3D3331" }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#E5DDD5] px-4 pt-24">
      <div className="max-w-2xl w-full text-left">
        <div className="mb-12 flex justify-center">
          <Image
            src="/transparent-cute.gif"
            alt="Crafting your manifestation"
            width={200}
            height={200}
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            {stage > 1 ? (
              <Check className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" style={{ color: "#3D3331" }} />
            ) : (
              <Loader2 className="w-6 h-6 md:w-7 md:h-7 animate-spin flex-shrink-0" style={{ color: "#3D3331" }} />
            )}
            <p
              className="text-xl md:text-3xl font-medium"
              style={{ color: "#3D3331" }}
            >
              Writing your message, {firstName}...
            </p>
          </div>

          <div className="flex items-center gap-4">
            {stage > 2 ? (
              <Check className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" style={{ color: "#3D3331" }} />
            ) : (
              <Loader2
                className={`w-6 h-6 md:w-7 md:h-7 flex-shrink-0 ${stage >= 2 ? "animate-spin" : "opacity-30"}`}
                style={{ color: "#3D3331" }}
              />
            )}
            <p
              className={`text-xl md:text-3xl font-medium ${stage < 2 ? "opacity-30" : ""}`}
              style={{ color: "#3D3331" }}
            >
              Taking extra time to get this just right
            </p>
          </div>

          <div className="flex items-center gap-4">
            {stage > 3 ? (
              <Check className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" style={{ color: "#3D3331" }} />
            ) : (
              <Loader2
                className={`w-6 h-6 md:w-7 md:h-7 flex-shrink-0 ${stage >= 3 ? "animate-spin" : "opacity-30"}`}
                style={{ color: "#3D3331" }}
              />
            )}
            <p
              className={`text-xl md:text-3xl font-medium ${stage < 3 ? "opacity-30" : ""}`}
              style={{ color: "#3D3331" }}
            >
              Your manifestation deserves the perfect words
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}