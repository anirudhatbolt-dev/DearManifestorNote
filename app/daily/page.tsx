"use client";

import Image from "next/image";

export default function DailyPage() {
  const handleSendNotes = () => {
    // TODO: Implement send notes functionality
    console.log("Send 11:11 notes");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-medium mb-12 leading-relaxed"
          style={{ color: "#3D3331" }}
        >
          Every morning at <span className="font-bold">11:11 AM</span>
          <br />
          The universe's number. Your daily reminder.
          <br />
          Delivered exactly when manifestation is strongest
        </h1>

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
