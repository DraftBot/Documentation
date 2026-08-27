import type { SourceAdapter } from "./types";
import { createDemoConnector } from "./demoConnector";
import { createPendingConnector } from "./pendingConnector";

// Registre central des connecteurs. Pour ajouter une nouvelle source :
// voir README.md § "Ajouter une nouvelle source immobilière".
export function getConnectors(): SourceAdapter[] {
  return [
    createDemoConnector(),
    createPendingConnector({
      sourceName: "leboncoin",
      displayName: "Leboncoin",
      envKey: "LEBONCOIN_API_KEY",
      activationRequirements:
        "Leboncoin ne propose pas d'API publique de recherche d'annonces immobilières. " +
        "Activation possible uniquement via un accord de partenariat data officiel avec Leboncoin/Adevinta. " +
        "Sans cet accord, aucune collecte automatisée n'est mise en place (le contournement des protections du site est exclu).",
    }),
    createPendingConnector({
      sourceName: "seloger",
      displayName: "SeLoger",
      envKey: "SELOGER_API_KEY",
      activationRequirements:
        "SeLoger (groupe Avendra/Traderev) propose des API partenaires pour les professionnels de l'immobilier. " +
        "Nécessite un contrat diffuseur/partenaire SeLoger et une clé API associée (SELOGER_API_KEY).",
    }),
    createPendingConnector({
      sourceName: "bienici",
      displayName: "Bien'ici",
      envKey: "BIENICI_API_KEY",
      activationRequirements:
        "Bien'ici propose des widgets et une API partenaire pour les agences/portails. " +
        "Nécessite une clé partenaire officielle (BIENICI_API_KEY) obtenue via leur programme diffuseur.",
    }),
    createPendingConnector({
      sourceName: "pap",
      displayName: "PAP (De Particulier à Particulier)",
      envKey: "PAP_API_KEY",
      activationRequirements:
        "PAP ne propose pas d'API publique. Activation possible via un partenariat data officiel " +
        "(PAP_API_KEY) ou un flux XML fourni contractuellement.",
    }),
    createPendingConnector({
      sourceName: "logicimmo",
      displayName: "Logic-Immo",
      envKey: "LOGICIMMO_API_KEY",
      activationRequirements:
        "Logic-Immo (groupe SeLoger) nécessite un accord diffuseur similaire à SeLoger " +
        "(LOGICIMMO_API_KEY).",
    }),
  ];
}

export function getConnector(sourceName: string): SourceAdapter | undefined {
  return getConnectors().find((c) => c.sourceName === sourceName);
}
