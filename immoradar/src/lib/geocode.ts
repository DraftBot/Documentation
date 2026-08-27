// Géocodage via l'API Adresse (Base Adresse Nationale, data.gouv.fr) —
// service officiel du gouvernement français, gratuit, sans clé, spécialisé
// sur la France. Choisi à la place de Nominatim/OpenStreetMap car ce
// dernier bloque (403) les requêtes venant d'IP partagées d'hébergeurs
// cloud (Vercel, AWS Lambda...), ce qui le rend inutilisable en production
// depuis une fonction serverless. Pour un usage hors France ou à très fort
// trafic, remplacer par un fournisseur commercial (Geoapify, LocationIQ...)
// en gardant la même interface `geocode()`.

export interface GeocodeResult {
  label: string;
  latitude: number;
  longitude: number;
  city?: string;
  postalCode?: string;
  type: "city" | "postcode" | "address" | "neighbourhood" | "other";
}

const BASE_URL = process.env.BAN_BASE_URL ?? "https://api-adresse.data.gouv.fr";

export async function geocode(query: string, limit = 5): Promise<GeocodeResult[]> {
  if (!query || query.trim().length < 2) return [];
  const url = new URL(`${BASE_URL}/search/`);
  url.searchParams.set("q", query);
  url.searchParams.set("limit", String(limit));

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Échec du géocodage (${res.status})`);
  }
  const data = (await res.json()) as {
    features: Array<{
      geometry: { coordinates: [number, number] };
      properties: {
        label: string;
        city?: string;
        postcode?: string;
        type?: string;
      };
    }>;
  };

  return data.features.map((f) => ({
    label: f.properties.label,
    longitude: f.geometry.coordinates[0],
    latitude: f.geometry.coordinates[1],
    city: f.properties.city,
    postalCode: f.properties.postcode,
    type: mapType(f.properties.type),
  }));
}

function mapType(type?: string): GeocodeResult["type"] {
  switch (type) {
    case "municipality":
      return "city";
    case "locality":
      return "neighbourhood";
    case "housenumber":
      return "address";
    case "street":
      return "other";
    default:
      return "other";
  }
}
