"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveManifestationData, getManifestationData } from "@/lib/manifestation-storage";
import { createUser, createSubscription } from "@/lib/supabase-client";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function PhonePage() {
  const router = useRouter();
  const [phone, setPhone] = useState("+1");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const data = getManifestationData();
    setName(data.name || "");
    if (data.phone) {
      setPhone(data.phone);
    }
  }, []);

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

      const countryCodeMatch = phone.match(/^\+\d+/);
      const countryCode = countryCodeMatch ? countryCodeMatch[0] : "+1";

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
          <style jsx global>{`
            .react-international-phone-input-container {
              width: 100%;
            }
            .react-international-phone-input-container .react-international-phone-input {
              width: 100%;
              padding: 16px 24px;
              font-size: 18px;
              border-radius: 9999px;
              border: 2px solid ${validatePhone(phone) ? "#3D3331" : "#D4C4B8"};
              background-color: #F5F0EB;
              color: #3D3331;
              outline: none;
              transition: all 0.2s;
            }
            .react-international-phone-input-container .react-international-phone-input:focus {
              border-color: #3D3331;
            }
            .react-international-phone-country-selector-button {
              padding: 16px 12px;
              border-radius: 9999px 0 0 9999px;
              border: 2px solid #D4C4B8;
              border-right: none;
              background-color: #F5F0EB;
              color: #3D3331;
              outline: none;
              transition: all 0.2s;
            }
            .react-international-phone-country-selector-button:hover {
              background-color: #EDE5DD;
            }
            .react-international-phone-country-selector-dropdown {
              border-radius: 16px;
              border: 2px solid #D4C4B8;
              background-color: #F5F0EB;
              box-shadow: 0 8px 16px rgba(61, 51, 49, 0.1);
              max-height: 300px;
            }
            .react-international-phone-country-selector-dropdown__list-item {
              color: #3D3331;
              padding: 12px 16px;
            }
            .react-international-phone-country-selector-dropdown__list-item:hover {
              background-color: #EDE5DD;
            }
            .react-international-phone-country-selector-dropdown__list-item--selected {
              background-color: #3D3331;
              color: white;
            }
          `}</style>

          <PhoneInput
            defaultCountry="us"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputClassName="phone-input-custom"
          />

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
