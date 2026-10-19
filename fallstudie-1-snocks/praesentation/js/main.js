/* Baut Diagramme und datengetriebene Inhalte auf, startet reveal.js und die Animationen.
   Liegen Interviewergebnisse vor (window.ERGEBNISSE), ersetzen sie automatisch die Hypothesen. */
(function () {
  const D = window.DESK, E = window.ERGEBNISSE, C = window.Charts;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const f1 = v => C.fmt1.format(v);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const nInterviews = E && E.meta ? E.meta.interviews : 0;

  function status(key, hatDaten, text) {
    const b = $(`[data-status="${key}"]`);
    if (!b) return;
    if (hatDaten) { b.textContent = text || `Ergebnis · n = ${nInterviews} Interviews`; b.classList.add("ok"); }
  }

  /* ---------------- Desk-Research-Diagramme */
  C.columnChart($("#chart-umsatz"), D.umsatz.werte, { width: 520, height: 250, unit: D.umsatz.einheit });
  C.hbarChart($("#chart-medien"), D.medien.werte, { width: 520, rowH: 33, label: 96, suffix: " %" });
  C.hbarChart($("#chart-follower"), D.follower.werte, {
    width: 560, rowH: 44, label: 100,
    format: v => (v >= 1000 ? f1(v / 1000).replace(",0", "") + " Tsd." : String(v))
  });

  /* ---------------- Limbic Map */
  C.limbicMap($("#limbic-host"), [
    { key: "M", kurz: "M", label: "Markenversprechen", deg: 160, r: 0.55, labelDx: 0, labelDy: 38 },
    { key: "K", kurz: "K", label: "Kommunikation", deg: 318, r: 0.62 },
    { key: "G", kurz: "G", label: "Gründermarke", deg: 62, r: 0.62, labelDx: -24 },
    { key: "P", kurz: "J", label: "Jonas", deg: 132, r: 0.42, typ: "persona" },
    { key: "S", kurz: "S", label: "Sandra", deg: 210, r: 0.5, typ: "persona", labelDx: -22 }
  ], { size: 520 });

  /* ---------------- Repertory Grid */
  const KATEGORIEN = ["Qualität & Haltbarkeit", "Komfort & Passform", "Preis & Preis-Leistung", "Nachhaltigkeit & Fairness",
    "Design & Stil", "Markenimage & Status", "Bekanntheit & Vertrauen"];
  const ELEMENTE = ["SNOCKS", "FALKE", "Happy Socks", "erlich textil", "Calvin Klein", "Uniqlo", "Lidl-Eigenmarke", "Ideal"];
  const G = E && E.grid;
  if (G) {
    const top = G.kategorien.slice(0, 9);
    C.heatmap($("#grid-heatmap"), { zeilen: top.map(k => k.kategorie), spalten: G.heatmap.spalten,
      werte: top.map(k => G.heatmap.spalten.map(e => k.werte[e])) }, { cellW: 74, cellH: 40, rowLabel: 220 });
    C.heatLegend($("#grid-legend"));
    $("#grid-attribute").innerHTML = G.markeneigenschaften.map(m =>
      `<li><div><b>${esc(m.kategorie)}</b><small>SNOCKS ${f1(m.snocks)}/5 · Differenzierung ${m.differenzierung >= 0 ? "+" : ""}${f1(m.differenzierung)} · z. B. „${esc(m.beispiele[0] || "")}“</small></div></li>`).join("");
    $("#n-interviews").textContent = nInterviews;
    $("#n-konstrukte").textContent = G.anzahl_konstrukte;
    status("grid", true);
    $("#grid-src").textContent = `Heatmap: mittlere Bewertung je Kategorie, 5 = bevorzugter Pol; n = ${nInterviews} Interviews, ${G.anzahl_konstrukte} Konstrukte (explorativ). Auswertung: auswertung/auswertung.py`;
  } else {
    C.heatmap($("#grid-heatmap"), { zeilen: KATEGORIEN, spalten: ELEMENTE, werte: KATEGORIEN.map(() => ELEMENTE.map(() => null)) },
      { cellW: 74, cellH: 40, rowLabel: 220 });
    const ghost = document.createElement("div");
    ghost.className = "placeholder";
    ghost.style.cssText = "position:absolute;left:300px;top:240px;width:440px;height:110px;background:rgba(251,248,242,.92)";
    ghost.innerHTML = "Heatmap füllt sich automatisch,<br>sobald die Interviews ausgewertet sind";
    $("#grid-heatmap").style.position = "relative";
    $("#grid-heatmap").appendChild(ghost);
    $("#grid-attribute").innerHTML = D.steuerrad.attribute.map(a =>
      `<li><div><b>${esc(a)}</b><small>Hypothese aus Desk Research</small></div></li>`).join("");
  }

  /* ---------------- Laddering / HVM */
  const L = E && E.laddering;
  if (L) {
    // je Stufe höchstens 5 Knoten, damit die Karte lesbar bleibt
    const proStufe = {};
    const knoten = L.hvm.knoten.filter(k => (proStufe[k.stufe] = (proStufe[k.stufe] || 0) + 1) <= 5);
    const ids = new Set(knoten.map(k => k.id));
    C.hvm($("#ladder-host"), knoten, L.hvm.kanten.filter(k => ids.has(k.von) && ids.has(k.nach)), { height: 400 });
    $("#ladder-foot").innerHTML =
      `<div><b>Funktionale Nutzen:</b> ${L.funktionale_nutzen.slice(0, 3).map(x => esc(x.code)).join(" · ")}</div>` +
      `<div><b>Emotionale Nutzen:</b> ${L.emotionale_nutzen.slice(0, 3).map(x => esc(x.code)).join(" · ")}</div>`;
    status("laddering", true);
    $("#ladder-src").textContent = `Hierarchical Value Map aus ${L.anzahl_leitern} Leitern (n = ${nInterviews}); Linienstärke = Anzahl direkter Verbindungen (Grenzwert ≥ ${L.grenzwert_hvm}); gelbe Zahl = Nennungen. Gutman (1982); Reynolds & Gutman (1988).`;
  } else {
    const h = C.leiternAlsHvm(D.leitern);
    C.hvm($("#ladder-host"), h.knoten, h.kanten, { height: 400 });
    $("#ladder-foot").innerHTML =
      `<div><b>Funktionale Nutzen (Hypothese):</b> hält lange · spart Geld &amp; Zeit · angenehmes Tragegefühl</div>` +
      `<div><b>Emotionale Nutzen (Hypothese):</b> Sicherheit · Wohlfühlen · „ein Thema weniger“</div>`;
  }

  /* ---------------- Analogien */
  const AN = E && E.analogien;
  $$("#analogie-cards .flip").forEach(card => {
    const key = card.dataset.key;
    let a = D.analogien[key].antwort, why = D.analogien[key].warum, who = "KI-Hypothese · Research-Agent C";
    if (AN && AN[key] && AN[key].haeufigkeiten.length) {
      const top = AN[key].haeufigkeiten[0];
      const grund = AN[key].begruendungen.find(b => b.antwort.toLowerCase() === top.antwort.toLowerCase() && b.warum);
      a = top.antwort; why = grund ? `„${grund.warum}“` : ""; who = `${top.anzahl} von ${AN[key].begruendungen.length} Nennungen`;
    }
    $(".a", card).textContent = a;
    $(".why", card).textContent = why;
    $(".who", card).textContent = who;
  });
  $("#aaker").innerHTML = D.aaker.map(d =>
    `<div>${d.name}</div><div class="track"><i style="width:${d.wert * 20}%"></i></div><div class="num"><b>${d.wert}</b></div>`).join("");
  const emotionen = AN && AN.gefuehle.length ? AN.gefuehle.slice(0, 6).map(g => g.antwort)
    : ["Wohlgefühl", "Spaß", "Vertrauen", "Zugehörigkeit", "Mut"];
  $("#emotionen").innerHTML = emotionen.map(e => `<span class="chip yellow" style="font-size:18px;padding:6px 16px">${esc(e)}</span>`).join("");
  if (AN) {
    status("analogien", true);
    $("#analogie-src").textContent = `Analogien: häufigste Antwort aus ${nInterviews} Interviews mit Begründung. Aaker-Profil: KI-Einschätzung (Research-Agent C) – Aaker, J. L. (1997), JMR 34(3).`;
  }

  /* ---------------- Markensteuerrad */
  const inhalt = Object.assign({}, D.steuerrad);
  if (G && G.markeneigenschaften.length) inhalt.attribute = G.markeneigenschaften.slice(0, 4).map(m => m.kategorie);
  if (L) inhalt.nutzen = [...L.funktionale_nutzen.slice(0, 2), ...L.emotionale_nutzen.slice(0, 2)].map(x => x.code);
  if (AN && AN.adjektive.length >= 3) inhalt.tonalitaet = AN.adjektive.slice(0, 5).map(x => x.antwort);
  C.steuerrad($("#wheel-host"), inhalt, { size: 560 });
  $("#kompetenz-list").innerHTML = D.steuerrad.kompetenz.map(k => `<li>${esc(k)}</li>`).join("");
  if (G || L || AN) $("#wheel-status").textContent = `Stand: Desk Research + ${nInterviews} Interviews (Attribute aus dem Repertory Grid, Nutzen aus dem Laddering, Tonalität aus den Analogien).`;

  C.miniRad($(".mini-rad-big"));
  C.miniRad($("#end-rad"));

  /* ---------------- Backup B3 / B4 */
  if (G && G.karte) {
    C.wahrnehmungskarte($("#karte-host"), G.karte, { size: 470 });
  } else {
    $("#karte-host").innerHTML = '<div class="placeholder" style="height:420px">Wahrnehmungskarte (Hauptkomponenten des Grids)<br>erscheint nach der Auswertung</div>';
  }
  const T = E && E.teilnehmende;
  $("#stichprobe-host").innerHTML = T
    ? `<h3 style="margin-bottom:10px">Stichprobe (n = ${nInterviews})</h3>` +
      [["Altersgruppe", "altersgruppe"], ["Geschlecht", "geschlecht"], ["SNOCKS bekannt", "snocks_bekannt"], ["SNOCKS gekauft", "snocks_gekauft"], ["Plattformen", "plattformen"]]
        .map(([t, k]) => `<p class="small"><b>${t}:</b> ${(T[k] || []).map(x => `${esc(x.antwort)} (${x.anzahl})`).join(", ") || "–"}</p>`).join("")
    : '<div class="placeholder" style="height:420px">Stichprobe (Alter, Geschlecht, Kenntnis von SNOCKS)<br>erscheint nach der Auswertung</div>';
  $("#ladder-details").innerHTML = L
    ? `<table class="t"><tr><th>Häufigste Ketten (A → … → W)</th><th>Anzahl</th></tr>${L.haeufigste_ketten.map(k => `<tr><td>${esc(k.kette)}</td><td>${k.anzahl}</td></tr>`).join("")}</table>` +
      `<p class="small" style="margin-top:14px"><b>Werte:</b> ${L.werte.slice(0, 6).map(x => `${esc(x.code)} (${x.nennungen})`).join(" · ")}</p>`
    : '<div class="placeholder" style="height:380px">Implikationsmatrix und häufigste Means-End-Ketten erscheinen nach der Auswertung</div>';

  /* ---------------- reveal.js */
  Reveal.initialize({
    hash: true,
    width: 1280, height: 720, margin: 0.02, minScale: 0.2, maxScale: 2,
    center: false,
    transition: "fade", backgroundTransition: "fade",
    slideNumber: "c/t", controls: true, controlsLayout: "bottom-right", progress: true,
    autoAnimateEasing: "cubic-bezier(.2,.7,.2,1)", autoAnimateDuration: 0.8,
    pdfSeparateFragments: false, pdfMaxPagesPerSlide: 1,
    plugins: [RevealNotes]
  }).then(() => {
    // Fortschrittsanzeige Markensteuerrad (oben rechts)
    const box = document.createElement("div");
    box.className = "wheel-progress hidden";
    $(".reveal").appendChild(box);
    const seg = C.miniRad(box);
    const lbl = document.createElement("div");
    lbl.className = "lbl";
    box.appendChild(lbl);
    const NAMEN = { kompetenz: "Kompetenz", zielgruppe: "Zielgruppe", attribute: "Attribute", nutzen: "Nutzen",
      tonalitaet: "Tonalität", bild: "Markenbild", alle: "Markensteuerrad" };
    const slides = Reveal.getSlides();
    function update(cur) {
      const key = cur.dataset.wheel;
      box.classList.toggle("hidden", !key || Anim.STATIC);
      if (!key) return;
      const idx = slides.indexOf(cur);
      const done = new Set(slides.slice(0, idx).map(s => s.dataset.wheel).filter(Boolean));
      Object.entries(seg).forEach(([k, p]) => {
        p.classList.toggle("done", done.has(k) || key === "alle");
        p.classList.toggle("now", k === key);
      });
      lbl.textContent = NAMEN[key] || "";
    }
    update(Reveal.getCurrentSlide());
    Reveal.on("slidechanged", e => update(e.currentSlide));
    Anim.init(Reveal);
  });
})();
