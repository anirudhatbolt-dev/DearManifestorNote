"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveManifestationData, getManifestationData } from "@/lib/manifestation-storage";

export default function NamePage() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const data = getManifestationData();
    if (data.name) {
      setName(data.name);
    }
  }, []);

  const handleNext = () => {
    if (name.trim()) {
      saveManifestationData({ name: name.trim() });
      router.push("/try/pronouns");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4">
      <div className="max-w-2xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12"
          style={{ color: "#3D3331" }}
        >
          What should we call you?
        </h1>
        <div className="mb-12">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Anna, Sarah, Zoya"
            className="w-full max-w-md mx-auto px-6 py-4 text-lg rounded-full border-2 text-center outline-none transition-all"
            style={{
              color: "#3D3331",
              backgroundColor: "#F5F0EB",
              borderColor: "#D4C4B8",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && name.trim()) {
                handleNext();
              }
            }}
          />
        </div>
        <button
          onClick={handleNext}
          disabled={!name.trim()}
          className="rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#3D3331" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}