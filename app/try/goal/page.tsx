"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveManifestationData, getManifestationData } from "@/lib/manifestation-storage";

export default function GoalPage() {
  const router = useRouter();
  const [goal, setGoal] = useState("");
  const maxLength = 300;

  useEffect(() => {
    const data = getManifestationData();
    if (data.goal) {
      setGoal(data.goal);
    }
  }, []);

  const handleNext = () => {
    if (goal.trim()) {
      saveManifestationData({ goal: goal.trim() });
      router.push("/try/details");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setGoal(value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12"
          style={{ color: "#3D3331" }}
        >
          What are you manifesting right now?
        </h1>

        <div className="max-w-xl mx-auto">
          <div
            className="text-right mb-2 text-sm font-medium"
            style={{ color: "#3D3331" }}
          >
            {goal.length}/{maxLength}
          </div>
          <textarea
            value={goal}
            onChange={handleChange}
            placeholder='e.g., "my dream apartment in Brooklyn," "a loving relationship with my SP," "my 6-figure business," "financial abundance"...'
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
          disabled={!goal.trim()}
          className="mt-12 rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#3D3331" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
