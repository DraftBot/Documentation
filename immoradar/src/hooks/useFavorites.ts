"use client";

import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export function useFavorites() {
  const { status } = useSession();
  const [ids, setIds] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (status !== "authenticated") {
      setIds(new Set());
      setLoaded(true);
      return;
    }
    fetch("/api/favorites")
      .then((r) => r.json())
      .then((data) => setIds(new Set<string>(data.listingIds ?? [])))
      .finally(() => setLoaded(true));
  }, [status]);

  const toggle = useCallback(
    async (listingId: string) => {
      if (status !== "authenticated") {
        window.location.href = "/connexion";
        return;
      }
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listingId }),
      });
      const data = await res.json();
      setIds((prev) => {
        const next = new Set(prev);
        if (data.favorited) next.add(listingId);
        else next.delete(listingId);
        return next;
      });
    },
    [status],
  );

  return { favoriteIds: ids, isFavorite: (id: string) => ids.has(id), toggle, loaded };
}
