"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveManifestationData, getManifestationData } from "@/lib/manifestation-storage";

export default function DetailsPage() {
  const router = useRouter();
  const [details, setDetails] = useState("");
  const maxLength = 200;

  useEffect(() => {
    const data = getManifestationData();
    if (data.details) {
      setDetails(data.details);
    }
  }, []);

  const handleNext = () => {
    if (details.trim()) {
      saveManifestationData({ details: details.trim() });
      router.push("/try/crafting");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setDetails(value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12"
          style={{ color: "#3D3331" }}
        >
          Add specific details to make your notes more personal
        </h1>

        <div className="max-w-xl mx-auto">
          <div
            className="text-right mb-2 text-sm font-medium"
            style={{ color: "#3D3331" }}
          >
            {details.length}/{maxLength}
          </div>
          <textarea
            value={details}
            onChange={handleChange}
            placeholder=""
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
          disabled={!details.trim()}
          className="mt-12 rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#3D3331" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
