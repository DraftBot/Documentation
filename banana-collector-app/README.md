# Banana Collector — app mobile (Capacitor)

Ce dossier enveloppe le jeu web (`../banana-collector`) dans une vraie app
Android/iOS grâce à [Capacitor](https://capacitorjs.com/). Le code du jeu
n'est pas dupliqué : Capacitor embarque directement les fichiers de
`../banana-collector` dans l'app.

Impossible de terminer cette étape depuis cet environnement (pas de Xcode,
pas forcément de SDK Android) — les commandes ci-dessous sont à lancer
**sur ta machine**.

## 0. Avant de commencer

Change `appId` dans `capacitor.config.json` — `com.bananacollector.app` est
un identifiant provisoire. Il doit être **unique** et sera l'identifiant de
bundle enregistré auprès d'Apple/Google (impossible à changer facilement
après publication). Choisis quelque chose lié à un domaine que tu possèdes,
par ex. `com.tonpseudo.bananacollector`.

## 1. Installer les dépendances

```bash
cd banana-collector-app
npm install
```

## 2. Ajouter les plateformes

Android nécessite [Android Studio](https://developer.android.com/studio)
installé (avec le SDK). iOS nécessite un **Mac** avec
[Xcode](https://developer.apple.com/xcode/).

```bash
npx cap add android   # nécessite Android Studio / SDK
npx cap add ios        # nécessite macOS + Xcode
```

Cela crée les dossiers `android/` et `ios/` (projets natifs générés,
à ne pas éditer à la main sauf besoin spécifique).

## 3. Synchroniser le code web dans les apps natives

À refaire à chaque fois que tu modifies `../banana-collector` :

```bash
npx cap sync
```

## 4. Ouvrir et builder

```bash
npx cap open android   # ouvre Android Studio
npx cap open ios       # ouvre Xcode
```

Depuis Android Studio / Xcode : lance l'app sur un émulateur/appareil pour
tester, puis utilise leurs outils de build/signature pour générer un
`.aab` (Android) ou archiver l'app (iOS).

## 5. Comptes développeur (obligatoires pour publier)

- **Apple Developer Program** : 99 $/an — https://developer.apple.com/programme/
- **Google Play Console** : 25 $ (paiement unique) — https://play.google.com/console/

Chaque store demande en plus, au minimum : icônes/captures d'écran, une
fiche descriptive, et une **politique de confidentialité** (obligatoire dès
qu'il y a des pubs ou de la collecte de données — prévois une page dédiée).

## 6. Brancher les vraies pubs sur mobile

L'onglet "📺 Pub" du jeu simule déjà la récompense (voir
`../banana-collector/app.js`, fonction `grantAdReward`). Pour de vraies
pubs qui rapportent de l'argent sur mobile :

1. Crée un compte [Google AdMob](https://admob.google.com/) et une app
   AdMob (tu obtiens un App ID + un Ad Unit ID).
2. Installe le plugin communautaire :
   ```bash
   npm install @capacitor-community/admob
   npx cap sync
   ```
3. Dans `../banana-collector/app.js`, remplace le corps de la fonction
   `watchAd`/le `setTimeout` de simulation dans `ui.js` par un appel
   `AdMob.prepareRewardVideoAd()` puis `.showRewardVideoAd()`, et
   n'appelle `grantAdReward()` que dans l'écouteur `rewardVideoAdReward`
   du SDK (sinon la récompense n'est plus liée au visionnage réel).

## 7. Icône et écran de démarrage

Capacitor fournit `@capacitor/assets` pour générer icônes et splash
screens à partir d'une image source :

```bash
npm install @capacitor/assets --save-dev
npx capacitor-assets generate
```
