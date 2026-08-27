// Géocodage via Nominatim (OpenStreetMap) — gratuit, sans clé API, mais
// soumis à une politique d'usage raisonnable (voir .env.example). Pour un
// usage à fort trafic, remplacer par une instance self-hosted ou un
// fournisseur commercial (Geoapify, LocationIQ...) en gardant la même
// interface `geocode()` / `reverseGeocode()`.

export interface GeocodeResult {
  label: string;
  latitude: number;
  longitude: number;
  city?: string;
  postalCode?: string;
  type: "city" | "postcode" | "address" | "neighbourhood" | "other";
}

const BASE_URL = process.env.NOMINATIM_BASE_URL ?? "https://nominatim.openstreetmap.org";
const USER_AGENT = process.env.NOMINATIM_USER_AGENT ?? "ImmoRadar/0.1 (dev)";

export async function geocode(query: string, limit = 5): Promise<GeocodeResult[]> {
  if (!query || query.trim().length < 2) return [];
  const url = new URL(`${BASE_URL}/search`);
  url.searchParams.set("q", query);
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("addressdetails", "1");
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("countrycodes", "fr");

  const res = await fetch(url.toString(), {
    headers: { "User-Agent": USER_AGENT, "Accept-Language": "fr" },
    // Nominatim usage policy: pas de cache agressif requis côté client,
    // mais on évite les appels redondants avec un court cache Next.js.
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Échec du géocodage (${res.status})`);
  }
  const data = (await res.json()) as Array<{
    display_name: string;
    lat: string;
    lon: string;
    addresstype?: string;
    address?: { city?: string; town?: string; village?: string; postcode?: string };
  }>;

  return data.map((d) => ({
    label: d.display_name,
    latitude: parseFloat(d.lat),
    longitude: parseFloat(d.lon),
    city: d.address?.city ?? d.address?.town ?? d.address?.village,
    postalCode: d.address?.postcode,
    type: mapType(d.addresstype),
  }));
}

function mapType(addresstype?: string): GeocodeResult["type"] {
  switch (addresstype) {
    case "city":
    case "town":
    case "village":
      return "city";
    case "postcode":
      return "postcode";
    case "neighbourhood":
    case "suburb":
      return "neighbourhood";
    case "house":
    case "building":
      return "address";
    default:
      return "other";
  }
}
