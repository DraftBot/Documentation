/* ============================================================
   Banana Collector — Effets sonores synthétisés (Web Audio API)
   Aucun fichier audio externe : tous les sons sont générés à la
   volée par oscillateurs, pour rester ultra léger. Respecte
   state.settings.muted et la politique navigateur qui interdit de
   jouer un son avant un premier geste utilisateur (clic).
   ============================================================ */

const SFX = (() => {
  let ctx = null;

  function getCtx() {
    if (!ctx) {
      const AudioCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtor) return null;
      ctx = new AudioCtor();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function beep({ freq = 440, duration = 0.15, type = "sine", gain = 0.15, sweep = null, delay = 0 }) {
    if (typeof state !== "undefined" && state.settings && state.settings.muted) return;
    const audioCtx = getCtx();
    if (!audioCtx) return;
    try {
      const t0 = audioCtx.currentTime + delay;
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      if (sweep) osc.frequency.exponentialRampToValueAtTime(sweep, t0 + duration);
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(gain, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
      osc.connect(g).connect(audioCtx.destination);
      osc.start(t0);
      osc.stop(t0 + duration + 0.02);
    } catch (e) {
      // Environnement sans audio disponible : on ignore silencieusement.
    }
  }

  return {
    click: () => beep({ freq: 520, duration: 0.08, type: "square", gain: 0.08 }),
    coin: () => beep({ freq: 880, duration: 0.12, type: "triangle", gain: 0.12, sweep: 1320 }),
    harvestCommon: () => beep({ freq: 400, duration: 0.12, type: "sine", gain: 0.1 }),
    harvestRare: () => {
      beep({ freq: 600, duration: 0.12, type: "sine", gain: 0.12 });
      beep({ freq: 900, duration: 0.18, type: "sine", gain: 0.12, delay: 0.1 });
    },
    harvestEpic: () => {
      [660, 880, 1100].forEach((f, i) => beep({ freq: f, duration: 0.15, type: "triangle", delay: i * 0.09, gain: 0.14 }));
    },
    harvestMythic: () => {
      [660, 880, 1100, 1320].forEach((f, i) => beep({ freq: f, duration: 0.2, type: "triangle", delay: i * 0.1, gain: 0.16 }));
    },
    win: () => {
      [523, 659, 784, 1046].forEach((f, i) => beep({ freq: f, duration: 0.16, type: "triangle", delay: i * 0.08, gain: 0.14 }));
    },
    lose: () => beep({ freq: 220, duration: 0.35, type: "sawtooth", gain: 0.12, sweep: 110 }),
    achievement: () => {
      [784, 988, 1174, 1568].forEach((f, i) => beep({ freq: f, duration: 0.18, type: "sine", delay: i * 0.08, gain: 0.15 }));
    },
    quest: () => {
      [523, 784, 1046].forEach((f, i) => beep({ freq: f, duration: 0.15, type: "sine", delay: i * 0.07, gain: 0.13 }));
    },
    wheelTick: () => beep({ freq: 300, duration: 0.04, type: "square", gain: 0.06 }),
    buy: () => beep({ freq: 700, duration: 0.1, type: "square", gain: 0.1, sweep: 950 }),
  };
})();
