"use client";

import { useFavorites } from "@/hooks/useFavorites";

export function FavoriteButton({ listingId }: { listingId: string }) {
  const { isFavorite, toggle, loaded } = useFavorites();
  const active = isFavorite(listingId);

  return (
    <button
      type="button"
      onClick={() => toggle(listingId)}
      disabled={!loaded}
      className={`btn-secondary ${active ? "!border-bad !text-bad" : ""}`}
    >
      {active ? "❤️ Dans mes favoris" : "🤍 Ajouter aux favoris"}
    </button>
  );
}
