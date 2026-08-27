"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LocationAutocomplete, type LocationValue } from "./LocationAutocomplete";
import { RADIUS_OPTIONS_KM } from "@/lib/geo";
import type { PropertyType, TransactionType } from "@/types/listing";

const PROPERTY_TYPE_OPTIONS: { value: PropertyType; label: string }[] = [
  { value: "APARTMENT", label: "Appartement" },
  { value: "HOUSE", label: "Maison" },
];

export function HeroSearchForm() {
  const router = useRouter();
  const [location, setLocation] = useState<LocationValue | null>(null);
  const [radiusKm, setRadiusKm] = useState(5);
  const [transactionType, setTransactionType] = useState<TransactionType>("RENT");
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const [error, setError] = useState<string | null>(null);

  function toggleType(type: PropertyType) {
    setPropertyTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  }

  function submit() {
    if (!location) {
      setError("Choisissez une localisation dans la liste proposée.");
      return;
    }
    const params = new URLSearchParams({
      lat: String(location.latitude),
      lon: String(location.longitude),
      label: location.label,
      radius: String(radiusKm),
      transaction: transactionType,
    });
    if (propertyTypes.length > 0) params.set("types", propertyTypes.join(","));
    router.push(`/recherche?${params.toString()}`);
  }

  return (
    <div className="card mx-auto w-full max-w-3xl p-5 sm:p-6">
      <div className="mb-4 inline-flex rounded-full bg-ink-100 p-1 text-sm font-medium">
        <button
          type="button"
          onClick={() => setTransactionType("RENT")}
          className={`rounded-full px-4 py-1.5 transition ${transactionType === "RENT" ? "bg-white shadow-sm" : "text-ink-500"}`}
        >
          Location
        </button>
        <button
          type="button"
          onClick={() => setTransactionType("BUY")}
          className={`rounded-full px-4 py-1.5 transition ${transactionType === "BUY" ? "bg-white shadow-sm" : "text-ink-500"}`}
        >
          Achat
        </button>
      </div>

      <label className="mb-1.5 block text-sm font-medium text-ink-700">📍 Où souhaitez-vous vivre ?</label>
      <LocationAutocomplete value={location} onChange={setLocation} />

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-700">Rayon maximum</label>
          <select
            className="input"
            value={radiusKm}
            onChange={(e) => setRadiusKm(Number(e.target.value))}
          >
            {RADIUS_OPTIONS_KM.map((km) => (
              <option key={km} value={km}>
                {km} km
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink-700">Type de bien</label>
          <div className="flex gap-2">
            {PROPERTY_TYPE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleType(opt.value)}
                className={`flex-1 rounded-xl border px-3 py-3 text-sm font-medium transition ${
                  propertyTypes.includes(opt.value)
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-ink-200 text-ink-600 hover:border-ink-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {error && <p className="mt-3 text-sm text-bad">{error}</p>}

      <button type="button" onClick={submit} className="btn-primary mt-5 w-full text-base">
        🔎 Trouver mon logement
      </button>
    </div>
  );
}
