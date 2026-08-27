import Link from "next/link";
import { HeroSearchForm } from "@/components/search/HeroSearchForm";

const FEATURES = [
  { icon: "🎯", title: "Critères précis", text: "Distinguez ce qui est obligatoire de ce qui est simplement souhaité." },
  { icon: "🗺️", title: "Carte interactive", text: "Visualisez chaque logement, le rayon de recherche et le quartier." },
  { icon: "⭐", title: "Score ImmoRadar", text: "Chaque annonce reçoit une note sur 100, décomposée et personnalisable." },
  { icon: "💰", title: "Analyse du prix", text: "Comparez le prix demandé à celui du secteur, sans jamais l'inventer." },
  { icon: "📍", title: "Analyse du quartier", text: "Commerces, écoles, santé, transports : tout ce qu'il y a autour." },
  { icon: "🔗", title: "Anti-doublons", text: "Une même annonce postée sur plusieurs sites n'apparaît qu'une fois." },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge bg-brand-100 text-brand-700">Nouveau · Moteur de recherche intelligent</span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Trouvez le logement qui vous correspond <span className="text-brand-600">vraiment</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-500">
            ImmoRadar compare les logements disponibles selon vos critères et analyse leur prix, leur
            environnement et leurs avantages.
          </p>
        </div>

        <div className="mt-10">
          <HeroSearchForm />
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-ink-400">
          Version de démonstration : les annonces affichées sont des données fictives. Voir{" "}
          <Link href="/donnees" className="underline">
            Nos données
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card p-6">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-3 font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-900 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Un assistant immobilier personnel</h2>
          <p className="mt-3 text-ink-300">
            Définissez vos critères, ImmoRadar recherche, regroupe, analyse et compare — vous décidez.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/recherche" className="btn-primary">
              🔎 Commencer une recherche
            </Link>
            <Link href="/comment-ca-marche" className="btn-secondary !bg-transparent !text-white hover:!bg-white/10">
              Comment ça marche
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
