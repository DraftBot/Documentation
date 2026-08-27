"use client";

import type { ScoreWeights } from "@/types/listing";

const LABELS: { key: keyof ScoreWeights; label: string; icon: string }[] = [
  { key: "price", label: "Prix", icon: "💰" },
  { key: "location", label: "Localisation", icon: "📍" },
  { key: "surface", label: "Surface", icon: "📐" },
  { key: "amenities", label: "Équipements", icon: "🛋️" },
  { key: "environment", label: "Environnement", icon: "🌳" },
  { key: "energyRating", label: "DPE", icon: "⚡" },
];

export function WeightsPanel({ weights, onChange }: { weights: ScoreWeights; onChange: (w: ScoreWeights) => void }) {
  return (
    <div className="space-y-4">
      <p className="text-xs text-ink-400">
        Indiquez l'importance de chaque critère (0 = ignoré, 10 = très important). Le score de chaque
        annonce s'adapte automatiquement.
      </p>
      {LABELS.map(({ key, label, icon }) => (
        <div key={key}>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="font-medium text-ink-700">
              {icon} {label}
            </span>
            <span className="text-ink-400">{weights[key]}/10</span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            step={1}
            value={weights[key]}
            onChange={(e) => onChange({ ...weights, [key]: Number(e.target.value) })}
            className="w-full accent-brand-600"
          />
        </div>
      ))}
    </div>
  );
}
