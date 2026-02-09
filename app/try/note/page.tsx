"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getManifestationData } from "@/lib/manifestation-storage";
import Image from "next/image";

export default function NotePage() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    imageUrl: "",
    message: "",
  });

  useEffect(() => {
    const manifestationData = getManifestationData();
    
    if (!manifestationData.generatedImageUrl) {
      // If no note generated, redirect back
      router.push("/try/name");
      return;
    }

    setData({
      name: manifestationData.name || "",
      imageUrl: manifestationData.generatedImageUrl || "",
      message: manifestationData.generatedMessage || "",
    });
  }, [router]);

  const handleCreateAnother = () => {
    router.push("/try/craftingAgain");
  };

  if (!data.imageUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5]">
        <p className="text-xl" style={{ color: "#3D3331" }}>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12"
          style={{ color: "#3D3331" }}
        >
          Your Manifestation Note, {data.name}
        </h1>

        <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={data.imageUrl}
            alt="Your manifestation note"
            width={800}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        <button
          onClick={handleCreateAnother}
          className="rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all"
          style={{ backgroundColor: "#3D3331" }}
        >
          Show me another path
        </button>

        <p className="text-sm mt-3" style={{ color: "#3D3331" }}>
          Every note attracts it in a different way
        </p>
      </div>
    </div>
  );
}