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
  {
    id: "auto",
    name: "🔄 Récolteur automatique",
    desc: "Récolte automatiquement une banane à intervalles réguliers, sans avoir à cliquer",
    targets: [],
    basePrice: 2000,
    priceMult: 2.2,
    maxLevel: 4,
    intervalsMs: [60000, 45000, 30000, 20000],
  },
  {
    id: "multiplicateur",
    name: "💰 Multiplicateur de pièces",
    desc: "+10% de pièces gagnées, toutes sources confondues (récolte, pub, roue, mini-jeux, combat)",
    targets: [],
    basePrice: 2500,
    priceMult: 2,
    maxLevel: 5,
  },
  {
    id: "pubplus",
    name: "📺 Pub boostée",
    desc: "+1 pub disponible par jour",
    targets: [],
    basePrice: 1800,
    priceMult: 1.9,
    maxLevel: 3,
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
    upgrades: { panier: 0, detecteur: 0, dore: 0, cosmique: 0, auto: 0, multiplicateur: 0, pubplus: 0 },
    lastBananaId: null,
    mythicCount: 0,
    rarestId: null,
    ads: { watchedToday: 0, lastResetDate: null },
    wheel: { lastSpinDate: null },
    catchGame: { bestScore: 0, bestCoins: 0 },
    streak: { count: 0, lastLoginDate: null },
    achievements: { unlocked: [] },
    pve: { stage: 0, wins: 0, losses: 0 },
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

// Tous les gains de pièces (récolte, pub, roue, mini-jeux, combat, succès,
// prime de connexion) passent par ici pour que le multiplicateur de boutique
// s'applique partout de façon cohérente.
function coinMultiplier() {
  return 1 + (state.upgrades.multiplicateur || 0) * 0.1;
}

function grantCoins(amount) {
  const final = Math.round(amount * coinMultiplier());
  state.coins += final;
  return final;
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

  const coinsEarned = grantCoins(banana.value);
  state.clicks += 1;
  state.totalRolls += 1;
  state.lastBananaId = banana.id;
  if (rarity === "mythique") state.mythicCount += 1;

  if (state.rarestId == null || rarityIndex(rarity) > rarityIndex(BANANAS_BY_ID[state.rarestId].rarity)) {
    state.rarestId = banana.id;
  }

  saveState();
  return { banana, isNew, rarity, coinsEarned };
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
const MAX_ADS_PER_DAY_BASE = 5;

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function maxAdsPerDay() {
  return MAX_ADS_PER_DAY_BASE + (state.upgrades.pubplus || 0);
}

function refreshAdQuota() {
  if (state.ads.lastResetDate !== todayKey()) {
    state.ads.watchedToday = 0;
    state.ads.lastResetDate = todayKey();
  }
}

function adsRemainingToday() {
  refreshAdQuota();
  return Math.max(maxAdsPerDay() - state.ads.watchedToday, 0);
}

function grantAdReward() {
  state.ads.watchedToday += 1;
  const coinsEarned = grantCoins(AD_REWARD);
  saveState();
  return coinsEarned;
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
  const coinsEarned = grantCoins(prize.coins);
  saveState();
  return { ok: true, index, coins: coinsEarned };
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
  const rawCoins = Math.max(0, goodCaught * CATCH_GOOD_COINS - rottenCaught * CATCH_ROTTEN_PENALTY);
  const coinsEarned = grantCoins(rawCoins);
  if (goodCaught > state.catchGame.bestScore) state.catchGame.bestScore = goodCaught;
  if (coinsEarned > state.catchGame.bestCoins) state.catchGame.bestCoins = coinsEarned;
  saveState();
  return coinsEarned;
}

/* ---------------- Prime de connexion quotidienne ---------------- */

// Appelée une fois au démarrage. Retourne les infos de la prime si un
// nouveau jour a été détecté (pour afficher un toast), sinon null.
function processDailyStreak() {
  const today = todayKey();
  if (state.streak.lastLoginDate === today) return null;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak.count = state.streak.lastLoginDate === yesterday ? state.streak.count + 1 : 1;
  state.streak.lastLoginDate = today;

  const bonus = Math.min(20 + (state.streak.count - 1) * 15, 150);
  const coinsEarned = grantCoins(bonus);
  saveState();
  return { streak: state.streak.count, coinsEarned };
}

/* ---------------- Succès ---------------- */

const ACHIEVEMENTS = [
  { id: "first_harvest", icon: "🍌", name: "Première récolte", desc: "Récolte ta toute première banane", reward: 30, check: (s) => s.totalRolls >= 1 },
  { id: "rolls_100", icon: "🧺", name: "Cueilleur assidu", desc: "Récolte 100 bananes au total", reward: 100, check: (s) => s.totalRolls >= 100 },
  { id: "rolls_500", icon: "🚜", name: "Récolte industrielle", desc: "Récolte 500 bananes au total", reward: 300, check: (s) => s.totalRolls >= 500 },
  { id: "rolls_1000", icon: "🏭", name: "Empire de la banane", desc: "Récolte 1000 bananes au total", reward: 800, check: (s) => s.totalRolls >= 1000 },
  { id: "set_commune", icon: "🟢", name: "Collection commune complète", desc: "Découvre les 12 bananes communes", reward: 80, check: (s) => NORMAL_BANANAS.filter((b) => b.rarity === "commune").every((b) => s.discovered.includes(b.id)) },
  { id: "set_peu_commune", icon: "🔵", name: "Collection peu commune complète", desc: "Découvre les 10 bananes peu communes", reward: 120, check: (s) => NORMAL_BANANAS.filter((b) => b.rarity === "peu_commune").every((b) => s.discovered.includes(b.id)) },
  { id: "set_rare", icon: "🟣", name: "Collection rare complète", desc: "Découvre les 10 bananes rares", reward: 250, check: (s) => NORMAL_BANANAS.filter((b) => b.rarity === "rare").every((b) => s.discovered.includes(b.id)) },
  { id: "set_epique", icon: "🟠", name: "Collection épique complète", desc: "Découvre les 8 bananes épiques", reward: 500, check: (s) => NORMAL_BANANAS.filter((b) => b.rarity === "epique").every((b) => s.discovered.includes(b.id)) },
  { id: "set_legendaire", icon: "🟡", name: "Collection légendaire complète", desc: "Découvre les 6 bananes légendaires", reward: 900, check: (s) => NORMAL_BANANAS.filter((b) => b.rarity === "legendaire").every((b) => s.discovered.includes(b.id)) },
  { id: "set_mythique", icon: "🌈", name: "Collection mythique complète", desc: "Découvre les 4 bananes mythiques", reward: 2000, check: (s) => NORMAL_BANANAS.filter((b) => b.rarity === "mythique").every((b) => s.discovered.includes(b.id)) },
  { id: "first_secret", icon: "🕵️", name: "Secret dévoilé", desc: "Découvre ta première banane secrète", reward: 1500, check: (s) => SECRET_BANANAS.some((b) => s.discovered.includes(b.id)) },
  { id: "set_secret", icon: "👑", name: "Maître des secrets", desc: "Découvre les 10 bananes secrètes", reward: 5000, check: (s) => SECRET_BANANAS.every((b) => s.discovered.includes(b.id)) },
  { id: "catch_30", icon: "🎯", name: "Bon réflexe", desc: "Attrape au moins 30 bananes en un round", reward: 150, check: (s) => s.catchGame.bestScore >= 30 },
  { id: "catch_60", icon: "⚡", name: "Réflexes de jungle", desc: "Attrape au moins 60 bananes en un round", reward: 400, check: (s) => s.catchGame.bestScore >= 60 },
  { id: "streak_7", icon: "🔥", name: "Semaine parfaite", desc: "Connecte-toi 7 jours d'affilée", reward: 500, check: (s) => s.streak.count >= 7 },
  { id: "shop_maxed", icon: "🛒", name: "Boutique dévalisée", desc: "Monte une amélioration à son niveau maximum", reward: 300, check: (s) => UPGRADES.some((u) => (s.upgrades[u.id] || 0) >= u.maxLevel) },
  { id: "pve_first_win", icon: "⚔️", name: "Premier combat", desc: "Remporte ta première victoire contre un ananas", reward: 100, check: (s) => s.pve.wins >= 1 },
  { id: "pve_king", icon: "🏆", name: "Vainqueur du Roi Ananas", desc: "Bats le Roi Ananas, le boss final de l'arène", reward: 1500, check: (s) => s.pve.stage >= PINEAPPLE_ENEMIES.length - 1 },
];

// Évalue tous les succès, débloque les nouveaux, crédite leur récompense.
// Retourne la liste des succès nouvellement débloqués (pour affichage).
function checkAchievements() {
  const unlockedNow = [];
  for (const ach of ACHIEVEMENTS) {
    if (state.achievements.unlocked.includes(ach.id)) continue;
    if (ach.check(state)) {
      state.achievements.unlocked.push(ach.id);
      grantCoins(ach.reward);
      unlockedNow.push(ach);
    }
  }
  if (unlockedNow.length > 0) saveState();
  return unlockedNow;
}

/* ---------------- Combat : l'Arène contre les Ananas ---------------- */

// Statistiques d'attaque/défense dérivées de la rareté (+ variation propre
// à chaque banane via sa valeur en pièces), pour éviter un système de stats
// séparé à gérer par le joueur — la banane la plus rare qu'il possède est
// aussi la plus forte au combat.
const BANANA_BASE_STATS = {
  commune: { atk: 5, def: 4 },
  peu_commune: { atk: 8, def: 6 },
  rare: { atk: 13, def: 10 },
  epique: { atk: 20, def: 16 },
  legendaire: { atk: 30, def: 24 },
  mythique: { atk: 45, def: 36 },
  secrete: { atk: 60, def: 50 },
};

function bananaCombatStats(banana) {
  const base = BANANA_BASE_STATS[banana.rarity];
  return {
    atk: base.atk + Math.floor(banana.value / 8),
    def: base.def + Math.floor(banana.value / 10),
  };
}

const PINEAPPLE_ENEMIES = [
  { name: "Ananas basique", emoji: "🍍", atk: 6, def: 5, reward: 15, scale: 1 },
  { name: "Ananas piquant", emoji: "🍍", atk: 12, def: 9, reward: 35, scale: 1.15 },
  { name: "Ananas doré", emoji: "🍍", atk: 22, def: 18, reward: 80, scale: 1.3 },
  { name: "Ananas de fer", emoji: "🍍", atk: 35, def: 30, reward: 160, scale: 1.45 },
  { name: "Ananas légendaire", emoji: "🍍", atk: 55, def: 45, reward: 350, scale: 1.6 },
  { name: "Roi Ananas", emoji: "🍍", atk: 80, def: 65, reward: 800, scale: 1.9 },
];

// Un ananas déjà battu reste jouable (pour refarmer des pièces), mais on ne
// peut pas défier un ananas plus loin que celui juste après le dernier battu.
function maxPlayablePveStage() {
  return Math.min(state.pve.stage + 1, PINEAPPLE_ENEMIES.length - 1);
}

// Résout un combat en un coup : la chance de victoire dépend du rapport
// attaque-vs-défense dans les deux sens, avec toujours une petite marge de
// hasard (jamais 100% garanti, jamais totalement impossible).
function fightPineapple(bananaId, stageIndex) {
  const banana = BANANAS_BY_ID[bananaId];
  if (!banana || !state.discovered.includes(bananaId)) return { ok: false, reason: "banane_inconnue" };
  if (stageIndex < 0 || stageIndex > maxPlayablePveStage()) return { ok: false, reason: "stage_verrouille" };

  const enemy = PINEAPPLE_ENEMIES[stageIndex];
  const playerStats = bananaCombatStats(banana);
  const atkRatio = playerStats.atk / (playerStats.atk + enemy.atk);
  const defRatio = playerStats.def / (playerStats.def + enemy.def);
  const winChance = Math.min(0.95, Math.max(0.05, atkRatio * 0.5 + defRatio * 0.5));
  const won = Math.random() < winChance;

  let coinsEarned;
  const stageAdvanced = won && stageIndex === state.pve.stage + 1;
  if (won) {
    coinsEarned = grantCoins(enemy.reward);
    state.pve.wins += 1;
    if (stageAdvanced) state.pve.stage = stageIndex;
  } else {
    coinsEarned = grantCoins(Math.round(enemy.reward * 0.2));
    state.pve.losses += 1;
  }
  saveState();
  return { ok: true, won, coinsEarned, winChance, enemy, playerStats, stageAdvanced };
}

/* ---------------- Réinitialisation ---------------- */

function resetSave() {
  state = defaultState();
  saveState();
}
