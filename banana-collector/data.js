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
    commune: [3, 5, 3, 6, 5, 6, 3, 5, 6, 3, 5, 6],
    peu_commune: [10, 13, 14, 11, 16, 14, 13, 16, 13, 14],
    rare: [24, 29, 32, 35, 27, 30, 34, 29, 27, 37],
    epique: [64, 70, 77, 83, 67, 74, 80, 86],
    legendaire: [190, 210, 230, 250, 205, 225],
    mythique: [640, 770, 960, 1150],
    secrete: [3200, 3500, 3800, 4200, 4500, 4800, 5100, 5400, 5800, 6400],
  };
  return table[rarity][indexInRarity] || 10;
}

/* ------------------------------------------------------------
   Décorations : au lieu de coller un second emoji à côté de la
   banane (ex. 🍌🥷), chaque accessoire est dessiné en CSS et
   posé DIRECTEMENT sur le glyphe 🍌, pour un visuel fusionné —
   une seule banane qui porte un bandeau, un chapeau, une cape...
   Voir bananaIconHTML() dans ui.js pour le rendu.
   ------------------------------------------------------------ */

// Chaque entrée : { name, rarity, emoji, deco? }
const BANANA_DEFS = [
  // ---- Commune (12) ----
  { name: "Banane classique", rarity: "commune", emoji: "🍌" },
  {
    name: "Banane verte", rarity: "commune", emoji: "🍌",
    deco: { filter: "hue-rotate(70deg) saturate(1.25) brightness(0.98)" },
  },
  { name: "Petite banane", rarity: "commune", emoji: "🍌", deco: { scale: 0.72 } },
  {
    name: "Banane mûre", rarity: "commune", emoji: "🍌",
    deco: {
      filter: "sepia(0.5) saturate(1.3) brightness(0.9)",
      accessories: [
        { style: "left:30%; top:55%; width:10%; height:10%; background:#5c3b1e; border-radius:50%; opacity:.7;" },
        { style: "right:28%; top:38%; width:8%; height:8%; background:#5c3b1e; border-radius:50%; opacity:.6;" },
      ],
    },
  },
  {
    name: "Banane du petit-déjeuner", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ cls: "text", text: "☀️", style: "top:-14%; right:-10%; font-size:.5em;" }] },
  },
  { name: "Banane toute simple", rarity: "commune", emoji: "🍌" },
  {
    name: "Banane du marché", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ style: "left:70%; top:60%; width:26%; height:18%; background:#e8c88a; border:1px solid #a9873f; border-radius:2px; transform:rotate(18deg);" }] },
  },
  {
    name: "Banane bio", rarity: "commune", emoji: "🍌",
    deco: {
      filter: "saturate(1.1)",
      accessories: [{ style: "left:44%; width:16%; top:-16%; height:14%; background:#4cc26b; clip-path:polygon(0 50%,100% 0,100% 100%);" }],
    },
  },
  {
    name: "Banane de poche", rarity: "commune", emoji: "🍌",
    deco: { scale: 0.8, containerStyle: "border:2px dashed #b98b3e; border-radius:14px;" },
  },
  {
    name: "Banane du goûter", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ cls: "text", text: "🕓", style: "bottom:-12%; left:-12%; font-size:.42em;" }] },
  },
  { name: "Banane basique", rarity: "commune", emoji: "🍌" },
  {
    name: "Banane du dimanche", rarity: "commune", emoji: "🍌",
    deco: {
      accessories: [
        { style: "left:44%; top:-14%; width:5%; height:14%; background:#c81d25; border-radius:1px;" },
        { style: "left:36%; top:-10%; width:9%; height:9%; background:#c81d25; clip-path:polygon(100% 0,0 50%,100% 100%);" },
        { style: "right:36%; top:-10%; width:9%; height:9%; background:#c81d25; clip-path:polygon(0 0,100% 50%,0 100%);" },
      ],
    },
  },

  // ---- Peu commune (10) ----
  {
    name: "Banane tachetée", rarity: "peu_commune", emoji: "🍌",
    deco: {
      filter: "sepia(0.15)",
      accessories: [
        { style: "left:32%; top:34%; width:9%; height:9%; background:#6b4a23; border-radius:50%; opacity:.65;" },
        { style: "left:55%; top:52%; width:7%; height:7%; background:#6b4a23; border-radius:50%; opacity:.6;" },
        { style: "left:42%; top:65%; width:8%; height:8%; background:#6b4a23; border-radius:50%; opacity:.55;" },
      ],
    },
  },
  {
    name: "Banane rouge", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "hue-rotate(-48deg) saturate(1.6) brightness(0.95) drop-shadow(0 0 3px rgba(255,70,70,.35))" },
  },
  {
    name: "Banane plantain", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "sepia(0.35) hue-rotate(25deg) saturate(0.9) brightness(0.92)" },
  },
  { name: "Banane torsadée", rarity: "peu_commune", emoji: "🍌", deco: { transform: "rotate(22deg)" } },
  {
    name: "Banane à pois", rarity: "peu_commune", emoji: "🍌",
    deco: {
      accessories: [
        { style: "left:30%; top:32%; width:8%; height:8%; background:#fff; border:1px solid #d7b23a; border-radius:50%;" },
        { style: "left:58%; top:44%; width:7%; height:7%; background:#fff; border:1px solid #d7b23a; border-radius:50%;" },
        { style: "left:40%; top:60%; width:7%; height:7%; background:#fff; border:1px solid #d7b23a; border-radius:50%;" },
      ],
    },
  },
  { name: "Banane XXL junior", rarity: "peu_commune", emoji: "🍌", deco: { scale: 1.16 } },
  {
    name: "Banane parfumée", rarity: "peu_commune", emoji: "🍌",
    deco: { accessories: [{ cls: "text", text: "🌸", style: "top:-14%; left:-12%; font-size:.48em;" }] },
  },
  {
    name: "Banane croquante", rarity: "peu_commune", emoji: "🍌",
    deco: { accessories: [{ cls: "text", text: "💥", style: "top:-10%; right:-10%; font-size:.46em;" }] },
  },
  {
    name: "Banane sucrée", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "brightness(1.05)", accessories: [{ cls: "text", text: "✨", style: "top:-12%; right:-10%; font-size:.46em;" }] },
  },
  {
    name: "Banane rayée", rarity: "peu_commune", emoji: "🍌",
    deco: {
      accessories: [
        { style: "left:15%; right:35%; top:30%; height:8%; background:#c9992f; opacity:.55; border-radius:2px; transform:rotate(-25deg);" },
        { style: "left:25%; right:25%; top:48%; height:8%; background:#c9992f; opacity:.55; border-radius:2px; transform:rotate(-25deg);" },
        { style: "left:35%; right:15%; top:66%; height:8%; background:#c9992f; opacity:.55; border-radius:2px; transform:rotate(-25deg);" },
      ],
    },
  },

  // ---- Rare (10) ----
  {
    name: "Banane géante", rarity: "rare", emoji: "🍌",
    deco: { filter: "drop-shadow(0 4px 2px rgba(0,0,0,.35))", scale: 1.22 },
  },
  {
    name: "Banane glacée", rarity: "rare", emoji: "🍌",
    deco: { filter: "hue-rotate(150deg) saturate(1.3) brightness(1.05) drop-shadow(0 0 4px #8fd8ff)" },
  },
  {
    name: "Banane en flammes", rarity: "rare", emoji: "🍌",
    deco: { filter: "hue-rotate(-25deg) saturate(1.6) drop-shadow(0 0 5px #ff5a1f)" },
  },
  {
    name: "Banane ninja", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "brightness(0.97)",
      accessories: [
        { style: "left:10%; right:10%; top:32%; height:16%; background:#1a1a1a; border-radius:2px; transform:rotate(-6deg);" },
        { style: "right:6%; top:34%; width:10%; height:10%; background:#1a1a1a; clip-path:polygon(0 0,100% 30%,60% 100%); transform:rotate(-6deg);" },
      ],
    },
  },
  {
    name: "Banane robotique", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "saturate(0.7) brightness(1.05)",
      accessories: [
        { style: "left:12%; right:12%; top:34%; height:14%; background:linear-gradient(90deg,#9fb4c7,#5b6b78); border-radius:2px;" },
        { style: "left:48%; width:4%; top:0%; height:16%; background:#5b6b78; border-radius:2px;" },
        { style: "left:44%; width:12%; height:12%; top:-8%; background:#ff5a5a; border-radius:50%;" },
      ],
    },
  },
  {
    name: "Banane cristal", rarity: "rare", emoji: "🍌",
    deco: { filter: "hue-rotate(180deg) saturate(1.4) brightness(1.15) drop-shadow(0 0 5px #c9a8ff)" },
  },
  {
    name: "Banane électrique", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "saturate(1.5) brightness(1.2) drop-shadow(0 0 5px #fff176)",
      accessories: [{ cls: "text", text: "⚡", style: "top:-8%; right:-10%; font-size:0.85em;" }],
    },
  },
  {
    name: "Banane musclée", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "saturate(1.1) brightness(0.98)",
      accessories: [
        { style: "left:-10%; top:38%; width:22%; height:22%; background:#d9a066; border-radius:50%;" },
        { style: "right:-10%; top:38%; width:22%; height:22%; background:#d9a066; border-radius:50%;" },
      ],
    },
  },
  {
    name: "Banane pirate", rarity: "rare", emoji: "🍌",
    deco: {
      accessories: [
        { style: "left:20%; right:20%; top:-10%; height:26%; background:#2a2a2a; clip-path:polygon(50% 0,0 100%,100% 100%);" },
        { style: "left:30%; top:36%; width:22%; height:22%; background:#111; border-radius:50%;" },
      ],
    },
  },
  {
    name: "Banane vampire", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "saturate(1.1) brightness(0.9)",
      accessories: [
        { style: "left:5%; right:5%; bottom:-6%; height:16%; background:#7a0f1f; border-radius:0 0 6px 6px;" },
        { style: "left:40%; bottom:20%; width:9%; height:14%; background:#fff; clip-path:polygon(0 0,100% 0,50% 100%);" },
        { style: "left:52%; bottom:20%; width:9%; height:14%; background:#fff; clip-path:polygon(0 0,100% 0,50% 100%);" },
      ],
    },
  },

  // ---- Épique (8) ----
  {
    name: "Banane dorée", rarity: "epique", emoji: "🍌",
    deco: { filter: "sepia(0.6) saturate(2) hue-rotate(-10deg) brightness(1.1) drop-shadow(0 0 5px #ffdb70)" },
  },
  {
    name: "Banane diamant", rarity: "epique", emoji: "🍌",
    deco: { filter: "hue-rotate(190deg) saturate(0.5) brightness(1.3) drop-shadow(0 0 6px #d8f3ff)" },
  },
  {
    name: "Banane royale", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { style: "left:16%; right:16%; top:-8%; height:12%; background:#ffd23f; border-radius:2px;" },
        { style: "left:38%; right:38%; top:-18%; height:14%; background:#ffd23f; clip-path:polygon(50% 0,0 100%,100% 100%);" },
      ],
    },
  },
  {
    name: "Banane magique", rarity: "epique", emoji: "🍌",
    deco: {
      filter: "saturate(1.1)",
      accessories: [
        { style: "left:28%; right:28%; top:-24%; height:34%; background:#7a3fc4; clip-path:polygon(50% 0,10% 100%,90% 100%);" },
        { cls: "text", text: "✨", style: "top:-24%; left:56%; font-size:0.5em;" },
      ],
    },
  },
  {
    name: "Banane galactique", rarity: "epique", emoji: "🍌",
    deco: { filter: "hue-rotate(220deg) saturate(1.3) brightness(0.9) drop-shadow(0 0 6px #8a6bff)" },
  },
  {
    name: "Banane licorne", rarity: "epique", emoji: "🍌",
    deco: {
      filter: "saturate(1.2) brightness(1.05)",
      accessories: [{ style: "left:42%; width:16%; top:-16%; height:20%; background:linear-gradient(180deg,#ffd6f5,#c9a8ff); clip-path:polygon(50% 0,20% 100%,80% 100%);" }],
    },
  },
  {
    name: "Banane samouraï", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { style: "left:8%; right:8%; top:30%; height:15%; background:#fff; border:2px solid #c81d25; border-radius:2px; transform:rotate(-6deg);" },
        { style: "left:46%; top:32%; width:12%; height:12%; background:#c81d25; border-radius:50%;" },
      ],
    },
  },
  {
    name: "Banane phénix", rarity: "epique", emoji: "🍌",
    deco: {
      filter: "saturate(1.3) drop-shadow(0 0 5px #ff9a4d)",
      accessories: [
        { style: "left:-16%; top:28%; width:20%; height:30%; background:#ff7a1a; clip-path:polygon(100% 0,0 50%,100% 100%);" },
        { style: "right:-16%; top:28%; width:20%; height:30%; background:#ff7a1a; clip-path:polygon(0 0,100% 50%,0 100%);" },
      ],
    },
  },

  // ---- Légendaire (6) ----
  {
    name: "Banane radioactive", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "saturate(1.4) brightness(1.05) drop-shadow(0 0 6px #9cff5a)",
      accessories: [{ cls: "text", text: "☢️", style: "bottom:-10%; right:-10%; font-size:0.75em;" }],
    },
  },
  {
    name: "Banane fantôme", rarity: "legendaire", emoji: "🍌",
    deco: { filter: "saturate(0.3) brightness(1.3) opacity(0.75) drop-shadow(0 0 6px #cfd8ff)" },
  },
  {
    name: "Banane du chaos", rarity: "legendaire", emoji: "🍌",
    deco: { filter: "hue-rotate(300deg) saturate(1.6) contrast(1.2) drop-shadow(0 0 6px #ff4dd8)", transform: "skewX(-6deg) rotate(4deg)" },
  },
  {
    name: "Banane céleste", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "saturate(0.7) brightness(1.3) drop-shadow(0 0 7px #fff3c4)",
      accessories: [{ style: "left:20%; right:20%; top:-20%; height:16%; border:3px solid #ffe9a8; border-radius:50%; background:transparent;" }],
    },
  },
  {
    name: "Banane des dieux", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "brightness(1.15) drop-shadow(0 0 6px #fff3c4)",
      accessories: [
        { style: "left:16%; right:16%; top:-8%; height:12%; background:#fff6d0; border-radius:2px;" },
        { style: "left:38%; right:38%; top:-18%; height:14%; background:#fff6d0; clip-path:polygon(50% 0,0 100%,100% 100%);" },
      ],
    },
  },
  {
    name: "Banane éternelle", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "sepia(0.4) saturate(1.1) brightness(0.95) drop-shadow(0 0 5px #e0c98a)",
      accessories: [{ style: "left:10%; right:10%; top:38%; height:20%; border:2px solid rgba(224,201,138,.8); border-radius:50%; background:transparent;" }],
    },
  },

  // ---- Mythique (4) ----
  {
    name: "Banane arc-en-ciel", rarity: "mythique", emoji: "🍌",
    deco: {
      filter: "saturate(1.6) drop-shadow(0 0 8px #ff9fd0)",
      glyphClass: "anim-rainbow",
    },
  },
  {
    name: "Banane cosmique", rarity: "mythique", emoji: "🍌",
    deco: {
      filter: "hue-rotate(230deg) saturate(1.3) brightness(0.95) drop-shadow(0 0 8px #8a6bff)",
      accessories: [
        { style: "left:6%; top:10%; width:9%; height:9%; background:#fff; border-radius:50%; box-shadow:0 0 4px #fff;" },
        { style: "right:10%; bottom:12%; width:7%; height:7%; background:#fff; border-radius:50%; box-shadow:0 0 4px #fff;" },
      ],
    },
  },
  {
    name: "Banane quantique", rarity: "mythique", emoji: "🍌",
    deco: {
      filter: "hue-rotate(160deg) saturate(1.2) drop-shadow(0 0 8px #6fe0ff)",
      accessories: [{ style: "inset:-10%; border:2px dashed #6fe0ff; border-radius:50%; background:transparent;" }],
    },
  },
  {
    name: "Banane originelle", rarity: "mythique", emoji: "🍌",
    deco: {
      filter: "saturate(1.1) brightness(0.98)",
      accessories: [
        { style: "left:48%; width:4%; top:-12%; height:14%; background:#2f9e58; border-radius:2px;" },
        { style: "left:44%; width:16%; top:-18%; height:14%; background:#4cc26b; clip-path:polygon(0 50%,100% 0,100% 100%);" },
      ],
    },
  },

  // ---- Secrète (10) — variantes bonus, ultra rares ----
  {
    name: "Banane qui parle", rarity: "secrete", emoji: "🍌",
    deco: {
      accessories: [
        { style: "right:-32%; top:-14%; width:48%; height:32%; background:#fff; border:2px solid #333; border-radius:8px;" },
        { style: "right:-4%; top:12%; width:10%; height:10%; background:#fff; border-bottom:2px solid #333; border-right:2px solid #333; clip-path:polygon(0 0,100% 0,0 100%);" },
      ],
    },
  },
  {
    name: "Banane du futur", rarity: "secrete", emoji: "🍌",
    deco: {
      filter: "saturate(1.2) brightness(1.05)",
      accessories: [
        { style: "left:12%; right:12%; top:34%; height:14%; background:linear-gradient(90deg,#5ff0ff,#1ab8d6); border-radius:2px;" },
        { style: "left:48%; width:4%; top:0%; height:16%; background:#1ab8d6; border-radius:2px;" },
        { style: "left:44%; width:12%; height:12%; top:-8%; background:#5ff0ff; border-radius:50%;" },
      ],
    },
  },
  {
    name: "Banane clonée", rarity: "secrete", emoji: "🍌",
    deco: {
      duplicates: [{ transform: "translate(18%,-10%) rotate(10deg)", opacity: 0.85 }],
    },
  },
  {
    name: "Banane à l'envers", rarity: "secrete", emoji: "🍌",
    deco: { transform: "rotate(180deg)" },
  },
  {
    name: "Banane philosophe", rarity: "secrete", emoji: "🍌",
    deco: {
      accessories: [
        { style: "left:14%; top:34%; width:20%; height:20%; border:2px solid #333; border-radius:50%; background:rgba(255,255,255,.35);" },
        { style: "right:14%; top:34%; width:20%; height:20%; border:2px solid #333; border-radius:50%; background:rgba(255,255,255,.35);" },
        { style: "left:44%; width:12%; top:41%; height:3%; background:#333;" },
        { style: "left:36%; width:28%; top:54%; height:6%; background:#4a3520; border-radius:4px;" },
      ],
    },
  },
  {
    name: "Banane invisible", rarity: "secrete", emoji: "🍌",
    deco: { filter: "opacity(0.3)", containerStyle: "border:2px dashed rgba(80,60,10,.4); border-radius:50%;" },
  },
  {
    name: "Banane présidentielle", rarity: "secrete", emoji: "🍌",
    deco: {
      accessories: [
        { style: "left:18%; right:18%; top:-10%; height:8%; background:#1a1a1a; border-radius:2px;" },
        { style: "left:30%; right:30%; top:-26%; height:18%; background:#1a1a1a; border-radius:2px 2px 0 0;" },
        { style: "left:38%; bottom:-6%; width:10%; height:10%; background:#c81d25; clip-path:polygon(0 0,100% 50%,0 100%);" },
        { style: "right:38%; bottom:-6%; width:10%; height:10%; background:#c81d25; clip-path:polygon(100% 0,0 50%,100% 100%);" },
      ],
    },
  },
  {
    name: "Banane multivers", rarity: "secrete", emoji: "🍌",
    deco: {
      duplicates: [
        { transform: "translate(-16%,-8%) rotate(-12deg)", opacity: 0.35, filter: "hue-rotate(120deg)" },
        { transform: "translate(16%,8%) rotate(12deg)", opacity: 0.35, filter: "hue-rotate(240deg)" },
      ],
    },
  },
  {
    name: "Banane ultime", rarity: "secrete", emoji: "🍌",
    deco: {
      filter: "drop-shadow(0 0 5px #ffd23f)",
      accessories: [{ cls: "text", text: "🏆", style: "top:-14%; right:-14%; font-size:0.6em;" }],
    },
  },
  {
    name: "Banane infinie", rarity: "secrete", emoji: "🍌",
    deco: {
      filter: "saturate(1.2) drop-shadow(0 0 5px #ffe37a)",
      accessories: [{ cls: "text", text: "♾️", style: "bottom:-10%; right:-12%; font-size:0.6em;" }],
    },
  },
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
      deco: def.deco || null,
      secret: def.rarity === "secrete",
      value: valueFor(def.rarity, idxInRarity),
    };
  });
})();

const BANANAS_BY_ID = Object.fromEntries(BANANAS.map((b) => [b.id, b]));
const NORMAL_BANANAS = BANANAS.filter((b) => !b.secret);
const SECRET_BANANAS = BANANAS.filter((b) => b.secret);

const TOTAL_NORMAL = NORMAL_BANANAS.length; // 50
const TOTAL_SECRET = SECRET_BANANAS.length; // 10
