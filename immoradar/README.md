# ImmoRadar

Moteur de recherche immobilier intelligent : centralise, dédoublonne, note et
analyse les logements disponibles selon des critères précis — un assistant
immobilier personnel plutôt qu'un simple agrégateur d'annonces.

> 🧪 **Version de démonstration.** Les annonces affichées proviennent d'un
> jeu de données fictif (voir `/donnees` dans l'application). Aucune clé API
> de source immobilière n'est requise pour faire tourner le produit dans son
> intégralité — voir [Sources immobilières](#sources-immobilières) pour
> connecter de vraies sources.

## Sommaire

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Installation](#installation)
- [Variables d'environnement](#variables-denvironnement)
- [Base de données](#base-de-données)
- [Lancement local](#lancement-local)
- [Comptes de démonstration](#comptes-de-démonstration)
- [Sources immobilières](#sources-immobilières)
- [Ajouter une nouvelle source immobilière](#ajouter-une-nouvelle-source-immobilière)
- [Déploiement](#déploiement)
- [Limitations actuelles](#limitations-actuelles)
- [Commandes](#commandes)

## Présentation

L'utilisateur indique où il veut vivre, dans quel rayon, et définit son
logement idéal (type, budget, surface, équipements — chacun pouvant être
marqué **obligatoire** ou **souhaité**). ImmoRadar recherche les logements
compatibles, les regroupe lorsqu'ils sont dupliqués sur plusieurs sources,
leur attribue un **score sur 100** personnalisable, analyse leur **prix**
face au marché local et leur **quartier** (commerces, écoles, santé,
transports, loisirs), puis expose des **avantages/inconvénients**, un
**comparateur**, des **favoris** et des **alertes**.

Principe directeur du projet : **ne jamais inventer une donnée**. Quand une
estimation ne peut pas être établie de façon fiable (peu de comparables, API
externe indisponible…), l'application l'affiche explicitement plutôt que de
fabriquer un chiffre.

## Fonctionnalités

- 🔎 Recherche géolocalisée (géocodage réel, rayon personnalisable, carte)
- 🎛️ Filtres complets avec distinction **obligatoire / préférence**
- ⭐ Score ImmoRadar 0-100, décomposé, avec poids ajustables par l'utilisateur
- 🔗 Détection de doublons entre sources (algorithme de similarité)
- 💰 Analyse de prix (comparables réels, jamais d'estimation inventée)
- 📍 Analyse de quartier en temps réel (OpenStreetMap / Overpass API)
- 👍 Avantages / inconvénients générés à partir de signaux vérifiables
- 🚗 Temps de trajet multi-destinations (OpenRouteService, optionnel)
- ❤️ Favoris, ⚖️ comparateur, 🔔 alertes avec recherches sauvegardées
- 💬 Recherche en langage naturel (règles + IA optionnelle via Claude)
- 🔥 Filtre « Bonnes affaires » algorithmique
- 🛠️ Panneau d'administration (état des connecteurs, statistiques)
- 🔐 Authentification, RGPD (export/suppression de compte), cookies essentiels uniquement
- 🧩 Architecture de connecteurs prête à recevoir de vraies sources immobilières
- 🔍 SEO (sitemap, robots.txt, pages de localisation, Open Graph)

## Technologies

| Domaine | Choix | Pourquoi |
| --- | --- | --- |
| Frontend/Backend | Next.js 14 (App Router) + TypeScript | SSR/SSG, API routes colocalisées, écosystème mature |
| UI | Tailwind CSS | Développement rapide, cohérence visuelle |
| Base de données | PostgreSQL | Requêtes géographiques simples, fiabilité, standard |
| ORM | Prisma | Migrations versionnées, typage bout en bout |
| Authentification | NextAuth (credentials + bcrypt) | Simple, auto-hébergeable, pas de dépendance tierce obligatoire |
| Carte | Leaflet + OpenStreetMap | Gratuit, sans clé API, personnalisable |
| Géocodage | Nominatim (OSM) | Gratuit, sans clé, suffisant pour démarrer |
| Points d'intérêt | Overpass API (OSM) | Données réelles de quartier, gratuites |
| Validation | Zod | Validation stricte des entrées API |

## Architecture

```
immoradar/
├─ prisma/
│  ├─ schema.prisma        # Users, Listings, Sources, Favorites, Alerts...
│  └─ seed.ts               # Données de démonstration + connecteurs + comptes
├─ src/
│  ├─ app/                  # Pages (App Router) + routes API
│  │  ├─ recherche/         # Résultats : filtres + liste + carte
│  │  ├─ annonce/[id]/      # Détail d'un logement
│  │  ├─ quartier/[id]/     # Analyse de quartier complète
│  │  ├─ favoris/ comparateur/ alertes/ admin/ ...
│  │  └─ api/                # search, geocode, nl-search, favorites, alerts...
│  ├─ components/            # UI (search, listing, map, alerts, favorites...)
│  ├─ lib/
│  │  ├─ connectors/         # Architecture d'adaptateurs de sources (voir plus bas)
│  │  ├─ scoring.ts          # Moteur de score 0-100
│  │  ├─ dedup.ts            # Détection de doublons
│  │  ├─ priceAnalysis.ts    # Analyse de prix (jamais inventée)
│  │  ├─ neighborhood.ts     # Analyse de quartier (Overpass API)
│  │  ├─ nlParser.ts         # Recherche en langage naturel
│  │  ├─ travelTime.ts       # Temps de trajet (OpenRouteService)
│  │  ├─ alertEvaluation.ts  # Évaluation des alertes (tâche planifiée)
│  │  └─ ingest.ts           # Pipeline d'ingestion connecteur → base
│  └─ types/listing.ts       # Format de données immobilier standardisé (pivot)
```

### Le format pivot (`NormalizedListing`)

Chaque connecteur — qu'il s'agisse des données de démonstration ou d'une
future source réelle — doit produire des objets au format standardisé défini
dans `src/types/listing.ts` (`id`, `source`, `price`, `surface`, `amenities`,
`energyRating`, `contact`, `rawSourceData`, etc.). Le reste de l'application
(scoring, dédoublonnage, affichage) ne connaît que ce format pivot, jamais le
format natif d'une source particulière.

### Le pipeline

```
SourceAdapter.search() → NormalizedListing[] → ingestNormalizedListings()
  → moteur de dédoublonnage (dedup.ts) → base de données (Listing + ListingSource)
```

La recherche utilisateur (`/api/search`) interroge ensuite directement la
base de données (rapide, indexée), jamais les sources externes en direct —
conformément à la règle « pas de recherche externe complète à chaque
affichage de page ».

## Installation

Prérequis : Node.js ≥ 18.18, PostgreSQL ≥ 14.

```bash
cd immoradar
npm install
cp .env.example .env   # puis éditez .env (voir section suivante)
```

## Variables d'environnement

Voir [`.env.example`](./.env.example) pour la liste complète et commentée.
Résumé :

| Variable | Obligatoire | Sans elle |
| --- | --- | --- |
| `DATABASE_URL` | ✅ | l'application ne démarre pas |
| `NEXTAUTH_SECRET`, `NEXTAUTH_URL` | ✅ | authentification impossible |
| `NOMINATIM_BASE_URL`, `NOMINATIM_USER_AGENT` | déjà fonctionnel par défaut | — |
| `OVERPASS_BASE_URL` | déjà fonctionnel par défaut | — |
| `ANTHROPIC_API_KEY` | optionnel | recherche en langage naturel en mode « règles » (fonctionnel, moins précis) |
| `ORS_API_KEY` | optionnel | module « Temps de trajet » affiche « non configuré » |
| `RESEND_API_KEY`, `ALERTS_FROM_EMAIL` | optionnel | alertes créées et évaluées mais e-mails non envoyés |
| `CRON_SECRET` | optionnel | route `/api/cron/alerts` désactivée |
| `LEBONCOIN_API_KEY`, `SELOGER_API_KEY`, `BIENICI_API_KEY`, `PAP_API_KEY`, `LOGICIMMO_API_KEY` | optionnel | connecteur correspondant reste à l'état `PENDING` |
| `DVF_DATASET_URL` | optionnel | analyse de prix utilise l'agrégation des annonces déjà connues |

**Aucune clé API n'est jamais exposée au frontend** : tous les appels aux
services externes sont effectués côté serveur (routes API / composants
serveur).

## Base de données

```bash
npm run db:generate   # génère le client Prisma
npm run db:migrate     # applique les migrations (dev)
npm run db:seed        # charge les données de démonstration
```

Le seed :

1. crée les 14 équipements standardisés ;
2. enregistre l'état de chaque connecteur (`demo` actif, les autres `PENDING`) ;
3. exécute le connecteur `demo` (24 logements fictifs, dont des doublons
   volontaires entre sources) et les ingère via le pipeline standard
   (dédoublonnage inclus) ;
4. calcule des statistiques de prix par ville/type à partir de ces données ;
5. crée deux comptes de démonstration (voir plus bas).

## Lancement local

```bash
npm run dev
```

Application disponible sur http://localhost:3000.

## Comptes de démonstration

| Rôle | E-mail | Mot de passe |
| --- | --- | --- |
| Administrateur | `admin@immoradar.local` | `ImmoRadar2026!` |
| Utilisateur | `demo@immoradar.local` | `Demo1234!` |

⚠️ À supprimer ou changer avant tout déploiement public.

## Sources immobilières

Aucune source réelle (Leboncoin, SeLoger, Bien'ici, PAP, Logic-Immo) n'est
activée par défaut : ImmoRadar ne contourne jamais les protections
techniques d'un site (anti-bot, CAPTCHA, conditions d'utilisation). Chaque
connecteur reste à l'état `PENDING` tant que l'accès légitime correspondant
(API officielle, flux partenaire, données publiques autorisées) n'est pas
fourni. Le détail de ce qui manque pour chaque source est visible dans
`/admin` et `/donnees`, et documenté dans
`src/lib/connectors/registry.ts`.

## Ajouter une nouvelle source immobilière

1. Créez `src/lib/connectors/monSourceConnector.ts` qui implémente
   l'interface `SourceAdapter` (`src/lib/connectors/types.ts`) :
   - `search()` interroge l'API/flux officiel et retourne des
     `NormalizedListing[]` ;
   - `getListing()` récupère le détail d'une annonce précise ;
   - `getInfo()` retourne honnêtement l'état du connecteur.
2. Ajoutez la clé d'API nécessaire dans `.env.example` (jamais en dur).
3. Enregistrez le connecteur dans `src/lib/connectors/registry.ts`.
4. Le pipeline d'ingestion (`src/lib/ingest.ts`) et le moteur de
   dédoublonnage s'appliquent automatiquement — aucune autre modification
   n'est nécessaire dans le reste de l'application.
5. Prévoyez un déclenchement périodique (tâche planifiée) de
   `ingestNormalizedListings(await connector.search(...))`, jamais un appel
   synchrone à chaque recherche utilisateur.

## Déploiement

Le projet est un Next.js standard, déployable sur toute plateforme le
supportant (Vercel recommandé) avec une base PostgreSQL managée (Vercel
Postgres, Neon, Supabase, Railway, RDS...).

```bash
npm run build
npm run db:deploy   # applique les migrations en production (prisma migrate deploy)
npm start
```

Pour les alertes par e-mail, planifiez un appel HTTP périodique (Vercel
Cron, GitHub Actions cron...) vers `POST /api/cron/alerts` avec l'en-tête
`x-cron-secret: <CRON_SECRET>`.

## Limitations actuelles

- Toutes les annonces affichées par défaut sont des données de
  démonstration fictives.
- Aucune source immobilière réelle n'est connectée (voir ci-dessus) —
  l'architecture est prête, l'activation nécessite des accès contractuels
  que ce projet ne peut pas obtenir de façon autonome.
- Le géocodage (Nominatim) et l'analyse de quartier (Overpass) utilisent
  des instances publiques gratuites, soumises à une politique d'usage
  raisonnable et parfois à des indisponibilités temporaires (l'application
  le signale explicitement plutôt que d'afficher une donnée fausse).
- Le module « Temps de trajet » nécessite une clé OpenRouteService pour
  fonctionner ; sans clé il reste visible mais inactif.
- Les alertes ne sont réellement envoyées par e-mail que si `RESEND_API_KEY`
  est configurée ; sinon elles sont évaluées mais la notification est
  journalisée comme non envoyée.
- Le rate limiting est en mémoire process (suffisant en développement/mono-
  instance) ; un déploiement multi-instance nécessite un store partagé
  (Redis).
- Le seuil de détection de doublons est volontairement prudent : deux
  annonces très proches mais avec un écart de prix/surface significatif
  peuvent ne pas être fusionnées automatiquement.

## Commandes

```bash
# 1. Installer le projet
npm install

# 2. Lancer le projet en développement
npm run dev

# 3. Initialiser la base de données (génération du client + migrations)
npm run db:generate
npm run db:migrate

# 4. Charger les données de démonstration
npm run db:seed

# 5. Construire le projet pour la production
npm run build

# 6. Déployer (après build)
npm run db:deploy
npm start
```
