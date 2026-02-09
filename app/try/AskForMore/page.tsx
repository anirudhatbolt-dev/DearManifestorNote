"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveManifestationData, getManifestationData } from "@/lib/manifestation-storage";

export default function AskForMorePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [additionalManifestation, setAdditionalManifestation] = useState("");
  const maxLength = 200;

  useEffect(() => {
    const data = getManifestationData();

    if (!data.name) {
      router.push("/try/name");
      return;
    }

    setName(data.name);

    if (data.additionalManifestation) {
      setAdditionalManifestation(data.additionalManifestation);
    }
  }, [router]);

  const handleNext = () => {
    if (additionalManifestation.trim()) {
      saveManifestationData({ additionalManifestation: additionalManifestation.trim() });
      router.push("/try/craftingAgain");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setAdditionalManifestation(value);
    }
  };

  if (!name) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5]">
        <p className="text-xl" style={{ color: "#3D3331" }}>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
          style={{ color: "#3D3331" }}
        >
          Ask for more, {name}. <br />The Universe is very giving.
        </h1>

        <p
          className="text-xl md:text-2xl mb-6"
          style={{ color: "#3D3331" }}
        >
          What more are you manifesting?
        </p>

        <div className="max-w-xl mx-auto">
          <div
            className="text-right mb-2 text-sm font-medium"
            style={{ color: "#3D3331" }}
          >
            {additionalManifestation.length}/{maxLength}
          </div>
          <textarea
            value={additionalManifestation}
            onChange={handleChange}
            placeholder="more money flowing in, my soulmate, that promotion, inner peace..."
            className="w-full px-6 py-4 text-lg rounded-3xl border-2 outline-none transition-all resize-none"
            style={{
              color: "#3D3331",
              backgroundColor: "#F5F0EB",
              borderColor: "#D4C4B8",
              minHeight: "200px",
            }}
          />
        </div>

        <button
          onClick={handleNext}
          disabled={!additionalManifestation.trim()}
          className="mt-12 rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#3D3331" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
