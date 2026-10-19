/* SVG-Diagramme der Präsentation.
   Daten: window.DESK (Desk Research) und window.ERGEBNISSE (Interviews, erzeugt von auswertung.py).
   Mark-Specs nach dataviz-Skill: Balken ≤ 24 px, 4 px runde Datenkante, Haarlinien, Text in Text-Farben. */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  const fmt = new Intl.NumberFormat("de-DE");
  const fmt1 = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  function el(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs || {})) n.setAttribute(k, v);
    if (parent) parent.appendChild(n);
    return n;
  }
  function txt(parent, x, y, s, attrs) {
    const t = el("text", Object.assign({ x, y }, attrs || {}), parent);
    t.textContent = s;
    return t;
  }
  function svgRoot(host, w, h) {
    const s = el("svg", { viewBox: `0 0 ${w} ${h}`, width: w, height: h, class: "chart", role: "img" });
    host.appendChild(s);
    return s;
  }
  function hatch(defs, id, color) {
    const p = el("pattern", { id, width: 8, height: 8, patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" }, defs);
    el("rect", { width: 8, height: 8, fill: "#dbe9fb" }, p);
    el("line", { x1: 0, y1: 0, x2: 0, y2: 8, stroke: color, "stroke-width": 4 }, p);
  }
  // Säule mit 4 px runder Oberkante, eckig an der Grundlinie
  function colPath(x, y, w, h, r = 4) {
    r = Math.min(r, h, w / 2);
    return `M${x},${y + h} V${y + r} Q${x},${y} ${x + r},${y} H${x + w - r} Q${x + w},${y} ${x + w},${y + r} V${y + h} Z`;
  }
  function barPath(x, y, w, h, r = 4) {
    r = Math.min(r, w, h / 2);
    return `M${x},${y} H${x + w - r} Q${x + w},${y} ${x + w},${y + r} V${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} H${x} Z`;
  }

  /* ------------------------------------------------ Säulendiagramm (Umsatz) */
  function columnChart(host, data, { width = 520, height = 300, unit = "" } = {}) {
    const s = svgRoot(host, width, height);
    hatch(el("defs", {}, s), "hatch-blue", "#2a78d6");
    const m = { t: 30, r: 10, b: 34, l: 10 };
    const max = Math.max(...data.map(d => d.wert || 0)) * 1.12;
    const slot = (width - m.l - m.r) / data.length;
    const bw = Math.min(24, slot * 0.5);
    const y = v => m.t + (height - m.t - m.b) * (1 - v / max);
    const g = el("g", { class: "grid" }, s);
    [0.5].forEach(f => el("line", { x1: m.l, x2: width - m.r, y1: y(max * f), y2: y(max * f) }, g));
    el("line", { class: "baseline", x1: m.l, x2: width - m.r, y1: height - m.b, y2: height - m.b }, s);
    const bars = [], labels = [];
    data.forEach((d, i) => {
      const cx = m.l + slot * i + slot / 2;
      txt(s, cx, height - m.b + 22, d.jahr, { "text-anchor": "middle", class: "axis-label" });
      if (d.wert == null) {
        txt(s, cx, height - m.b - 8, "k. A.", { "text-anchor": "middle", class: "axis-label", "font-size": 12 });
        return;
      }
      const top = y(d.wert);
      const b = el("path", { d: colPath(cx - bw / 2, top, bw, height - m.b - top), class: "bar" + (d.unsicher ? " unsure" : "") }, s);
      el("title", {}, b).textContent = `${d.jahr}: ${d.label} ${unit}`;
      bars.push(b);
      labels.push(txt(s, cx, top - 9, d.label, { "text-anchor": "middle", class: "value-label" }));
    });
    return { svg: s, bars, labels };
  }

  /* ------------------------------------------------ Horizontale Balken */
  function hbarChart(host, data, { width = 520, rowH = 38, label = 120, format = v => fmt.format(v), suffix = "" } = {}) {
    const height = data.length * rowH + 8;
    const s = svgRoot(host, width, height);
    const max = Math.max(...data.map(d => d.wert)) * 1.32;
    const x0 = label, x1 = width - 10;
    el("line", { class: "baseline", x1: x0, x2: x0, y1: 0, y2: height - 4 }, s);
    const bars = [], values = [];
    data.forEach((d, i) => {
      const yc = i * rowH + rowH / 2 + 2;
      txt(s, x0 - 12, yc + 5, d.name, { "text-anchor": "end", "font-size": 16, fill: "#1e1e1c", "font-weight": 600 });
      const w = (x1 - x0) * d.wert / max;
      const b = el("path", { d: barPath(x0, yc - 11, Math.max(w, 2), 22), class: "bar" }, s);
      el("title", {}, b).textContent = `${d.name}: ${format(d.wert)}${suffix}`;
      bars.push(b);
      const v = txt(s, x0 + w + 8, yc + 5, format(d.wert) + suffix, { class: "value-label", "data-target": d.wert });
      values.push(v);
    });
    return { svg: s, bars, values };
  }

  /* ------------------------------------------------ Heatmap (Repertory Grid) */
  const SEQ = ["#cde2fb", "#9ec5f4", "#6da7ec", "#3987e5", "#256abf", "#184f95", "#0d366b"];
  function seqColor(v) { return SEQ[Math.max(0, Math.min(6, Math.round((v - 1) / 4 * 6)))]; }

  function heatmap(host, hm, { cellW = 92, cellH = 40, rowLabel = 230 } = {}) {
    const cols = hm.spalten, rows = hm.zeilen;
    const width = rowLabel + cols.length * cellW, height = 46 + rows.length * cellH;
    const s = svgRoot(host, width, height);
    const snocksX = rowLabel;
    const hl = el("rect", { x: snocksX - 3, y: 2, width: cellW + 4, height: height - 2, rx: 10, fill: "#fac950", class: "hm-highlight" }, s);
    cols.forEach((c, j) => {
      const teile = (c === "Lidl-Eigenmarke" ? "Lidl" : c).split(" ");
      teile.forEach((t, k) => txt(s, rowLabel + j * cellW + cellW / 2, (teile.length > 1 ? 18 : 30) + k * 16, t,
        { "text-anchor": "middle", "font-size": 14, "font-weight": c === "SNOCKS" ? 800 : 600, fill: "#1e1e1c" }));
    });
    const cells = [];
    rows.forEach((r, i) => {
      const y = 46 + i * cellH;
      txt(s, rowLabel - 14, y + cellH / 2 + 5, r, { "text-anchor": "end", "font-size": 15, fill: "#1e1e1c" });
      const rowCells = [];
      hm.werte[i].forEach((v, j) => {
        const g = el("g", { class: "hm-cell" }, s);
        const fill = v == null ? "#f3eee3" : seqColor(v);
        const rect = el("rect", { x: rowLabel + j * cellW + 1, y: y + 1, width: cellW - 2, height: cellH - 2, rx: 4, fill }, g);
        el("title", {}, rect).textContent = `${r} · ${cols[j]}: ${v == null ? "–" : fmt1.format(v)}`;
        if (v != null) {
          const dark = Math.round((v - 1) / 4 * 6) >= 4;
          txt(g, rowLabel + j * cellW + cellW / 2, y + cellH / 2 + 5, fmt1.format(v),
            { "text-anchor": "middle", "font-size": 14, "font-weight": 700, fill: dark ? "#ffffff" : "#1e1e1c" });
        }
        rowCells.push(g);
      });
      cells.push(rowCells);
    });
    return { svg: s, cells, highlight: hl };
  }

  function heatLegend(host) {
    const s = svgRoot(host, 330, 34);
    txt(s, 0, 22, "Gegenpol", { "font-size": 13, class: "axis-label" });
    SEQ.forEach((c, i) => el("rect", { x: 72 + i * 26, y: 8, width: 24, height: 18, rx: 3, fill: c }, s));
    txt(s, 72 + 7 * 26 + 6, 22, "bevorzugt", { "font-size": 13, class: "axis-label" });
    return s;
  }

  /* ------------------------------------------------ Limbic Map */
  // Winkel im Uhrzeigersinn ab 12 Uhr: Abenteuer 0°, Dominanz 60°, Disziplin 120°, Balance 180°, Fantasie 240°, Stimulanz 300°
  function polar(cx, cy, r, deg) {
    const a = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }
  function limbicMap(host, points, { size = 500 } = {}) {
    const wrap = document.createElement("div");
    wrap.className = "limbic";
    wrap.style.cssText = `position:relative;width:${size}px;height:${size}px;`;
    const disc = document.createElement("div");
    disc.className = "limbic-disc";
    const R = size * 0.4;
    disc.style.cssText = `position:absolute;left:${size / 2 - R}px;top:${size / 2 - R}px;width:${2 * R}px;height:${2 * R}px;border-radius:50%;` +
      "background:radial-gradient(circle, rgba(251,248,242,.95) 0%, rgba(251,248,242,.55) 38%, rgba(251,248,242,0) 70%)," +
      "conic-gradient(from 0deg, #f9cfa6 0deg, #f6c4c3 60deg, #d9dcc2 120deg, #bfe9d9 180deg, #dfe6b9 240deg, #f9e2a8 300deg, #f9cfa6 360deg);";
    wrap.appendChild(disc);
    host.appendChild(wrap);
    const s = svgRoot(wrap, size, size);
    s.style.position = "absolute"; s.style.left = 0; s.style.top = 0;
    const c = size / 2;
    el("circle", { cx: c, cy: c, r: R, fill: "none", stroke: "#c9c2b4", "stroke-width": 1 }, s);
    const zones = [];
    const poles = [
      { n: "STIMULANZ", d: 300, col: "#b37a00", main: true }, { n: "DOMINANZ", d: 60, col: "#b8302f", main: true },
      { n: "BALANCE", d: 180, col: "#0f7a54", main: true },
      { n: "Abenteuer / Thrill", d: 0 }, { n: "Disziplin / Kontrolle", d: 120 }, { n: "Fantasie / Genuss", d: 240 }
    ];
    poles.forEach(p => {
      const [x, y] = polar(c, c, R + (p.main ? 30 : 22), p.d);
      const t = txt(s, x, y + 5, p.n, {
        "text-anchor": "middle", "font-size": p.main ? 17 : 13.5, "font-weight": p.main ? 800 : 600,
        fill: p.col || "#55524c", "letter-spacing": p.main ? "0.06em" : "0", class: "zone-label halo"
      });
      zones.push(t);
    });
    const tension = el("line", { class: "tension", stroke: "#1e1e1c", "stroke-width": 2, "marker-start": "url(#arr)", "marker-end": "url(#arr)" }, s);
    const defs = el("defs", {}, s);
    const mk = el("marker", { id: "arr", viewBox: "0 0 10 10", refX: 5, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, defs);
    el("path", { d: "M0,0 L10,5 L0,10 z", fill: "#1e1e1c" }, mk);
    const dots = {};
    points.forEach(p => {
      const [x, y] = polar(c, c, R * p.r, p.deg);
      const g = el("g", { class: "lm-point", "data-key": p.key, "data-x": x, "data-y": y }, s);
      const persona = p.typ === "persona";
      el("circle", { cx: x, cy: y, r: persona ? 15 : 17, fill: persona ? "#fac950" : "#1e1e1c", stroke: "#fbf8f2", "stroke-width": 3 }, g);
      txt(g, x, y + 5, p.kurz, { "text-anchor": "middle", "font-size": 14, "font-weight": 800, fill: persona ? "#1e1e1c" : "#ffffff" });
      const dx = p.labelDx === undefined ? 24 : p.labelDx;
      const lx = x + dx, ly = y + (p.labelDy || 5);
      txt(g, lx, ly, p.label, { "text-anchor": dx < 0 ? "end" : dx === 0 ? "middle" : "start", "font-size": 14.5, "font-weight": 700, fill: "#1e1e1c", class: "halo" });
      dots[p.key] = { g, x, y };
    });
    if (dots.M && dots.K) {
      tension.setAttribute("x1", dots.M.x); tension.setAttribute("y1", dots.M.y);
      tension.setAttribute("x2", dots.K.x); tension.setAttribute("y2", dots.K.y);
      s.appendChild(tension);
      // Pfeil an den Punkträndern beginnen lassen
      const dx = dots.K.x - dots.M.x, dy = dots.K.y - dots.M.y, len = Math.hypot(dx, dy), k = 24 / len;
      tension.setAttribute("x1", dots.M.x + dx * k); tension.setAttribute("y1", dots.M.y + dy * k);
      tension.setAttribute("x2", dots.K.x - dx * k); tension.setAttribute("y2", dots.K.y - dy * k);
      const mx = (dots.M.x + dots.K.x) / 2, my = (dots.M.y + dots.K.y) / 2;
      const tl = txt(s, mx - 14, my - 2, "Spannungsfeld", { "text-anchor": "end", "font-size": 14, "font-weight": 800, fill: "#1e1e1c", class: "tension-label halo" });
      s.appendChild(tl);
    }
    Object.values(dots).forEach(d => s.appendChild(d.g));
    return { wrap, disc, svg: s, zones, dots, tension, tensionLabel: s.querySelector(".tension-label") };
  }

  /* ------------------------------------------------ Markensteuerrad */
  function arcPath(cx, cy, r0, r1, a0, a1) {
    const p = (r, a) => polar(cx, cy, r, a);
    const [x0, y0] = p(r1, a0), [x1, y1] = p(r1, a1), [x2, y2] = p(r0, a1), [x3, y3] = p(r0, a0);
    return `M${x0},${y0} A${r1},${r1} 0 0 1 ${x1},${y1} L${x2},${y2} A${r0},${r0} 0 0 0 ${x3},${y3} Z`;
  }
  const QUAD = [
    { key: "attribute", titel: "Markenattribute", frage: "Über welche Eigenschaften verfüge ich?", a0: 270, a1: 360, side: "r", pos: "tl" },
    { key: "tonalitaet", titel: "Markentonalität", frage: "Wie bin ich?", a0: 0, a1: 90, side: "e", pos: "tr" },
    { key: "bild", titel: "Markenbild", frage: "Wie trete ich auf?", a0: 90, a1: 180, side: "e", pos: "br" },
    { key: "nutzen", titel: "Markennutzen", frage: "Was biete ich an?", a0: 180, a1: 270, side: "r", pos: "bl" }
  ];
  function steuerrad(host, inhalt, { size = 560 } = {}) {
    const wrap = document.createElement("div");
    wrap.className = "steuerrad";
    wrap.style.cssText = `position:relative;width:${size}px;height:${size}px;`;
    host.appendChild(wrap);
    const s = svgRoot(wrap, size, size);
    const c = size / 2, R = size / 2 - 4, r0 = size * 0.17;
    const segs = {};
    QUAD.forEach(q => {
      const g = el("g", { class: "sr-seg", "data-key": q.key }, s);
      el("path", { d: arcPath(c, c, r0 + 6, R, q.a0 + 0.6, q.a1 - 0.6), fill: q.side === "r" ? "#dbe9fb" : "#fbe1d6" }, g);
      segs[q.key] = g;
    });
    el("line", { x1: c, x2: c, y1: 0, y2: size, stroke: "#fbf8f2", "stroke-width": 6 }, s);
    const core = el("g", { class: "sr-core" }, s);
    el("circle", { cx: c, cy: c, r: r0, fill: "#fac950" }, core);
    const boxes = {};
    const box = (cls, css, html) => {
      const d = document.createElement("div");
      d.className = "sr-box " + cls;
      d.style.cssText = "position:absolute;" + css;
      d.innerHTML = html;
      wrap.appendChild(d);
      return d;
    };
    const w = size * 0.3;
    const posCss = {
      tl: `left:${size * 0.1}px;top:${size * 0.15}px;width:${w}px;text-align:left;`,
      tr: `right:${size * 0.1}px;top:${size * 0.15}px;width:${w}px;text-align:right;`,
      br: `right:${size * 0.1}px;bottom:${size * 0.13}px;width:${w}px;text-align:right;`,
      bl: `left:${size * 0.1}px;bottom:${size * 0.13}px;width:${w}px;text-align:left;`
    };
    QUAD.forEach(q => {
      const items = (inhalt[q.key] || []).map(i => `<li>${i}</li>`).join("");
      boxes[q.key] = box(q.side === "r" ? "rational" : "emotional", posCss[q.pos],
        `<div class="sr-t">${q.titel}</div><div class="sr-q">${q.frage}</div><ul>${items}</ul>`);
    });
    boxes.kompetenz = box("core", `left:${c - r0 + 6}px;top:${c - 24}px;width:${2 * r0 - 12}px;text-align:center;`,
      `<div class="sr-t">Marken&shy;kompetenz</div><div class="sr-q">Wer bin ich?</div>`);
    return { wrap, svg: s, segs, core, boxes };
  }

  /* Mini-Rad für die Fortschrittsanzeige */
  function miniRad(host) {
    const s = el("svg", { viewBox: "0 0 64 64" });
    host.appendChild(s);
    const seg = {};
    QUAD.forEach(q => {
      seg[q.key] = el("path", { d: arcPath(32, 32, 12, 31, q.a0 + 2, q.a1 - 2), class: "seg " + q.side, "data-key": q.key }, s);
    });
    seg.kompetenz = el("circle", { cx: 32, cy: 32, r: 10, class: "seg c", "data-key": "kompetenz" }, s);
    return seg;
  }

  /* ------------------------------------------------ Means-End-Leitern / HVM */
  const STUFE_Y = { W: 0, PK: 1, FK: 2, A: 3 };
  const STUFE_NAME = { W: "Werte", PK: "psychosoziale Konsequenz", FK: "funktionale Konsequenz", A: "Attribute" };
  const STUFE_FARBE = { W: "#1e1e1c", PK: "#eb6834", FK: "#2a78d6", A: "#8a857c" };

  function hvm(host, knoten, kanten, { width = 1130, height = 420, legende = true } = {}) {
    const s = svgRoot(host, width, height);
    const m = { l: legende ? 190 : 10, r: 10, t: 14, b: 14 };
    const rowH = (height - m.t - m.b) / 4;
    const pos = {};
    ["W", "PK", "FK", "A"].forEach(st => {
      const yc = m.t + STUFE_Y[st] * rowH + rowH / 2;
      if (legende) {
        txt(s, 0, yc - 2, STUFE_NAME[st].split(" ")[0], { "font-size": 14, "font-weight": 800, fill: STUFE_FARBE[st] });
        if (STUFE_NAME[st].includes(" ")) txt(s, 0, yc + 15, STUFE_NAME[st].split(" ").slice(1).join(" "), { "font-size": 13, fill: "#8a857c" });
      }
      const row = knoten.filter(k => k.stufe === st);
      const span = (width - m.l - m.r) / Math.max(row.length, 1);
      row.forEach((k, i) => { pos[k.id] = { x: m.l + span * i + span / 2, y: yc, k }; });
    });
    const maxN = Math.max(1, ...kanten.map(k => k.direkt));
    const edges = kanten.filter(k => pos[k.von] && pos[k.nach]).map(k => {
      const a = pos[k.von], b = pos[k.nach];
      const e = el("path", {
        d: `M${a.x},${a.y} C${a.x},${(a.y + b.y) / 2} ${b.x},${(a.y + b.y) / 2} ${b.x},${b.y}`,
        fill: "none", stroke: "#55524c", "stroke-opacity": 0.55, "stroke-width": 1.5 + 4 * k.direkt / maxN, class: "hvm-edge",
        "data-from": k.von.split(":")[0]
      }, s);
      el("title", {}, e).textContent = `${k.von.split(":")[1]} → ${k.nach.split(":")[1]}: ${k.direkt}× direkt`;
      return e;
    });
    const nodes = Object.values(pos).map(({ x, y, k }) => {
      const g = el("g", { class: "hvm-node", "data-stufe": k.stufe }, s);
      const label = k.code.length > 30 ? k.code.slice(0, 29) + "…" : k.code;
      const w = Math.max(110, label.length * 8.2 + 26);
      el("rect", { x: x - w / 2, y: y - 19, width: w, height: 38, rx: 19, fill: k.stufe === "W" ? "#1e1e1c" : "#ffffff",
        stroke: STUFE_FARBE[k.stufe], "stroke-width": 2.5 }, g);
      txt(g, x, y + 5, label, { "text-anchor": "middle", "font-size": 14.5, "font-weight": 700, fill: k.stufe === "W" ? "#ffffff" : "#1e1e1c" });
      if (k.nennungen) {
        el("circle", { cx: x + w / 2 - 2, cy: y - 17, r: 11, fill: "#fac950", stroke: "#fbf8f2", "stroke-width": 2 }, g);
        txt(g, x + w / 2 - 2, y - 12.5, k.nennungen, { "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: "#1e1e1c" });
      }
      return g;
    });
    // Kanten unter die Knoten legen
    edges.forEach(e => s.insertBefore(e, s.firstChild));
    return { svg: s, nodes, edges };
  }

  // Hypothesen-Leitern (A → FK → PK → W) als HVM-Datenstruktur
  function leiternAlsHvm(leitern) {
    const knoten = [], kanten = [], st = ["A", "FK", "PK", "W"];
    leitern.forEach(l => l.forEach((code, i) => knoten.push({ id: `${st[i]}:${code}`, stufe: st[i], code })));
    leitern.forEach(l => l.forEach((code, i) => { if (i < 3) kanten.push({ von: `${st[i]}:${code}`, nach: `${st[i + 1]}:${l[i + 1]}`, direkt: 1 }); }));
    return { knoten, kanten };
  }

  /* ------------------------------------------------ Wahrnehmungskarte (Backup) */
  function wahrnehmungskarte(host, karte, { size = 470 } = {}) {
    const s = svgRoot(host, size, size);
    const c = size / 2, pts = Object.entries(karte.elemente);
    const max = Math.max(...pts.flatMap(([, p]) => p.map(Math.abs)), 0.1) * 1.25;
    const sc = v => c + v / max * (c - 30);
    el("line", { x1: 20, x2: size - 20, y1: c, y2: c, class: "baseline" }, s);
    el("line", { y1: 20, y2: size - 20, x1: c, x2: c, class: "baseline" }, s);
    Object.entries(karte.kategorien || {}).forEach(([k, v]) => {
      const x = sc(v[0] * max * 0.9), y = sc(-v[1] * max * 0.9);
      el("line", { x1: c, y1: c, x2: x, y2: y, stroke: "#eb6834", "stroke-width": 1.5 }, s);
      txt(s, x, y - 6, k, { "text-anchor": "middle", "font-size": 12, fill: "#8a3214" });
    });
    pts.forEach(([name, p]) => {
      const x = sc(p[0]), y = sc(-p[1]), hi = name === "SNOCKS", ideal = name === "Ideal";
      el("circle", { cx: x, cy: y, r: hi ? 9 : 6, fill: hi ? "#fac950" : ideal ? "#1e1e1c" : "#2a78d6", stroke: "#fbf8f2", "stroke-width": 2 }, s);
      txt(s, x + 11, y + 5, name, { "font-size": 14, "font-weight": hi || ideal ? 800 : 600, fill: "#1e1e1c" });
    });
    const ev = karte.erklaerte_varianz || [0, 0];
    txt(s, size - 20, c - 8, `Dim. 1 (${Math.round(ev[0] * 100)} %)`, { "text-anchor": "end", class: "axis-label" });
    txt(s, c + 8, 30, `Dim. 2 (${Math.round(ev[1] * 100)} %)`, { class: "axis-label" });
    return s;
  }

  window.Charts = { columnChart, hbarChart, heatmap, heatLegend, limbicMap, steuerrad, miniRad, hvm, leiternAlsHvm, wahrnehmungskarte, fmt, fmt1 };
})();
