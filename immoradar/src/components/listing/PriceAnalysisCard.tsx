import type { PriceAnalysisResult } from "@/lib/priceAnalysis";

const VERDICT_UI: Record<string, { label: string; className: string }> = {
  good: { label: "🟢 Bon prix", className: "bg-good/10 text-good" },
  slightly_high: { label: "🟠 Prix légèrement élevé", className: "bg-warn/10 text-warn" },
  high: { label: "🔴 Prix élevé", className: "bg-bad/10 text-bad" },
  unknown: { label: "Données insuffisantes", className: "bg-ink-100 text-ink-500" },
};

export function PriceAnalysisCard({ analysis }: { analysis: PriceAnalysisResult }) {
  const ui = VERDICT_UI[analysis.verdict]!;

  return (
    <div className="card p-5">
      <h2 className="font-semibold text-ink-900">💰 Le prix est-il intéressant ?</h2>

      {!analysis.sufficientData ? (
        <p className="mt-3 rounded-lg bg-ink-50 p-3 text-sm text-ink-500">
          Données insuffisantes pour établir une estimation fiable. ImmoRadar préfère ne rien afficher
          plutôt que d'inventer un chiffre.
        </p>
      ) : (
        <>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-ink-400">Prix demandé</p>
              <p className="text-lg font-semibold text-ink-900">{Math.round(analysis.askedPrice)} €</p>
            </div>
            <div>
              <p className="text-xs text-ink-400">Prix estimé du secteur</p>
              <p className="text-lg font-semibold text-ink-900">{analysis.estimatedPrice} €</p>
            </div>
            <div>
              <p className="text-xs text-ink-400">Fourchette estimée</p>
              <p className="text-lg font-semibold text-ink-900">
                {analysis.rangeMin} € – {analysis.rangeMax} €
              </p>
            </div>
          </div>
          <span className={`badge mt-4 ${ui.className}`}>{ui.label}</span>
        </>
      )}

      <details className="mt-4 text-xs text-ink-400">
        <summary className="cursor-pointer select-none font-medium text-ink-500">Méthodologie</summary>
        <p className="mt-1.5">{analysis.methodology}</p>
        {analysis.sampleSize != null && <p className="mt-1">Échantillon : {analysis.sampleSize} annonce(s) comparable(s).</p>}
        <p className="mt-1">Calculé le {new Date(analysis.computedAt).toLocaleString("fr-FR")}.</p>
      </details>
    </div>
  );
}
