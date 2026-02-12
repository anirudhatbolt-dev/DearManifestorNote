"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveManifestationData } from "@/lib/manifestation-storage";
import { Loader2, Clock } from "lucide-react";

export default function TimezonePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [detectedTime, setDetectedTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [utcOffset, setUtcOffset] = useState(0);

  useEffect(() => {
    const detectTimezone = () => {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const offset = new Date().getTimezoneOffset() / -60;
      const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      setTimezone(tz);
      setUtcOffset(offset);
      setDetectedTime(currentTime);

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    detectTimezone();
  }, []);

  const handleNext = () => {
    saveManifestationData({
      timezone: timezone,
      utc_offset: utcOffset
    });
    router.push("/phone");
  };

  const displayTimezone = timezone.replace(/_/g, ' ');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          <Loader2
            className="w-12 h-12 animate-spin mx-auto mb-4"
            style={{ color: "#3D3331" }}
          />
          <p
            className="text-lg font-medium"
            style={{ color: "#3D3331" }}
          >
            Detecting your timezone...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4"
          style={{ color: "#3D3331" }}
        >
          Your notes will arrive at 11:11 AM
        </h1>

        <p
          className="text-lg md:text-xl mb-12"
          style={{ color: "#3D3331", opacity: 0.8 }}
        >
          in your local time, every morning
        </p>

        <div
          className="rounded-3xl border-2 p-8 mb-8 max-w-md mx-auto"
          style={{
            backgroundColor: "#F5F0EB",
            borderColor: "#D4C4B8"
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Clock
              className="w-6 h-6"
              style={{ color: "#3D3331" }}
            />
            <p
              className="text-lg"
              style={{ color: "#3D3331" }}
            >
              Your current time: <span className="font-bold">{detectedTime}</span>
            </p>
          </div>
          <p
            className="text-sm"
            style={{ color: "#3D3331", opacity: 0.7 }}
          >
            {displayTimezone}
          </p>
        </div>

        <p
          className="text-base mb-8"
          style={{ color: "#3D3331", opacity: 0.8 }}
        >
          We'll send your daily manifestation note at 11:11 AM in your timezone
        </p>

        <button
          onClick={handleNext}
          className="rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all"
          style={{ backgroundColor: "#3D3331" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
