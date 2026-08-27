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
  };

  /* ---------------- Onglets ---------------- */

  function showTab(name) {
    els.tabButtons.forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
    els.tabPanels.forEach((p) => p.classList.toggle("active", p.id === `tab-${name}`));
    if (name === "collection") renderCollection();
    if (name === "boutique") renderShop();
    if (name === "pub") renderAdTab();
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

  /* ---------------- Récolte ---------------- */

  let busy = false;

  function bananaCardHTML(banana, count, isNew) {
    const rarity = RARITIES[banana.rarity];
    const hueStyle = banana.rarity === "commune" || banana.rarity === "peu_commune" ? `filter: hue-rotate(${banana.hue}deg);` : "";
    return `
      <div class="banana-card rarity-${banana.rarity} ${isNew ? "is-new" : ""}" style="--rarity-color:${rarity.color}; --rarity-glow:${rarity.glow};">
        ${isNew ? '<div class="new-badge">NOUVELLE BANANE !</div>' : ""}
        <div class="banana-emoji" style="${hueStyle}">${banana.emoji}</div>
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
        <div class="epic-emoji">${banana.emoji}</div>
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
      const hueStyle = banana.rarity === "commune" || banana.rarity === "peu_commune" ? `filter: hue-rotate(${banana.hue}deg);` : "";
      return `
        <div class="banana-card rarity-${banana.rarity}" style="--rarity-color:${rarity.color}; --rarity-glow:${rarity.glow};">
          <div class="banana-emoji" style="${hueStyle}">${banana.emoji}</div>
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
            <div class="banana-emoji">${banana.emoji}</div>
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
