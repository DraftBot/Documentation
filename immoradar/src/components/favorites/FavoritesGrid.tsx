"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ListingCard } from "@/components/search/ListingCard";
import { useFavorites } from "@/hooks/useFavorites";
import type { SearchResultItem } from "@/lib/searchEngine";

export function FavoritesGrid({ items }: { items: SearchResultItem[] }) {
  const { isFavorite, toggle } = useFavorites();
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  function toggleSelect(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : prev.length >= 4 ? prev : [...prev, id]));
  }

  return (
    <div>
      {selected.length > 0 && (
        <div className="mb-4 flex items-center justify-between rounded-xl border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm text-brand-800">
          <span>{selected.length} logement(s) sélectionné(s)</span>
          <button className="btn-primary !px-4 !py-1.5 text-xs" onClick={() => router.push(`/comparateur?ids=${selected.join(",")}`)}>
            Comparer
          </button>
        </div>
      )}
      <div className="space-y-3">
        {items.map((item) => (
          <ListingCard
            key={item.listing.id}
            item={item}
            isFavorite={isFavorite(item.listing.id)}
            onToggleFavorite={toggle}
            selectable
            selected={selected.includes(item.listing.id)}
            onToggleSelect={toggleSelect}
          />
        ))}
      </div>
    </div>
  );
}
