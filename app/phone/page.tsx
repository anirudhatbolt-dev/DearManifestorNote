"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveManifestationData, getManifestationData } from "@/lib/manifestation-storage";
import { createUser, createSubscription } from "@/lib/supabase-client";

const countryCodes = [
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "AU" },
  { code: "+91", country: "IN" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+81", country: "JP" },
  { code: "+86", country: "CN" },
  { code: "+52", country: "MX" },
  { code: "+55", country: "BR" },
];

export default function PhonePage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const data = getManifestationData();
    setName(data.name || "");
    if (data.phone) {
      setPhone(data.phone);
    }
    if (data.country_code) {
      setCountryCode(data.country_code);
    }
  }, []);

  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    } else {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const validatePhone = (phone: string): boolean => {
    const numbers = phone.replace(/\D/g, "");
    return numbers.length >= 10;
  };

  const handleSubmit = async () => {
    setError("");

    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);

    try {
      const data = getManifestationData();

      saveManifestationData({
        phone: phone,
        country_code: countryCode
      });

      const userData = {
        name: data.name || "",
        pronouns: data.pronouns || "they/them",
        goal: data.goal || "",
        details: data.details || "",
        email: data.email || "",
        phone: phone,
        country_code: countryCode,
      };

      const user = await createUser(userData);

      if (user && user.id) {
        await createSubscription(user.id, true);
      }

      router.push("/daily");
    } catch (err) {
      console.error("Error saving user data:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && validatePhone(phone)) {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5DDD5] px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
          style={{ color: "#3D3331" }}
        >
          One more thing, {name}...
        </h1>

        <p
          className="text-lg md:text-xl mb-3"
          style={{ color: "#3D3331", opacity: 0.9 }}
        >
          Some mornings you need it on your phone.
        </p>
        <p
          className="text-lg md:text-xl mb-3"
          style={{ color: "#3D3331", opacity: 0.9 }}
        >
          We'll text you a link to today's note.
        </p>
        <p
          className="text-base md:text-lg mb-12"
          style={{ color: "#3D3331", opacity: 0.7 }}
        >
          (Only at 11:11. Never spam.)
        </p>

        <div className="max-w-md mx-auto">
          <div className="flex gap-3">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-4 py-4 text-lg rounded-full border-2 outline-none transition-all"
              style={{
                color: "#3D3331",
                backgroundColor: "#F5F0EB",
                borderColor: "#D4C4B8",
                minWidth: "120px",
              }}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code} {country.country}
                </option>
              ))}
            </select>

            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              onKeyPress={handleKeyPress}
              placeholder="(555) 000-0000"
              className="flex-1 px-6 py-4 text-lg rounded-full border-2 outline-none transition-all"
              style={{
                color: "#3D3331",
                backgroundColor: "#F5F0EB",
                borderColor: validatePhone(phone) ? "#3D3331" : "#D4C4B8",
              }}
            />
          </div>

          {error && (
            <p className="mt-4 text-red-600 text-sm">{error}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!validatePhone(phone) || isLoading}
          className="mt-12 rounded-full px-12 py-4 text-white font-medium text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#3D3331" }}
        >
          {isLoading ? "Setting up..." : "Start my manifestation ritual."}
        </button>

        <p
          className="mt-4 text-sm"
          style={{ color: "#3D3331", opacity: 0.6 }}
        >
          Free to start. Cancel anytime.
        </p>
      </div>
    </div>
  );
}
