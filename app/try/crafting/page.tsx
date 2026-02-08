"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getManifestationData } from "@/lib/manifestation-storage";
import { Loader2, Check } from "lucide-react";
import Image from "next/image";

export default function CraftingPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const data = getManifestationData();
    setFirstName(data.name || "you");

    const timer1 = setTimeout(() => setStage(2), 10000);
    const timer2 = setTimeout(() => setStage(3), 20000);
    const timer3 = setTimeout(() => {
      router.push("/try/note");
    }, 30000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [router]);

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
              Creating a message for {firstName}
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
              Making sure affirmations come true
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
              Setting up the vibrations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
