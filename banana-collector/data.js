/* ============================================================
   Banana Collector — Données du jeu
   Raretés, table de bananes (100 normales + 10 secrètes)
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
    commune: [3, 5, 3, 6, 5, 6, 3, 5, 6, 3, 5, 6, 4, 6, 3, 5, 4, 6, 3, 5, 4, 6, 3, 5],
    peu_commune: [10, 13, 14, 11, 16, 14, 13, 16, 13, 14, 11, 15, 12, 16, 10, 14, 12, 15, 11, 13],
    rare: [24, 29, 32, 35, 27, 30, 34, 29, 27, 37, 26, 33, 28, 36, 25, 31, 29, 34, 27, 32],
    epique: [64, 70, 77, 83, 67, 74, 80, 86, 68, 75, 82, 66, 72, 79, 85, 69],
    legendaire: [190, 210, 230, 250, 205, 225, 200, 220, 240, 195, 215, 235],
    mythique: [640, 770, 960, 1150, 700, 860, 1020, 1100],
    secrete: [3200, 3500, 3800, 4200, 4500, 4800, 5100, 5400, 5800, 6400],
  };
  return table[rarity][indexInRarity] || 10;
}

/* ------------------------------------------------------------
   Décorations : au lieu de coller un second emoji à côté de la
   banane (ex. 🍌🥷), chaque accessoire est dessiné en CSS et posé
   DIRECTEMENT sur le glyphe 🍌, pour un visuel fusionné — une seule
   banane qui porte un bandeau, un chapeau, une cape...

   Chaque accessoire a un `type` qui pioche dans un petit catalogue
   de formes déjà stylées (dégradé, ombre, bords adoucis) défini une
   fois pour toutes dans style.css — jamais de rectangle plat ou de
   trait brut posé tel quel :
     - "band"           bandeau/visière/cape/ruban (barre arrondie)
     - "peak-up" / "peak-down"        pointe vers le haut / le bas
     - "peak-out-left" / "peak-out-right"  pointe vers l'extérieur (aile, corne, croc...)
     - "orb"             perle/oeil/bouton (rond, effet verre)
     - "ring"            anneau (halo, lunettes, orbite)
     - "bubble"          bulle de dialogue
     - "text"            un petit emoji en badge (ex. ⚡, 🏆)
   `color` (une teinte, dégradé auto clair→sombre) ou `colors: [c1,c2]`
   (dégradé personnalisé) définissent la couleur ; `style` ne sert
   plus qu'au positionnement (top/left/width/height/transform...).
   Voir bananaIconHTML() dans ui.js pour le rendu.
   ------------------------------------------------------------ */

// Chaque entrée : { name, rarity, emoji, deco? }
const BANANA_DEFS = [
  // ================= Commune (24) =================
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
        { type: "orb", color: "#5c3b1e", style: "left:30%; top:55%; width:10%; height:10%; opacity:.7;" },
        { type: "orb", color: "#5c3b1e", style: "right:28%; top:38%; width:8%; height:8%; opacity:.6;" },
      ],
    },
  },
  {
    name: "Banane du petit-déjeuner", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "☀️", style: "top:-14%; right:-10%; font-size:.5em;" }] },
  },
  { name: "Banane toute simple", rarity: "commune", emoji: "🍌" },
  {
    name: "Banane du marché", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "band", color: "#e8c88a", style: "left:70%; top:60%; width:26%; height:18%; transform:rotate(18deg);" }] },
  },
  {
    name: "Banane bio", rarity: "commune", emoji: "🍌",
    deco: {
      filter: "saturate(1.1)",
      accessories: [{ type: "peak-out-left", colors: ["#7ee08a", "#4cc26b"], style: "left:44%; width:16%; top:-16%; height:14%;" }],
    },
  },
  {
    name: "Banane de poche", rarity: "commune", emoji: "🍌",
    deco: { scale: 0.8, containerStyle: "border:2px dashed #b98b3e; border-radius:14px; box-shadow: inset 0 0 6px rgba(185,139,62,.25);" },
  },
  {
    name: "Banane du goûter", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🕓", style: "bottom:-12%; left:-12%; font-size:.42em;" }] },
  },
  { name: "Banane basique", rarity: "commune", emoji: "🍌" },
  {
    name: "Banane du dimanche", rarity: "commune", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#c81d25", style: "left:44%; top:-14%; width:5%; height:14%;" },
        { type: "peak-out-left", color: "#c81d25", style: "left:36%; top:-10%; width:9%; height:9%;" },
        { type: "peak-out-right", color: "#c81d25", style: "right:36%; top:-10%; width:9%; height:9%;" },
      ],
    },
  },
  {
    name: "Banane du dodo", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "😴", style: "top:-12%; right:-10%; font-size:.46em;" }] },
  },
  {
    name: "Banane câline", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🧡", style: "top:-12%; left:-10%; font-size:.42em;" }] },
  },
  {
    name: "Banane voyageuse", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🧭", style: "bottom:-10%; right:-10%; font-size:.46em;" }] },
  },
  {
    name: "Banane studieuse", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🎓", style: "top:-14%; left:-8%; font-size:.48em;" }] },
  },
  {
    name: "Banane sportive", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "⚽", style: "bottom:-10%; left:-10%; font-size:.44em;" }] },
  },
  {
    name: "Banane musicienne", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🎵", style: "top:-12%; right:-8%; font-size:.46em;" }] },
  },
  {
    name: "Banane artiste", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🎨", style: "bottom:-10%; right:-12%; font-size:.46em;" }] },
  },
  {
    name: "Banane pressée", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "💨", style: "left:-14%; top:40%; font-size:.5em;" }] },
  },
  {
    name: "Banane curieuse", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🔍", style: "top:-10%; right:-12%; font-size:.46em;" }] },
  },
  {
    name: "Banane bricoleuse", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🔧", style: "bottom:-8%; left:-12%; font-size:.44em;" }] },
  },
  {
    name: "Banane gourmande", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🍴", style: "bottom:-10%; right:-10%; font-size:.44em;" }] },
  },
  {
    name: "Banane rêveuse", rarity: "commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "☁️", style: "top:-14%; left:-10%; font-size:.5em;" }] },
  },

  // ================= Peu commune (20) =================
  {
    name: "Banane tachetée", rarity: "peu_commune", emoji: "🍌",
    deco: {
      filter: "sepia(0.15)",
      accessories: [
        { type: "orb", color: "#6b4a23", style: "left:32%; top:34%; width:9%; height:9%; opacity:.65;" },
        { type: "orb", color: "#6b4a23", style: "left:55%; top:52%; width:7%; height:7%; opacity:.6;" },
        { type: "orb", color: "#6b4a23", style: "left:42%; top:65%; width:8%; height:8%; opacity:.55;" },
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
        { type: "orb", color: "#fff8e6", style: "left:30%; top:32%; width:8%; height:8%; border:1px solid #d7b23a;" },
        { type: "orb", color: "#fff8e6", style: "left:58%; top:44%; width:7%; height:7%; border:1px solid #d7b23a;" },
        { type: "orb", color: "#fff8e6", style: "left:40%; top:60%; width:7%; height:7%; border:1px solid #d7b23a;" },
      ],
    },
  },
  { name: "Banane XXL junior", rarity: "peu_commune", emoji: "🍌", deco: { scale: 1.16 } },
  {
    name: "Banane parfumée", rarity: "peu_commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🌸", style: "top:-14%; left:-12%; font-size:.48em;" }] },
  },
  {
    name: "Banane croquante", rarity: "peu_commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "💥", style: "top:-10%; right:-10%; font-size:.46em;" }] },
  },
  {
    name: "Banane sucrée", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "brightness(1.05)", accessories: [{ type: "text", text: "✨", style: "top:-12%; right:-10%; font-size:.46em;" }] },
  },
  {
    name: "Banane rayée", rarity: "peu_commune", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#c9992f", style: "left:15%; right:35%; top:30%; height:8%; opacity:.6; transform:rotate(-25deg);" },
        { type: "band", color: "#c9992f", style: "left:25%; right:25%; top:48%; height:8%; opacity:.6; transform:rotate(-25deg);" },
        { type: "band", color: "#c9992f", style: "left:35%; right:15%; top:66%; height:8%; opacity:.6; transform:rotate(-25deg);" },
      ],
    },
  },
  {
    name: "Banane caramélisée", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "sepia(0.55) saturate(1.6) brightness(0.95)" },
  },
  {
    name: "Banane givrée", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "hue-rotate(120deg) saturate(0.9) brightness(1.1)" },
  },
  {
    name: "Banane fumée", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "saturate(0.25) brightness(0.85) contrast(1.05)" },
  },
  {
    name: "Banane épicée", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "hue-rotate(-30deg) saturate(1.5)", accessories: [{ type: "text", text: "🌶️", style: "top:-10%; right:-10%; font-size:.46em;" }] },
  },
  {
    name: "Banane salée", rarity: "peu_commune", emoji: "🍌",
    deco: { accessories: [{ type: "text", text: "🧂", style: "top:-12%; left:-10%; font-size:.46em;" }] },
  },
  {
    name: "Banane acidulée", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "hue-rotate(35deg) saturate(1.4)", accessories: [{ type: "text", text: "🍋", style: "bottom:-10%; right:-10%; font-size:.44em;" }] },
  },
  {
    name: "Banane veloutée", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "hue-rotate(260deg) saturate(0.7) brightness(1.05)" },
  },
  {
    name: "Banane pailletée", rarity: "peu_commune", emoji: "🍌",
    deco: { filter: "brightness(1.15) saturate(1.3) drop-shadow(0 0 3px #fff3c4)", accessories: [{ type: "text", text: "✨", style: "top:-12%; right:-8%; font-size:.46em;" }] },
  },
  {
    name: "Banane arlequin", rarity: "peu_commune", emoji: "🍌",
    deco: {
      accessories: [
        { type: "orb", color: "#e63946", style: "left:28%; top:30%; width:8%; height:8%;" },
        { type: "orb", color: "#2196f3", style: "left:55%; top:42%; width:7%; height:7%;" },
        { type: "orb", color: "#4caf50", style: "left:38%; top:58%; width:7%; height:7%;" },
        { type: "orb", color: "#ffd23f", style: "left:60%; top:62%; width:6%; height:6%;" },
      ],
    },
  },
  {
    name: "Banane zébrée", rarity: "peu_commune", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#1a1a1a", style: "left:15%; right:35%; top:28%; height:9%; transform:rotate(-20deg);" },
        { type: "band", color: "#1a1a1a", style: "left:25%; right:25%; top:48%; height:9%; transform:rotate(-20deg);" },
        { type: "band", color: "#1a1a1a", style: "left:35%; right:15%; top:66%; height:9%; transform:rotate(-20deg);" },
      ],
    },
  },

  // ================= Rare (20) =================
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
        { type: "band", color: "#1a1a1a", style: "left:10%; right:10%; top:32%; height:16%; transform:rotate(-6deg);" },
        { type: "peak-out-left", color: "#1a1a1a", style: "right:4%; top:32%; width:11%; height:12%; transform:rotate(-6deg);" },
      ],
    },
  },
  {
    name: "Banane robotique", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "saturate(0.7) brightness(1.05)",
      accessories: [
        { type: "band", color: "#6b7f8f", style: "left:12%; right:12%; top:34%; height:14%;" },
        { type: "band", color: "#5b6b78", style: "left:48%; width:4%; top:0%; height:16%;" },
        { type: "orb", color: "#ff5a5a", style: "left:44%; width:12%; height:12%; top:-8%;" },
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
      accessories: [{ type: "text", text: "⚡", style: "top:-8%; right:-10%; font-size:0.85em;" }],
    },
  },
  {
    name: "Banane musclée", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "saturate(1.1) brightness(0.98)",
      accessories: [
        { type: "orb", color: "#d9a066", style: "left:-10%; top:38%; width:22%; height:22%;" },
        { type: "orb", color: "#d9a066", style: "right:-10%; top:38%; width:22%; height:22%;" },
      ],
    },
  },
  {
    name: "Banane pirate", rarity: "rare", emoji: "🍌",
    deco: {
      accessories: [
        { type: "peak-up", color: "#2a2a2a", style: "left:20%; right:20%; top:-10%; height:26%;" },
        { type: "orb", color: "#111", style: "left:30%; top:36%; width:22%; height:22%;" },
      ],
    },
  },
  {
    name: "Banane vampire", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "saturate(1.1) brightness(0.9)",
      accessories: [
        { type: "band", color: "#7a0f1f", style: "left:5%; right:5%; bottom:-6%; height:16%;" },
        { type: "peak-down", color: "#fff", style: "left:40%; bottom:20%; width:9%; height:14%;" },
        { type: "peak-down", color: "#fff", style: "left:52%; bottom:20%; width:9%; height:14%;" },
      ],
    },
  },
  {
    name: "Banane chevalier", rarity: "rare", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#8a95a5", style: "left:10%; right:10%; top:32%; height:16%;" },
        { type: "peak-up", color: "#8a95a5", style: "left:42%; right:42%; top:-8%; height:12%;" },
      ],
    },
  },
  {
    name: "Banane sorcière", rarity: "rare", emoji: "🍌",
    deco: { accessories: [{ type: "peak-up", color: "#3a2a52", style: "left:26%; right:26%; top:-26%; height:36%;" }] },
  },
  {
    name: "Banane bûcheron", rarity: "rare", emoji: "🍌",
    deco: { accessories: [{ type: "band", color: "#b3312c", style: "left:8%; right:8%; top:30%; height:16%;" }] },
  },
  {
    name: "Banane cow-boy", rarity: "rare", emoji: "🍌",
    deco: {
      accessories: [
        { type: "peak-up", color: "#8a5a2b", style: "left:16%; right:16%; top:-14%; height:22%;" },
        { type: "band", color: "#5c3a17", style: "left:22%; right:22%; top:2%; height:8%;" },
      ],
    },
  },
  {
    name: "Banane astronaute", rarity: "rare", emoji: "🍌",
    deco: {
      accessories: [
        { type: "ring", color: "#dff3ff", style: "left:14%; right:14%; top:16%; height:60%;" },
        { type: "band", color: "#c7cdd3", style: "left:20%; right:20%; bottom:-8%; height:10%;" },
      ],
    },
  },
  {
    name: "Banane clown", rarity: "rare", emoji: "🍌",
    deco: {
      accessories: [
        { type: "orb", color: "#e63946", style: "left:40%; top:48%; width:18%; height:18%;" },
        { type: "peak-up", color: "#ff9f1c", style: "left:6%; top:-6%; width:16%; height:16%; transform:rotate(-25deg);" },
        { type: "peak-up", color: "#ff9f1c", style: "right:6%; top:-6%; width:16%; height:16%; transform:rotate(25deg);" },
      ],
    },
  },
  {
    name: "Banane momie", rarity: "rare", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#e9e2cf", style: "left:8%; right:8%; top:20%; height:10%; transform:rotate(-8deg);" },
        { type: "band", color: "#e9e2cf", style: "left:12%; right:12%; top:42%; height:10%; transform:rotate(6deg);" },
        { type: "band", color: "#e9e2cf", style: "left:10%; right:10%; top:64%; height:10%; transform:rotate(-5deg);" },
      ],
    },
  },
  {
    name: "Banane zombie", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "hue-rotate(70deg) saturate(1.3) brightness(0.85)",
      accessories: [{ type: "band", color: "#c9c2a8", style: "left:20%; top:44%; width:26%; height:9%; transform:rotate(-15deg);" }],
    },
  },
  {
    name: "Banane requin", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "saturate(0.6) brightness(1.05)",
      accessories: [{ type: "peak-up", color: "#8a97a3", style: "left:38%; right:38%; top:-16%; height:22%;" }],
    },
  },
  {
    name: "Banane extraterrestre", rarity: "rare", emoji: "🍌",
    deco: {
      filter: "hue-rotate(100deg) saturate(1.2) brightness(1.05)",
      accessories: [
        { type: "orb", color: "#111", style: "left:26%; top:34%; width:18%; height:14%;" },
        { type: "orb", color: "#111", style: "right:26%; top:34%; width:18%; height:14%;" },
      ],
    },
  },

  // ================= Épique (16) =================
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
        { type: "band", color: "#ffd23f", style: "left:16%; right:16%; top:-8%; height:12%;" },
        { type: "peak-up", color: "#ffd23f", style: "left:38%; right:38%; top:-18%; height:14%;" },
      ],
    },
  },
  {
    name: "Banane magique", rarity: "epique", emoji: "🍌",
    deco: {
      filter: "saturate(1.1)",
      accessories: [
        { type: "peak-up", color: "#7a3fc4", style: "left:28%; right:28%; top:-24%; height:34%;" },
        { type: "text", text: "✨", style: "top:-24%; left:56%; font-size:0.5em;" },
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
      accessories: [{ type: "peak-up", colors: ["#ffd6f5", "#c9a8ff"], style: "left:42%; width:16%; top:-16%; height:20%;" }],
    },
  },
  {
    name: "Banane samouraï", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#f5f0e6", style: "left:8%; right:8%; top:30%; height:15%; transform:rotate(-6deg);" },
        { type: "orb", color: "#c81d25", style: "left:46%; top:32%; width:12%; height:12%;" },
      ],
    },
  },
  {
    name: "Banane phénix", rarity: "epique", emoji: "🍌",
    deco: {
      filter: "saturate(1.3) drop-shadow(0 0 5px #ff9a4d)",
      accessories: [
        { type: "peak-out-left", colors: ["#ffb84d", "#ff7a1a"], style: "left:-16%; top:28%; width:20%; height:30%;" },
        { type: "peak-out-right", colors: ["#ffb84d", "#ff7a1a"], style: "right:-16%; top:28%; width:20%; height:30%;" },
      ],
    },
  },
  {
    name: "Banane impératrice", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#c9a8ff", style: "left:16%; right:16%; top:-8%; height:12%;" },
        { type: "peak-up", color: "#c9a8ff", style: "left:38%; right:38%; top:-18%; height:14%;" },
        { type: "ring", color: "#ffd23f", style: "left:30%; top:36%; width:12%; height:12%;" },
      ],
    },
  },
  {
    name: "Banane dragon", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { type: "peak-out-left", colors: ["#ffb84d", "#c81d25"], style: "left:-16%; top:26%; width:22%; height:32%;" },
        { type: "peak-out-right", colors: ["#ffb84d", "#c81d25"], style: "right:-16%; top:26%; width:22%; height:32%;" },
        { type: "peak-up", color: "#c81d25", style: "left:40%; right:40%; top:-10%; height:12%;" },
      ],
    },
  },
  {
    name: "Banane sirène", rarity: "epique", emoji: "🍌",
    deco: {
      filter: "hue-rotate(150deg) saturate(1.2)",
      accessories: [
        { type: "band", color: "#2fa88a", style: "left:14%; right:14%; top:30%; height:14%;" },
        { type: "peak-down", colors: ["#7ee0c8", "#2fa88a"], style: "left:24%; right:24%; bottom:-14%; height:20%;" },
      ],
    },
  },
  {
    name: "Banane ronin", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#3a5a8a", style: "left:8%; right:8%; top:30%; height:15%; transform:rotate(-6deg);" },
        { type: "orb", color: "#c9d6e6", style: "left:46%; top:32%; width:12%; height:12%;" },
      ],
    },
  },
  {
    name: "Banane archange", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { type: "ring", color: "#ffe9a8", style: "left:22%; right:22%; top:-22%; height:18%;" },
        { type: "peak-out-left", color: "#fff", style: "left:-14%; top:30%; width:18%; height:26%;" },
        { type: "peak-out-right", color: "#fff", style: "right:-14%; top:30%; width:18%; height:26%;" },
      ],
    },
  },
  {
    name: "Banane pharaon", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#ffd23f", style: "left:14%; right:14%; top:-10%; height:14%;" },
        { type: "band", color: "#2a5aa8", style: "left:10%; right:10%; top:2%; height:10%;" },
      ],
    },
  },
  {
    name: "Banane gardienne", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#9fb4c7", style: "left:10%; right:10%; top:28%; height:14%;" },
        { type: "peak-up", color: "#9fb4c7", style: "left:40%; right:40%; top:-10%; height:12%;" },
      ],
    },
  },
  {
    name: "Banane samouraï d'or", rarity: "epique", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#ffd23f", style: "left:8%; right:8%; top:30%; height:15%; transform:rotate(-6deg);" },
        { type: "orb", color: "#c81d25", style: "left:46%; top:32%; width:12%; height:12%;" },
      ],
    },
  },

  // ================= Légendaire (12) =================
  {
    name: "Banane radioactive", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "saturate(1.4) brightness(1.05) drop-shadow(0 0 6px #9cff5a)",
      accessories: [{ type: "text", text: "☢️", style: "bottom:-10%; right:-10%; font-size:0.75em;" }],
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
      accessories: [{ type: "ring", color: "#ffe9a8", style: "left:20%; right:20%; top:-20%; height:16%;" }],
    },
  },
  {
    name: "Banane des dieux", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "brightness(1.15) drop-shadow(0 0 6px #fff3c4)",
      accessories: [
        { type: "band", color: "#fff6d0", style: "left:16%; right:16%; top:-8%; height:12%;" },
        { type: "peak-up", color: "#fff6d0", style: "left:38%; right:38%; top:-18%; height:14%;" },
      ],
    },
  },
  {
    name: "Banane éternelle", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "sepia(0.4) saturate(1.1) brightness(0.95) drop-shadow(0 0 5px #e0c98a)",
      accessories: [{ type: "ring", color: "#e0c98a", style: "left:10%; right:10%; top:38%; height:20%;" }],
    },
  },
  {
    name: "Banane titan", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "drop-shadow(0 5px 3px rgba(0,0,0,.4))",
      scale: 1.3,
      accessories: [{ type: "band", color: "#7a8a99", style: "left:10%; right:10%; top:40%; height:10%;" }],
    },
  },
  {
    name: "Banane phénix noir", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "saturate(1.2) drop-shadow(0 0 6px #8a5ac8)",
      accessories: [
        { type: "peak-out-left", colors: ["#8a5ac8", "#1a0e2e"], style: "left:-16%; top:26%; width:22%; height:32%;" },
        { type: "peak-out-right", colors: ["#8a5ac8", "#1a0e2e"], style: "right:-16%; top:26%; width:22%; height:32%;" },
      ],
    },
  },
  {
    name: "Banane kraken", rarity: "legendaire", emoji: "🍌",
    deco: { filter: "hue-rotate(200deg) saturate(1.4) brightness(0.85) drop-shadow(0 0 6px #4a2f8a)" },
  },
  {
    name: "Banane valkyrie", rarity: "legendaire", emoji: "🍌",
    deco: {
      accessories: [
        { type: "band", color: "#c7cdd3", style: "left:14%; right:14%; top:-8%; height:14%;" },
        { type: "peak-out-left", color: "#e6ecf2", style: "left:-10%; top:-14%; width:16%; height:20%;" },
        { type: "peak-out-right", color: "#e6ecf2", style: "right:-10%; top:-14%; width:16%; height:20%;" },
      ],
    },
  },
  {
    name: "Banane démoniaque", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "hue-rotate(-30deg) saturate(1.5) brightness(0.85) drop-shadow(0 0 6px #c81d25)",
      accessories: [
        { type: "peak-up", color: "#c81d25", style: "left:22%; top:-14%; width:14%; height:16%; transform:rotate(-20deg);" },
        { type: "peak-up", color: "#c81d25", style: "right:22%; top:-14%; width:14%; height:16%; transform:rotate(20deg);" },
      ],
    },
  },
  {
    name: "Banane divine", rarity: "legendaire", emoji: "🍌",
    deco: {
      filter: "brightness(1.2) saturate(0.8) drop-shadow(0 0 8px #fff3c4)",
      accessories: [{ type: "ring", color: "#fff3c4", style: "left:14%; right:14%; top:-24%; height:20%;" }],
    },
  },

  // ================= Mythique (8) =================
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
        { type: "text", text: "✨", style: "left:2%; top:4%; font-size:.34em;" },
        { type: "text", text: "✨", style: "right:6%; bottom:8%; font-size:.3em;" },
      ],
    },
  },
  {
    name: "Banane quantique", rarity: "mythique", emoji: "🍌",
    deco: {
      filter: "hue-rotate(160deg) saturate(1.2) drop-shadow(0 0 8px #6fe0ff)",
      accessories: [{ type: "ring", color: "#6fe0ff", style: "inset:-10%;" }],
    },
  },
  {
    name: "Banane originelle", rarity: "mythique", emoji: "🍌",
    deco: {
      filter: "saturate(1.1) brightness(0.98)",
      accessories: [
        { type: "band", color: "#2f9e58", style: "left:48%; width:4%; top:-12%; height:14%;" },
        { type: "peak-out-left", colors: ["#7ee08a", "#2f9e58"], style: "left:44%; width:16%; top:-18%; height:14%;" },
      ],
    },
  },
  {
    name: "Banane du big bang", rarity: "mythique", emoji: "🍌",
    deco: {
      filter: "saturate(1.6) brightness(1.1) drop-shadow(0 0 9px #ffd23f)",
      accessories: [
        { type: "text", text: "✨", style: "top:-10%; left:-10%; font-size:.4em;" },
        { type: "text", text: "✨", style: "bottom:-8%; right:-8%; font-size:.4em;" },
      ],
    },
  },
  {
    name: "Banane dimensionnelle", rarity: "mythique", emoji: "🍌",
    deco: {
      duplicates: [
        { transform: "translate(-14%,-10%) rotate(-10deg)", opacity: 0.4, filter: "hue-rotate(90deg)" },
        { transform: "translate(14%,10%) rotate(10deg)", opacity: 0.4, filter: "hue-rotate(200deg)" },
        { transform: "translate(0,-16%) rotate(0deg)", opacity: 0.3, filter: "hue-rotate(300deg)" },
      ],
    },
  },
  {
    name: "Banane éternité", rarity: "mythique", emoji: "🍌",
    deco: {
      filter: "brightness(1.15) saturate(0.9) drop-shadow(0 0 8px #fff3c4)",
      accessories: [{ type: "ring", color: "#fff3c4", style: "left:6%; right:6%; top:22%; height:56%;" }],
    },
  },
  {
    name: "Banane créatrice", rarity: "mythique", emoji: "🍌",
    deco: {
      filter: "brightness(1.15) saturate(1.1) drop-shadow(0 0 8px #ffd23f)",
      accessories: [
        { type: "ring", color: "#ffd23f", style: "left:16%; right:16%; top:-20%; height:18%;" },
        { type: "band", color: "#ffd23f", style: "left:20%; right:20%; top:-6%; height:10%;" },
      ],
    },
  },

  // ================= Secrète (10) — variantes bonus, ultra rares =================
  {
    name: "Banane qui parle", rarity: "secrete", emoji: "🍌",
    deco: {
      accessories: [{ type: "bubble", style: "right:-32%; top:-14%; width:48%; height:32%;" }],
    },
  },
  {
    name: "Banane du futur", rarity: "secrete", emoji: "🍌",
    deco: {
      filter: "saturate(1.2) brightness(1.05)",
      accessories: [
        { type: "band", color: "#1ab8d6", style: "left:12%; right:12%; top:34%; height:14%;" },
        { type: "band", color: "#1ab8d6", style: "left:48%; width:4%; top:0%; height:16%;" },
        { type: "orb", color: "#5ff0ff", style: "left:44%; width:12%; height:12%; top:-8%;" },
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
        { type: "ring", color: "#333", style: "left:14%; top:34%; width:20%; height:20%; background:rgba(255,255,255,.35);" },
        { type: "ring", color: "#333", style: "right:14%; top:34%; width:20%; height:20%; background:rgba(255,255,255,.35);" },
        { type: "band", color: "#333", style: "left:44%; width:12%; top:41%; height:3%;" },
        { type: "band", color: "#4a3520", style: "left:36%; width:28%; top:54%; height:6%;" },
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
        { type: "band", color: "#1a1a1a", style: "left:18%; right:18%; top:-10%; height:8%;" },
        { type: "band", color: "#1a1a1a", style: "left:30%; right:30%; top:-26%; height:18%;" },
        { type: "peak-out-right", color: "#c81d25", style: "left:38%; bottom:-6%; width:10%; height:10%;" },
        { type: "peak-out-left", color: "#c81d25", style: "right:38%; bottom:-6%; width:10%; height:10%;" },
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
      accessories: [{ type: "text", text: "🏆", style: "top:-14%; right:-14%; font-size:0.6em;" }],
    },
  },
  {
    name: "Banane infinie", rarity: "secrete", emoji: "🍌",
    deco: {
      filter: "saturate(1.2) drop-shadow(0 0 5px #ffe37a)",
      accessories: [{ type: "text", text: "♾️", style: "bottom:-10%; right:-12%; font-size:0.6em;" }],
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

const TOTAL_NORMAL = NORMAL_BANANAS.length; // 100
const TOTAL_SECRET = SECRET_BANANAS.length; // 10
