"use client";

import { useState } from "react";
import type { NormalizedListing } from "@/types/listing";

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  APARTMENT: "appartement",
  HOUSE: "maison",
  STUDIO: "studio",
  DUPLEX: "duplex",
  LOFT: "loft",
  OTHER: "logement",
};

function buildMessage(listing: NormalizedListing): string {
  const typeLabel = PROPERTY_TYPE_LABELS[listing.propertyType] ?? "logement";
  return [
    "Bonjour,",
    "",
    `Je suis intéressé(e) par votre ${typeLabel}${listing.rooms ? ` T${listing.rooms}` : ""} situé à ${listing.city}.`,
    "Le logement est-il toujours disponible ?",
    "Serait-il possible d'organiser une visite ?",
    "",
    "Cordialement.",
  ].join("\n");
}

export function ContactModule({ listing }: { listing: NormalizedListing }) {
  const [copied, setCopied] = useState(false);
  const message = buildMessage(listing);
  const contact = listing.contact;

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // presse-papiers indisponible : l'utilisateur peut toujours sélectionner le texte manuellement
    }
  }

  return (
    <div className="card p-5">
      <h2 className="font-semibold text-ink-900">📞 Contacter</h2>
      <p className="mt-1 text-sm text-ink-500">
        ImmoRadar n'envoie jamais de message automatiquement. Choisissez comment entrer en contact —
        chaque action ci-dessous nécessite votre confirmation explicite.
      </p>

      <div className="mt-4 space-y-3">
        {contact?.phone && (
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="btn-secondary w-full justify-start">
            ☎️ Appeler {contact.phone}
          </a>
        )}
        {contact?.contactFormUrl && (
          <a href={contact.contactFormUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-start">
            📝 Formulaire de contact officiel
          </a>
        )}
        <a href={listing.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-start">
          🔗 Voir l'annonce sur {listing.source}
        </a>

        <div className="rounded-xl border border-ink-100 bg-ink-50 p-3">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink-400">
            Message prérempli — à copier et envoyer vous-même
          </p>
          <textarea readOnly className="input h-32 resize-none bg-white text-sm" value={message} />
          <button type="button" onClick={copyMessage} className="btn-primary mt-2 w-full text-sm">
            {copied ? "✓ Copié" : "Copier le message"}
          </button>
        </div>

        {contact?.agencyName && <p className="text-xs text-ink-400">Annonceur : {contact.agencyName}</p>}
        {contact?.isPrivateOwner && <p className="text-xs text-ink-400">Annonce déposée par un particulier.</p>}
      </div>
    </div>
  );
}
