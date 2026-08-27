import type { ConnectorInfo, SourceAdapter, SourceSearchParams } from "./types";
import type { NormalizedListing } from "@/types/listing";

/**
 * Fabrique un connecteur "en attente" pour une source qui n'a pas encore
 * d'accès légitime (API officielle / flux partenaire / données publiques
 * autorisées). Il ne recherche jamais rien et ne renvoie aucune donnée —
 * il documente uniquement ce qu'il faudrait pour l'activer, conformément à
 * la règle "ne jamais contourner les protections anti-bot d'une source".
 */
export function createPendingConnector(options: {
  sourceName: string;
  displayName: string;
  activationRequirements: string;
  envKey: string;
}): SourceAdapter {
  const { sourceName, displayName, activationRequirements, envKey } = options;

  return {
    sourceName,
    displayName,

    getInfo(): ConnectorInfo {
      const hasKey = Boolean(process.env[envKey]);
      return {
        sourceName,
        displayName,
        state: hasKey ? "ERROR" : "PENDING",
        activationRequirements,
        lastError: hasKey
          ? `${envKey} est défini mais aucune intégration API n'est encore implémentée pour ${displayName}.`
          : undefined,
      };
    },

    async search(_params: SourceSearchParams): Promise<NormalizedListing[]> {
      return [];
    },

    async getListing(_externalId: string): Promise<NormalizedListing | null> {
      return null;
    },
  };
}
