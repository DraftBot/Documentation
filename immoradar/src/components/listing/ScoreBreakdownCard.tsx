import type { ScoreBreakdown } from "@/types/listing";

const ROWS: { key: keyof ScoreBreakdown; label: string }[] = [
  { key: "price", label: "Prix" },
  { key: "location", label: "Localisation" },
  { key: "surface", label: "Surface" },
  { key: "amenities", label: "Équipements" },
  { key: "environment", label: "Environnement" },
  { key: "energyRating", label: "DPE" },
];

function barColor(v: number) {
  if (v >= 75) return "bg-good";
  if (v >= 50) return "bg-warn";
  return "bg-bad";
}

export function ScoreBreakdownCard({ score, breakdown }: { score: number; breakdown: ScoreBreakdown }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-ink-900">Score ImmoRadar</h2>
        <span className="text-2xl font-bold text-brand-700">⭐ {score}/100</span>
      </div>
      <p className="mt-1 text-xs text-ink-400">
        Score général indicatif. Personnalisez-le en lançant une recherche avec vos propres critères et
        poids.
      </p>
      <div className="mt-4 space-y-2.5">
        {ROWS.map((row) => (
          <div key={row.key}>
            <div className="mb-1 flex justify-between text-xs text-ink-500">
              <span>{row.label}</span>
              <span>{breakdown[row.key]}/100</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
              <div className={`h-full rounded-full ${barColor(breakdown[row.key])}`} style={{ width: `${breakdown[row.key]}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
