/* ============================================================
   Banana Collector — Connexion au cloud (Supabase)
   Compte joueur (pseudo + mot de passe), synchronisation du solde
   et de l'inventaire pour le Marché et l'Arène PVP. Le jeu solo
   (récolte, boutique, mini-jeux, arène solo) ne dépend jamais de ce
   fichier et continue de fonctionner 100% hors ligne sans compte.
   ============================================================ */

const SUPABASE_URL = "https://zmbjrhyfofnhsokdveap.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_KwdOnuDXh5Xcfo4kbRZV6g_OvQwJNyq";

// Domaine réservé par la RFC 2606, garanti à ne jamais pouvoir recevoir de
// vrai courrier : sert à simuler un email pour l'auth Supabase alors que le
// joueur ne fournit qu'un pseudo + mot de passe, sans email réel.
const SYNTH_EMAIL_DOMAIN = "banana-collector.invalid";
const USERNAME_REGEX = /^[a-z0-9_]{3,20}$/;

const CLOUD = (() => {
  // Si la lib Supabase (CDN) n'a pas pu se charger (bloqueur de pub, réseau
  // hors ligne au premier chargement...), le compte cloud est simplement
  // indisponible — le jeu solo n'en dépend jamais, donc il continue de
  // fonctionner normalement ; seuls Marché/PVP resteront inaccessibles.
  const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
  const unavailable = { ok: false, reason: "supabase_indisponible" };

  let cachedUsername = null;
  let cachedUserId = null;
  let pushTimer = null;
  let lastPushedBananasSnapshot = null;

  function ensureCloudState() {
    if (!state.cloud) {
      state.cloud = { linked: false, lastLedgerId: 0 };
    }
    return state.cloud;
  }

  function usernameToEmail(username) {
    return `${username.toLowerCase()}@${SYNTH_EMAIL_DOMAIN}`;
  }

  function isValidUsername(username) {
    return USERNAME_REGEX.test(username);
  }

  async function isUsernameAvailable(username) {
    if (!supabase) return false;
    if (!isValidUsername(username)) return false;
    const { data, error } = await supabase.rpc("is_username_available", { p_username: username });
    if (error) throw error;
    return data === true;
  }

  async function signUp(username, password) {
    if (!supabase) return unavailable;
    if (!isValidUsername(username)) {
      return { ok: false, reason: "pseudo_invalide" };
    }
    const { data, error } = await supabase.auth.signUp({
      email: usernameToEmail(username),
      password,
      options: { data: { username: username.toLowerCase() } },
    });
    if (error) return { ok: false, reason: error.message };
    if (!data.session) {
      // Ne devrait pas arriver une fois "Confirm email" désactivé côté projet.
      return { ok: false, reason: "confirmation_email_requise" };
    }
    cachedUsername = username.toLowerCase();
    cachedUserId = data.session.user.id;
    const cloud = ensureCloudState();
    cloud.linked = true;
    saveState();
    await pullLedger();
    return { ok: true };
  }

  async function signIn(username, password) {
    if (!supabase) return unavailable;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: usernameToEmail(username),
      password,
    });
    if (error) return { ok: false, reason: error.message };
    cachedUsername = username.toLowerCase();
    cachedUserId = data.session.user.id;
    const cloud = ensureCloudState();
    cloud.linked = true;
    saveState();
    await pullLedger();
    return { ok: true };
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    cachedUsername = null;
    cachedUserId = null;
    const cloud = ensureCloudState();
    cloud.linked = false;
    saveState();
  }

  function isLinked() {
    return ensureCloudState().linked === true;
  }

  function currentUserId() {
    return cachedUserId;
  }

  function currentUsername() {
    return cachedUsername;
  }

  // Applique les événements du journal serveur (vols PVP subis, ventes
  // conclues...) survenus depuis la dernière fois, en ADDITION du solde
  // local courant — ne remplace jamais state.coins par la valeur serveur.
  async function pullLedger() {
    if (!isLinked()) return;
    const cloud = ensureCloudState();
    const { data, error } = await supabase
      .from("wallet_ledger")
      .select("id, delta, reason")
      .gt("id", cloud.lastLedgerId || 0)
      .order("id", { ascending: true });
    if (error || !data || data.length === 0) return;

    for (const row of data) {
      state.coins += row.delta;
      cloud.lastLedgerId = row.id;
    }
    saveState();
    return data;
  }

  // Pousse le solde local courant. Si le serveur a des événements plus
  // récents que ceux déjà vus par ce client (ex: attaque PVP reçue entre le
  // dernier pull et maintenant), il les renvoie au lieu d'écraser — on les
  // applique alors localement avant de réessayer, pour ne jamais effacer un
  // événement serveur avec un solde local périmé.
  async function pushBalance(attempt = 0) {
    if (!isLinked() || attempt > 2) return;
    const cloud = ensureCloudState();
    const { data, error } = await supabase.rpc("sync_local_balance", {
      client_coins: state.coins,
      last_seen_ledger_id: cloud.lastLedgerId || 0,
    });
    if (error || !data || data.length === 0) return;

    const { status, ledger_events } = data[0];
    if (status === "stale" && ledger_events && ledger_events.length > 0) {
      for (const row of ledger_events) {
        state.coins += row.delta;
        cloud.lastLedgerId = Math.max(cloud.lastLedgerId || 0, row.id);
      }
      saveState();
      await pushBalance(attempt + 1);
      return;
    }
    saveState();
  }

  // Pousse (upsert) l'inventaire local complet — uniquement les entrées
  // ayant changé depuis le dernier envoi, pour garder les requêtes légères.
  async function pushBananas() {
    if (!isLinked()) return;
    const rows = Object.keys(state.counts)
      .map((id) => ({ banana_id: Number(id), count: state.counts[id] }))
      .filter((row) => row.count > 0);

    const snapshotKey = JSON.stringify(rows);
    if (snapshotKey === lastPushedBananasSnapshot) return;

    const { error } = await supabase.rpc("sync_local_bananas", { rows });
    if (!error) lastPushedBananasSnapshot = snapshotKey;
  }

  async function pushAll() {
    await Promise.all([pushBalance(), pushBananas()]);
  }

  /* ---------------- Marché ---------------- */

  // Annonces actives de tout le monde, avec le pseudo du vendeur récupéré
  // séparément via la vue publique (pas de embedding PostgREST sur une vue).
  async function fetchActiveListings() {
    if (!supabase) return [];
    const { data: listings, error } = await supabase
      .from("listings")
      .select("id, seller_id, banana_id, quantity, unit_price, created_at")
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(200);
    if (error || !listings) return [];

    const sellerIds = [...new Set(listings.map((l) => l.seller_id))];
    let usernames = {};
    if (sellerIds.length > 0) {
      const { data: profiles } = await supabase.from("public_profiles").select("id, username").in("id", sellerIds);
      if (profiles) usernames = Object.fromEntries(profiles.map((p) => [p.id, p.username]));
    }
    return listings.map((l) => ({ ...l, sellerUsername: usernames[l.seller_id] || "?" }));
  }

  // Historique complet (actives/vendues/annulées) du joueur connecté.
  async function fetchMyListings() {
    if (!supabase || !isLinked() || !cachedUserId) return [];
    const { data, error } = await supabase
      .from("listings")
      .select("id, banana_id, quantity, unit_price, status, created_at")
      .eq("seller_id", cachedUserId)
      .order("created_at", { ascending: false })
      .limit(100);
    return error || !data ? [] : data;
  }

  async function createListing(bananaId, quantity, unitPrice) {
    if (!supabase) return unavailable;
    const { data, error } = await supabase.rpc("create_listing", {
      p_banana_id: bananaId,
      p_quantity: quantity,
      p_unit_price: unitPrice,
    });
    if (error) return { ok: false, reason: error.message };
    return { ok: true, listingId: data };
  }

  async function cancelListing(listingId) {
    if (!supabase) return unavailable;
    const { error } = await supabase.rpc("cancel_listing", { p_listing_id: listingId });
    if (error) return { ok: false, reason: error.message };
    return { ok: true };
  }

  async function buyListing(listingId, quantityWanted) {
    if (!supabase) return unavailable;
    const { data, error } = await supabase.rpc("buy_listing", {
      p_listing_id: listingId,
      p_quantity_wanted: quantityWanted,
    });
    if (error) return { ok: false, reason: error.message };
    return { ok: true, newCoins: data && data[0] ? Number(data[0].new_coins) : null };
  }

  // Synchronisation débounced : appelée librement par le reste du jeu à
  // chaque action pertinente (achat, vente, fin de combat...) sans jamais
  // ralentir l'action elle-même — la requête réseau part quelques secondes
  // plus tard, en arrière-plan.
  function scheduleSync(delayMs = 4000) {
    if (!isLinked()) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(() => {
      pushAll().catch(() => {
        // Échec réseau : no-op silencieux, retentera au prochain déclencheur.
      });
    }, delayMs);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && isLinked()) {
      pushAll().catch(() => {});
    }
  });

  async function init() {
    if (!supabase) return;
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      const meta = data.session.user.user_metadata || {};
      cachedUsername = (meta.username || "").toLowerCase() || null;
      cachedUserId = data.session.user.id;
      const cloud = ensureCloudState();
      cloud.linked = true;
      saveState();
      try {
        await pullLedger();
      } catch (e) {
        // Hors ligne au démarrage : le jeu solo continue normalement,
        // on retentera au prochain déclencheur réseau.
      }
    }
  }

  return {
    available: supabase !== null,
    supabase,
    isValidUsername,
    isUsernameAvailable,
    signUp,
    signIn,
    signOut,
    isLinked,
    currentUsername,
    currentUserId,
    pullLedger,
    pushBalance,
    pushBananas,
    pushAll,
    scheduleSync,
    fetchActiveListings,
    fetchMyListings,
    createListing,
    cancelListing,
    buyListing,
    init,
  };
})();

// L'appel réel se fait depuis ui.js (attendu avant le premier rendu de l'en-tête
// et du bouton compte), pour éviter une course entre ce chargement asynchrone
// et le rendu initial synchrone du DOMContentLoaded de ui.js.
