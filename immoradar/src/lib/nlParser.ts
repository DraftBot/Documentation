import type { AmenityKey, FilterSet } from "@/types/listing";
import { AMENITY_KEYS } from "@/types/listing";

// ─────────────────────────────────────────────────────────────────────────
// Recherche en langage naturel (§34-35). Un analyseur basé sur des règles
// fonctionne sans aucune clé et couvre les cas les plus courants. Si
// ANTHROPIC_API_KEY est configurée, un modèle Claude vient structurer la
// demande avec une meilleure compréhension du langage naturel — mais reste
// entièrement côté serveur (jamais de clé exposée au frontend).
// ─────────────────────────────────────────────────────────────────────────

export interface NlParseResult {
  locationLabel?: string;
  radiusKm?: number;
  filters: Partial<FilterSet>;
  requiredAmenities: AmenityKey[];
  preferredAmenities: AmenityKey[];
  confidence: "high" | "medium" | "low";
  method: "rules" | "claude";
  notes: string[];
}

const AMENITY_SYNONYMS: Record<AmenityKey, string[]> = {
  balcony: ["balcon"],
  terrace: ["terrasse"],
  garden: ["jardin"],
  garage: ["garage"],
  parking: ["parking", "place de parking"],
  cellar: ["cave"],
  elevator: ["ascenseur"],
  bikeRoom: ["local vélo", "local a velo", "local vélos"],
  airConditioning: ["climatisation", "clim"],
  fireplace: ["cheminée", "cheminee"],
  equippedKitchen: ["cuisine équipée", "cuisine equipee"],
  furnished: ["meublé", "meuble"],
  unfurnished: ["non meublé", "vide", "non meuble"],
  petsAllowed: ["animaux", "animaux acceptés", "chien", "chat"],
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function ruleBasedParse(text: string): NlParseResult {
  const norm = normalize(text);
  const filters: Partial<FilterSet> = { amenities: [] };
  const notes: string[] = [];
  const required: AmenityKey[] = [];
  const preferred: AmenityKey[] = [];

  // Surface minimum : "65 m2", "65m²", "minimum 65 m2"
  const surfaceMatch = norm.match(/(\d{2,4})\s*m(?:2|²)/);
  if (surfaceMatch) filters.surfaceMin = parseInt(surfaceMatch[1]!, 10);

  // Prix maximum : "950 €", "max 950€", "budget 950"
  const priceMatch = norm.match(/(\d{2,6})\s*(?:€|euros?)/);
  if (priceMatch) filters.priceMax = parseInt(priceMatch[1]!, 10);

  // Rayon : "15 km", "à 15km"
  const radiusMatch = norm.match(/(\d{1,3})\s*km/);
  const radiusKm = radiusMatch ? parseInt(radiusMatch[1]!, 10) : undefined;

  // Type de transaction
  if (/\bachat\b|\bacheter\b|\bacquer/i.test(norm)) filters.transactionType = "BUY";
  else if (/\blocation\b|\blouer\b/i.test(norm)) filters.transactionType = "RENT";

  // Type de bien
  const propertyTypes: FilterSet["propertyTypes"] = [];
  if (/appartement/.test(norm)) propertyTypes.push("APARTMENT");
  if (/\bmaison\b/.test(norm)) propertyTypes.push("HOUSE");
  if (/\bstudio\b/.test(norm)) propertyTypes.push("STUDIO");
  if (/\bduplex\b/.test(norm)) propertyTypes.push("DUPLEX");
  if (/\bloft\b/.test(norm)) propertyTypes.push("LOFT");
  if (propertyTypes.length > 0) filters.propertyTypes = propertyTypes;

  // Équipements : détecte "X obligatoire" / "X indispensable" -> required,
  // sinon mention simple -> preferred.
  for (const key of AMENITY_KEYS) {
    const synonyms = AMENITY_SYNONYMS[key];
    for (const syn of synonyms) {
      const synNorm = normalize(syn);
      if (norm.includes(synNorm)) {
        const isRequired = new RegExp(
          `${synNorm}[^.]{0,25}(obligatoire|indispensable|impératif|essentiel)`,
        ).test(norm);
        if (isRequired) required.push(key);
        else preferred.push(key);
        break;
      }
    }
  }

  // Localisation : heuristique simple — "à <Ville>", "autour de <Ville>",
  // "proche de <Ville>". Reste volontairement prudent : en cas de doute,
  // l'utilisateur devra confirmer (voir confidence).
  const locationMatch = text.match(
    /(?:à|a|autour de|proche de|vers|sur)\s+([A-ZÀ-Ý][\wÀ-ÿ'\-]+(?:\s+[A-ZÀ-Ý][\wÀ-ÿ'\-]+){0,2})/,
  );
  const locationLabel = locationMatch?.[1]?.trim();

  const hasStructuredSignal =
    filters.surfaceMin != null || filters.priceMax != null || propertyTypes.length > 0;
  const confidence: NlParseResult["confidence"] = locationLabel && hasStructuredSignal ? "medium" : "low";

  if (!locationLabel) notes.push("Aucune localisation clairement identifiée : merci de la préciser.");
  if (!hasStructuredSignal) notes.push("Peu de critères précis détectés : le résultat sera large.");

  return {
    locationLabel,
    radiusKm,
    filters,
    requiredAmenities: required,
    preferredAmenities: preferred,
    confidence,
    method: "rules",
    notes,
  };
}

async function claudeParse(text: string): Promise<NlParseResult | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  const prompt = `Tu extrais des critères de recherche immobilière structurés à partir d'une phrase en \
français. Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, au format exact :
{
  "locationLabel": string | null,
  "radiusKm": number | null,
  "transactionType": "RENT" | "BUY" | null,
  "propertyTypes": string[],
  "priceMax": number | null,
  "priceMin": number | null,
  "surfaceMin": number | null,
  "surfaceMax": number | null,
  "roomsMin": number | null,
  "bedroomsMin": number | null,
  "requiredAmenities": string[],
  "preferredAmenities": string[],
  "confidence": "high" | "medium" | "low"
}
Les clés d'équipements possibles sont exactement : ${AMENITY_KEYS.join(", ")}.
Les types de bien possibles sont exactement : APARTMENT, HOUSE, STUDIO, DUPLEX, LOFT, OTHER.
Phrase de l'utilisateur : "${text}"`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 512,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const textBlock = data.content?.find((b: { type: string }) => b.type === "text");
    if (!textBlock?.text) return null;
    const parsed = JSON.parse(textBlock.text);

    return {
      locationLabel: parsed.locationLabel ?? undefined,
      radiusKm: parsed.radiusKm ?? undefined,
      filters: {
        transactionType: parsed.transactionType ?? undefined,
        propertyTypes: parsed.propertyTypes ?? [],
        priceMin: parsed.priceMin ?? undefined,
        priceMax: parsed.priceMax ?? undefined,
        surfaceMin: parsed.surfaceMin ?? undefined,
        surfaceMax: parsed.surfaceMax ?? undefined,
        roomsMin: parsed.roomsMin ?? undefined,
        bedroomsMin: parsed.bedroomsMin ?? undefined,
        amenities: [],
      },
      requiredAmenities: parsed.requiredAmenities ?? [],
      preferredAmenities: parsed.preferredAmenities ?? [],
      confidence: parsed.confidence ?? "medium",
      method: "claude",
      notes: [],
    };
  } catch {
    return null;
  }
}

export async function parseNaturalLanguageQuery(text: string): Promise<NlParseResult> {
  const claudeResult = await claudeParse(text);
  if (claudeResult) return claudeResult;
  return ruleBasedParse(text);
}
