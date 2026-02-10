"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DailyPage() {
  const router = useRouter();

  const handleSendNotes = () => {
    router.push("/email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
          style={{ color: "#3D3331" }}
        >
          Get new notes every morning
          <br />
          <span className="font-bold">11:11 AM</span>
        </h1>

        <p
          className="text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed"
          style={{ color: "#3D3331" }}
        >
          The universe's number. Your daily reminder.
          <br />
          Delivered exactly when manifestation is strongest
        </p>

        <button
          onClick={handleSendNotes}
          className="mt-8 mb-12 rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all"
          style={{ backgroundColor: "#3D3331" }}
        >
          Send me my 11:11 notes
        </button>

        <div className="flex justify-center">
          <Image
            src="/untitled_design_(47).png"
            alt="Daily manifestation preview"
            width={600}
            height={400}
            className="rounded-3xl"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
