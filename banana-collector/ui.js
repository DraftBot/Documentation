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
  };

  /* ---------------- Onglets ---------------- */

  function showTab(name) {
    els.tabButtons.forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
    els.tabPanels.forEach((p) => p.classList.toggle("active", p.id === `tab-${name}`));
    if (name === "collection") renderCollection();
    if (name === "boutique") renderShop();
    if (name === "pub") renderAdTab();
    if (name === "minijeux") showMinigamesMenu();
    if (name === "stats") renderStats();
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

  function bananaCardHTML(banana, count, isNew) {
    const rarity = RARITIES[banana.rarity];
    return `
      <div class="banana-card rarity-${banana.rarity} ${isNew ? "is-new" : ""}" style="--rarity-color:${rarity.color}; --rarity-glow:${rarity.glow};">
        ${isNew ? '<div class="new-badge">NOUVELLE BANANE !</div>' : ""}
        ${bananaIconHTML(banana)}
        <div class="banana-name">${banana.name}</div>
        <div class="banana-rarity">${rarity.label}</div>
        <div class="banana-value">🪙 ${banana.value}</div>
        <div class="banana-count">x${count}</div>
      </div>
    `;
  }

  function harvest() {
    if (busy) return;
    busy = true;
    els.harvestBtn.disabled = true;

    const result = rollBanana();
    const { banana, isNew, rarity } = result;

    renderHeader();
    els.lastBanana.innerHTML = bananaCardHTML(banana, state.counts[banana.id], isNew);
    const card = els.lastBanana.querySelector(".banana-card");
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
        }
      });
    });
  }

  /* ---------------- Publicité récompensée ---------------- */

  let adPlaying = false;

  function renderAdTab() {
    const remaining = adsRemainingToday();
    els.adQuota.textContent = remaining > 0
      ? `${remaining} / ${MAX_ADS_PER_DAY} pubs disponibles aujourd'hui`
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
      grantAdReward();
      renderHeader();
      adPlaying = false;
      renderAdTab();
      spawnConfetti(16);
      showBanner("🎉 MERCI D'AVOIR REGARDÉ !", { emoji: "🪙", name: `+${AD_REWARD} pièces` }, 1600);
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

  function resetCatchGameView() {
    els.catchStartOverlay.classList.remove("hidden");
    els.catchResult.classList.add("hidden");
    els.catchArea.querySelectorAll(".catch-item").forEach((el) => el.remove());
    els.catchTimer.textContent = "⏱️ 30s";
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

  function spawnCatchItem() {
    const isRotten = Math.random() < 0.22;
    const item = document.createElement("div");
    item.className = "catch-item";
    item.style.left = `${5 + Math.random() * 85}%`;
    item.innerHTML = bananaIconHTML(isRotten ? ROTTEN_BANANA_VISUAL : { emoji: "🍌", deco: null });
    els.catchArea.appendChild(item);

    const areaHeight = els.catchArea.clientHeight;
    const fallDuration = 2.4 + Math.random() * 1.4;
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

  els.catchStartBtn.addEventListener("click", () => {
    stopCatchGame();
    els.catchStartOverlay.classList.add("hidden");
    els.catchResult.classList.add("hidden");

    catchState = { good: 0, rotten: 0, running: true, spawnTimer: null, tickTimer: null, endTimer: null };

    let spawnDelay = 700;
    const scheduleSpawn = () => {
      catchState.spawnTimer = setTimeout(() => {
        if (!catchState || !catchState.running) return;
        spawnCatchItem();
        spawnDelay = Math.max(340, spawnDelay - 8);
        scheduleSpawn();
      }, spawnDelay);
    };
    scheduleSpawn();

    const startTime = Date.now();
    catchState.tickTimer = setInterval(() => {
      const remaining = Math.max(0, CATCH_GAME_DURATION_MS - (Date.now() - startTime));
      els.catchTimer.textContent = `⏱️ ${Math.ceil(remaining / 1000)}s`;
    }, 200);

    catchState.endTimer = setTimeout(endCatchGame, CATCH_GAME_DURATION_MS);
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
      <div class="catch-result-title">🏁 Round terminé !</div>
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
  }

  /* ---------------- Mini-jeu : Roue de la fortune ---------------- */

  const WHEEL_SEGMENT_CENTER_ANGLES = [30, 90, 150, 210, 270, 330];
  let wheelSpinning = false;

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
    }, 4100);
  });

  /* ---------------- Statistiques ---------------- */

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
    renderHeader();
    renderCollection();
    renderShop();
    renderMinigamesMenu();
    renderStats();
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
});
