"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ConnexionPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === "register") {
        if (!consent) {
          setError("Vous devez accepter la politique de confidentialité pour créer un compte.");
          setLoading(false);
          return;
        }
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, name: name || undefined, consent }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Inscription impossible.");
      }

      const result = await signIn("credentials", { email, password, redirect: false });
      if (result?.error) throw new Error("E-mail ou mot de passe incorrect.");
      router.push("/favoris");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-bold text-ink-900">{mode === "login" ? "Connexion" : "Créer un compte"}</h1>
      <p className="mt-1 text-sm text-ink-500">
        {mode === "login" ? "Accédez à vos favoris, alertes et comparaisons." : "Quelques secondes suffisent."}
      </p>

      <form onSubmit={submit} className="card mt-6 space-y-4 p-6">
        {mode === "register" && (
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink-700">Nom (optionnel)</span>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        )}
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink-700">E-mail</span>
          <input type="email" required className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink-700">Mot de passe</span>
          <input
            type="password"
            required
            minLength={8}
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {mode === "register" && (
          <label className="flex items-start gap-2 text-xs text-ink-500">
            <input type="checkbox" className="mt-0.5" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <span>
              J'accepte la{" "}
              <Link href="/confidentialite" className="underline">
                politique de confidentialité
              </Link>{" "}
              d'ImmoRadar.
            </span>
          </label>
        )}

        {error && <p className="text-sm text-bad">{error}</p>}

        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? "…" : mode === "login" ? "Se connecter" : "Créer mon compte"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-ink-500">
        {mode === "login" ? (
          <>
            Pas encore de compte ?{" "}
            <button className="font-medium text-brand-600" onClick={() => setMode("register")}>
              Créer un compte
            </button>
          </>
        ) : (
          <>
            Déjà un compte ?{" "}
            <button className="font-medium text-brand-600" onClick={() => setMode("login")}>
              Se connecter
            </button>
          </>
        )}
      </p>

      <div className="mt-6 rounded-lg bg-ink-50 p-3 text-xs text-ink-400">
        Comptes de démonstration : <strong>demo@immoradar.local</strong> / Demo1234! (utilisateur) ·{" "}
        <strong>admin@immoradar.local</strong> / ImmoRadar2026! (admin)
      </div>
    </div>
  );
}
