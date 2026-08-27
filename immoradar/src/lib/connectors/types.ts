import type { NormalizedListing } from "@/types/listing";

export interface SearchArea {
  latitude: number;
  longitude: number;
  radiusKm: number;
}

export interface SourceSearchParams {
  area: SearchArea;
  transactionType: "RENT" | "BUY";
}

export type ConnectorState = "ACTIVE" | "ERROR" | "DISABLED" | "PENDING";

export interface ConnectorInfo {
  sourceName: string;
  displayName: string;
  state: ConnectorState;
  /** Ce qu'il faut faire pour activer cette source si elle est PENDING. */
  activationRequirements?: string;
  lastError?: string;
}

/**
 * Contrat que doit respecter tout connecteur de source immobilière.
 *
 * Chaque connecteur est responsable de :
 *  - interroger la source (API officielle, flux partenaire, données
 *    publiques autorisées) — jamais en contournant une protection anti-bot ;
 *  - normaliser les résultats vers `NormalizedListing` (format pivot) ;
 *  - déclarer honnêtement son état via `getInfo()`.
 *
 * Un connecteur qui n'a pas encore d'accès légitime à sa source DOIT rester
 * à l'état PENDING et documenter dans `activationRequirements` ce qui
 * manque, plutôt que de tenter un scraping non autorisé.
 */
export interface SourceAdapter {
  readonly sourceName: string;
  readonly displayName: string;

  getInfo(): ConnectorInfo;

  /** Recherche les annonces compatibles avec la zone donnée. */
  search(params: SourceSearchParams): Promise<NormalizedListing[]>;

  /** Récupère le détail d'une annonce précise par son identifiant externe. */
  getListing(externalId: string): Promise<NormalizedListing | null>;
}
