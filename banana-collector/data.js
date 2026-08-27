/* ============================================================
   Banana Collector — Données du jeu
   Raretés, table de bananes (50 normales + 10 secrètes)
   ============================================================ */

// Ordre du plus commun au plus rare (utilisé pour comparer les raretés)
const RARITY_ORDER = [
  "commune",
  "peu_commune",
  "rare",
  "epique",
  "legendaire",
  "mythique",
  "secrete",
];

const RARITIES = {
  commune: { label: "Commune", color: "#9e9e9e", glow: "#c9c9c9", weight: 50 },
  peu_commune: { label: "Peu commune", color: "#4caf50", glow: "#7be08a", weight: 27 },
  rare: { label: "Rare", color: "#2196f3", glow: "#6fc3ff", weight: 14 },
  epique: { label: "Épique", color: "#9c27b0", glow: "#e08bfb", weight: 6 },
  legendaire: { label: "Légendaire", color: "#ff9800", glow: "#ffcf7a", weight: 2.5 },
  mythique: { label: "Mythique", color: "#f43f8e", glow: "#ff9fd0", weight: 0.4 },
  secrete: { label: "Secrète", color: "#111827", glow: "#ffffff", weight: 0.1 },
};

function rarityIndex(key) {
  return RARITY_ORDER.indexOf(key);
}

function isRareOrAbove(key) {
  return rarityIndex(key) >= rarityIndex("rare");
}

function isLegendaryOrAbove(key) {
  return rarityIndex(key) >= rarityIndex("legendaire");
}

// Valeur en pièces générée de façon déterministe selon la rareté et la position dans la rareté
function valueFor(rarity, indexInRarity) {
  const table = {
    commune: [5, 6, 5, 7, 6, 8, 5, 6, 7, 5, 6, 8],
    peu_commune: [15, 18, 20, 16, 22, 19, 17, 21, 18, 20],
    rare: [40, 45, 50, 55, 42, 48, 52, 46, 44, 58],
    epique: [100, 110, 120, 130, 105, 115, 125, 135],
    legendaire: [300, 330, 360, 390, 320, 350],
    mythique: [1000, 1200, 1500, 1800],
    secrete: [5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 10000],
  };
  return table[rarity][indexInRarity] || 10;
}

// Chaque entrée : { name, rarity, emoji }
const BANANA_DEFS = [
  // ---- Commune (12) ----
  { name: "Banane classique", rarity: "commune", emoji: "🍌" },
  { name: "Banane verte", rarity: "commune", emoji: "🍌" },
  { name: "Petite banane", rarity: "commune", emoji: "🍌" },
  { name: "Banane mûre", rarity: "commune", emoji: "🍌" },
  { name: "Banane du petit-déjeuner", rarity: "commune", emoji: "🍌" },
  { name: "Banane toute simple", rarity: "commune", emoji: "🍌" },
  { name: "Banane du marché", rarity: "commune", emoji: "🍌" },
  { name: "Banane bio", rarity: "commune", emoji: "🍌" },
  { name: "Banane de poche", rarity: "commune", emoji: "🍌" },
  { name: "Banane du goûter", rarity: "commune", emoji: "🍌" },
  { name: "Banane basique", rarity: "commune", emoji: "🍌" },
  { name: "Banane du dimanche", rarity: "commune", emoji: "🍌" },

  // ---- Peu commune (10) ----
  { name: "Banane tachetée", rarity: "peu_commune", emoji: "🍌" },
  { name: "Banane rouge", rarity: "peu_commune", emoji: "🍌" },
  { name: "Banane plantain", rarity: "peu_commune", emoji: "🍌" },
  { name: "Banane torsadée", rarity: "peu_commune", emoji: "🍌" },
  { name: "Banane à pois", rarity: "peu_commune", emoji: "🍌" },
  { name: "Banane XXL junior", rarity: "peu_commune", emoji: "🍌" },
  { name: "Banane parfumée", rarity: "peu_commune", emoji: "🍌" },
  { name: "Banane croquante", rarity: "peu_commune", emoji: "🍌" },
  { name: "Banane sucrée", rarity: "peu_commune", emoji: "🍌" },
  { name: "Banane rayée", rarity: "peu_commune", emoji: "🍌" },

  // ---- Rare (10) ----
  { name: "Banane géante", rarity: "rare", emoji: "🍌🐘" },
  { name: "Banane glacée", rarity: "rare", emoji: "🍌❄️" },
  { name: "Banane en flammes", rarity: "rare", emoji: "🍌🔥" },
  { name: "Banane ninja", rarity: "rare", emoji: "🍌🥷" },
  { name: "Banane robotique", rarity: "rare", emoji: "🍌🤖" },
  { name: "Banane cristal", rarity: "rare", emoji: "🍌🔮" },
  { name: "Banane électrique", rarity: "rare", emoji: "🍌⚡" },
  { name: "Banane musclée", rarity: "rare", emoji: "🍌💪" },
  { name: "Banane pirate", rarity: "rare", emoji: "🍌🏴‍☠️" },
  { name: "Banane vampire", rarity: "rare", emoji: "🍌🧛" },

  // ---- Épique (8) ----
  { name: "Banane dorée", rarity: "epique", emoji: "🍌🥇" },
  { name: "Banane diamant", rarity: "epique", emoji: "🍌💎" },
  { name: "Banane royale", rarity: "epique", emoji: "🍌👑" },
  { name: "Banane magique", rarity: "epique", emoji: "🍌🪄" },
  { name: "Banane galactique", rarity: "epique", emoji: "🍌🌌" },
  { name: "Banane licorne", rarity: "epique", emoji: "🍌🦄" },
  { name: "Banane samouraï", rarity: "epique", emoji: "🍌⚔️" },
  { name: "Banane phénix", rarity: "epique", emoji: "🍌🦅" },

  // ---- Légendaire (6) ----
  { name: "Banane radioactive", rarity: "legendaire", emoji: "🍌☢️" },
  { name: "Banane fantôme", rarity: "legendaire", emoji: "🍌👻" },
  { name: "Banane du chaos", rarity: "legendaire", emoji: "🍌🌀" },
  { name: "Banane céleste", rarity: "legendaire", emoji: "🍌🌟" },
  { name: "Banane des dieux", rarity: "legendaire", emoji: "🍌🏛️" },
  { name: "Banane éternelle", rarity: "legendaire", emoji: "🍌⏳" },

  // ---- Mythique (4) ----
  { name: "Banane arc-en-ciel", rarity: "mythique", emoji: "🍌🌈" },
  { name: "Banane cosmique", rarity: "mythique", emoji: "🍌☄️" },
  { name: "Banane quantique", rarity: "mythique", emoji: "🍌⚛️" },
  { name: "Banane originelle", rarity: "mythique", emoji: "🍌🌱" },

  // ---- Secrète (10) — variantes bonus, ultra rares ----
  { name: "Banane qui parle", rarity: "secrete", emoji: "🍌💬" },
  { name: "Banane du futur", rarity: "secrete", emoji: "🍌🚀" },
  { name: "Banane clonée", rarity: "secrete", emoji: "🍌🍌" },
  { name: "Banane à l'envers", rarity: "secrete", emoji: "🙃🍌" },
  { name: "Banane philosophe", rarity: "secrete", emoji: "🍌🤔" },
  { name: "Banane invisible", rarity: "secrete", emoji: "🍌👀" },
  { name: "Banane présidentielle", rarity: "secrete", emoji: "🍌🎩" },
  { name: "Banane multivers", rarity: "secrete", emoji: "🍌🔀" },
  { name: "Banane ultime", rarity: "secrete", emoji: "🍌🏆" },
  { name: "Banane infinie", rarity: "secrete", emoji: "🍌♾️" },
];

// Construction de la table finale avec id, valeur, index dans la rareté, etc.
const BANANAS = (() => {
  const countersByRarity = {};
  return BANANA_DEFS.map((def, i) => {
    const idxInRarity = countersByRarity[def.rarity] || 0;
    countersByRarity[def.rarity] = idxInRarity + 1;
    return {
      id: i + 1,
      name: def.name,
      rarity: def.rarity,
      emoji: def.emoji,
      secret: def.rarity === "secrete",
      value: valueFor(def.rarity, idxInRarity),
      hue: (i * 41 + 17) % 360, // pour la variété visuelle des bananes communes/peu communes
    };
  });
})();

const BANANAS_BY_ID = Object.fromEntries(BANANAS.map((b) => [b.id, b]));
const NORMAL_BANANAS = BANANAS.filter((b) => !b.secret);
const SECRET_BANANAS = BANANAS.filter((b) => b.secret);

const TOTAL_NORMAL = NORMAL_BANANAS.length; // 50
const TOTAL_SECRET = SECRET_BANANAS.length; // 10
