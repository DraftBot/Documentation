import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const SITE_URL = process.env.NEXTAUTH_URL ?? "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/recherche",
    "/comment-ca-marche",
    "/donnees",
    "/a-propos",
    "/confidentialite",
    "/comparateur",
    "/alertes",
    "/connexion",
  ].map((path) => ({ url: `${SITE_URL}${path}`, lastModified: new Date() }));

  const locations = await prisma.location.findMany({ select: { slug: true } });
  const seoRoutes = locations.flatMap((loc) => [
    { url: `${SITE_URL}/location-appartement-${loc.slug}`, lastModified: new Date() },
    { url: `${SITE_URL}/location-maison-${loc.slug}`, lastModified: new Date() },
  ]);

  return [...staticRoutes, ...seoRoutes];
}
