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
    pveBananaSelect: document.getElementById("pve-banana-select"),
    pvePlayerFighter: document.getElementById("pve-player-fighter"),
    pveEnemyFighter: document.getElementById("pve-enemy-fighter"),
    pveVsMark: document.getElementById("pve-vs-mark"),
    pveFightBtn: document.getElementById("pve-fight-btn"),
    pveResult: document.getElementById("pve-result"),
    pveStageList: document.getElementById("pve-stage-list"),
  };

  /* ---------------- Onglets ---------------- */

  function showTab(name) {
    els.tabButtons.forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
    els.tabPanels.forEach((p) => p.classList.toggle("active", p.id === `tab-${name}`));
    if (name === "collection") renderCollection();
    if (name === "boutique") renderShop();
    if (name === "pub") renderAdTab();
    if (name === "minijeux") showMinigamesMenu();
    if (name === "combat") renderPveTab();
    if (name === "stats") { renderStats(); renderAchievements(); }
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
          const cls = a.cls === "text" ? "deco deco-text" : "deco";
          return `<span class="${cls}" style="${a.style}">${a.text || ""}</span>`;
        }).join("");
      }
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

    renderHeader();
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
    banner.innerHTML = `<span class="rare-banner-title">${title}</span><span class="rare-banner-name">${banana.emoji} ${banana.name}</span>`;
    els.toastLayer.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add("show"));
    setTimeout(() => {
      banner.classList.remove("show");
      setTimeout(() => banner.remove(), 400);
    }, duration);
  }

  function showAchievementToasts(achievements) {
    achievements.forEach((ach, i) => {
      setTimeout(() => {
        showBanner("🏆 SUCCÈS DÉBLOQUÉ !", { emoji: ach.icon, name: `${ach.name} (+${ach.reward} 🪙)` }, 2200);
        spawnConfetti(15);
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
          renderHeader();
          renderShop();
          updateAutoHarvestTimer();
          const unlocked = checkAchievements();
          if (unlocked.length > 0) {
            renderHeader();
            showAchievementToasts(unlocked);
          }
        }
      });
    });
  }

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
      } else {
        catchState.good += 1;
        spawnConfetti(3);
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

  const PVE_STAGE_GLOWS = ["#8bd17c", "#e0c341", "#d4a017", "#9aa5ad", "#c76b98", "#ffd23f"];

  function renderPveFighters() {
    const enemy = PINEAPPLE_ENEMIES[pveSelectedStage];
    const locked = pveSelectedStage > maxPlayablePveStage();
    const playerBanana = pveSelectedBananaId ? BANANAS_BY_ID[pveSelectedBananaId] : null;
    const playerStats = playerBanana ? bananaCombatStats(playerBanana) : null;

    els.pvePlayerFighter.innerHTML = playerBanana ? `
      ${bananaIconHTML(playerBanana, 3.4)}
      <div class="pve-fighter-name">${playerBanana.name}</div>
      <div class="pve-fighter-stats">⚔️ ${playerStats.atk} · 🛡️ ${playerStats.def}</div>
    ` : `<div class="pve-fighter-empty">Choisis une banane</div>`;

    els.pveEnemyFighter.innerHTML = `
      <div class="pve-enemy-icon" style="font-size:${2.4 + pveSelectedStage * 0.35}rem; filter:drop-shadow(0 0 10px ${PVE_STAGE_GLOWS[pveSelectedStage]});">${enemy.emoji}</div>
      <div class="pve-fighter-name">${enemy.name}${locked ? " 🔒" : ""}</div>
      <div class="pve-fighter-stats">⚔️ ${enemy.atk} · 🛡️ ${enemy.def} · 🪙 ${enemy.reward}</div>
    `;

    els.pveFightBtn.disabled = pveFighting || !playerBanana || locked;
    els.pveFightBtn.textContent = locked ? "🔒 Bats l'ananas précédent d'abord" : "⚔️ Attaquer";
  }

  function renderPveStageList() {
    els.pveStageList.innerHTML = PINEAPPLE_ENEMIES.map((enemy, i) => {
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
      const result = fightPineapple(pveSelectedBananaId, pveSelectedStage);
      pveFighting = false;

      if (!result.ok) {
        renderPveFighters();
        return;
      }

      renderHeader();
      els.pveResult.innerHTML = `
        <div class="pve-result-title">${result.won ? "🎉 Victoire !" : "💥 Défaite..."}</div>
        <div class="pve-result-line">${result.won ? "Ta banane triomphe de l'ananas !" : "L'ananas était trop coriace cette fois — courage vaincu quand même récompensé."}</div>
        <div class="pve-result-coins">🪙 +${result.coinsEarned}</div>
        ${result.stageAdvanced ? '<div class="pve-result-line">🔓 Ananas suivant débloqué !</div>' : ""}
      `;
      els.pveResult.classList.remove("hidden");

      if (result.won) spawnConfetti(result.stageAdvanced ? 25 : 12);

      const unlocked = checkAchievements();
      if (unlocked.length > 0) {
        renderHeader();
        showAchievementToasts(unlocked);
      }

      renderPveStageList();
      renderPveFighters();
    }, 650);
  });

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
        <div class="stat-box"><div class="stat-num">${rarest ? `${rarest.emoji} ${rarest.name}` : "—"}</div><div class="stat-label">Banane la plus rare obtenue</div></div>
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

  /* ---------------- Réinitialisation ---------------- */

  els.resetBtn.addEventListener("click", () => {
    els.confirmModal.classList.remove("hidden");
  });
  els.confirmNo.addEventListener("click", () => {
    els.confirmModal.classList.add("hidden");
  });
  els.confirmYes.addEventListener("click", () => {
    resetSave();
    els.confirmModal.classList.add("hidden");
    els.lastBanana.innerHTML = `<p class="empty-hint">Clique sur le bouton pour récolter ta première banane !</p>`;
    updateAutoHarvestTimer();
    pveSelectedBananaId = null;
    pveSelectedStage = 0;
    renderHeader();
    renderCollection();
    renderShop();
    renderMinigamesMenu();
    renderStats();
    renderAchievements();
  });

  /* ---------------- Démarrage ---------------- */

  renderHeader();
  if (state.lastBananaId) {
    const banana = BANANAS_BY_ID[state.lastBananaId];
    els.lastBanana.innerHTML = bananaCardHTML(banana, state.counts[banana.id], false);
  } else {
    els.lastBanana.innerHTML = `<p class="empty-hint">Clique sur le bouton pour récolter ta première banane !</p>`;
  }
  renderCollection();
  updateAutoHarvestTimer();

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
    showAchievementToasts(unlockedAtStart);
  }
});
