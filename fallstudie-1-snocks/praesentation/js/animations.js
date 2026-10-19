/* Folien-Animationen mit GSAP.
   - Jede Folie mit data-anim="name" bekommt beim Betreten ihre Einstiegs-Animation (enter).
   - Unsichtbare Fragmente <span class="fragment step" data-step="n"> lösen Schritt n aus (steps[n-1]).
     Zurückblättern spielt den Schritt rückwärts.
   - Im PDF-/Druckmodus (?print-pdf), mit ?static oder bei „Bewegung reduzieren“ läuft nichts:
     Alle Elemente stehen dann in ihrem Endzustand (so ist das HTML gebaut). */
(function () {
  const STATIC = /print-pdf|static/.test(location.search) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const $ = (s, r) => (r || document).querySelector(s);
  const EASE = "power3.out";
  if (window.DrawSVGPlugin) gsap.registerPlugin(DrawSVGPlugin);

  /* Zahlen hochzählen; Endwert steht bereits im HTML */
  function countUp(section, tl, at = 0) {
    $$("[data-count]", section).forEach(n => {
      const ziel = parseFloat(n.dataset.count), dec = parseInt(n.dataset.decimals || "0", 10);
      const f = new Intl.NumberFormat("de-DE", { minimumFractionDigits: dec, maximumFractionDigits: dec });
      const o = { v: 0 };
      tl.to(o, { v: ziel, duration: 1.4, ease: "power2.out", onUpdate: () => { n.textContent = f.format(o.v); } }, at);
    });
  }
  // Schritt-Helfer: baut die Timeline beim Abspielen, Rückwärts = reverse
  function tlStep(build) {
    let tl = null;
    return {
      show(s, instant) { tl = build(s); if (instant) tl.progress(1); },
      hide() { if (tl) tl.reverse(); }
    };
  }
  const svgOrigin = g => `${g.dataset.x} ${g.dataset.y}`;

  const A = {};

  A.title = {
    enter(s) {
      const tl = gsap.timeline();
      tl.from($(".sun", s), { scale: 0.2, opacity: 0, transformOrigin: "50% 50%", duration: 1.1, ease: "expo.out" })
        .from($$(".wordmark span", s), { yPercent: 60, opacity: 0, stagger: 0.06, duration: 0.7, ease: "back.out(1.7)" }, "-=0.7")
        .from($(".sock", s), { y: -280, rotation: -30, opacity: 0, duration: 1.1, ease: "bounce.out", transformOrigin: "40% 5%" }, "-=0.6")
        .from($(".claim", s), { opacity: 0, y: 20, duration: 0.6, ease: EASE }, "-=0.6")
        .from($$(".sub, .meta", s), { opacity: 0, y: 14, stagger: 0.15, duration: 0.5, ease: EASE }, "-=0.3");
      const loop = gsap.to($(".sock", s), { rotation: 5, transformOrigin: "40% 5%", yoyo: true, repeat: -1, duration: 2.4, ease: "sine.inOut", delay: 2.6 });
      return [tl, loop];
    }
  };

  A.roadmap = {
    enter(s) {
      const tl = gsap.timeline();
      tl.from($$(".step", s), { y: 40, opacity: 0, stagger: 0.12, duration: 0.6, ease: EASE })
        .from($(".roadmap-target .arrow", s), { scaleX: 0, transformOrigin: "left center", duration: 0.8, ease: "power2.inOut" }, "-=0.2")
        .from($$(".mini-rad-big .seg", s), { opacity: 0, scale: 0.4, transformOrigin: "50% 50%", stagger: 0.1, duration: 0.4, ease: "back.out(2)" }, "-=0.3")
        .from($(".roadmap-target strong", s), { opacity: 0, x: -10, duration: 0.4 }, "-=0.2");
      return [tl];
    }
  };

  A.company = {
    enter(s) {
      const tl = gsap.timeline();
      tl.from($$(".timeline li", s), { x: -24, opacity: 0, stagger: 0.12, duration: 0.5, ease: EASE })
        .from($$("#chart-umsatz .bar", s), { scaleY: 0, transformOrigin: "50% 100%", stagger: 0.09, duration: 0.7, ease: "power2.out" }, 0.3)
        .from($$("#chart-umsatz .value-label", s), { opacity: 0, y: 8, stagger: 0.09, duration: 0.4 }, 0.7)
        .from($$(".stat", s), { opacity: 0, y: 16, stagger: 0.1, duration: 0.5 }, 1.0);
      countUp(s, tl, 1.0);
      return [tl];
    }
  };

  A.persona = {
    enter(s) {
      const tl = gsap.timeline();
      tl.from($(".portrait", s), { clipPath: "inset(100% 0% 0% 0% round 18px)", duration: 0.9, ease: "power3.inOut" })
        .from($$(".name, .role", s), { opacity: 0, y: 14, stagger: 0.1, duration: 0.5, ease: EASE }, "-=0.4")
        .from($$(".facts dt, .facts dd", s), { opacity: 0, x: -10, stagger: 0.04, duration: 0.35 }, "-=0.2")
        .from($(".quote", s), { opacity: 0, y: 12, duration: 0.5 }, "-=0.1")
        .from($(".persona-2", s), { opacity: 0, x: 40, duration: 0.7, ease: EASE }, "-=0.2");
      return [tl];
    }
  };

  A.day = {
    enter(s) {
      const tl = gsap.timeline();
      const pts = $$(".day .pt", s);
      tl.from($(".day .fill", s), { scaleX: 0, duration: 2.4, ease: "none" });
      pts.forEach((p, i) => tl.from(p, { opacity: 0, y: 12, duration: 0.35, ease: EASE }, 2.4 * parseFloat(p.style.left) / 100 - 0.1));
      tl.from($$("#chart-medien .bar", s), { scaleX: 0, transformOrigin: "0% 50%", stagger: 0.08, duration: 0.6, ease: "power2.out" }, 0.6)
        .from($$("#chart-medien .value-label", s), { opacity: 0, stagger: 0.08, duration: 0.3 }, 1.0)
        .from($$(".stat", s), { opacity: 0, y: 14, stagger: 0.12, duration: 0.45 }, 1.2);
      countUp(s, tl, 1.2);
      return [tl];
    }
  };

  A.limbic = {
    enter(s) {
      const tl = gsap.timeline();
      const pts = $$(".lm-point", s);
      const marke = pts.filter(g => ["M", "K", "G"].includes(g.dataset.key));
      const pers = pts.filter(g => ["P", "S"].includes(g.dataset.key));
      gsap.set(pers, { opacity: 0 });
      gsap.set([$(".tension", s), $(".tension-label", s)], { opacity: 0 });
      gsap.set($$(".lm-legend", s).slice(3), { opacity: 0 });
      tl.from($(".limbic-disc", s), { scale: 0.6, opacity: 0, duration: 1, ease: "expo.out" })
        .from($$(".zone-label", s), { opacity: 0, stagger: 0.08, duration: 0.4 }, "-=0.5")
        .from($$(".kicker, h2", s), { opacity: 0, y: 12, stagger: 0.1, duration: 0.5 }, 0.2);
      marke.forEach((g, i) => {
        tl.from(g, { scale: 0, opacity: 0, svgOrigin: svgOrigin(g), duration: 0.5, ease: "back.out(2)" }, 1 + i * 0.35)
          .from($$(".lm-legend", s)[i], { opacity: 0, x: 20, duration: 0.4 }, 1 + i * 0.35);
      });
      tl.from($(".card", s), { opacity: 0, y: 14, duration: 0.5 }, "+=0.2");
      return [tl];
    },
    steps: [
      tlStep(s => {
        const tl = gsap.timeline();
        $$(".lm-point", s).filter(g => ["P", "S"].includes(g.dataset.key)).forEach((g, i) => {
          tl.fromTo(g, { opacity: 0, scale: 0, svgOrigin: svgOrigin(g) }, { opacity: 1, scale: 1, svgOrigin: svgOrigin(g), duration: 0.5, ease: "back.out(2)" }, i * 0.25);
        });
        tl.to($$(".lm-legend", s).slice(3), { opacity: 1, stagger: 0.2, duration: 0.4 }, 0);
        return tl;
      }),
      tlStep(s => {
        const tl = gsap.timeline();
        const line = $(".tension", s);
        tl.set(line, { opacity: 1 })
          .fromTo(line, { drawSVG: "50% 50%" }, { drawSVG: "0% 100%", duration: 0.8, ease: "power2.inOut" })
          .to($(".tension-label", s), { opacity: 1, duration: 0.4 }, "-=0.3");
        return tl;
      })
    ]
  };

  A["grid-method"] = {
    enter(s) {
      const tl = gsap.timeline();
      gsap.set($$(".construct .pole, .construct .vs", s), { opacity: 0 });
      gsap.set($(".scale-line", s), { scaleX: 0 });
      gsap.set($$(".scale-chip, .scale-ticks", s), { opacity: 0 });
      tl.from($$(".brand-card", s), { y: -60, rotation: i => [-8, 6, -4][i], opacity: 0, stagger: 0.15, duration: 0.7, ease: "back.out(1.6)" })
        .from($(".triad-q", s), { opacity: 0, y: 10, duration: 0.5 }, "-=0.2")
        .from($$(".card, .stat", s.querySelector(".stack")), { opacity: 0, x: 24, stagger: 0.08, duration: 0.45 }, 0.3);
      return [tl];
    },
    steps: [
      tlStep(s => gsap.timeline()
        .fromTo($(".pole.l", s), { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5, ease: EASE })
        .fromTo($(".construct .vs", s), { opacity: 0 }, { opacity: 1, duration: 0.3 })
        .fromTo($(".pole.r", s), { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5, ease: EASE }, "-=0.2")),
      tlStep(s => gsap.timeline()
        .to($(".scale-line", s), { scaleX: 1, duration: 0.6, ease: "power2.inOut" })
        .to($(".scale-ticks", s), { opacity: 1, duration: 0.3 }, "-=0.2")
        .fromTo($$(".scale-chip", s), { opacity: 0, y: -40 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.5, ease: "bounce.out" }))
    ]
  };

  A["grid-result"] = {
    enter(s) {
      const tl = gsap.timeline();
      const rows = $$("#grid-heatmap .hm-cell", s);
      const hl = $("#grid-heatmap .hm-highlight", s);
      tl.from(rows, { opacity: 0, scale: 0.85, transformOrigin: "50% 50%", stagger: { each: 0.012, from: "start" }, duration: 0.35 });
      if (hl) tl.from(hl, { opacity: 0, duration: 0.5 }, "-=0.1");
      tl.from($$("#grid-attribute li", s), { opacity: 0, x: 24, stagger: 0.12, duration: 0.45, ease: EASE }, "-=0.2");
      return [tl];
    }
  };

  A.ladder = {
    enter(s) {
      const tl = gsap.timeline();
      ["A", "FK", "PK", "W"].forEach((st, i) => {
        const nodes = $$(`.hvm-node[data-stufe="${st}"]`, s);
        tl.from(nodes, { opacity: 0, y: 20, stagger: 0.06, duration: 0.45, ease: EASE }, i * 0.75);
        const edges = $$(`.hvm-edge[data-from="${st}"]`, s);
        if (edges.length) tl.fromTo(edges, { drawSVG: "0%" }, { drawSVG: "100%", stagger: 0.05, duration: 0.5, ease: "power1.inOut" }, i * 0.75 + 0.35);
      });
      tl.from($$(".ladder-foot > *", s), { opacity: 0, y: 12, stagger: 0.15, duration: 0.45 }, "+=0.1");
      return [tl];
    }
  };

  A.analogies = {
    enter(s) {
      $$(".flip", s).forEach(f => f.classList.remove("flipped"));
      const tl = gsap.timeline();
      tl.from($$(".flip", s), { opacity: 0, y: 30, stagger: 0.1, duration: 0.5, ease: EASE })
        .from($$(".aaker .track i", s), { scaleX: 0, transformOrigin: "0% 50%", stagger: 0.1, duration: 0.6, ease: "power2.out" }, 0.4)
        .from($$("#emotionen .chip", s), { opacity: 0, scale: 0.6, stagger: 0.08, duration: 0.35, ease: "back.out(2)" }, 0.8);
      return [tl];
    },
    steps: [0, 1, 2, 3].map(i => ({
      show(s) { $$(".flip", s)[i].classList.add("flipped"); },
      hide(s) { $$(".flip", s)[i].classList.remove("flipped"); }
    }))
  };

  A.channels = {
    enter(s) {
      const tl = gsap.timeline();
      tl.from($$(".phone-col", s), { y: 80, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" })
        .from($$("#chart-follower .bar", s), { scaleX: 0, transformOrigin: "0% 50%", stagger: 0.1, duration: 0.7, ease: "power2.out" }, 0.2)
        .from($$("#chart-follower .value-label", s), { opacity: 0, stagger: 0.1, duration: 0.3 }, 0.7)
        .from($$(".stat", s), { opacity: 0, y: 14, stagger: 0.12, duration: 0.45 }, 0.9);
      countUp(s, tl, 0.9);
      return [tl];
    }
  };

  A.cd = {
    enter(s) {
      const tl = gsap.timeline();
      tl.from($$(".cd-card", s), { opacity: 0, y: 24, stagger: 0.12, duration: 0.5, ease: EASE })
        .from($(".wordmark-demo", s), { opacity: 0, letterSpacing: "0.3em", duration: 0.8, ease: "power2.out" }, 0.3)
        .from($$(".swatch", s), { scale: 0.7, opacity: 0, stagger: 0.1, duration: 0.45, ease: "back.out(2)" }, 0.6)
        .from($(".strike", s), { scaleX: 0, duration: 0.5, ease: "power2.inOut" }, 1.0)
        .from($(".claim-line .new", s), { opacity: 0, x: -14, duration: 0.5, ease: EASE }, 1.4)
        .from($$(".tone-chips .chip", s), { opacity: 0, y: 8, stagger: 0.07, duration: 0.3 }, 1.2)
        .from($$(".mood .placeholder", s), { opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.4 }, 1.3);
      return [tl];
    }
  };

  const WHEEL_ORDER = ["kompetenz", "attribute", "nutzen", "tonalitaet", "bild"];
  A.wheel = {
    enter(s) {
      const tl = gsap.timeline();
      gsap.set([$(".sr-core", s), ...$$(".sr-seg", s), ...$$(".sr-box", s)], { opacity: 0 });
      gsap.set($$("#kompetenz-list li, .hemis > div", s), { opacity: 0 });
      tl.from($$(".kicker, h2", s), { opacity: 0, y: 12, stagger: 0.1, duration: 0.5 });
      return [tl];
    },
    steps: WHEEL_ORDER.map(key => tlStep(s => {
      const tl = gsap.timeline();
      const c = 280;
      if (key === "kompetenz") {
        tl.fromTo($(".sr-core", s), { opacity: 0, scale: 0.3, svgOrigin: `${c} ${c}` }, { opacity: 1, scale: 1, svgOrigin: `${c} ${c}`, duration: 0.6, ease: "back.out(2)" })
          .fromTo($(".sr-box.core", s), { opacity: 0 }, { opacity: 1, duration: 0.3 })
          .fromTo($$("#kompetenz-list li", s), { opacity: 0, x: -12 }, { opacity: 1, x: 0, stagger: 0.12, duration: 0.35 }, 0.2);
      } else {
        const seg = $(`.sr-seg[data-key="${key}"]`, s);
        const box = $$(".sr-box", s)[["attribute", "tonalitaet", "bild", "nutzen"].indexOf(key)];
        tl.fromTo(seg, { opacity: 0, scale: 0.8, svgOrigin: `${c} ${c}` }, { opacity: 1, scale: 1, svgOrigin: `${c} ${c}`, duration: 0.6, ease: "back.out(1.6)" })
          .fromTo(box, { opacity: 0 }, { opacity: 1, duration: 0.25 }, 0.2)
          .fromTo($$("li", box), { opacity: 0, y: 6 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.3 }, 0.3);
        if (key === "attribute") tl.fromTo($$(".hemis > div", s)[0], { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.2);
        if (key === "tonalitaet") tl.fromTo($$(".hemis > div", s)[1], { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.2);
      }
      return tl;
    }))
  };

  A.reco = {
    enter(s) {
      const tl = gsap.timeline();
      tl.from($$(".reco", s), { opacity: 0, y: 40, stagger: 0.18, duration: 0.6, ease: EASE })
        .from($$(".reco .n", s), { scale: 0.3, opacity: 0, stagger: 0.18, duration: 0.5, ease: "back.out(2.5)" }, 0.2)
        .from($(".card.tint", s), { opacity: 0, y: 14, duration: 0.5 }, "-=0.1");
      return [tl];
    }
  };

  A.end = {
    enter(s) {
      const tl = gsap.timeline();
      tl.from($$(".end-rad .seg", s), { opacity: 0, scale: 0.3, transformOrigin: "50% 50%", stagger: 0.12, duration: 0.5, ease: "back.out(2)" })
        .from($$("h2, p", s), { opacity: 0, x: 20, stagger: 0.15, duration: 0.6, ease: EASE }, 0.3);
      const spin = gsap.to($(".end-rad svg", s), { rotation: 360, transformOrigin: "50% 50%", duration: 40, repeat: -1, ease: "none", delay: 1.5 });
      return [tl, spin];
    }
  };

  /* ---------------------------------------------------------------- Steuerung */
  let laufend = [];
  const stepState = new WeakMap();   // section -> Array der Schritt-Objekte

  function enter(section) {
    laufend.forEach(t => t.kill());
    laufend = [];
    gsap.set($$("*", section), { clearProps: "opacity,transform,clipPath,letterSpacing,strokeDasharray,strokeDashoffset,visibility" });
    const a = A[section.dataset.anim];
    if (!a) return;
    laufend = a.enter(section) || [];
    // Beim Zurückblättern sind Fragmente schon sichtbar → Schritte sofort im Endzustand
    if (a.steps) {
      stepState.set(section, a.steps);
      $$(".fragment.step.visible", section).forEach(f => {
        const st = a.steps[parseInt(f.dataset.step, 10) - 1];
        if (st) st.show(section, true);
      });
    }
  }

  function step(fragment, dir) {
    if (!fragment.classList.contains("step")) return;
    const section = fragment.closest("section");
    const a = A[section.dataset.anim];
    const st = a && a.steps && a.steps[parseInt(fragment.dataset.step, 10) - 1];
    if (!st) return;
    dir > 0 ? st.show(section) : st.hide(section);
  }

  window.Anim = {
    STATIC,
    init(Reveal) {
      if (STATIC) {
        $$(".flip").forEach(f => f.classList.add("flipped"));
        return;
      }
      enter(Reveal.getCurrentSlide());
      Reveal.on("slidechanged", e => enter(e.currentSlide));
      Reveal.on("fragmentshown", e => step(e.fragment, +1));
      Reveal.on("fragmenthidden", e => step(e.fragment, -1));
    }
  };
})();
