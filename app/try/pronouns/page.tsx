"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveManifestationData, getManifestationData } from "@/lib/manifestation-storage";

type PronounOption = "she/her" | "he/him" | "they/them" | "name";

export default function PronounsPage() {
  const router = useRouter();
  const [selectedPronouns, setSelectedPronouns] = useState<PronounOption | null>(null);

  useEffect(() => {
    const data = getManifestationData();
    if (data.pronouns) {
      setSelectedPronouns(data.pronouns);
    }
  }, []);

  const handleNext = () => {
    if (selectedPronouns) {
      saveManifestationData({ pronouns: selectedPronouns });
      router.push("/try/goal");
    }
  };

  const options: { value: PronounOption; label: string }[] = [
    { value: "she/her", label: "She/Her" },
    { value: "he/him", label: "He/Him" },
    { value: "they/them", label: "They/Them" },
    { value: "name", label: "Just use my name (no pronouns)" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4">
      <div className="max-w-2xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12"
          style={{ color: "#3D3331" }}
        >
          How should we refer to you in your notes?
        </h1>

        <div className="space-y-4 mb-12">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center justify-center gap-4 px-6 py-4 rounded-full cursor-pointer transition-all border-2 max-w-md mx-auto"
              style={{
                backgroundColor: selectedPronouns === option.value ? "#D4C4B8" : "#F5F0EB",
                borderColor: selectedPronouns === option.value ? "#3D3331" : "#D4C4B8",
                color: "#3D3331",
              }}
            >
              <input
                type="radio"
                name="pronouns"
                value={option.value}
                checked={selectedPronouns === option.value}
                onChange={() => setSelectedPronouns(option.value)}
                className="w-5 h-5 accent-[#3D3331]"
              />
              <span className="text-lg font-medium">{option.label}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedPronouns}
          className="rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#3D3331" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
