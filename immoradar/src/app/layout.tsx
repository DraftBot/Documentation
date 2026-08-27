import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const SITE_URL = process.env.NEXTAUTH_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ImmoRadar — Trouvez le logement qui vous correspond vraiment",
    template: "%s · ImmoRadar",
  },
  description:
    "ImmoRadar compare les logements disponibles selon vos critères et analyse leur prix, leur environnement et leurs avantages.",
  openGraph: {
    title: "ImmoRadar — Moteur intelligent de recherche immobilière",
    description:
      "Centralisez, comparez et analysez les logements disponibles selon vos critères précis.",
    siteName: "ImmoRadar",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImmoRadar",
    description: "Le moteur de recherche immobilier qui analyse pour vous.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
