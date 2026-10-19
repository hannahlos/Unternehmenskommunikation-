# 🎤 Präsentation Fallstudie 1 – SNOCKS

Animierte HTML-Präsentation (reveal.js 6 + GSAP 3), läuft **offline in jedem Browser** – alle Bibliotheken und Schriften liegen in `vendor/`.

## Präsentieren

1. `index.html` im Browser öffnen (Chrome/Edge empfohlen; Doppelklick reicht).
2. **F** = Vollbild · **S** = Sprecheransicht mit Notizen und Timer · **→ / Leertaste** = weiter · **ESC** = Folienübersicht.
3. Folien mit Klick-Schritten: Limbic Map (2), Repertory Grid Methode (2), Analogien (4 Karten), Markensteuerrad (5 Quadranten).
4. **Plan B:** `../export/SNOCKS-Fallstudie1.pdf` (Endzustand jeder Folie, ohne Animationen).

Tipp: Präsentation vorher einmal auf dem Hochschul-Rechner bzw. dem eigenen Laptop am Beamer testen, Ordner `praesentation/` komplett auf einen USB-Stick kopieren.

## Inhalte aktualisieren

| Was | Wo |
|---|---|
| Texte der Folien, Sprechernotizen (`<aside class="notes">`) | `index.html` |
| Zahlen der Diagramme (Umsatz, Mediennutzung, Follower), Hypothesen fürs Steuerrad | `data/desk-research.js` |
| **Interviewergebnisse** (Heatmap, HVM, Analogien, Steuerrad, Backup B3/B4) | automatisch: `data/ergebnisse.js` – siehe unten |
| Farben, Schriften, Layout | `css/theme.css` |
| Diagramme / Animationen | `js/charts.js`, `js/animations.js`, `js/main.js` |

### Interviewergebnisse einspielen

```bash
cd fallstudie-1-snocks/auswertung
python3 auswertung.py          # liest ../daten/Erfassung_Interviews.xlsx
```

Das Skript schreibt `praesentation/data/ergebnisse.js`. Beim nächsten Öffnen der Präsentation ersetzen die echten Ergebnisse automatisch die Hypothesen. Das Badge oben rechts wechselt dann von „Hypothese“ auf „Ergebnis · n = …“.

### Platzhalter, die die Gruppe füllt

- **Persona-Porträt** (Folie 4): KI-Bild erzeugen, als `assets/persona-jonas.jpg` ablegen, Prompt im Prompt-Log nachtragen.
- **Screenshots** (Folie 11: Instagram, Facebook-Ad, YouTube-Creator; Folie 12: Logo + 3 Moodboard-Bilder) → `assets/screens/`.
- **Namen** der Gruppenmitglieder auf der Titelfolie.
- **Prüfliste** aus `../PLAN-Praesentation.md` (Umsatz 2025, Garantie, Farben …).

## Export (PDF, Screenshots)

```bash
cd fallstudie-1-snocks/praesentation
NODE_PATH=$(npm root -g) node tools/export.cjs pdf            # → ../export/SNOCKS-Fallstudie1.pdf
NODE_PATH=$(npm root -g) node tools/export.cjs screenshots    # → screenshots/folie-XX.png (nicht im Repo)
```

Benötigt Playwright mit Chromium (`npm i -g playwright && npx playwright install chromium`). Alternativ im Browser: `index.html?print-pdf` öffnen → Drucken → „Als PDF speichern“, Hintergrundgrafiken an, Ränder „Keine“.

## Technik & Lizenzen

- reveal.js 6.0.2 (MIT) · GSAP 3.15.0 inkl. DrawSVG (GSAP Standard „No Charge“ License) · Schriften Inter & Archivo Black (SIL OFL 1.1)
- Diagrammfarben mit dem dataviz-Validator geprüft (Farbsehschwäche, Kontrast); die Limbic-Map-Zonen sind zusätzlich beschriftet.
- `?static` in der URL zeigt alle Folien ohne Animation im Endzustand (für Screenshots); „Bewegung reduzieren“ im Betriebssystem schaltet Animationen ebenfalls ab.
