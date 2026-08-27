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
  {
    id: "strategie",
    name: "🎯 Stratège de combat",
    desc: "+4% de chance de victoire dans l'Arène par niveau",
    targets: [],
    basePrice: 2200,
    priceMult: 1.8,
    maxLevel: 5,
  },
  {
    id: "questbonus",
    name: "📜 Quête bonus",
    desc: "+1 quête quotidienne disponible par niveau",
    targets: [],
    basePrice: 3500,
    priceMult: 2.3,
    maxLevel: 2,
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
    upgrades: { panier: 0, detecteur: 0, dore: 0, cosmique: 0, auto: 0, multiplicateur: 0, pubplus: 0, strategie: 0, questbonus: 0 },
    lastBananaId: null,
    mythicCount: 0,
    rarestId: null,
    ads: { watchedToday: 0, lastResetDate: null },
    wheel: { lastSpinDate: null },
    catchGame: { bestScore: 0, bestCoins: 0 },
    streak: { count: 0, lastLoginDate: null },
    achievements: { unlocked: [] },
    pve: { stage: 0, wins: 0, losses: 0 },
    quests: { date: null, assigned: [], progress: {}, completed: [] },
    settings: { muted: false },
    // Compte cloud (Marché / Arène PVP), opt-in — voir cloud.js. Le jeu solo
    // n'y touche jamais et continue de fonctionner 100% hors ligne sans lui.
    cloud: { linked: false, lastLedgerId: 0 },
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

  bumpQuestProgress("rolls");
  if (isRareOrAbove(rarity)) bumpQuestProgress("rarePlus");

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
  bumpQuestProgress("upgradesBought");
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
  bumpQuestProgress("ads");
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
  bumpQuestProgress("wheel");
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
  bumpQuestProgress("catchRounds");
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

/* ---------------- Quêtes quotidiennes ---------------- */

// Bassin de quêtes possibles. Chaque jour, un tirage sans répétition en
// sélectionne quelques-unes (3 de base, plus avec l'amélioration "Quête
// bonus"). La progression ("key") est comptée en continu dans
// state.quests.progress et remise à zéro chaque nouveau jour.
const QUEST_POOL = [
  { id: "harvest5", desc: "Récolte 5 bananes", need: 5, reward: 80, key: "rolls" },
  { id: "harvest15", desc: "Récolte 15 bananes", need: 15, reward: 200, key: "rolls" },
  { id: "watchAd", desc: "Regarde 1 pub", need: 1, reward: 120, key: "ads" },
  { id: "spinWheel", desc: "Tourne la roue quotidienne", need: 1, reward: 100, key: "wheel" },
  { id: "win1Fight", desc: "Gagne 1 combat dans l'Arène", need: 1, reward: 150, key: "wins" },
  { id: "win3Fight", desc: "Gagne 3 combats dans l'Arène", need: 3, reward: 350, key: "wins" },
  { id: "catchRound", desc: "Termine un round d'Attrape les bananes", need: 1, reward: 130, key: "catchRounds" },
  { id: "rarePlus", desc: "Obtiens une banane rare ou mieux", need: 1, reward: 180, key: "rarePlus" },
  { id: "buyUpgrade", desc: "Achète une amélioration en boutique", need: 1, reward: 150, key: "upgradesBought" },
];

function questCountToday() {
  return 3 + (state.upgrades.questbonus || 0);
}

// Vérifie si on a changé de jour depuis le dernier tirage de quêtes et, si
// oui, en tire un nouveau lot au hasard sans répétition.
function refreshQuestsIfNewDay() {
  const today = todayKey();
  if (state.quests.date === today) return;
  state.quests.date = today;
  state.quests.progress = {};
  state.quests.completed = [];
  const pool = QUEST_POOL.slice();
  const assigned = [];
  const count = Math.min(questCountToday(), pool.length);
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    assigned.push(pool.splice(idx, 1)[0].id);
  }
  state.quests.assigned = assigned;
}

function bumpQuestProgress(key, amount = 1) {
  refreshQuestsIfNewDay();
  state.quests.progress[key] = (state.quests.progress[key] || 0) + amount;
}

function questsForToday() {
  refreshQuestsIfNewDay();
  return state.quests.assigned
    .map((id) => QUEST_POOL.find((q) => q.id === id))
    .filter(Boolean)
    .map((quest) => ({
      ...quest,
      progress: Math.min(state.quests.progress[quest.key] || 0, quest.need),
      done: state.quests.completed.includes(quest.id),
    }));
}

// Évalue les quêtes du jour, crédite les récompenses des quêtes tout juste
// terminées et retourne leur liste (pour affichage de toasts).
function checkQuests() {
  refreshQuestsIfNewDay();
  const completedNow = [];
  for (const qid of state.quests.assigned) {
    if (state.quests.completed.includes(qid)) continue;
    const quest = QUEST_POOL.find((q) => q.id === qid);
    if (!quest) continue;
    const progress = state.quests.progress[quest.key] || 0;
    if (progress >= quest.need) {
      state.quests.completed.push(qid);
      grantCoins(quest.reward);
      completedNow.push(quest);
    }
  }
  if (completedNow.length > 0) saveState();
  return completedNow;
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
  { id: "pve_ananas_king", icon: "🍍", name: "Vainqueur du Roi Ananas", desc: "Bats le Roi Ananas et ouvre la voie vers les autres familles de fruits", reward: 800, check: (s) => s.pve.stage >= 5 },
  { id: "pve_king", icon: "🏆", name: "Empereur vaincu", desc: "Bats l'Empereur Fruit du Dragon, le boss final de l'arène à 60 niveaux", reward: 5000, check: (s) => s.pve.stage >= FRUIT_ENEMIES.length - 1 },
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

// L'arène compte 10 familles de fruits, 6 niveaux chacune (60 au total).
// Les ananas (famille 0) gardent leurs stats historiques ; chaque famille
// suivante est strictement plus forte que la précédente — la première Pomme
// (stade 6) dépasse déjà le Roi Ananas (stade 5).
const FRUIT_FAMILIES = [
  { emoji: "🍍", label: "Ananas", names: ["Ananas basique", "Ananas piquant", "Ananas doré", "Ananas de fer", "Ananas légendaire", "Roi Ananas"] },
  { emoji: "🍎", label: "Pomme", names: ["Pomme sauvage", "Pomme acide", "Pomme dorée", "Pomme de fer", "Pomme légendaire", "Reine Pomme"] },
  { emoji: "🍊", label: "Clémentine", names: ["Clémentine sauvage", "Clémentine acide", "Clémentine dorée", "Clémentine de fer", "Clémentine légendaire", "Reine Clémentine"] },
  { emoji: "🍐", label: "Poire", names: ["Poire sauvage", "Poire acide", "Poire dorée", "Poire de fer", "Poire légendaire", "Reine Poire"] },
  { emoji: "🍓", label: "Fraise", names: ["Fraise sauvage", "Fraise acide", "Fraise dorée", "Fraise de fer", "Fraise légendaire", "Reine Fraise"] },
  { emoji: "🍇", label: "Raisin", names: ["Raisin sauvage", "Raisin acide", "Raisin doré", "Raisin de fer", "Raisin légendaire", "Roi Raisin"] },
  { emoji: "🍉", label: "Pastèque", names: ["Pastèque sauvage", "Pastèque acide", "Pastèque dorée", "Pastèque de fer", "Pastèque légendaire", "Reine Pastèque"] },
  { emoji: "🥝", label: "Kiwi", names: ["Kiwi sauvage", "Kiwi acide", "Kiwi doré", "Kiwi de fer", "Kiwi légendaire", "Roi Kiwi"] },
  { emoji: "🥭", label: "Mangue", names: ["Mangue sauvage", "Mangue acide", "Mangue dorée", "Mangue de fer", "Mangue légendaire", "Reine Mangue"] },
  { emoji: "🍈", label: "Fruit du Dragon", names: ["Fruit du Dragon endormi", "Fruit du Dragon enragé", "Fruit du Dragon doré", "Fruit du Dragon de fer", "Fruit du Dragon légendaire", "Empereur Fruit du Dragon"] },
];

const PINEAPPLE_BASE_STATS = [
  { atk: 6, def: 5, reward: 15 },
  { atk: 12, def: 9, reward: 35 },
  { atk: 22, def: 18, reward: 80 },
  { atk: 35, def: 30, reward: 160 },
  { atk: 55, def: 45, reward: 350 },
  { atk: 80, def: 65, reward: 800 },
];

const FRUIT_ENEMIES = (() => {
  const list = [];
  FRUIT_FAMILIES.forEach((family, f) => {
    family.names.forEach((name, l) => {
      const stage = f * 6 + l;
      let atk, def, reward;
      if (stage < 6) {
        ({ atk, def, reward } = PINEAPPLE_BASE_STATS[stage]);
      } else {
        const t = stage - 5; // 1..54, progression exponentielle jusqu'au boss final
        atk = Math.round(80 * Math.pow(37.5, t / 54));
        def = Math.round(65 * Math.pow(33.85, t / 54));
        reward = Math.round(800 * Math.pow(150, t / 54));
      }
      list.push({ name, emoji: family.emoji, family: f, familyLabel: family.label, atk, def, reward });
    });
  });
  return list;
})();

// Un ennemi déjà battu reste jouable (pour refarmer des pièces), mais on ne
// peut pas défier un ennemi plus loin que celui juste après le dernier battu.
function maxPlayablePveStage() {
  return Math.min(state.pve.stage + 1, FRUIT_ENEMIES.length - 1);
}

// Résout un combat en un coup : la chance de victoire dépend du rapport
// attaque-vs-défense dans les deux sens, avec toujours une petite marge de
// hasard (jamais 100% garanti, jamais totalement impossible).
function fightFruitEnemy(bananaId, stageIndex) {
  const banana = BANANAS_BY_ID[bananaId];
  if (!banana || !state.discovered.includes(bananaId)) return { ok: false, reason: "banane_inconnue" };
  if (stageIndex < 0 || stageIndex > maxPlayablePveStage()) return { ok: false, reason: "stage_verrouille" };

  const enemy = FRUIT_ENEMIES[stageIndex];
  const playerStats = bananaCombatStats(banana);
  const atkRatio = playerStats.atk / (playerStats.atk + enemy.atk);
  const defRatio = playerStats.def / (playerStats.def + enemy.def);
  const strategyBonus = (state.upgrades.strategie || 0) * 0.04;
  const winChance = Math.min(0.95, Math.max(0.05, atkRatio * 0.5 + defRatio * 0.5 + strategyBonus));
  const won = Math.random() < winChance;

  let coinsEarned;
  const stageAdvanced = won && stageIndex === state.pve.stage + 1;
  if (won) {
    coinsEarned = grantCoins(enemy.reward);
    state.pve.wins += 1;
    bumpQuestProgress("wins");
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
