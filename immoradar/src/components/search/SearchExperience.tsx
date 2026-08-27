"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { LocationAutocomplete, type LocationValue } from "./LocationAutocomplete";
import { FilterPanel } from "./FilterPanel";
import { WeightsPanel } from "./WeightsPanel";
import { ListingCard } from "./ListingCard";
import { NlSearchBar } from "./NlSearchBar";
import { useFavorites } from "@/hooks/useFavorites";
import { RADIUS_OPTIONS_KM } from "@/lib/geo";
import { DEFAULT_WEIGHTS, type FilterSet, type ScoreWeights } from "@/types/listing";
import type { SearchResponse, SearchResultItem } from "@/lib/searchEngine";

const ResultsMap = dynamic(() => import("@/components/map/ResultsMap"), { ssr: false });

const SORT_OPTIONS = [
  { value: "relevance", label: "Meilleure correspondance" },
  { value: "price_asc", label: "Prix croissant" },
  { value: "price_desc", label: "Prix décroissant" },
  { value: "surface", label: "Surface" },
  { value: "distance", label: "Distance" },
  { value: "recent", label: "Plus récent" },
  { value: "value", label: "Meilleur rapport qualité/prix" },
];

export interface InitialSearchState {
  location: LocationValue;
  radiusKm: number;
  transactionType: "RENT" | "BUY";
  propertyTypes: FilterSet["propertyTypes"];
}

export function SearchExperience({ initial }: { initial: InitialSearchState }) {
  const router = useRouter();
  const [location, setLocation] = useState<LocationValue>(initial.location);
  const [radiusKm, setRadiusKm] = useState(initial.radiusKm);
  const [filters, setFilters] = useState<FilterSet>({
    transactionType: initial.transactionType,
    propertyTypes: initial.propertyTypes,
    amenities: [],
  });
  const [weights, setWeights] = useState<ScoreWeights>(DEFAULT_WEIGHTS);
  const [sort, setSort] = useState("relevance");
  const [page, setPage] = useState(1);
  const [mobileTab, setMobileTab] = useState<"list" | "map">("list");
  const [showFilters, setShowFilters] = useState(false);
  const [showWeights, setShowWeights] = useState(false);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const [data, setData] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { isFavorite, toggle } = useFavorites();

  useEffect(() => {
    setPage(1);
  }, [filters, weights, radiusKm, location.latitude, location.longitude, sort]);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            latitude: location.latitude,
            longitude: location.longitude,
            radiusKm,
            filters,
            weights,
            sort,
            page,
            pageSize: 10,
          }),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("La recherche a échoué. Merci de réessayer.");
        const json: SearchResponse = await res.json();
        setData(json);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError(err instanceof Error ? err.message : "Erreur inconnue.");
        }
      } finally {
        setLoading(false);
      }
    }, 250);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [location, radiusKm, filters, weights, sort, page]);

  const mapCenter = useMemo<[number, number]>(() => [location.latitude, location.longitude], [location]);

  function toggleCompare(id: string) {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      if (prev.length >= 4) return prev; // limite raisonnable pour un comparateur lisible
      return [...prev, id];
    });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <div className="card mb-4 flex flex-col gap-3 p-3 sm:flex-row sm:items-center">
        <div className="flex-1">
          <LocationAutocomplete value={location} onChange={(v) => v && setLocation(v)} />
        </div>
        <select className="input sm:w-40" value={radiusKm} onChange={(e) => setRadiusKm(Number(e.target.value))}>
          {RADIUS_OPTIONS_KM.map((km) => (
            <option key={km} value={km}>
              Rayon {km} km
            </option>
          ))}
        </select>
        <button type="button" className="btn-secondary sm:hidden" onClick={() => setShowFilters(true)}>
          Filtres
        </button>
      </div>

      <div className="mb-4">
        <NlSearchBar
          onApply={(result) => {
            setFilters((prev) => ({
              ...prev,
              ...result.filters,
              propertyTypes: result.filters.propertyTypes ?? prev.propertyTypes,
              amenities: [
                ...prev.amenities.filter(
                  (a) => !result.requiredAmenities.includes(a.key) && !result.preferredAmenities.includes(a.key),
                ),
                ...result.requiredAmenities.map((key) => ({ key, mode: "required" as const })),
                ...result.preferredAmenities.map((key) => ({ key, mode: "preferred" as const })),
              ],
            }));
            if (result.radiusKm) setRadiusKm(result.radiusKm);
          }}
        />
      </div>

      {compareIds.length > 0 && (
        <div className="mb-4 flex items-center justify-between rounded-xl border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm text-brand-800">
          <span>{compareIds.length} logement(s) sélectionné(s) pour comparaison</span>
          <button
            type="button"
            className="btn-primary !px-4 !py-1.5 text-xs"
            onClick={() => router.push(`/comparateur?ids=${compareIds.join(",")}`)}
          >
            Comparer
          </button>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between gap-3 sm:hidden">
        <div className="inline-flex rounded-full bg-ink-100 p-1 text-sm">
          <button
            type="button"
            onClick={() => setMobileTab("list")}
            className={`rounded-full px-4 py-1.5 ${mobileTab === "list" ? "bg-white shadow-sm" : "text-ink-500"}`}
          >
            Liste
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("map")}
            className={`rounded-full px-4 py-1.5 ${mobileTab === "map" ? "bg-white shadow-sm" : "text-ink-500"}`}
          >
            🗺️ Carte
          </button>
        </div>
        <span className="text-xs text-ink-400">{data ? `${data.total} résultat(s)` : "…"}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr_1fr] xl:grid-cols-[300px_1fr_1fr]">
        <aside className="hidden lg:block">
          <div className="card sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto p-4">
            <FilterPanel filters={filters} onChange={setFilters} />
            <div className="mt-6 border-t border-ink-100 pt-4">
              <button
                type="button"
                className="flex w-full items-center justify-between text-sm font-semibold text-ink-900"
                onClick={() => setShowWeights((s) => !s)}
              >
                Poids des critères {showWeights ? "▲" : "▼"}
              </button>
              {showWeights && (
                <div className="mt-3">
                  <WeightsPanel weights={weights} onChange={setWeights} />
                </div>
              )}
            </div>
          </div>
        </aside>

        <section className={`${mobileTab === "map" ? "hidden" : "block"} lg:block`}>
          <div className="mb-3 flex items-center justify-between">
            <p className="hidden text-sm text-ink-500 sm:block">{data ? `${data.total} résultat(s)` : "Recherche…"}</p>
            <select className="input !w-auto text-sm" value={sort} onChange={(e) => setSort(e.target.value)}>
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {error && <p className="mb-3 rounded-lg bg-bad/10 px-4 py-3 text-sm text-bad">{error}</p>}

          {loading && !data && <p className="py-10 text-center text-sm text-ink-400">Recherche des logements…</p>}

          {data && data.results.length === 0 && !loading && (
            <div className="card p-8 text-center text-sm text-ink-500">
              Aucun logement ne correspond à ces critères. Essayez d'élargir le rayon ou d'assouplir un
              critère obligatoire.
            </div>
          )}

          <div className="space-y-3">
            {data?.results.map((item: SearchResultItem) => (
              <ListingCard
                key={item.listing.id}
                item={item}
                isFavorite={isFavorite(item.listing.id)}
                onToggleFavorite={toggle}
                selectable
                selected={compareIds.includes(item.listing.id)}
                onToggleSelect={toggleCompare}
              />
            ))}
          </div>

          {data && data.total > data.pageSize && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <button className="btn-secondary !px-4 !py-2 text-sm" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
                Précédent
              </button>
              <span className="text-sm text-ink-500">
                Page {page} / {Math.ceil(data.total / data.pageSize)}
              </span>
              <button
                className="btn-secondary !px-4 !py-2 text-sm"
                disabled={page >= Math.ceil(data.total / data.pageSize)}
                onClick={() => setPage((p) => p + 1)}
              >
                Suivant
              </button>
            </div>
          )}
        </section>

        <section className={`${mobileTab === "list" ? "hidden" : "block"} h-[70vh] lg:sticky lg:top-20 lg:block lg:h-[calc(100vh-6rem)]`}>
          <div className="card h-full overflow-hidden">
            <ResultsMap center={mapCenter} radiusKm={radiusKm} results={data?.results ?? []} />
          </div>
        </section>
      </div>

      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-white p-4 shadow-pop">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-semibold">Filtres</h2>
              <button onClick={() => setShowFilters(false)} aria-label="Fermer">
                ✕
              </button>
            </div>
            <FilterPanel filters={filters} onChange={setFilters} />
            <div className="mt-6 border-t border-ink-100 pt-4">
              <h3 className="mb-2 text-sm font-semibold text-ink-900">Poids des critères</h3>
              <WeightsPanel weights={weights} onChange={setWeights} />
            </div>
            <button className="btn-primary mt-6 w-full" onClick={() => setShowFilters(false)}>
              Voir les résultats
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
