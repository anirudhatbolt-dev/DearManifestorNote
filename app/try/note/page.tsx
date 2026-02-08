"use client";

import { useEffect, useState } from "react";
import { getManifestationData } from "@/lib/manifestation-storage";

export default function NotePage() {
  const [data, setData] = useState({
    name: "",
    pronouns: "",
    goal: "",
    details: "",
  });

  useEffect(() => {
    const manifestationData = getManifestationData();
    setData({
      name: manifestationData.name || "",
      pronouns: manifestationData.pronouns || "",
      goal: manifestationData.goal || "",
      details: manifestationData.details || "",
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12"
          style={{ color: "#3D3331" }}
        >
          Your Manifestation Note
        </h1>

        <div
          className="bg-white p-8 rounded-3xl shadow-lg mb-8"
          style={{ borderColor: "#D4C4B8", borderWidth: "2px" }}
        >
          <p className="text-lg mb-4" style={{ color: "#3D3331" }}>
            This is a placeholder for your personalized manifestation note.
          </p>
          <p className="text-sm opacity-70" style={{ color: "#3D3331" }}>
            The actual note generation will be implemented next.
          </p>
        </div>

        <div className="text-left max-w-md mx-auto text-sm opacity-60" style={{ color: "#3D3331" }}>
          <p className="mb-1">Name: {data.name}</p>
          <p className="mb-1">Pronouns: {data.pronouns}</p>
          <p className="mb-1">Goal: {data.goal}</p>
          <p className="mb-1">Details: {data.details}</p>
        </div>
      </div>
    </div>
  );
}
