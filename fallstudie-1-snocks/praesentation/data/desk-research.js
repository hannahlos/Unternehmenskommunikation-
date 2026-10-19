// Zahlen aus der Desk Research für die Diagramme der Folien.
// Herkunft: fallstudie-1-snocks/research/A-, B-, C-*.md  ·  ⚠️ = vor der Präsentation am Original prüfen
window.DESK = {
  umsatz: {
    einheit: "Mio. €",
    werte: [
      { jahr: 2017, wert: 0.45, label: "0,4–0,5" },
      { jahr: 2018, wert: null },
      { jahr: 2019, wert: null },
      { jahr: 2020, wert: 11, label: "10–12", unsicher: true },
      { jahr: 2021, wert: 32, label: "32" },
      { jahr: 2022, wert: 57, label: "57" },
      { jahr: 2023, wert: 70, label: "≈ 70" },
      { jahr: 2024, wert: 83, label: "≈ 83" },
      { jahr: 2025, wert: 110, label: "≈ 110*", unsicher: true }
    ],
    quelle: "OMR (2018, 2020, 2023), FashionUnited (11.03.2022), Taylor Wessing (2025), retail-news (2024); *2025: Eigenangabe SNOCKS-Presseseite – laut FashionUnited (06.03.2026) nur +20 %, Abgrenzung unklar ⚠️"
  },

  medien: {
    titel: "Mind. wöchentliche Nutzung, Bevölkerung ab 14 Jahren",
    werte: [
      { name: "Instagram", wert: 40 },
      { name: "Facebook", wert: 28 },
      { name: "TikTok", wert: 18 },
      { name: "LinkedIn", wert: 8 },
      { name: "X", wert: 6 }
    ],
    quelle: "ARD/ZDF-Medienstudie 2026 (Media Perspektiven 24/2026), n = 2.462"
  },

  follower: {
    titel: "Follower der SNOCKS-Kanäle (Drittquellen ⚠️)",
    werte: [
      { name: "Instagram", wert: 285867, hinweis: "@snocks · 28.09.2026" },
      { name: "TikTok", wert: 126500, hinweis: "@snocks.feelthefit" },
      { name: "Facebook", wert: 44000, hinweis: "≈" },
      { name: "LinkedIn", wert: 22500, hinweis: "≈ Unternehmensseite" }
    ],
    quelle: "Likeometer (28.09.2026), TikTok-Profil, omkb.de, meedia.de – Zahlen direkt auf den Profilen prüfen ⚠️"
  },

  // Analogie-Hypothesen von Research-Subagent C (KI) – werden durch Interviewantworten ersetzt
  analogien: {
    mensch: { antwort: "Der Kumpel aus der Mannheimer Start-up-WG", warum: "nahbar, locker, duzt alle, ein bisschen frech – aber verlässlich" },
    promi: { antwort: "Jürgen Klopp", warum: "Gründer-Vorbild („Klopp des E-Commerce“): Energie, Humor, Teamgeist" },
    tier: { antwort: "Golden Retriever", warum: "freundlich, treu, verspielt und für alle zugänglich" },
    auto: { antwort: "VW Golf GTI", warum: "Alltagsauto für die Masse – mit sportlichem, frechem Twist" }
  },
  aaker: [
    { name: "Erregung / Spannung", wert: 5 },
    { name: "Aufrichtigkeit", wert: 4 },
    { name: "Kompetenz", wert: 4 },
    { name: "Robustheit", wert: 3 },
    { name: "Kultiviertheit", wert: 2 }
  ],

  // Laddering-Hypothesen aus der Desk Research (A → FK → PK → W) – werden durch die HVM ersetzt
  leitern: [
    ["Anti-Loch-Garantie", "hält lange, kein Nachkaufen", "kein Ärger, kein Risiko", "Sicherheit"],
    ["Bio-Baumwolle", "angenehmes Tragegefühl", "fühle mich wohl in meiner Haut", "Lebensqualität"],
    ["Multipacks zum fairen Preis", "spart Geld & Zeit", "muss nicht darüber nachdenken", "Effizienz"]
  ],

  // Markensteuerrad – Arbeitshypothese (PLAN-Praesentation.md, Abschnitt 2b)
  steuerrad: {
    kompetenz: ["Mannheimer D2C-Pionier für Basics seit 2016", "vom Amazon-Seller zum House of Brands", "Performance-Marketing-DNA"],
    attribute: ["Bio-Baumwolle", "Anti-Loch-Garantie", "Multipacks zum fairen Preis", "Größen bis 5XL"],
    nutzen: ["passt & hält (funktional)", "spart Zeit & Geld (funktional)", "Wohlfühlen im eigenen Körper (emotional)", "„ein Thema weniger“ (emotional)"],
    tonalitaet: ["locker", "mutig", "humorvoll", "nahbar", "ehrlich"],
    bild: ["Wortmarke SNOCKS · „feel the fit.“", "echte Menschen statt Models", "Creator- & UGC-Videos", "Du-Ansprache mit Emojis"]
  }
};
