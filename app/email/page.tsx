"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveManifestationData, getManifestationData } from "@/lib/manifestation-storage";

export default function EmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const data = getManifestationData();
    if (data.email) {
      setEmail(data.email);
      setIsValid(validateEmail(data.email));
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleNext = () => {
    if (isValid && email.trim()) {
      saveManifestationData({ email: email.trim() });
      router.push("/timezone");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isValid) {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
          style={{ color: "#3D3331" }}
        >
          Where should we send your 11:11 notes?
        </h1>

        <p
          className="text-lg md:text-xl mb-12"
          style={{ color: "#3D3331", opacity: 0.8 }}
        >
          Check your inbox every morning at the universe's most powerful moment.
        </p>

        <div className="max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            placeholder="your@email.com"
            className="w-full px-6 py-4 text-lg rounded-full border-2 outline-none transition-all"
            style={{
              color: "#3D3331",
              backgroundColor: "#F5F0EB",
              borderColor: isValid && email ? "#3D3331" : "#D4C4B8",
            }}
          />
        </div>

        <button
          onClick={handleNext}
          disabled={!isValid}
          className="mt-12 rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#3D3331" }}
        >
          Lock in my daily 11:11
        </button>
      </div>
    </div>
  );
}
