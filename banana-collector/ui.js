/* ============================================================
   Banana Collector — Interface (rendu DOM, onglets, animations)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const els = {
    statCollection: document.getElementById("stat-collection"),
    statCoins: document.getElementById("stat-coins"),
    tabButtons: Array.from(document.querySelectorAll(".tab-btn")),
    tabPanels: Array.from(document.querySelectorAll(".tab-panel")),
    harvestBtn: document.getElementById("harvest-btn"),
    lastBanana: document.getElementById("last-banana"),
    collectionGrid: document.getElementById("collection-grid"),
    secretGrid: document.getElementById("secret-grid"),
    secretSection: document.getElementById("secret-section"),
    progressBarFill: document.getElementById("progress-bar-fill"),
    progressLabel: document.getElementById("progress-label"),
    shopList: document.getElementById("shop-list"),
    questsList: document.getElementById("quests-list"),
    muteBtn: document.getElementById("mute-btn"),
    watchAdBtn: document.getElementById("watch-ad-btn"),
    adQuota: document.getElementById("ad-quota"),
    statsPanel: document.getElementById("stats-content"),
    overlay: document.getElementById("overlay"),
    overlayContent: document.getElementById("overlay-content"),
    resetBtn: document.getElementById("reset-btn"),
    confirmModal: document.getElementById("confirm-modal"),
    confirmYes: document.getElementById("confirm-yes"),
    confirmNo: document.getElementById("confirm-no"),
    toastLayer: document.getElementById("toast-layer"),
    minigamesMenu: document.getElementById("minigames-menu"),
    openCatchGame: document.getElementById("open-catch-game"),
    openWheelGame: document.getElementById("open-wheel-game"),
    catchBestLabel: document.getElementById("catch-best-label"),
    wheelStatusLabel: document.getElementById("wheel-status-label"),
    minigameCatch: document.getElementById("minigame-catch"),
    catchTimer: document.getElementById("catch-timer"),
    catchScore: document.getElementById("catch-score"),
    catchArea: document.getElementById("catch-area"),
    catchStartOverlay: document.getElementById("catch-start-overlay"),
    catchStartBtn: document.getElementById("catch-start-btn"),
    catchResult: document.getElementById("catch-result"),
    minigameWheel: document.getElementById("minigame-wheel"),
    wheelDisc: document.getElementById("wheel-disc"),
    wheelSpinBtn: document.getElementById("wheel-spin-btn"),
    wheelStatus: document.getElementById("wheel-status"),
    achievementsPanel: document.getElementById("achievements-content"),
    accountBtn: document.getElementById("account-btn"),
    accountModal: document.getElementById("account-modal"),
    accountModalContent: document.getElementById("account-modal-content"),
    accountModalClose: document.getElementById("account-modal-close"),
    marketLocked: document.getElementById("market-locked"),
    marketContent: document.getElementById("market-content"),
    marketTabBuy: document.getElementById("market-tab-buy"),
    marketTabSell: document.getElementById("market-tab-sell"),
    marketBuyView: document.getElementById("market-buy-view"),
    marketSellView: document.getElementById("market-sell-view"),
    marketListings: document.getElementById("market-listings"),
    marketSellPicker: document.getElementById("market-sell-picker"),
    marketSellQuantity: document.getElementById("market-sell-quantity"),
    marketSellPrice: document.getElementById("market-sell-price"),
    marketSellSubmitBtn: document.getElementById("market-sell-submit-btn"),
    marketSellError: document.getElementById("market-sell-error"),
    marketMyListings: document.getElementById("market-my-listings"),
    combatTabSolo: document.getElementById("combat-tab-solo"),
    combatTabPvp: document.getElementById("combat-tab-pvp"),
    combatSoloView: document.getElementById("combat-solo-view"),
    combatPvpView: document.getElementById("combat-pvp-view"),
    pvpLocked: document.getElementById("pvp-locked"),
    pvpContent: document.getElementById("pvp-content"),
    pvpReports: document.getElementById("pvp-reports"),
    pvpTeamPicker: document.getElementById("pvp-team-picker"),
    pvpTeamCount: document.getElementById("pvp-team-count"),
    pvpSaveTeamBtn: document.getElementById("pvp-save-team-btn"),
    pvpTeamError: document.getElementById("pvp-team-error"),
    pvpFindBtn: document.getElementById("pvp-find-btn"),
    pvpOpponentCard: document.getElementById("pvp-opponent-card"),
    pvpAttackBtn: document.getElementById("pvp-attack-btn"),
    pvpAttackResult: document.getElementById("pvp-attack-result"),
    pveBananaSelect: document.getElementById("pve-banana-select"),
    pvePlayerFighter: document.getElementById("pve-player-fighter"),
    pveEnemyFighter: document.getElementById("pve-enemy-fighter"),
    pveVsMark: document.getElementById("pve-vs-mark"),
    pveFightBtn: document.getElementById("pve-fight-btn"),
    pveResult: document.getElementById("pve-result"),
    pveStageList: document.getElementById("pve-stage-list"),
    leaderboardTabCollection: document.getElementById("leaderboard-tab-collection"),
    leaderboardTabPvp: document.getElementById("leaderboard-tab-pvp"),
    leaderboardTabPve: document.getElementById("leaderboard-tab-pve"),
    leaderboardContent: document.getElementById("leaderboard-content"),
    progressionTabCollection: document.getElementById("progression-tab-collection"),
    progressionTabQuetes: document.getElementById("progression-tab-quetes"),
    progressionTabMinijeux: document.getElementById("progression-tab-minijeux"),
    progressionCollectionView: document.getElementById("progression-collection-view"),
    progressionQuetesView: document.getElementById("progression-quetes-view"),
    progressionMinijeuxView: document.getElementById("progression-minijeux-view"),
    economieTabBoutique: document.getElementById("economie-tab-boutique"),
    economieTabMarche: document.getElementById("economie-tab-marche"),
    economieTabPub: document.getElementById("economie-tab-pub"),
    economieBoutiqueView: document.getElementById("economie-boutique-view"),
    economieMarcheView: document.getElementById("economie-marche-view"),
    economiePubView: document.getElementById("economie-pub-view"),
    bilanTabClassement: document.getElementById("bilan-tab-classement"),
    bilanTabStats: document.getElementById("bilan-tab-stats"),
    bilanClassementView: document.getElementById("bilan-classement-view"),
    bilanStatsView: document.getElementById("bilan-stats-view"),
  };

  /* ---------------- Onglets ---------------- */

  let progressionView = "collection"; // "collection" | "quetes" | "minijeux"
  let economieView = "boutique"; // "boutique" | "marche" | "pub"
  let bilanView = "classement"; // "classement" | "stats"

  function showProgressionView(view) {
    progressionView = view;
    els.progressionTabCollection.classList.toggle("active", view === "collection");
    els.progressionTabQuetes.classList.toggle("active", view === "quetes");
    els.progressionTabMinijeux.classList.toggle("active", view === "minijeux");
    els.progressionCollectionView.classList.toggle("hidden", view !== "collection");
    els.progressionQuetesView.classList.toggle("hidden", view !== "quetes");
    els.progressionMinijeuxView.classList.toggle("hidden", view !== "minijeux");
    if (view === "collection") renderCollection();
    if (view === "quetes") renderQuests();
    if (view === "minijeux") showMinigamesMenu();
  }

  els.progressionTabCollection.addEventListener("click", () => showProgressionView("collection"));
  els.progressionTabQuetes.addEventListener("click", () => showProgressionView("quetes"));
  els.progressionTabMinijeux.addEventListener("click", () => showProgressionView("minijeux"));

  function showEconomieView(view) {
    economieView = view;
    els.economieTabBoutique.classList.toggle("active", view === "boutique");
    els.economieTabMarche.classList.toggle("active", view === "marche");
    els.economieTabPub.classList.toggle("active", view === "pub");
    els.economieBoutiqueView.classList.toggle("hidden", view !== "boutique");
    els.economieMarcheView.classList.toggle("hidden", view !== "marche");
    els.economiePubView.classList.toggle("hidden", view !== "pub");
    if (view === "boutique") renderShop();
    if (view === "marche") renderMarketTab();
    if (view === "pub") renderAdTab();
  }

  els.economieTabBoutique.addEventListener("click", () => showEconomieView("boutique"));
  els.economieTabMarche.addEventListener("click", () => showEconomieView("marche"));
  els.economieTabPub.addEventListener("click", () => showEconomieView("pub"));

  function showBilanView(view) {
    bilanView = view;
    els.bilanTabClassement.classList.toggle("active", view === "classement");
    els.bilanTabStats.classList.toggle("active", view === "stats");
    els.bilanClassementView.classList.toggle("hidden", view !== "classement");
    els.bilanStatsView.classList.toggle("hidden", view !== "stats");
    if (view === "classement") { showLeaderboardView(leaderboardView); startLeaderboardPolling(); }
    else { stopLeaderboardPolling(); renderStats(); renderAchievements(); }
  }

  els.bilanTabClassement.addEventListener("click", () => showBilanView("classement"));
  els.bilanTabStats.addEventListener("click", () => showBilanView("stats"));

  function showTab(name) {
    els.tabButtons.forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
    els.tabPanels.forEach((p) => p.classList.toggle("active", p.id === `tab-${name}`));
    if (name === "progression") showProgressionView(progressionView);
    if (name === "economie") showEconomieView(economieView);
    if (name === "combat") showCombatView(combatView);
    if (name === "bilan") showBilanView(bilanView);
    else stopLeaderboardPolling();
  }

  els.tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => showTab(btn.dataset.tab));
  });

  /* ---------------- En-tête ---------------- */

  function renderHeader() {
    const discoveredNormal = state.discovered.filter((id) => !BANANAS_BY_ID[id].secret).length;
    els.statCollection.textContent = `Collection : ${discoveredNormal} / ${TOTAL_NORMAL}`;
    els.statCoins.textContent = `🪙 Pièces : ${state.coins}`;
  }

  /* ---------------- Icône banane (fusion glyphe + accessoires) ---------------- */

  // Construit une seule banane visuellement cohérente : le glyphe 🍌 reçoit un
  // filtre CSS (teinte/lueur) et, si besoin, de petits accessoires (bandeau,
  // chapeau, cape...) posés directement dessus — jamais un second emoji à côté.
  function bananaIconHTML(banana, sizeRem) {
    const deco = banana.deco;
    const sizeStyle = sizeRem ? `--icon-size:${sizeRem}rem;` : "";

    let filter = "";
    let transform = "";
    let glyphClass = "";
    let containerStyle = "";
    let extraGlyphs = "";
    let decoHTML = "";

    if (deco) {
      filter = deco.filter || "";
      transform = deco.transform || "";
      glyphClass = deco.glyphClass || "";
      containerStyle = deco.containerStyle || "";
      if (deco.scale) transform += ` scale(${deco.scale})`;

      if (deco.duplicates) {
        extraGlyphs = deco.duplicates.map((d) => `
          <span class="banana-icon-glyph" style="transform:${d.transform || ""}; opacity:${d.opacity ?? 1}; filter:${d.filter || ""};">${banana.emoji}</span>
        `).join("");
      }
      if (deco.accessories) {
        decoHTML = deco.accessories.map((a) => {
          if (a.type === "text") {
            return `<span class="deco deco-text" style="${a.style || ""}">${a.text || ""}</span>`;
          }
          const colorVars = a.colors
            ? `--deco-color-a:${a.colors[0]}; --deco-color-b:${a.colors[1]};`
            : `--deco-color-a:${a.color || "#999"}; --deco-color-b:${a.color || "#999"};`;
          return `<span class="deco deco-${a.type}" style="${colorVars} ${a.style || ""}"></span>`;
        }).join("");
      }
    }

    if (banana.image) {
      return `
        <div class="banana-icon" style="${sizeStyle} ${containerStyle}">
          <img class="banana-icon-img" src="${banana.image}" alt="${banana.name}" loading="lazy" />
        </div>
      `;
    }

    return `
      <div class="banana-icon" style="${sizeStyle} ${containerStyle}">
        <span class="banana-icon-glyph ${glyphClass}" style="filter:${filter}; transform:${transform};">${banana.emoji}</span>
        ${extraGlyphs}
        ${decoHTML}
      </div>
    `;
  }

  /* ---------------- Récolte ---------------- */

  let busy = false;

  // Carte "héros" utilisée uniquement pour la dernière banane récoltée —
  // en grand, avec une lueur de fond, distincte des petites cartes compactes
  // de la grille de collection.
  function bananaCardHTML(banana, count, isNew, coinsEarned) {
    const rarity = RARITIES[banana.rarity];
    const displayCoins = coinsEarned != null ? coinsEarned : banana.value;
    return `
      <div class="harvest-reveal-card rarity-${banana.rarity} ${isNew ? "is-new" : ""}" style="--rarity-color:${rarity.color}; --rarity-glow:${rarity.glow};">
        ${isNew ? '<div class="new-badge">NOUVELLE BANANE !</div>' : ""}
        <div class="harvest-reveal-glow"></div>
        ${bananaIconHTML(banana, 5.5)}
        <div class="harvest-reveal-name">${banana.name}</div>
        <div class="harvest-reveal-rarity-pill">${rarity.label}</div>
        <div class="harvest-reveal-meta">
          <span>🪙 +${displayCoins}</span>
          <span>x${count}</span>
        </div>
      </div>
    `;
  }

  function harvest() {
    if (busy) return;
    busy = true;
    els.harvestBtn.disabled = true;

    const result = rollBanana();
    const { banana, isNew, rarity, coinsEarned } = result;

    if (rarity === "mythique" || rarity === "secrete") SFX.harvestMythic();
    else if (rarity === "legendaire" || rarity === "epique") SFX.harvestEpic();
    else if (rarity === "rare") SFX.harvestRare();
    else SFX.harvestCommon();

    renderHeader();
    CLOUD.scheduleSync();
    els.lastBanana.innerHTML = bananaCardHTML(banana, state.counts[banana.id], isNew, coinsEarned);
    const card = els.lastBanana.querySelector(".harvest-reveal-card");
    card.classList.add("pop-in");

    if (isRareOrAbove(rarity)) {
      card.classList.add("glow-pulse");
      spawnConfetti(rarity === "epique" || rarity === "rare" ? 14 : 28);
    }

    if (rarity === "legendaire") {
      showBanner("⭐ LÉGENDAIRE ! ⭐", banana, 1800);
    } else if (rarity === "mythique" || rarity === "secrete") {
      showEpicOverlay(banana, rarity);
    } else if (isNew) {
      spawnConfetti(10);
    }

    const unlocked = checkAchievements();
    if (unlocked.length > 0) {
      renderHeader();
      showAchievementToasts(unlocked);
    }
    const questsDone = checkQuests();
    if (questsDone.length > 0) {
      renderHeader();
      showQuestToasts(questsDone);
    }

    const cooldown = rarity === "mythique" || rarity === "secrete" ? 300 : 350;
    setTimeout(() => {
      busy = false;
      els.harvestBtn.disabled = false;
    }, cooldown);
  }

  els.harvestBtn.addEventListener("click", harvest);

  /* ---------------- Animations ---------------- */

  function spawnConfetti(count) {
    const emojis = ["🍌", "✨", "🎉", "⭐"];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.animationDuration = 1.2 + Math.random() * 1.2 + "s";
      piece.style.fontSize = 14 + Math.random() * 16 + "px";
      els.toastLayer.appendChild(piece);
      piece.addEventListener("animationend", () => piece.remove());
    }
  }

  function showBanner(title, banana, duration) {
    const banner = document.createElement("div");
    banner.className = "rare-banner";
    const bannerGlyph = banana.image ? `<img class="inline-banana-icon" src="${banana.image}" alt="" />` : banana.emoji;
    banner.innerHTML = `<span class="rare-banner-title">${title}</span><span class="rare-banner-name">${bannerGlyph} ${banana.name}</span>`;
    els.toastLayer.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add("show"));
    setTimeout(() => {
      banner.classList.remove("show");
      setTimeout(() => banner.remove(), 400);
    }, duration);
  }

  // playSound=false est utilisé au démarrage (succès déjà acquis détectés
  // au chargement) : un son n'est jamais déclenché sans geste préalable de
  // l'utilisateur, pour respecter la politique de lecture audio auto des
  // navigateurs.
  function showAchievementToasts(achievements, playSound = true) {
    achievements.forEach((ach, i) => {
      setTimeout(() => {
        if (playSound) SFX.achievement();
        showBanner("🏆 SUCCÈS DÉBLOQUÉ !", { emoji: ach.icon, name: `${ach.name} (+${ach.reward} 🪙)` }, 2200);
        spawnConfetti(15);
      }, i * 900);
    });
  }

  function showQuestToasts(quests, playSound = true) {
    quests.forEach((quest, i) => {
      setTimeout(() => {
        if (playSound) SFX.quest();
        showBanner("📜 QUÊTE TERMINÉE !", { emoji: "📜", name: `${quest.desc} (+${quest.reward} 🪙)` }, 2200);
        spawnConfetti(12);
      }, i * 900);
    });
  }

  function showEpicOverlay(banana, rarity) {
    const label = rarity === "secrete" ? "BANANE SECRÈTE !" : "BANANE MYTHIQUE !";
    els.overlayContent.innerHTML = `
      <div class="epic-lines">
        <div class="epic-sparkles">✨✨✨</div>
        <div class="epic-title">${label}</div>
        <div class="epic-emoji">${bananaIconHTML(banana, 4)}</div>
        <div class="epic-sub">TU AS TROUVÉ UNE BANANE EXTRÊMEMENT RARE !</div>
        <div class="epic-name">${banana.name}</div>
        <div class="epic-sparkles">✨✨✨</div>
      </div>
      <button class="btn epic-close">Encaisser 🪙</button>
    `;
    els.overlay.classList.remove("hidden");
    requestAnimationFrame(() => els.overlay.classList.add("show"));
    spawnConfetti(40);

    const close = () => {
      els.overlay.classList.remove("show");
      setTimeout(() => els.overlay.classList.add("hidden"), 350);
    };
    els.overlayContent.querySelector(".epic-close").addEventListener("click", close);
    els.overlay.addEventListener("click", (e) => {
      if (e.target === els.overlay) close();
    }, { once: true });
    setTimeout(close, 4500);
  }

  /* ---------------- Collection ---------------- */

  function renderCollection() {
    const discoveredNormal = state.discovered.filter((id) => !BANANAS_BY_ID[id].secret).length;
    els.progressLabel.textContent = `Collection : ${discoveredNormal} / ${TOTAL_NORMAL}`;
    els.progressBarFill.style.width = `${(discoveredNormal / TOTAL_NORMAL) * 100}%`;

    els.collectionGrid.innerHTML = NORMAL_BANANAS.map((banana) => {
      const count = state.counts[banana.id] || 0;
      const discovered = state.discovered.includes(banana.id);
      if (!discovered) {
        return `
          <div class="banana-card locked">
            <div class="banana-emoji silhouette">🍌</div>
            <div class="banana-name">???</div>
            <div class="banana-rarity">???</div>
            <div class="banana-value">🪙 ?</div>
            <div class="banana-count">x0</div>
          </div>
        `;
      }
      const rarity = RARITIES[banana.rarity];
      return `
        <div class="banana-card rarity-${banana.rarity}" style="--rarity-color:${rarity.color}; --rarity-glow:${rarity.glow};">
          ${bananaIconHTML(banana)}
          <div class="banana-name">${banana.name}</div>
          <div class="banana-rarity">${rarity.label}</div>
          <div class="banana-value">🪙 ${banana.value}</div>
          <div class="banana-count">x${count}</div>
        </div>
      `;
    }).join("");

    const discoveredSecrets = SECRET_BANANAS.filter((b) => state.discovered.includes(b.id));
    els.secretSection.style.display = "block";
    document.getElementById("secret-count").textContent = `${discoveredSecrets.length} / ${TOTAL_SECRET}`;
    if (discoveredSecrets.length === 0) {
      els.secretGrid.innerHTML = `<p class="secret-hint">🕵️ Des bananes secrètes se cachent quelque part... continue de récolter pour percer leur mystère !</p>`;
    } else {
      els.secretGrid.innerHTML = discoveredSecrets.map((banana) => {
        const count = state.counts[banana.id] || 0;
        const rarity = RARITIES[banana.rarity];
        return `
          <div class="banana-card rarity-${banana.rarity}" style="--rarity-color:${rarity.color}; --rarity-glow:${rarity.glow};">
            ${bananaIconHTML(banana)}
            <div class="banana-name">${banana.name}</div>
            <div class="banana-rarity">${rarity.label}</div>
            <div class="banana-value">🪙 ${banana.value}</div>
            <div class="banana-count">x${count}</div>
          </div>
        `;
      }).join("");
    }
  }

  /* ---------------- Boutique ---------------- */

  function renderShop() {
    els.shopList.innerHTML = UPGRADES.map((upgrade) => {
      const level = state.upgrades[upgrade.id] || 0;
      const maxed = level >= upgrade.maxLevel;
      const price = upgradePrice(upgrade);
      const canBuy = !maxed && state.coins >= price;
      return `
        <div class="shop-item">
          <div class="shop-item-info">
            <div class="shop-item-name">${upgrade.name} <span class="shop-item-level">Niveau ${level}/${upgrade.maxLevel}</span></div>
            <div class="shop-item-desc">${upgrade.desc}</div>
          </div>
          <button class="btn buy-btn" data-id="${upgrade.id}" ${maxed ? "disabled" : ""} ${!canBuy && !maxed ? "disabled" : ""}>
            ${maxed ? "MAX" : `🪙 ${price}`}
          </button>
        </div>
      `;
    }).join("");

    els.shopList.querySelectorAll(".buy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const res = buyUpgrade(btn.dataset.id);
        if (res.ok) {
          SFX.buy();
          renderHeader();
          renderShop();
          updateAutoHarvestTimer();
          const unlocked = checkAchievements();
          if (unlocked.length > 0) {
            renderHeader();
            showAchievementToasts(unlocked);
          }
          const questsDone = checkQuests();
          if (questsDone.length > 0) {
            renderHeader();
            showQuestToasts(questsDone);
          }
        }
      });
    });
  }

  /* ---------------- Quêtes quotidiennes ---------------- */

  function renderQuests() {
    const quests = questsForToday();
    els.questsList.innerHTML = quests.map((quest) => {
      const pct = Math.round((quest.progress / quest.need) * 100);
      return `
        <div class="quest-item ${quest.done ? "done" : ""}">
          <div class="quest-item-top">
            <span class="quest-item-desc">${quest.done ? "✅ " : ""}${quest.desc}</span>
            <span class="quest-item-reward">🪙 +${quest.reward}</span>
          </div>
          <div class="quest-progress-bar"><div class="quest-progress-fill" style="width:${pct}%;"></div></div>
          <div class="quest-item-count">${quest.progress} / ${quest.need}</div>
        </div>
      `;
    }).join("");
  }

  /* ---------------- Marché ---------------- */

  let marketView = "buy"; // "buy" | "sell"
  let marketSelectedBananaId = null;

  function sellableBananas() {
    return state.discovered
      .map((id) => BANANAS_BY_ID[id])
      .filter((b) => (state.counts[b.id] || 0) > 0)
      .sort((a, b) => rarityIndex(b.rarity) - rarityIndex(a.rarity) || b.value - a.value);
  }

  function renderMarketSellPicker() {
    const owned = sellableBananas();
    if (owned.length === 0) {
      els.marketSellPicker.innerHTML = `<p class="secret-hint">Récolte des bananes avant de pouvoir en vendre !</p>`;
      marketSelectedBananaId = null;
      return;
    }
    if (!marketSelectedBananaId || !owned.some((b) => b.id === marketSelectedBananaId)) {
      marketSelectedBananaId = owned[0].id;
    }
    els.marketSellPicker.innerHTML = owned.map((b) => {
      const selected = b.id === marketSelectedBananaId;
      return `
        <button class="market-sell-option ${selected ? "selected" : ""}" data-id="${b.id}" title="${b.name}">
          ${bananaIconHTML(b, 2)}
          <span class="market-sell-option-count">x${state.counts[b.id] || 0}</span>
        </button>
      `;
    }).join("");
    els.marketSellPicker.querySelectorAll(".market-sell-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        marketSelectedBananaId = Number(btn.dataset.id);
        renderMarketSellPicker();
      });
    });
  }

  function marketListingCardHTML(listing, mode) {
    const banana = BANANAS_BY_ID[listing.banana_id];
    if (!banana) return "";
    const rarity = RARITIES[banana.rarity];
    const total = listing.quantity * listing.unit_price;
    const statusLabel = listing.status === "active" ? "En vente" : listing.status === "sold" ? "Vendue" : "Annulée";
    return `
      <div class="market-listing-card rarity-${banana.rarity}" style="--rarity-color:${rarity.color}; --rarity-glow:${rarity.glow};">
        ${bananaIconHTML(banana, 2.2)}
        <div class="banana-name">${banana.name}</div>
        ${mode === "buy" ? `<div class="market-listing-seller">par ${listing.sellerUsername}</div>` : ""}
        <div class="market-listing-qty">x${listing.quantity}</div>
        <div class="market-listing-price">🪙 ${listing.unit_price} / unité</div>
        ${mode === "sell" ? `<div class="market-listing-status ${listing.status}">${statusLabel}</div>` : ""}
        ${mode === "buy" ? `<button class="btn market-buy-btn" data-listing="${listing.id}" data-qty="${listing.quantity}" data-banana="${listing.banana_id}">🪙 Acheter tout (${total})</button>` : ""}
        ${mode === "sell" && listing.status === "active" ? `<button class="btn danger market-cancel-btn" data-listing="${listing.id}">Annuler</button>` : ""}
      </div>
    `;
  }

  async function renderMarketBuyView() {
    els.marketListings.innerHTML = `<p class="secret-hint">Chargement...</p>`;
    const listings = await CLOUD.fetchActiveListings();
    const others = listings.filter((l) => l.seller_id !== CLOUD.currentUserId());
    if (others.length === 0) {
      els.marketListings.innerHTML = `<p class="secret-hint">Aucune annonce pour le moment. Reviens plus tard !</p>`;
      return;
    }
    els.marketListings.innerHTML = others.map((l) => marketListingCardHTML(l, "buy")).join("");
    els.marketListings.querySelectorAll(".market-buy-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        btn.disabled = true;
        btn.textContent = "⏳...";
        const listingId = btn.dataset.listing;
        const qty = Number(btn.dataset.qty);
        const bananaId = Number(btn.dataset.banana);
        const result = await CLOUD.buyListing(listingId, qty);
        if (!result.ok) {
          showBanner("❌ Achat impossible", { emoji: "🚫", name: result.reason || "Erreur" }, 1800);
          renderMarketBuyView();
          return;
        }
        state.counts[bananaId] = (state.counts[bananaId] || 0) + qty;
        if (!state.discovered.includes(bananaId)) state.discovered.push(bananaId);
        if (result.newCoins != null) state.coins = result.newCoins;
        saveState();
        SFX.buy();
        renderHeader();
        spawnConfetti(10);
        showBanner("🛍️ ACHAT RÉUSSI !", { emoji: "🪙", name: `${BANANAS_BY_ID[bananaId].name} x${qty}` }, 1800);
        CLOUD.scheduleSync();
        renderMarketBuyView();
      });
    });
  }

  async function renderMarketMyListings() {
    els.marketMyListings.innerHTML = `<p class="secret-hint">Chargement...</p>`;
    // Les annonces annulées sont retirées de l'affichage pour de bon (elles
    // n'apportent rien une fois annulées et allongeraient la liste inutilement).
    const listings = (await CLOUD.fetchMyListings()).filter((l) => l.status !== "cancelled");
    if (listings.length === 0) {
      els.marketMyListings.innerHTML = `<p class="secret-hint">Tu n'as pas encore d'annonce.</p>`;
      return;
    }
    els.marketMyListings.innerHTML = listings.map((l) => marketListingCardHTML(l, "sell")).join("");
    els.marketMyListings.querySelectorAll(".market-cancel-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        btn.disabled = true;
        const listingId = btn.dataset.listing;
        const listing = listings.find((l) => l.id === listingId);
        const result = await CLOUD.cancelListing(listingId);
        if (!result.ok) {
          showBanner("❌ Impossible d'annuler", { emoji: "🚫", name: result.reason || "Erreur" }, 1800);
          btn.disabled = false;
          return;
        }
        if (listing) {
          state.counts[listing.banana_id] = (state.counts[listing.banana_id] || 0) + listing.quantity;
          saveState();
        }
        renderMarketSellPicker();
        renderMarketMyListings();
        CLOUD.scheduleSync();
      });
    });
  }

  function showMarketView(view) {
    marketView = view;
    els.marketTabBuy.classList.toggle("active", view === "buy");
    els.marketTabSell.classList.toggle("active", view === "sell");
    els.marketBuyView.classList.toggle("hidden", view !== "buy");
    els.marketSellView.classList.toggle("hidden", view !== "sell");
    if (view === "buy") {
      renderMarketBuyView();
    } else {
      renderMarketSellPicker();
      renderMarketMyListings();
    }
  }

  async function renderMarketTab() {
    if (!CLOUD.available || !CLOUD.isLinked()) {
      els.marketLocked.classList.remove("hidden");
      els.marketContent.classList.add("hidden");
      return;
    }
    els.marketLocked.classList.add("hidden");
    els.marketContent.classList.remove("hidden");
    // Pousse tout de suite avant d'agir : évite un faux "solde insuffisant"
    // si une action locale récente n'a pas encore eu le temps d'être
    // synchronisée avec le serveur.
    await CLOUD.pushAll();
    showMarketView(marketView);
  }

  els.marketTabBuy.addEventListener("click", () => showMarketView("buy"));
  els.marketTabSell.addEventListener("click", () => showMarketView("sell"));

  els.marketSellSubmitBtn.addEventListener("click", async () => {
    els.marketSellError.textContent = "";
    if (!marketSelectedBananaId) {
      els.marketSellError.textContent = "Choisis une banane à vendre.";
      return;
    }
    const quantity = Math.floor(Number(els.marketSellQuantity.value));
    const price = Math.floor(Number(els.marketSellPrice.value));
    const owned = state.counts[marketSelectedBananaId] || 0;
    if (!quantity || quantity <= 0) {
      els.marketSellError.textContent = "Quantité invalide.";
      return;
    }
    if (quantity > owned) {
      els.marketSellError.textContent = `Tu n'as que ${owned} exemplaire(s).`;
      return;
    }
    if (!price || price <= 0) {
      els.marketSellError.textContent = "Prix invalide.";
      return;
    }

    els.marketSellSubmitBtn.disabled = true;
    els.marketSellSubmitBtn.textContent = "⏳...";
    const result = await CLOUD.createListing(marketSelectedBananaId, quantity, price);
    els.marketSellSubmitBtn.disabled = false;
    els.marketSellSubmitBtn.textContent = "Mettre en vente";

    if (!result.ok) {
      els.marketSellError.textContent = result.reason || "Impossible de créer l'annonce.";
      return;
    }

    state.counts[marketSelectedBananaId] -= quantity;
    saveState();
    SFX.buy();
    els.marketSellQuantity.value = "";
    els.marketSellPrice.value = "";
    renderMarketSellPicker();
    renderMarketMyListings();
    CLOUD.scheduleSync();
  });

  /* ---------------- Publicité récompensée ---------------- */

  let adPlaying = false;

  function renderAdTab() {
    const remaining = adsRemainingToday();
    els.adQuota.textContent = remaining > 0
      ? `${remaining} / ${maxAdsPerDay()} pubs disponibles aujourd'hui`
      : "Plus de pub disponible aujourd'hui — reviens demain !";
    els.watchAdBtn.disabled = adPlaying || remaining <= 0;
    els.watchAdBtn.textContent = `🎬 Regarder une pub (+${AD_REWARD} 🪙)`;
  }

  els.watchAdBtn.addEventListener("click", () => {
    if (adPlaying || adsRemainingToday() <= 0) return;
    adPlaying = true;
    els.watchAdBtn.disabled = true;
    els.watchAdBtn.textContent = "⏳ Chargement de la pub...";

    // Simulation du délai de chargement/visionnage d'une pub réelle.
    setTimeout(() => {
      const coinsEarned = grantAdReward();
      SFX.coin();
      renderHeader();
      adPlaying = false;
      renderAdTab();
      spawnConfetti(16);
      showBanner("🎉 MERCI D'AVOIR REGARDÉ !", { emoji: "🪙", name: `+${coinsEarned} pièces` }, 1600);
      const unlocked = checkAchievements();
      if (unlocked.length > 0) {
        renderHeader();
        showAchievementToasts(unlocked);
      }
      const questsDone = checkQuests();
      if (questsDone.length > 0) {
        renderHeader();
        showQuestToasts(questsDone);
      }
    }, 1500);
  });

  /* ---------------- Mini-jeux : menu ---------------- */

  function showMinigameView(view) {
    els.minigamesMenu.classList.toggle("hidden", view !== "menu");
    els.minigameCatch.classList.toggle("hidden", view !== "catch");
    els.minigameWheel.classList.toggle("hidden", view !== "wheel");
  }

  function renderMinigamesMenu() {
    els.catchBestLabel.textContent = state.catchGame.bestScore > 0
      ? `🏆 Record : ${state.catchGame.bestScore} bananes`
      : "Pas encore joué";
    els.wheelStatusLabel.textContent = canSpinWheelToday() ? "🎁 Tour disponible !" : "✅ Déjà tourné aujourd'hui";
  }

  function showMinigamesMenu() {
    stopCatchGame();
    showMinigameView("menu");
    renderMinigamesMenu();
  }

  els.openCatchGame.addEventListener("click", () => {
    showMinigameView("catch");
    resetCatchGameView();
  });
  els.openWheelGame.addEventListener("click", () => {
    showMinigameView("wheel");
    renderWheelView();
  });
  document.querySelectorAll("[data-back]").forEach((btn) => {
    btn.addEventListener("click", showMinigamesMenu);
  });

  /* ---------------- Mini-jeu : Attrape les bananes ---------------- */

  let catchState = null;

  const ROTTEN_BANANA_VISUAL = {
    emoji: "🍌",
    deco: {
      filter: "sepia(0.7) saturate(0.35) brightness(0.55) hue-rotate(-15deg)",
      accessories: [{ cls: "text", text: "🪰", style: "top:-10%; right:-14%; font-size:.55em;" }],
    },
  };

  function setCatchLevelBackground(levelIndex) {
    els.catchArea.classList.remove("level-1", "level-2", "level-3");
    els.catchArea.classList.add(`level-${levelIndex + 1}`);
  }

  function resetCatchGameView() {
    els.catchStartOverlay.classList.remove("hidden");
    els.catchResult.classList.add("hidden");
    els.catchArea.querySelectorAll(".catch-item").forEach((el) => el.remove());
    setCatchLevelBackground(0);
    els.catchTimer.textContent = `⏱️ Niveau 1 — ${CATCH_LEVEL_DURATION_MS / 1000}s`;
    els.catchScore.textContent = "⭐ 0";
  }

  function stopCatchGame() {
    if (!catchState) return;
    clearTimeout(catchState.spawnTimer);
    clearInterval(catchState.tickTimer);
    clearTimeout(catchState.endTimer);
    els.catchArea.querySelectorAll(".catch-item").forEach((el) => el.remove());
    catchState = null;
  }

  function spawnCatchItem(levelConfig) {
    const isRotten = Math.random() < levelConfig.rottenChance;
    const item = document.createElement("div");
    item.className = "catch-item";
    item.style.left = `${5 + Math.random() * 85}%`;
    item.innerHTML = bananaIconHTML(isRotten ? ROTTEN_BANANA_VISUAL : { emoji: "🍌", deco: null });
    els.catchArea.appendChild(item);

    const areaHeight = els.catchArea.clientHeight;
    const fallDuration = levelConfig.fallMin + Math.random() * (levelConfig.fallMax - levelConfig.fallMin);
    requestAnimationFrame(() => {
      item.style.transitionDuration = `${fallDuration}s`;
      item.style.top = `${areaHeight + 20}px`;
    });

    const missTimer = setTimeout(() => item.remove(), fallDuration * 1000 + 50);

    item.addEventListener("click", () => {
      if (!catchState || !catchState.running) return;
      clearTimeout(missTimer);
      item.style.pointerEvents = "none";
      item.style.transition = "transform .15s ease, opacity .15s ease";
      if (isRotten) {
        catchState.rotten += 1;
        item.style.filter = "brightness(0.5) saturate(0)";
        SFX.lose();
      } else {
        catchState.good += 1;
        spawnConfetti(3);
        SFX.click();
      }
      item.style.transform = "scale(1.4)";
      item.style.opacity = "0";
      els.catchScore.textContent = `⭐ ${catchState.good}`;
      setTimeout(() => item.remove(), 160);
    });
  }

  function startCatchLevel(levelIndex) {
    if (!catchState) return;
    catchState.level = levelIndex;
    const levelConfig = CATCH_LEVELS[levelIndex];
    setCatchLevelBackground(levelIndex);
    showBanner(`🌴 NIVEAU ${levelIndex + 1} !`, { emoji: "🐒", name: levelConfig.label }, 1100);

    const scheduleSpawn = () => {
      catchState.spawnTimer = setTimeout(() => {
        if (!catchState || !catchState.running) return;
        spawnCatchItem(levelConfig);
        scheduleSpawn();
      }, levelConfig.spawnDelay);
    };
    scheduleSpawn();

    const levelStart = Date.now();
    catchState.tickTimer = setInterval(() => {
      const remaining = Math.max(0, CATCH_LEVEL_DURATION_MS - (Date.now() - levelStart));
      els.catchTimer.textContent = `⏱️ Niveau ${levelIndex + 1} — ${Math.ceil(remaining / 1000)}s`;
    }, 200);

    catchState.endTimer = setTimeout(() => {
      clearTimeout(catchState.spawnTimer);
      clearInterval(catchState.tickTimer);
      els.catchArea.querySelectorAll(".catch-item").forEach((el) => el.remove());
      if (levelIndex < CATCH_LEVELS.length - 1) {
        startCatchLevel(levelIndex + 1);
      } else {
        endCatchGame();
      }
    }, CATCH_LEVEL_DURATION_MS);
  }

  els.catchStartBtn.addEventListener("click", () => {
    stopCatchGame();
    els.catchStartOverlay.classList.add("hidden");
    els.catchResult.classList.add("hidden");
    catchState = { good: 0, rotten: 0, running: true, level: 0, spawnTimer: null, tickTimer: null, endTimer: null };
    startCatchLevel(0);
  });

  function endCatchGame() {
    if (!catchState) return;
    catchState.running = false;
    clearTimeout(catchState.spawnTimer);
    clearInterval(catchState.tickTimer);
    els.catchArea.querySelectorAll(".catch-item").forEach((el) => el.remove());

    const { good, rotten } = catchState;
    const coinsEarned = awardCatchGameResult(good, rotten);
    renderHeader();

    els.catchResult.innerHTML = `
      <div class="catch-result-title">🏁 Les 3 niveaux sont terminés !</div>
      <div class="catch-result-line">${good} bananes attrapées, ${rotten} pourries touchées</div>
      <div class="catch-result-coins">🪙 +${coinsEarned}</div>
      <button class="btn harvest-btn" id="catch-replay-btn">🔁 Rejouer</button>
    `;
    els.catchResult.classList.remove("hidden");
    els.catchResult.querySelector("#catch-replay-btn").addEventListener("click", () => {
      els.catchStartBtn.click();
    });

    if (good >= 6) spawnConfetti(20);
    catchState = null;
    renderMinigamesMenu();

    const unlocked = checkAchievements();
    if (unlocked.length > 0) {
      renderHeader();
      showAchievementToasts(unlocked);
    }
    const questsDone = checkQuests();
    if (questsDone.length > 0) {
      renderHeader();
      showQuestToasts(questsDone);
    }
  }

  /* ---------------- Mini-jeu : Roue de la fortune ---------------- */

  const WHEEL_SEGMENT_CENTER_ANGLES = [30, 90, 150, 210, 270, 330];
  let wheelSpinning = false;

  function renderWheelLabels() {
    els.wheelDisc.innerHTML = WHEEL_PRIZES.map((prize, i) => {
      // Le pivot est ancré en haut et grandit vers le bas (top:50%; height:38%),
      // donc à rotation nulle il pointe déjà vers 6h (180°) — d'où le -180
      // pour que l'angle du secteur (0° = 12h, sens horaire) soit respecté.
      const pivotAngle = WHEEL_SEGMENT_CENTER_ANGLES[i] - 180;
      return `
        <div class="wheel-label-pivot" style="transform: rotate(${pivotAngle}deg);">
          <span class="wheel-label" style="transform: translate(-50%, -50%) rotate(${-pivotAngle}deg);">${prize.coins}</span>
        </div>
      `;
    }).join("");
  }
  renderWheelLabels();

  function renderWheelView() {
    const canSpin = canSpinWheelToday();
    els.wheelSpinBtn.disabled = wheelSpinning || !canSpin;
    els.wheelSpinBtn.textContent = canSpin ? "🎡 Tourner la roue" : "✅ Déjà tourné aujourd'hui";
    els.wheelStatus.textContent = canSpin
      ? "Un tour gratuit par jour."
      : "Reviens demain pour un nouveau tour !";
  }

  els.wheelSpinBtn.addEventListener("click", () => {
    if (wheelSpinning || !canSpinWheelToday()) return;
    const result = spinWheel();
    if (!result.ok) {
      renderWheelView();
      return;
    }

    wheelSpinning = true;
    els.wheelSpinBtn.disabled = true;
    const centerAngle = WHEEL_SEGMENT_CENTER_ANGLES[result.index];
    const targetRotation = 360 * 5 + (360 - centerAngle);
    els.wheelDisc.style.transform = `rotate(${targetRotation}deg)`;

    setTimeout(() => {
      wheelSpinning = false;
      SFX.coin();
      renderHeader();
      renderWheelView();
      renderMinigamesMenu();
      spawnConfetti(result.coins >= 500 ? 30 : 14);
      showBanner(
        result.coins >= 500 ? "🎉 GROS LOT ! 🎉" : "🎁 BONUS DU JOUR !",
        { emoji: "🪙", name: `+${result.coins} pièces` },
        2000
      );
      const unlocked = checkAchievements();
      if (unlocked.length > 0) {
        renderHeader();
        showAchievementToasts(unlocked);
      }
      const questsDone = checkQuests();
      if (questsDone.length > 0) {
        renderHeader();
        showQuestToasts(questsDone);
      }
    }, 4100);
  });

  /* ---------------- Combat : l'Arène des Ananas ---------------- */

  let pveSelectedBananaId = null;
  let pveSelectedStage = 0;
  let pveFighting = false;

  function pveDiscoveredBananasSorted() {
    return state.discovered
      .map((id) => BANANAS_BY_ID[id])
      .sort((a, b) => rarityIndex(b.rarity) - rarityIndex(a.rarity) || b.value - a.value);
  }

  function renderPveBananaSelect() {
    const owned = pveDiscoveredBananasSorted();
    if (owned.length === 0) {
      els.pveBananaSelect.innerHTML = `<p class="secret-hint">Récolte au moins une banane avant de combattre !</p>`;
      pveSelectedBananaId = null;
      return;
    }
    if (!pveSelectedBananaId || !owned.some((b) => b.id === pveSelectedBananaId)) {
      pveSelectedBananaId = owned[0].id;
    }
    els.pveBananaSelect.innerHTML = owned.map((b) => {
      const stats = bananaCombatStats(b);
      const selected = b.id === pveSelectedBananaId;
      return `
        <button class="pve-banana-option ${selected ? "selected" : ""}" data-id="${b.id}" title="${b.name}">
          ${bananaIconHTML(b, 2)}
          <span class="pve-banana-stats">⚔️${stats.atk} 🛡️${stats.def}</span>
        </button>
      `;
    }).join("");
    els.pveBananaSelect.querySelectorAll(".pve-banana-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        pveSelectedBananaId = Number(btn.dataset.id);
        renderPveBananaSelect();
        renderPveFighters();
      });
    });
  }

  // Lueur de l'ennemi : une teinte par famille de fruit (10 familles réparties
  // sur le cercle chromatique), qui s'intensifie légèrement à mesure qu'on
  // avance dans les 6 niveaux de la famille.
  function pveStageGlow(stageIndex) {
    const family = Math.floor(stageIndex / 6);
    const levelInFamily = stageIndex % 6;
    const hue = (family * 36) % 360;
    const light = 58 - levelInFamily * 4;
    return `hsl(${hue}, 70%, ${light}%)`;
  }

  function renderPveFighters() {
    const enemy = FRUIT_ENEMIES[pveSelectedStage];
    const family = Math.floor(pveSelectedStage / 6);
    const levelInFamily = pveSelectedStage % 6;
    const locked = pveSelectedStage > maxPlayablePveStage();
    const playerBanana = pveSelectedBananaId ? BANANAS_BY_ID[pveSelectedBananaId] : null;
    const playerStats = playerBanana ? bananaCombatStats(playerBanana) : null;
    const enemySize = 2.6 + family * 0.15 + levelInFamily * 0.12;

    els.pvePlayerFighter.innerHTML = playerBanana ? `
      ${bananaIconHTML(playerBanana, 3.4)}
      <div class="pve-fighter-name">${playerBanana.name}</div>
      <div class="pve-fighter-stats">⚔️ ${playerStats.atk} · 🛡️ ${playerStats.def}</div>
    ` : `<div class="pve-fighter-empty">Choisis une banane</div>`;

    els.pveEnemyFighter.innerHTML = `
      <div class="pve-enemy-icon" style="font-size:${enemySize}rem; filter:drop-shadow(0 0 10px ${pveStageGlow(pveSelectedStage)});">${enemy.emoji}</div>
      <div class="pve-fighter-name">${enemy.name}${locked ? " 🔒" : ""}</div>
      <div class="pve-fighter-stats">⚔️ ${enemy.atk} · 🛡️ ${enemy.def} · 🪙 ${Math.round(enemy.reward * 0.75)}</div>
      <div class="pve-fighter-stats">Niveau ${pveSelectedStage + 1} / ${FRUIT_ENEMIES.length}</div>
    `;

    els.pveFightBtn.disabled = pveFighting || !playerBanana || locked;
    els.pveFightBtn.textContent = locked ? "🔒 Bats l'ennemi précédent d'abord" : "⚔️ Attaquer";
  }

  // Les 60 niveaux sont regroupés par famille de fruit (10 groupes de 6),
  // avec un en-tête par famille, plutôt qu'une seule rangée de 60 puces.
  function renderPveStageList() {
    const groupsHTML = FRUIT_FAMILIES.map((family, f) => {
      const chips = FRUIT_ENEMIES.slice(f * 6, f * 6 + 6).map((enemy, li) => {
        const i = f * 6 + li;
        const beaten = i <= state.pve.stage;
        const playable = i <= maxPlayablePveStage();
        const selected = i === pveSelectedStage;
        return `
          <button class="pve-stage-chip ${selected ? "selected" : ""} ${!playable ? "locked" : ""}" data-stage="${i}" ${!playable ? "disabled" : ""}>
            <span>${playable ? enemy.emoji : "🔒"}</span>
            ${beaten ? '<span class="pve-stage-check">✅</span>' : ""}
          </button>
        `;
      }).join("");
      return `
        <div class="pve-stage-group">
          <div class="pve-stage-group-label">${family.emoji} ${family.label}</div>
          <div class="pve-stage-list">${chips}</div>
        </div>
      `;
    }).join("");

    els.pveStageList.innerHTML = `<div class="pve-stage-groups">${groupsHTML}</div>`;
    els.pveStageList.querySelectorAll(".pve-stage-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        pveSelectedStage = Number(btn.dataset.stage);
        renderPveStageList();
        renderPveFighters();
        els.pveResult.classList.add("hidden");
      });
    });
  }

  function renderPveTab() {
    if (pveSelectedStage > maxPlayablePveStage()) pveSelectedStage = maxPlayablePveStage();
    renderPveBananaSelect();
    renderPveStageList();
    renderPveFighters();
    els.pveResult.classList.add("hidden");
  }

  els.pveFightBtn.addEventListener("click", () => {
    if (pveFighting || !pveSelectedBananaId) return;
    pveFighting = true;
    els.pveFightBtn.disabled = true;
    els.pveResult.classList.add("hidden");
    els.pveVsMark.classList.add("clash");

    setTimeout(() => {
      els.pveVsMark.classList.remove("clash");
      const result = fightFruitEnemy(pveSelectedBananaId, pveSelectedStage);
      pveFighting = false;

      if (!result.ok) {
        renderPveFighters();
        return;
      }

      SFX[result.won ? "win" : "lose"]();
      renderHeader();
      CLOUD.scheduleSync();
      els.pveResult.innerHTML = `
        <div class="pve-result-title">${result.won ? "🎉 Victoire !" : "💥 Défaite..."}</div>
        <div class="pve-result-line">${result.won ? "Ta banane triomphe de l'ennemi !" : "L'ennemi était trop coriace cette fois — courage vaincu quand même récompensé."}</div>
        <div class="pve-result-coins">🪙 +${result.coinsEarned}</div>
        ${result.stageAdvanced ? '<div class="pve-result-line">🔓 Ennemi suivant débloqué !</div>' : ""}
      `;
      els.pveResult.classList.remove("hidden");

      if (result.won) spawnConfetti(result.stageAdvanced ? 25 : 12);

      const unlocked = checkAchievements();
      if (unlocked.length > 0) {
        renderHeader();
        showAchievementToasts(unlocked);
      }
      const questsDone = checkQuests();
      if (questsDone.length > 0) {
        renderHeader();
        showQuestToasts(questsDone);
      }

      renderPveStageList();
      renderPveFighters();
    }, 650);
  });

  /* ---------------- Combat : sous-onglets Solo / PVP ---------------- */

  let combatView = "solo"; // "solo" | "pvp"

  function showCombatView(view) {
    combatView = view;
    els.combatTabSolo.classList.toggle("active", view === "solo");
    els.combatTabPvp.classList.toggle("active", view === "pvp");
    els.combatSoloView.classList.toggle("hidden", view !== "solo");
    els.combatPvpView.classList.toggle("hidden", view !== "pvp");
    if (view === "solo") {
      renderPveTab();
    } else {
      renderPvpTab();
    }
  }

  els.combatTabSolo.addEventListener("click", () => showCombatView("solo"));
  els.combatTabPvp.addEventListener("click", () => showCombatView("pvp"));

  /* ---------------- Arène PVP ---------------- */

  let pvpSelectedTeam = Array(5).fill(null);
  let pvpOpponent = null;

  function pvpOwnedBananas() {
    return state.discovered
      .map((id) => BANANAS_BY_ID[id])
      .filter((b) => (state.counts[b.id] || 0) > 0)
      .sort((a, b) => rarityIndex(b.rarity) - rarityIndex(a.rarity) || b.value - a.value);
  }

  function renderPvpTeamPicker() {
    const owned = pvpOwnedBananas();
    if (owned.length === 0) {
      els.pvpTeamPicker.innerHTML = `<p class="secret-hint">Récolte des bananes avant de composer une équipe !</p>`;
      els.pvpTeamCount.textContent = "";
      return;
    }
    // Retire de l'équipe les bananes qu'on ne possède plus.
    pvpSelectedTeam = pvpSelectedTeam.map((id) => (id != null && owned.some((b) => b.id === id) ? id : null));

    els.pvpTeamPicker.innerHTML = pvpSelectedTeam.map((currentId, slot) => {
      const options = owned.map((b) => {
        const usedElsewhere = pvpSelectedTeam.includes(b.id) && currentId !== b.id;
        const stats = bananaCombatStats(b);
        return `<option value="${b.id}" ${b.id === currentId ? "selected" : ""} ${usedElsewhere ? "disabled" : ""}>${b.name} — ⚔️${stats.atk} 🛡️${stats.def}</option>`;
      }).join("");
      return `
        <div class="pvp-slot">
          <label class="pvp-slot-label">Combattant ${slot + 1}</label>
          <select class="pvp-slot-select" data-slot="${slot}">
            <option value="">— Vide —</option>
            ${options}
          </select>
        </div>
      `;
    }).join("");
    els.pvpTeamCount.textContent = `${pvpSelectedTeam.filter((id) => id != null).length} / 5 sélectionnées`;
    els.pvpTeamPicker.querySelectorAll(".pvp-slot-select").forEach((select) => {
      select.addEventListener("change", () => {
        const slot = Number(select.dataset.slot);
        pvpSelectedTeam[slot] = select.value ? Number(select.value) : null;
        renderPvpTeamPicker();
      });
    });
  }

  els.pvpSaveTeamBtn.addEventListener("click", async () => {
    els.pvpTeamError.textContent = "";
    const team = pvpSelectedTeam.filter((id) => id != null);
    if (team.length !== 5) {
      els.pvpTeamError.textContent = "Choisis exactement 5 bananes.";
      return;
    }
    els.pvpSaveTeamBtn.disabled = true;
    els.pvpSaveTeamBtn.textContent = "⏳...";
    const result = await CLOUD.setDefenseTeam(team);
    els.pvpSaveTeamBtn.disabled = false;
    els.pvpSaveTeamBtn.textContent = "Sauvegarder l'équipe";
    if (!result.ok) {
      els.pvpTeamError.textContent = result.reason || "Impossible de sauvegarder l'équipe.";
      return;
    }
    SFX.buy();
    showBanner("✅ ÉQUIPE SAUVEGARDÉE !", { emoji: "🛡️", name: "Elle te défend même hors ligne" }, 1800);
  });

  async function renderPvpReports() {
    const reports = await CLOUD.fetchUnseenCombatReports();
    if (reports.length === 0) {
      els.pvpReports.innerHTML = "";
      return;
    }
    const won = reports.filter((r) => r.defender_delta > 0);
    const lost = reports.filter((r) => r.defender_delta <= 0);
    els.pvpReports.innerHTML = `
      <h3>📜 Pendant ton absence</h3>
      ${reports.map((r) => `
        <div class="pvp-report-card ${r.defender_delta > 0 ? "" : "lost"}">
          <div class="pvp-report-title">${r.defender_delta > 0 ? "🛡️ Défense réussie !" : "💥 Tu as été attaqué"}</div>
          <div class="pvp-report-line">${r.attackerUsername} — ${r.defender_delta > 0 ? `tu as récupéré ${r.defender_delta}` : `tu as perdu ${Math.abs(r.defender_delta)}`} 🪙</div>
        </div>
      `).join("")}
    `;
    if (won.length > 0 || lost.length > 0) {
      renderHeader();
    }
    CLOUD.markCombatLogSeen(reports.map((r) => r.id));
  }

  function renderPvpOpponent() {
    if (!pvpOpponent) {
      els.pvpOpponentCard.classList.add("hidden");
      els.pvpAttackBtn.classList.add("hidden");
      return;
    }
    els.pvpOpponentCard.classList.remove("hidden");
    els.pvpAttackBtn.classList.remove("hidden");
    els.pvpOpponentCard.innerHTML = `
      <div class="pvp-opponent-name">👤 ${pvpOpponent.username}</div>
      <div class="pvp-opponent-power">Puissance totale : ${pvpOpponent.power}</div>
    `;
  }

  els.pvpFindBtn.addEventListener("click", async () => {
    els.pvpFindBtn.disabled = true;
    els.pvpFindBtn.textContent = "⏳...";
    els.pvpAttackResult.classList.add("hidden");
    const result = await CLOUD.findOpponent();
    els.pvpFindBtn.disabled = false;
    els.pvpFindBtn.textContent = "🔍 Trouver un adversaire";
    if (!result.ok) {
      pvpOpponent = null;
      renderPvpOpponent();
      showBanner("😕 PAS D'ADVERSAIRE", { emoji: "🔍", name: result.reason === "pas_equipe" ? "Sauvegarde d'abord ton équipe" : "Réessaie plus tard" }, 1800);
      return;
    }
    pvpOpponent = { defenderId: result.defenderId, username: result.username, power: result.power };
    renderPvpOpponent();
  });

  els.pvpAttackBtn.addEventListener("click", async () => {
    if (!pvpOpponent) return;
    els.pvpAttackBtn.disabled = true;
    els.pvpAttackBtn.textContent = "⏳...";
    const result = await CLOUD.attackPlayer(pvpOpponent.defenderId);
    els.pvpAttackBtn.disabled = false;
    els.pvpAttackBtn.textContent = "⚔️ Attaquer";

    if (!result.ok) {
      showBanner("❌ Attaque impossible", { emoji: "🚫", name: result.reason || "Erreur" }, 1800);
      return;
    }

    SFX[result.won ? "win" : "lose"]();
    state.coins += result.attackerDelta;
    saveState();
    renderHeader();
    els.pvpAttackResult.innerHTML = `
      <div class="pve-result-title">${result.won ? "🎉 Victoire !" : "💥 Défaite..."}</div>
      <div class="pve-result-line">${result.won ? `Tu voles ${result.attackerDelta} 🪙 à ${pvpOpponent.username} !` : `Tu perds ${Math.abs(result.attackerDelta)} 🪙 face à ${pvpOpponent.username}.`}</div>
    `;
    els.pvpAttackResult.classList.remove("hidden");
    if (result.won) spawnConfetti(20);
    pvpOpponent = null;
    renderPvpOpponent();

    const unlocked = checkAchievements();
    if (unlocked.length > 0) {
      renderHeader();
      showAchievementToasts(unlocked);
    }
    CLOUD.scheduleSync();
  });

  async function renderPvpTab() {
    if (!CLOUD.available || !CLOUD.isLinked()) {
      els.pvpLocked.classList.remove("hidden");
      els.pvpContent.classList.add("hidden");
      return;
    }
    els.pvpLocked.classList.add("hidden");
    els.pvpContent.classList.remove("hidden");
    els.pvpAttackResult.classList.add("hidden");
    pvpOpponent = null;
    renderPvpOpponent();

    // Pousse tout de suite avant d'agir : évite qu'une équipe ne puisse pas
    // être sauvegardée parce que l'inventaire local n'a pas encore été
    // synchronisé côté serveur.
    await CLOUD.pushAll();

    await renderPvpReports();

    const savedTeam = await CLOUD.fetchMyDefenseTeam();
    pvpSelectedTeam = Array(5).fill(null);
    (savedTeam || []).forEach((id, i) => { pvpSelectedTeam[i] = id; });
    renderPvpTeamPicker();
  }

  /* ---------------- Statistiques ---------------- */

  function renderAchievements() {
    const unlockedCount = state.achievements.unlocked.length;
    const badges = ACHIEVEMENTS.map((ach) => {
      const unlocked = state.achievements.unlocked.includes(ach.id);
      return `
        <div class="achievement-badge ${unlocked ? "unlocked" : "locked"}">
          <div class="achievement-icon">${unlocked ? ach.icon : "🔒"}</div>
          <div class="achievement-info">
            <div class="achievement-name">${unlocked ? ach.name : "???"}</div>
            <div class="achievement-desc">${unlocked ? ach.desc : "Succès verrouillé"}</div>
          </div>
          ${unlocked ? `<div class="achievement-reward">+${ach.reward}🪙</div>` : ""}
        </div>
      `;
    }).join("");

    els.achievementsPanel.innerHTML = `
      <h2 class="achievements-heading">🏆 Succès <span class="achievements-count">${unlockedCount} / ${ACHIEVEMENTS.length}</span></h2>
      <div class="achievements-list">${badges}</div>
    `;
  }

  function renderStats() {
    const discoveredNormal = state.discovered.filter((id) => !BANANAS_BY_ID[id].secret).length;
    const discoveredSecret = state.discovered.filter((id) => BANANAS_BY_ID[id].secret).length;
    const rarest = state.rarestId ? BANANAS_BY_ID[state.rarestId] : null;
    const pct = Math.round((discoveredNormal / TOTAL_NORMAL) * 1000) / 10;

    els.statsPanel.innerHTML = `
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-num">${state.totalRolls}</div><div class="stat-label">Bananes récoltées</div></div>
        <div class="stat-box"><div class="stat-num">${discoveredNormal + discoveredSecret}</div><div class="stat-label">Bananes différentes découvertes</div></div>
        <div class="stat-box"><div class="stat-num">${rarest ? `${rarest.image ? `<img class="inline-banana-icon" src="${rarest.image}" alt="" />` : rarest.emoji} ${rarest.name}` : "—"}</div><div class="stat-label">Banane la plus rare obtenue</div></div>
        <div class="stat-box"><div class="stat-num">${state.mythicCount}</div><div class="stat-label">Bananes mythiques obtenues</div></div>
        <div class="stat-box"><div class="stat-num">${state.clicks}</div><div class="stat-label">Nombre de clics</div></div>
        <div class="stat-box"><div class="stat-num">${pct}%</div><div class="stat-label">Collection complétée</div></div>
      </div>
    `;
  }

  /* ---------------- Récolteur automatique ---------------- */

  let autoHarvestTimer = null;

  function updateAutoHarvestTimer() {
    clearInterval(autoHarvestTimer);
    const level = state.upgrades.auto || 0;
    if (level <= 0) return;
    const upgrade = UPGRADES.find((u) => u.id === "auto");
    const interval = upgrade.intervalsMs[level - 1];
    autoHarvestTimer = setInterval(() => {
      if (!busy) harvest();
    }, interval);
  }

  /* ---------------- Classement ---------------- */

  let leaderboardView = "collection"; // "collection" | "pvp" | "pve"
  let leaderboardPollTimer = null;
  const LEADERBOARD_POLL_MS = 15000;

  const LEADERBOARD_CONFIGS = {
    collection: {
      sort: (a, b) => (b.collection_count + b.secret_count) - (a.collection_count + a.secret_count),
      columns: [
        { label: "Bananes", value: (r) => `${r.collection_count} / ${TOTAL_NORMAL}` },
        { label: "Secrètes", value: (r) => `${r.secret_count} / ${TOTAL_SECRET}` },
      ],
    },
    pvp: {
      sort: (a, b) => (b.pvp_wins - b.pvp_losses) - (a.pvp_wins - a.pvp_losses) || b.pvp_wins - a.pvp_wins,
      columns: [
        { label: "Victoires", value: (r) => r.pvp_wins },
        { label: "Défaites", value: (r) => r.pvp_losses },
      ],
    },
    pve: {
      sort: (a, b) => b.pve_stage - a.pve_stage || b.pve_wins - a.pve_wins,
      columns: [
        { label: "Niveau", value: (r) => `${r.pve_stage + 1} / ${FRUIT_ENEMIES.length}` },
        { label: "Victoires", value: (r) => r.pve_wins },
        { label: "Défaites", value: (r) => r.pve_losses },
      ],
    },
  };

  function showLeaderboardView(view) {
    leaderboardView = view;
    els.leaderboardTabCollection.classList.toggle("active", view === "collection");
    els.leaderboardTabPvp.classList.toggle("active", view === "pvp");
    els.leaderboardTabPve.classList.toggle("active", view === "pve");
    renderLeaderboard();
  }

  els.leaderboardTabCollection.addEventListener("click", () => showLeaderboardView("collection"));
  els.leaderboardTabPvp.addEventListener("click", () => showLeaderboardView("pvp"));
  els.leaderboardTabPve.addEventListener("click", () => showLeaderboardView("pve"));

  function startLeaderboardPolling() {
    stopLeaderboardPolling();
    leaderboardPollTimer = setInterval(renderLeaderboard, LEADERBOARD_POLL_MS);
  }

  function stopLeaderboardPolling() {
    clearInterval(leaderboardPollTimer);
    leaderboardPollTimer = null;
  }

  async function renderLeaderboard() {
    // Pas de flash "Chargement..." sur les rafraîchissements auto : seulement
    // au tout premier affichage, quand il n'y a encore aucun tableau.
    if (!els.leaderboardContent.querySelector("table")) {
      els.leaderboardContent.innerHTML = `<p class="secret-hint">Chargement du classement...</p>`;
    }
    const rows = await CLOUD.fetchLeaderboard();
    if (rows.length === 0) {
      els.leaderboardContent.innerHTML = `<p class="secret-hint">Aucun joueur avec un compte cloud pour l'instant.</p>`;
      return;
    }

    const cfg = LEADERBOARD_CONFIGS[leaderboardView];
    const sorted = rows.slice().sort(cfg.sort);
    const myUsername = CLOUD.currentUsername();

    els.leaderboardContent.innerHTML = `
      <table class="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Joueur</th>
            ${cfg.columns.map((c) => `<th>${c.label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${sorted.map((r, i) => `
            <tr class="${r.username === myUsername ? "leaderboard-me" : ""}">
              <td>${i + 1}</td>
              <td>${r.username}</td>
              ${cfg.columns.map((c) => `<td>${c.value(r)}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  /* ---------------- Compte cloud (Marché / Arène PVP) ---------------- */

  let accountMode = "login"; // "login" | "signup"

  function updateAccountBtn() {
    if (CLOUD.available && CLOUD.isLinked()) {
      els.accountBtn.textContent = `👤 ${CLOUD.currentUsername()}`;
      els.accountBtn.classList.add("linked");
    } else {
      els.accountBtn.textContent = "👤 Compte";
      els.accountBtn.classList.remove("linked");
    }
  }

  function closeAccountModal() {
    els.accountModal.classList.add("hidden");
  }

  function renderAccountModal() {
    if (!CLOUD.available) {
      els.accountModalContent.innerHTML = `
        <div class="account-form">
          <h3>👤 Compte</h3>
          <p class="account-hint">Le service de compte est momentanément indisponible (connexion réseau). Le jeu solo continue de fonctionner normalement — réessaie plus tard pour le Marché et l'Arène PVP.</p>
        </div>
      `;
      return;
    }

    if (CLOUD.isLinked()) {
      els.accountModalContent.innerHTML = `
        <div class="account-logged-in">
          <div class="account-username">👤 ${CLOUD.currentUsername()}</div>
          <div class="account-hint">Connecté — le Marché et l'Arène PVP sont disponibles.</div>
          <button id="account-signout-btn" class="btn danger">Déconnexion</button>
        </div>
      `;
      els.accountModalContent.querySelector("#account-signout-btn").addEventListener("click", async () => {
        await CLOUD.signOut();
        updateAccountBtn();
        renderAccountModal();
        renderMarketTab();
        renderPvpTab();
      });
      return;
    }

    const isSignup = accountMode === "signup";
    els.accountModalContent.innerHTML = `
      <div class="account-form">
        <h3>${isSignup ? "Créer un compte" : "Connexion"}</h3>
        ${isSignup ? `<p class="account-warning">⚠️ Pas d'email associé à ce compte : si tu oublies ton mot de passe, il ne pourra pas être récupéré. Note-le bien quelque part !</p>` : ""}
        <div class="account-field">
          <label for="account-username-input">Pseudo</label>
          <input id="account-username-input" type="text" autocomplete="username" maxlength="20" placeholder="3 à 20 caractères, lettres/chiffres/_" />
        </div>
        <div class="account-field">
          <label for="account-password-input">Mot de passe</label>
          <input id="account-password-input" type="password" autocomplete="${isSignup ? "new-password" : "current-password"}" />
        </div>
        <div class="account-error" id="account-error"></div>
        <div class="account-form-actions">
          <button id="account-submit-btn" class="btn harvest-btn">${isSignup ? "Créer mon compte" : "Se connecter"}</button>
          <button class="account-switch-mode" id="account-switch-mode-btn">${isSignup ? "J'ai déjà un compte" : "Créer un compte"}</button>
        </div>
      </div>
    `;

    const errorEl = els.accountModalContent.querySelector("#account-error");
    els.accountModalContent.querySelector("#account-switch-mode-btn").addEventListener("click", () => {
      accountMode = isSignup ? "login" : "signup";
      renderAccountModal();
    });

    els.accountModalContent.querySelector("#account-submit-btn").addEventListener("click", async () => {
      const username = els.accountModalContent.querySelector("#account-username-input").value.trim().toLowerCase();
      const password = els.accountModalContent.querySelector("#account-password-input").value;
      errorEl.textContent = "";

      if (!CLOUD.isValidUsername(username)) {
        errorEl.textContent = "Pseudo invalide (3 à 20 caractères : lettres minuscules, chiffres, _).";
        return;
      }
      if (password.length < 6) {
        errorEl.textContent = "Mot de passe trop court (6 caractères minimum).";
        return;
      }

      const submitBtn = els.accountModalContent.querySelector("#account-submit-btn");
      submitBtn.disabled = true;
      submitBtn.textContent = "⏳ ...";

      const result = isSignup ? await CLOUD.signUp(username, password) : await CLOUD.signIn(username, password);

      if (!result.ok) {
        errorEl.textContent = result.reason || "Une erreur est survenue.";
        submitBtn.disabled = false;
        submitBtn.textContent = isSignup ? "Créer mon compte" : "Se connecter";
        return;
      }

      SFX.buy();
      updateAccountBtn();
      renderAccountModal();
      renderHeader();
      renderMarketTab();
      renderPvpTab();
    });
  }

  els.accountBtn.addEventListener("click", () => {
    accountMode = "login";
    renderAccountModal();
    els.accountModal.classList.remove("hidden");
  });
  els.accountModalClose.addEventListener("click", closeAccountModal);
  els.accountModal.addEventListener("click", (e) => {
    if (e.target === els.accountModal) closeAccountModal();
  });

  /* ---------------- Son ---------------- */

  function renderMuteBtn() {
    const muted = !!(state.settings && state.settings.muted);
    els.muteBtn.textContent = muted ? "🔇" : "🔊";
    els.muteBtn.classList.toggle("muted", muted);
  }

  els.muteBtn.addEventListener("click", () => {
    state.settings.muted = !state.settings.muted;
    saveState();
    renderMuteBtn();
    if (!state.settings.muted) SFX.click();
  });

  /* ---------------- Réinitialisation ---------------- */

  els.resetBtn.addEventListener("click", () => {
    els.confirmModal.classList.remove("hidden");
  });
  els.confirmNo.addEventListener("click", () => {
    els.confirmModal.classList.add("hidden");
  });
  els.confirmYes.addEventListener("click", () => {
    if (CLOUD.isLinked()) CLOUD.resetCloudProgress().catch(() => {});
    resetSave();
    els.confirmModal.classList.add("hidden");
    els.lastBanana.innerHTML = `<p class="empty-hint">Clique sur le bouton pour récolter ta première banane !</p>`;
    updateAutoHarvestTimer();
    pveSelectedBananaId = null;
    pveSelectedStage = 0;
    renderHeader();
    renderCollection();
    renderShop();
    renderQuests();
    renderMuteBtn();
    renderMinigamesMenu();
    renderStats();
    renderAchievements();
  });

  /* ---------------- Démarrage ---------------- */

  renderHeader();
  renderMuteBtn();
  if (state.lastBananaId) {
    const banana = BANANAS_BY_ID[state.lastBananaId];
    els.lastBanana.innerHTML = bananaCardHTML(banana, state.counts[banana.id], false);
  } else {
    els.lastBanana.innerHTML = `<p class="empty-hint">Clique sur le bouton pour récolter ta première banane !</p>`;
  }
  renderCollection();
  updateAutoHarvestTimer();
  refreshQuestsIfNewDay();
  saveState();

  // Aucun son n'est joué pour les toasts affichés ici : ils apparaissent au
  // chargement de la page, avant tout geste de l'utilisateur, ce que les
  // navigateurs interdisent pour la lecture audio.
  const streakResult = processDailyStreak();
  if (streakResult) {
    renderHeader();
    setTimeout(() => {
      showBanner(`🔥 JOUR ${streakResult.streak} !`, { emoji: "🪙", name: `+${streakResult.coinsEarned} pièces de connexion` }, 2200);
      spawnConfetti(12);
    }, 500);
  }

  const unlockedAtStart = checkAchievements();
  if (unlockedAtStart.length > 0) {
    renderHeader();
    showAchievementToasts(unlockedAtStart, false);
  }

  updateAccountBtn();
  // Vérifie une session cloud existante (déjà connecté précédemment) en
  // arrière-plan, sans jamais bloquer le rendu initial du jeu solo.
  CLOUD.init().then(() => {
    updateAccountBtn();
    renderHeader();
  }).catch(() => {
    // Hors ligne / service indisponible au démarrage : jeu solo inchangé.
  });
});
