/* ============================================================
   Banana Collector — Logique du jeu
   ============================================================ */

const SAVE_KEY = "banana-collector-save-v1";

const UPGRADES = [
  {
    id: "panier",
    name: "🍌 Panier amélioré",
    desc: "+5% de chance d'obtenir une banane peu commune",
    targets: ["peu_commune"],
    bonusPerLevel: 5,
    basePrice: 150,
    priceMult: 1.65,
    maxLevel: 10,
  },
  {
    id: "detecteur",
    name: "🔍 Détecteur de bananes",
    desc: "+5% de chance d'obtenir une banane rare",
    targets: ["rare"],
    bonusPerLevel: 5,
    basePrice: 450,
    priceMult: 1.75,
    maxLevel: 10,
  },
  {
    id: "dore",
    name: "✨ Panier doré",
    desc: "+5% de chance d'obtenir une banane épique",
    targets: ["epique"],
    bonusPerLevel: 5,
    basePrice: 1200,
    priceMult: 1.85,
    maxLevel: 10,
  },
  {
    id: "cosmique",
    name: "🌌 Scanner cosmique",
    desc: "+2% de chance d'obtenir une banane légendaire ou mythique",
    targets: ["legendaire", "mythique"],
    bonusPerLevel: 2,
    basePrice: 3000,
    priceMult: 2.1,
    maxLevel: 10,
  },
];

function defaultState() {
  return {
    coins: 0,
    clicks: 0,
    totalRolls: 0,
    counts: {}, // bananaId -> count
    discovered: [], // bananaId[]
    pityRare: 0,
    pityLegendary: 0,
    upgrades: { panier: 0, detecteur: 0, dore: 0, cosmique: 0 },
    lastBananaId: null,
    mythicCount: 0,
    rarestId: null,
    ads: { watchedToday: 0, lastResetDate: null },
    wheel: { lastSpinDate: null },
    catchGame: { bestScore: 0, bestCoins: 0 },
  };
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    console.warn("Sauvegarde illisible, réinitialisation.", e);
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Impossible de sauvegarder la partie.", e);
  }
}

/* ---------------- Tirage pondéré avec système de pitié ---------------- */

function upgradeLevelBonus(rarityKey) {
  let bonus = 0;
  for (const up of UPGRADES) {
    if (up.targets.includes(rarityKey)) {
      const level = state.upgrades[up.id] || 0;
      bonus += level * up.bonusPerLevel;
    }
  }
  return bonus;
}

function computeWeights() {
  const weights = {};
  for (const key of RARITY_ORDER) {
    weights[key] = RARITIES[key].weight + upgradeLevelBonus(key);
  }

  // Pitié douce : après 10 tirages sans rare+, les chances remontent progressivement.
  if (state.pityRare >= 10) {
    const bonus = Math.min((state.pityRare - 9) * 4, 150);
    const targets = ["rare", "epique", "legendaire", "mythique", "secrete"];
    const base = targets.reduce((s, r) => s + weights[r], 0) || 1;
    targets.forEach((r) => {
      weights[r] += bonus * (weights[r] / base);
    });
  }
  // Pitié forte : au-delà de 25 tirages sans rare+, on garantit quasiment un rare+.
  if (state.pityRare >= 25) {
    weights.commune = 0;
    weights.peu_commune = 0;
  }

  // Pitié douce pour légendaire+ après 40 tirages sans en obtenir.
  if (state.pityLegendary >= 40) {
    const bonus = Math.min((state.pityLegendary - 39) * 3, 80);
    const targets = ["legendaire", "mythique", "secrete"];
    const base = targets.reduce((s, r) => s + weights[r], 0) || 1;
    targets.forEach((r) => {
      weights[r] += bonus * (weights[r] / base);
    });
  }
  // Pitié forte pour légendaire+ après 80 tirages.
  if (state.pityLegendary >= 80) {
    ["commune", "peu_commune", "rare", "epique"].forEach((r) => {
      weights[r] *= 0.05;
    });
  }

  return weights;
}

function pickRarity(weights) {
  const total = RARITY_ORDER.reduce((s, r) => s + Math.max(weights[r], 0), 0);
  let roll = Math.random() * total;
  for (const r of RARITY_ORDER) {
    const w = Math.max(weights[r], 0);
    if (roll < w) return r;
    roll -= w;
  }
  return "commune";
}

function pickBananaOfRarity(rarityKey) {
  const pool = BANANAS.filter((b) => b.rarity === rarityKey);
  return pool[Math.floor(Math.random() * pool.length)];
}

function rollBanana() {
  const weights = computeWeights();
  const rarity = pickRarity(weights);
  const banana = pickBananaOfRarity(rarity);

  // Mise à jour des compteurs de pitié
  if (isRareOrAbove(rarity)) {
    state.pityRare = 0;
  } else {
    state.pityRare += 1;
  }
  if (isLegendaryOrAbove(rarity)) {
    state.pityLegendary = 0;
  } else {
    state.pityLegendary += 1;
  }

  const isNew = !state.discovered.includes(banana.id);
  if (isNew) state.discovered.push(banana.id);
  state.counts[banana.id] = (state.counts[banana.id] || 0) + 1;

  state.coins += banana.value;
  state.clicks += 1;
  state.totalRolls += 1;
  state.lastBananaId = banana.id;
  if (rarity === "mythique") state.mythicCount += 1;

  if (state.rarestId == null || rarityIndex(rarity) > rarityIndex(BANANAS_BY_ID[state.rarestId].rarity)) {
    state.rarestId = banana.id;
  }

  saveState();
  return { banana, isNew, rarity };
}

/* ---------------- Boutique ---------------- */

function upgradePrice(upgrade) {
  const level = state.upgrades[upgrade.id] || 0;
  return Math.round(upgrade.basePrice * Math.pow(upgrade.priceMult, level));
}

function buyUpgrade(id) {
  const upgrade = UPGRADES.find((u) => u.id === id);
  if (!upgrade) return { ok: false, reason: "inconnu" };
  const level = state.upgrades[id] || 0;
  if (level >= upgrade.maxLevel) return { ok: false, reason: "max" };
  const price = upgradePrice(upgrade);
  if (state.coins < price) return { ok: false, reason: "pauvre" };
  state.coins -= price;
  state.upgrades[id] = level + 1;
  saveState();
  return { ok: true };
}

/* ---------------- Publicité récompensée ----------------
   Emplacement d'intégration pour une vraie régie publicitaire.
   Aujourd'hui : aucune requête réseau, juste une simulation de
   chargement + une récompense garantie, limitée par jour.

   Pour brancher une vraie pub plus tard :
   - Web  : Google AdSense (bannière classique dans l'onglet, ou un
            format "récompensé" via Ad Manager) — remplacer le corps
            de watchAd() par le chargement/l'affichage du format choisi
            et n'appeler grantAdReward() que dans son callback de succès.
   - Mobile (Capacitor) : plugin @capacitor-community/admob,
            RewardedAd.load() puis .show(), et grantAdReward() dans
            l'écouteur "onUserEarnedReward" de ce SDK.
   -------------------------------------------------------- */

const AD_REWARD = 300;
const MAX_ADS_PER_DAY = 5;

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function refreshAdQuota() {
  if (state.ads.lastResetDate !== todayKey()) {
    state.ads.watchedToday = 0;
    state.ads.lastResetDate = todayKey();
  }
}

function adsRemainingToday() {
  refreshAdQuota();
  return Math.max(MAX_ADS_PER_DAY - state.ads.watchedToday, 0);
}

function grantAdReward() {
  state.ads.watchedToday += 1;
  state.coins += AD_REWARD;
  saveState();
}

/* ---------------- Mini-jeu : Roue de la fortune quotidienne ---------------- */

// Un tirage gratuit par jour. Chaque prix correspond à un secteur de 60°
// sur la roue (6 secteurs), dans cet ordre, en partant du haut et dans le
// sens horaire — voir WHEEL_PRIZES[i].angle dans ui.js pour l'alignement visuel.
const WHEEL_PRIZES = [
  { coins: 50, weight: 30 },
  { coins: 100, weight: 25 },
  { coins: 150, weight: 20 },
  { coins: 300, weight: 15 },
  { coins: 500, weight: 7 },
  { coins: 1000, weight: 3 },
];

function canSpinWheelToday() {
  return state.wheel.lastSpinDate !== todayKey();
}

function pickWheelPrizeIndex() {
  const total = WHEEL_PRIZES.reduce((s, p) => s + p.weight, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < WHEEL_PRIZES.length; i++) {
    if (roll < WHEEL_PRIZES[i].weight) return i;
    roll -= WHEEL_PRIZES[i].weight;
  }
  return 0;
}

function spinWheel() {
  if (!canSpinWheelToday()) return { ok: false, reason: "deja_tourne" };
  const index = pickWheelPrizeIndex();
  const prize = WHEEL_PRIZES[index];
  state.wheel.lastSpinDate = todayKey();
  state.coins += prize.coins;
  saveState();
  return { ok: true, index, coins: prize.coins };
}

/* ---------------- Mini-jeu : Attrape les bananes ---------------- */

// 3 niveaux joués à la suite dans un même round, chacun plus rapide et plus
// difficile que le précédent (chute plus rapide, bananes plus fréquentes,
// plus de bananes pourries à éviter).
const CATCH_LEVEL_DURATION_MS = 10000;
const CATCH_LEVELS = [
  { spawnDelay: 780, fallMin: 2.6, fallMax: 3.4, rottenChance: 0.15, label: "C'est parti !" },
  { spawnDelay: 560, fallMin: 2.0, fallMax: 2.7, rottenChance: 0.22, label: "Ça accélère !" },
  { spawnDelay: 380, fallMin: 1.5, fallMax: 2.1, rottenChance: 0.3, label: "Vitesse maximale !" },
];
const CATCH_GOOD_COINS = 4;
const CATCH_ROTTEN_PENALTY = 6;

function awardCatchGameResult(goodCaught, rottenCaught) {
  const coinsEarned = Math.max(0, goodCaught * CATCH_GOOD_COINS - rottenCaught * CATCH_ROTTEN_PENALTY);
  state.coins += coinsEarned;
  if (goodCaught > state.catchGame.bestScore) state.catchGame.bestScore = goodCaught;
  if (coinsEarned > state.catchGame.bestCoins) state.catchGame.bestCoins = coinsEarned;
  saveState();
  return coinsEarned;
}

/* ---------------- Réinitialisation ---------------- */

function resetSave() {
  state = defaultState();
  saveState();
}
