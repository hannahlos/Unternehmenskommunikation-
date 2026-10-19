# 📒 KI-Prompt-Log – Unternehmenskommunikation (Fallstudie 1: SNOCKS)

> **Zweck:** Die Aufgabenstellung von Fallstudie 1 verlangt ausdrücklich:
> *„Nutzen Sie hierfür insbesondere Desk Research und KI-Tools als Methoden. Dokumentieren Sie Ihre Prompts und begründen Sie Ihr Vorgehen (Backup).“*
> Dieses Log ist das Backup dazu. Jeder Prompt – von uns an die KI und von der KI an ihre Unteragenten (Subagents) – wird hier **wörtlich, mit Datum und Uhrzeit** festgehalten, zusammen mit der Begründung, warum er gestellt wurde.

## Konventionen

| Symbol | Bedeutung |
|---|---|
| 👤 → 🤖 | Prompt der Gruppe an Claude Code (Haupt-Agent) |
| 🤖 → 🧩 | Prompt des Haupt-Agenten an einen Unteragenten (Subagent) |
| 🧩 → 🤖 | Antwort eines Unteragenten an den Haupt-Agenten |
| 🔎 | Websuche / Webabruf (Desk Research) |

- **Zeitzone:** alle Zeiten in deutscher Zeit (Europe/Berlin, MESZ/MEZ).
- **KI-Tool:** Claude Code (Anthropic), Cloud-Session; Unteragenten = eigenständige Claude-Instanzen mit Websuche, die vom Haupt-Agenten beauftragt werden.
- **Vollständige Antworten** der Unteragenten liegen als eigene Dateien im Ordner [`fallstudie-1-snocks/research/`](../../fallstudie-1-snocks/research/) und sind unten verlinkt.
- **Automatisches Log:** Ab sofort protokolliert ein Hook (`.claude/hooks/prompt-logger.sh`) jeden neuen Prompt, jeden Subagent-Auftrag und jede Websuche automatisch mit Zeitstempel in [`docs/prompt-log/auto/`](auto/) (eine Datei pro Tag). Dieses Dokument hier ist die **kommentierte** Fassung mit Begründungen.
- **Prompts in anderen KI-Tools** (ChatGPT, Gemini, Perplexity, Midjourney …), die Gruppenmitglieder selbst nutzen, bitte mit der Vorlage ganz unten nachtragen.

---

## Übersicht

| # | Datum | Uhrzeit | Richtung | Kurzbeschreibung | Ergebnis |
|---|---|---|---|---|---|
| 1 | 19.10.2026 | 11:31 | 👤 → 🤖 | Auftrag: Doku-Struktur, Snocks-Recherche, Präsentationsplan | dieses Repo |
| 2 | 19.10.2026 | 11:35 | 🤖 → 🧩 A | Desk Research: Unternehmen, Sortiment, Wettbewerb | [A-unternehmen-und-wettbewerb.md](../../fallstudie-1-snocks/research/A-unternehmen-und-wettbewerb.md) |
| 3 | 19.10.2026 | 11:35 | 🤖 → 🧩 B | Desk Research: Zielgruppe, Brand Persona, Limbic Map | [B-zielgruppe-und-persona.md](../../fallstudie-1-snocks/research/B-zielgruppe-und-persona.md) |
| 4 | 19.10.2026 | 11:35 | 🤖 → 🧩 C | Desk Research: Kommunikationsanalyse & Corporate Design | [C-kommunikationsanalyse.md](../../fallstudie-1-snocks/research/C-kommunikationsanalyse.md) |
| 6 | 19.10.2026 | 11:41 | 👤 → 🤖 | „Ist behoben“ (GitHub-Zugriff neu verbunden) | Push erfolgreich, siehe #5 |
| 2 → | 19.10.2026 | 11:48 | 🧩 A → 🤖 | Antwort A (88 Tool-Aufrufe) | siehe Abschnitt „→ Antwort“ unten |
| 4 → | 19.10.2026 | 11:49 | 🧩 C → 🤖 | Antwort C (95 Tool-Aufrufe) | siehe Abschnitt „→ Antwort“ unten |
| 3 → | 19.10.2026 | 11:55 | 🧩 B → 🤖 | Antwort B (76 Tool-Aufrufe) | siehe Abschnitt „→ Antwort“ unten |
| 5 | 19.10.2026 | 11:35–11:56 | 🤖 | Eigene Recherche, Hook-Setup, Synthese in den Präsentationsplan | [PLAN-Praesentation.md](../../fallstudie-1-snocks/PLAN-Praesentation.md) |
| 7 | 19.10.2026 | 20:55 | 👤 → 🤖 | „mach weiter“ → Interviewleitfaden, Erfassungstabelle, Auswertungsskript, Präsentations-Grundgerüst | siehe #7 |

---

## #1 · 👤 → 🤖 · 19.10.2026, 11:31 Uhr · Auftrag der Gruppe

**Kontext / Anhänge:** 4 Screenshots aus dem Vorlesungsskript (Folien 57–60), abgelegt unter [`docs/aufgabenstellung/`](../aufgabenstellung/).

**Prompt (wörtlich):**

> Wir haben folgenden Auftrag zuerst sollen wir die Fallstudie zum 26.10 bearbeiten und die anderen Termine sind gerade erstmal unwichtig die Aufgaben dazu stehen auf den Folien.  Unsere Marke ist Snocks, wichtig wir sollen jeden KI Prompt und jede Unterhaltung zwischen Unteragenten dokumentieren, das heißt mache eine passende MD datei damit alles im GitHub dokumentiert wird gerade wie die prompts sind mit Zeit und Datum.
> Dann Recherchiere zu Snocks und erstelle einen Plan zur Erstellung einer Präsentation. Diese soll Animationen haben und optisch sehr ansprechend sein, deshalb gute Grafiken besitzen. Du hast die freie Wahl Plugin und Mods zu installieren die dir beim erreichen des Ziels helfen.

**Vorgehen des Haupt-Agenten (Begründung):**
1. Repository-Struktur und dieses Prompt-Log anlegen, damit von Anfang an alles nachvollziehbar ist.
2. Die Recherche auf **drei parallele Unteragenten** aufteilen, die jeweils genau einen Baustein des Markensteuerrads nach Esch bzw. der Aufgabenstellung bedienen:
   - **A** → Markenkompetenz & Markenattribute (Unternehmen, Sortiment, Wettbewerb = Elemente für die Repertory Grid),
   - **B** → Brand Persona & Limbic Map (Zielgruppe, Kauf- und Mediennutzungsverhalten, Psychografie),
   - **C** → Markenbild & Markentonalität (Kommunikationsanalyse, Corporate Design, Analogien).
   Begründung: Parallelisierung spart Zeit, und jeder Agent kann gezielter und tiefer suchen als ein einzelner Generalist.
3. Alle Agenten müssen **jede Aussage mit Quelle belegen** und ein Recherche-Protokoll (Suchanfragen + URLs) anhängen – so wird die Desk Research überprüfbar.
4. Aus den Ergebnissen erstellt der Haupt-Agent den Präsentationsplan ([`fallstudie-1-snocks/PLAN-Praesentation.md`](../../fallstudie-1-snocks/PLAN-Praesentation.md)).
5. Ein Hook wird installiert, der künftige Prompts automatisch mitschreibt.

---

## #2 · 🤖 → 🧩 A · 19.10.2026, 11:35 Uhr · Unternehmen, Sortiment & Wettbewerb

**Begründung:** Liefert die harten Fakten für *Markenkompetenz* („Wer bin ich?“) und *Markenattribute* („Über welche Eigenschaften verfüge ich?“) sowie die Wettbewerber, die in der Repertory-Grid-Analyse als Vergleichselemente gebraucht werden.

**Prompt (wörtlich):**

```text
Du bist Research-Agent für eine studentische Fallstudie im Fach Unternehmenskommunikation (Hochschule Kaiserslautern). Thema: Brand Persona & Markenidentität der Marke SNOCKS, zusammengeführt im Markensteuerrad nach Esch. Heute ist der 19.10.2026.

Deine Aufgabe: Desk Research zum Unternehmen SNOCKS und seinem Wettbewerbsumfeld. Nutze WebSearch und WebFetch ausgiebig (mindestens 12 verschiedene Suchanfragen). Recherchiere:

1. Unternehmensprofil: Gründung (Jahr, Ort, Gründer, Origin Story), Sitz, Mitarbeiterzahl, Umsatzentwicklung (alle auffindbaren Jahre), Finanzierung/Investoren, Übernahmen/Beteiligungen, wichtige Meilensteine bis 2026.
2. Sortiment & Preise: Produktkategorien (Socken, Unterwäsche, Basics, Sport, Damen/Herren …), Materialien und Zertifikate (z. B. Bio-Baumwolle, GOTS, Oeko-Tex), konkrete Preisbeispiele, Bundles/Mengenrabatte, Qualitäts- und Garantieversprechen.
3. Vertrieb: D2C-Onlineshop, Amazon, stationärer Handel/Retail-Partner, eigene Stores, Länder/Märkte.
4. Selbstverständnis: Mission, Vision, Werte, Claims/Slogans, Nachhaltigkeitsaussagen, Positionierung (wie beschreibt SNOCKS sich selbst, z. B. auf der „Über uns“-Seite?).
5. Wettbewerb: 6–8 relevante Wettbewerber (D2C-Basics-Marken, Sockenmarken, Handelsmarken), je 2–3 Sätze zu Positionierung, Preisniveau und Zielgruppe – geeignet als Elemente einer Repertory-Grid-Analyse.
6. Besonderheiten: Personal Branding der Gründer (Social Media, Podcast, YouTube), Presseberichte, Auszeichnungen, Kritik/Kontroversen.

Anforderungen:
- Belege jede Faktenaussage mit Quelle (URL) und, falls erkennbar, Datum der Quelle. Kennzeichne unsichere oder widersprüchliche Angaben ausdrücklich.
- Erfinde nichts. Wenn etwas nicht auffindbar ist, schreibe „nicht gefunden“.
- Schreibe den vollständigen Bericht auf Deutsch als Markdown-Datei nach:
  /home/user/Unternehmenskommunikation-/fallstudie-1-snocks/research/A-unternehmen-und-wettbewerb.md
  Kopfzeile: Titel, „Erstellt von: Research-Subagent A (Claude)“, Datum 19.10.2026, Hinweis „Auftrags-Prompt: siehe docs/prompt-log/PROMPT-LOG.md, Eintrag #2“.
- Hänge am Ende einen Abschnitt „Recherche-Protokoll“ an: alle Suchanfragen (wörtlich) und alle aufgerufenen URLs.
- Hänge danach einen Abschnitt „Zusammenfassung für den Haupt-Agenten“ an (max. 400 Wörter, die wichtigsten Fakten als Stichpunkte mit Quellenverweis).
- Führe keine git-Befehle aus und verändere keine anderen Dateien.
- Deine finale Antwort ist exakt der Abschnitt „Zusammenfassung für den Haupt-Agenten“.
```

**Antwort:** siehe unten (#2 → Antwort) und vollständig in [A-unternehmen-und-wettbewerb.md](../../fallstudie-1-snocks/research/A-unternehmen-und-wettbewerb.md).

---

## #3 · 🤖 → 🧩 B · 19.10.2026, 11:35 Uhr · Zielgruppe, Brand Persona & Limbic Map

**Begründung:** Die Aufgabe verlangt eine *ausführliche Brand Persona* (Geografie, Soziodemografie, Kaufverhalten, Mediennutzungsverhalten, Psychografie) und die Anwendung der *Limbic Map*. Dafür braucht es belastbare Daten zur Kundschaft und zu Mediennutzungsstudien.

**Prompt (wörtlich):**

```text
Du bist Research-Agent für eine studentische Fallstudie im Fach Unternehmenskommunikation (Hochschule Kaiserslautern). Thema: Brand Persona & Markenidentität der Marke SNOCKS (Socken, Unterwäsche, Basics; D2C-Marke aus Mannheim). Heute ist der 19.10.2026.

Deine Aufgabe: Desk Research zur Zielgruppe von SNOCKS als Grundlage für eine ausführliche Brand Persona. Nutze WebSearch und WebFetch ausgiebig (mindestens 12 verschiedene Suchanfragen). Recherchiere:

1. Soziodemografie & Geografie: Alters- und Geschlechterverteilung der Kundschaft bzw. Follower (Interviews mit den Gründern, Pressetexte, Podcasts, öffentlich zugängliche Social-Media-/Traffic-Analysen wie Similarweb, HypeAuditor, Social Blade), Märkte/Länder, Stadt/Land, Einkommen/Bildung (ggf. über Proxies begründet).
2. Kaufverhalten: Kanäle (Shop, Amazon, Handel), Warenkorb, Wiederkauf, Bundles/Abos, Rabattaktionen, Saisonalität (z. B. Black Friday), Bewertungen (Trustpilot, Amazon, Google: Durchschnittsnote, Anzahl, häufige Lob- und Kritikpunkte mit wörtlichen Beispielzitaten).
3. Mediennutzungsverhalten: Welche Plattformen nutzt diese Zielgruppe (aktuelle Studien, z. B. ARD/ZDF-Medienstudie, Statista, Bitkom, DAK, Postbank-Jugend-Digitalstudie – jeweils die neueste verfügbare Ausgabe, für die relevanten Altersgruppen in Deutschland)? Rolle von Influencer-Marketing, Podcasts, YouTube, Performance-Werbung (z. B. Meta-Werbebibliothek: welche Anzeigenformate nutzt SNOCKS?).
4. Psychografie: Werte, Lebensstil, Kaufmotive (z. B. Bequemlichkeit, Preis-Leistung, Qualität, Nachhaltigkeit, Minimalismus/„Basics“), passende Sinus-Milieus mit Begründung.
5. Limbic Map (Hans-Georg Häusel / Gruppe Nymphenburg): Kurze, korrekte Erklärung des Modells (Balance-, Stimulanz-, Dominanz-System, Mischformen, Limbic Types) mit Quellen. Danach ein begründeter Vorschlag, wo die Zielgruppe und die Marke SNOCKS auf der Limbic Map liegen – mit Belegen aus Kommunikation und Produktversprechen.
6. Vorschlag für eine ausführliche Brand Persona (fiktive Person: Name, Alter, Wohnort, Beruf, Einkommen, Haushalt, Tagesablauf, Kaufverhalten, Mediennutzung, Werte, Ziele, Pain Points, typisches Zitat). Kennzeichne klar, welche Merkmale aus Daten belegt und welche abgeleitete Annahmen sind. Optional: eine zweite, kürzere Sekundär-Persona, falls die Daten zwei deutlich verschiedene Zielgruppen zeigen.

Anforderungen:
- Belege jede Faktenaussage mit Quelle (URL) und, falls erkennbar, Datum der Quelle. Kennzeichne unsichere oder widersprüchliche Angaben ausdrücklich.
- Erfinde keine Zahlen. Wenn etwas nicht auffindbar ist, schreibe „nicht gefunden“ und leite – klar als Annahme gekennzeichnet – plausibel her.
- Schreibe den vollständigen Bericht auf Deutsch als Markdown-Datei nach:
  /home/user/Unternehmenskommunikation-/fallstudie-1-snocks/research/B-zielgruppe-und-persona.md
  Kopfzeile: Titel, „Erstellt von: Research-Subagent B (Claude)“, Datum 19.10.2026, Hinweis „Auftrags-Prompt: siehe docs/prompt-log/PROMPT-LOG.md, Eintrag #3“.
- Hänge am Ende einen Abschnitt „Recherche-Protokoll“ an: alle Suchanfragen (wörtlich) und alle aufgerufenen URLs.
- Hänge danach einen Abschnitt „Zusammenfassung für den Haupt-Agenten“ an (max. 400 Wörter, die wichtigsten Fakten als Stichpunkte mit Quellenverweis).
- Führe keine git-Befehle aus und verändere keine anderen Dateien.
- Deine finale Antwort ist exakt der Abschnitt „Zusammenfassung für den Haupt-Agenten“.
```

**Antwort:** siehe unten (#3 → Antwort) und vollständig in [B-zielgruppe-und-persona.md](../../fallstudie-1-snocks/research/B-zielgruppe-und-persona.md).

---

## #4 · 🤖 → 🧩 C · 19.10.2026, 11:35 Uhr · Kommunikationsanalyse & Corporate Design

**Begründung:** Liefert das Material für *Markenbild* („Wie trete ich auf?“) und *Markentonalität* („Wie bin ich?“): Kommunikationsanalyse auf Instagram/Facebook/YouTube, Corporate Design, Schlüsselbilder, Bildwelten, Logo, Slogan sowie Input für die Analogiemethoden (Marke als Mensch/Tier).

**Prompt (wörtlich):**

```text
Du bist Research-Agent für eine studentische Fallstudie im Fach Unternehmenskommunikation (Hochschule Kaiserslautern). Thema: Brand Persona & Markenidentität der Marke SNOCKS (Socken, Unterwäsche, Basics; D2C-Marke aus Mannheim). Heute ist der 19.10.2026.

Deine Aufgabe: Kommunikationsanalyse zum Markenbild von SNOCKS (Schwerpunkt Instagram, Facebook, YouTube; ergänzend TikTok, LinkedIn, Website, Newsletter, Podcast). Nutze WebSearch und WebFetch ausgiebig (mindestens 12 verschiedene Suchanfragen; rufe auch snocks.com direkt ab). Recherchiere:

1. Kanäle: je Kanal Handle/URL, Follower/Abonnenten (mit Stand-Datum), Posting-Frequenz, Content-Formate (Reels, Karussells, UGC, Produktfotos, Memes, Behind-the-Scenes …), typische Themen, Interaktion/Engagement (soweit öffentlich einsehbar).
2. Corporate Design: Logo (Beschreibung, Wort-/Bildmarke, ggf. Entwicklung), Farbwelt (Hex-Codes, wenn auffindbar – z. B. aus dem CSS/Theme der Website –, sonst Beschreibung), Typografie (Schriftarten, wenn identifizierbar), Bildsprache/Bildwelten (Models, Settings, Licht, Farben, Perspektiven), Schlüsselbilder, Verpackung.
3. Slogans/Claims & Tonalität: Ansprache (Du/Sie), Humor, Wortwahl, Emojis, typische Formulierungen – mit wörtlichen Beispielen aus Captions, Anzeigen und Website-Texten (mit Quelle).
4. Kampagnen & Kooperationen: Influencer, Testimonials, Prominente, Werbespots, Sponsoring, besondere Aktionen.
5. Gründer-Kommunikation: Rolle der Gründer in der Markenkommunikation (YouTube, LinkedIn, Instagram, Podcast) und Wirkung auf das Markenbild.
6. Analogie-Input für die Markentonalität: Einordnung nach den Brand-Personality-Dimensionen von Jennifer Aaker (Aufrichtigkeit, Erregung/Spannung, Kompetenz, Kultiviertheit, Robustheit) mit Begründung; Vorschläge „Wenn SNOCKS ein Mensch / eine prominente Person / ein Tier / ein Auto wäre …“ jeweils mit Begründung aus der Kommunikation; daraus abgeleitete Markenemotionen.

Anforderungen:
- Belege jede Faktenaussage mit Quelle (URL) und, falls erkennbar, Datum. Kennzeichne unsichere Angaben ausdrücklich (z. B. Follower-Zahlen aus Drittquellen).
- Erfinde nichts. Wenn etwas nicht auffindbar ist, schreibe „nicht gefunden“.
- Schreibe den vollständigen Bericht auf Deutsch als Markdown-Datei nach:
  /home/user/Unternehmenskommunikation-/fallstudie-1-snocks/research/C-kommunikationsanalyse.md
  Kopfzeile: Titel, „Erstellt von: Research-Subagent C (Claude)“, Datum 19.10.2026, Hinweis „Auftrags-Prompt: siehe docs/prompt-log/PROMPT-LOG.md, Eintrag #4“.
- Hänge am Ende einen Abschnitt „Recherche-Protokoll“ an: alle Suchanfragen (wörtlich) und alle aufgerufenen URLs.
- Hänge danach einen Abschnitt „Zusammenfassung für den Haupt-Agenten“ an (max. 400 Wörter, die wichtigsten Fakten als Stichpunkte mit Quellenverweis).
- Führe keine git-Befehle aus und verändere keine anderen Dateien.
- Deine finale Antwort ist exakt der Abschnitt „Zusammenfassung für den Haupt-Agenten“.
```

**Antwort:** siehe unten (#4 → Antwort) und vollständig in [C-kommunikationsanalyse.md](../../fallstudie-1-snocks/research/C-kommunikationsanalyse.md).

---

## #2 → Antwort · 🧩 A → 🤖 · 19.10.2026, 11:48 Uhr · Unternehmen, Sortiment & Wettbewerb

**Laufzeit:** ca. 13,5 Min. · 88 Tool-Aufrufe (Websuchen/-abrufe, einzeln im [Auto-Log](auto/2026-10-19.md)) · **Vollständiger Bericht:** [A-unternehmen-und-wettbewerb.md](../../fallstudie-1-snocks/research/A-unternehmen-und-wettbewerb.md)

**Antwort des Unteragenten (wörtlich):**

> ## Zusammenfassung für den Haupt-Agenten
>
> **Vorbehalt:** WebFetch ging nicht (DNS-Fehler). Alle Fakten stammen aus Auszügen von 64 Suchen, dann war das Budget erschöpft. Offizielle Mission/Vision/Werte: **nicht gefunden**.
>
> **Unternehmen**
> - Gegründet 2016 in Mannheim von den Cousins Johannes Kliesch und Felix Bauer, mit 4.000 € und Sneaker-Socken auf Amazon (FashionUnited 03.05.2022; OMR 2018). Abweichend: 2015 (LoyaltyLion).
> - Co-CEOs seit Dez. 2023: Kliesch und Rehan Choudhry; Bauers Rolle unklar (FashionUnited 05.01.2024).
> - Umsatz: 2017 0,4–0,5 Mio. €, 2020 ca. 10–12 Mio., 2021 32 Mio., 2022 57 Mio., 2023 ca. 70 Mio., 2024 ca. 83 Mio. (+24 %), 2025 ca. 110 Mio. € laut Unternehmen. FashionUnited (06.03.2026) nennt dagegen +20 % – **inkonsistent**.
> - Mitarbeitende 2025: 151–163 laut Unternehmen; Revelio schätzt 376.
> - Cathay Capital hält seit April 2022 eine Minderheit, die Gründer die Mehrheit.
> - „House of Brands“: Oceansapart (Nov. 2024), femtis (2025), Les Lunes (Feb. 2026), alle aus der Insolvenz gekauft (Textilwirtschaft; Taylor Wessing).
>
> **Sortiment und Preise**
> - Socken, Unterwäsche (Herren/Damen), Sport/Leggings, Kinder; laut Unternehmen auch Streetwear und Schuhe (Schuhe nicht verifiziert).
> - Sneaker-Socken 6 Paar 29,99 €, Boxershorts 6er UVP 48,99 € (snocks.com, Otto).
> - Hoher Anteil Bio-Baumwolle; Grüner Knopf 2.0 seit Nov. 2024; OEKO-TEX 100 für die meisten Produkte; GOTS nicht belegt.
> - Produktion extern, vor allem China, Pakistan, Sri Lanka (Progress Report 2025).
> - 6 Monate Anti-Loch-Garantie, 100 Tage Rückgabe (Sparwelt).
>
> **Vertrieb**
> - Start auf Amazon (2018: 90 %). Heute ist der eigene Shop der größte Kanal (Dealroom); Marktplätze 2024 ca. 36 % (retail-news).
> - Händler: Otto, Zalando, About You, Decathlon, Breuninger; Deichmann (Filialaktionen 2026). Keine eigenen Stores gefunden.
> - Marktplätze in 26 Ländern (Podcast LTM132, Nov. 2025).
>
> **Selbstverständnis**
> - „Eine der bekanntesten Basics-Marken Deutschlands“; „basics that set standards“; „socks that truly deliver on their promise“ (Presse-Seite).
> - Fremdbild: mutiges Marketing (Grüner Knopf).
>
> **Wettbewerb (Elemente fürs Grid)**
> - FALKE (Premium-Socken, Heritage)
> - Happy Socks (Design-Socken, ca. 7,50–12 €/Paar)
> - VON JUNGFELD (Motivsocken, ebenfalls Mannheim, ca. 11–15 €/Paar)
> - erlich textil (nachhaltige D2C-Wäsche aus Köln)
> - Bread & Boxers (Premium-Basics, ca. 13 €/Stück)
> - Calvin Klein Underwear (Mode-/Logo-Marke, ca. 13–18 €/Stück)
> - Uniqlo (Funktions-Basics, Socken 4,90 €)
> - Lidl LIVERGY/ESMARA (Discount, ca. 0,40–1,30 €/Paar)
> - Optional: Schiesser, Shein/Temu
>
> **Besonderheiten**
> - Kliesch als Personal Brand: über 160.000 Follower, LinkedIn mit Ghostwriter und Agentur, Podcast.
> - ARD-Doku (16.04.2025); seit 07.09.2026 „Löwe“ bei DHDL.
> - Forbes „30 Under 30 Europe“ 2022.
> - Kritik: Plagiatsvorwurf (Buttz) gegen die „Hintern“-Kampagne, vorzeitig beendet (W&V, Datum unklar).

**Bewertung durch den Haupt-Agenten:** Gute Grundlage für Markenkompetenz und die Grid-Elemente. Die Umsatzzahlen 2024/2025 widersprechen sich zwischen den Quellen. Die Website-Inhalte (Mission/Werte) waren nicht direkt abrufbar und müssen vor dem Folienbau gegen die Primärquelle geprüft werden.

## #4 → Antwort · 🧩 C → 🤖 · 19.10.2026, 11:49 Uhr · Kommunikationsanalyse & Corporate Design

**Laufzeit:** ca. 14 Min. · 95 Tool-Aufrufe (einzeln im [Auto-Log](auto/2026-10-19.md)) · **Vollständiger Bericht:** [C-kommunikationsanalyse.md](../../fallstudie-1-snocks/research/C-kommunikationsanalyse.md)

**Antwort des Unteragenten (wörtlich):**

> ## Zusammenfassung für den Haupt-Agenten
>
> **Methodik-Hinweis:** snocks.com, Instagram und YouTube waren technisch nicht direkt abrufbar (DNS- bzw. Proxy-Fehler). Alle Angaben stammen aus 75 Websuchen; danach war das Suchbudget erschöpft. Hex-Codes aus dem CSS und Schriftarten: **nicht gefunden**.
>
> **Kanäle (Followerzahlen aus Drittquellen, unsicher):**
> - Instagram `@snocks`: 285.867 Follower (Likeometer, 28.09.2026); 2022 waren es 111.739, Engagement 0,75 % (SpeakRJ). Bio: „You focus on your purpose, we focus on your basics – #feelthefit“ [instagram.com/snocks]
> - TikTok `@snocks.feelthefit`: ca. 126.500 Follower, 1,9 Mio. Likes; älterer Account `@snocks.whynot` [tiktok.com]
> - Facebook: ca. 44.000 Follower, vor allem Ad- und Performance-Kanal („Das größte Volumen bringen bei uns Facebook und Amazon“, 2021) [omkb.de]
> - YouTube `@snocks-whynot`: „Dem coolsten Socken Start-Up aus Mannheim! 🔥 Wir leben nach dem Motto WHY NOT!“; Schwerpunkt Creator-Sponsoring mit 143 Creatorn, ca. 1.200 Videos und 133 Mio. Views [creatordb.app]
> - LinkedIn: ca. 22.500 Follower; Corporate Influencing mit über 30 Posts und ca. 575.000 Impressions pro Woche [meedia.de]
> - WhatsApp-Newsletter: ca. 3 Mio. € Umsatz [omr.com]; Podcast „E-Commerce, Why Not?!“ erscheint montags
>
> **Corporate Design:** Wortmarke „SNOCKS“ in Versalien, minimalistisch, nach dem Inhouse-Rebranding um 2024 (Tamara Göbel, Robin Hanreich) [podcast.de]; 🧦 als Social-Signet. Farben laut Brandfetch (unbestätigt, vermutlich vor dem Rebranding): #FAC950, #FFFFFF, #333333. Bildsprache: echte Community statt Models, UGC und Short-Form, KI-Produktvisuals. Versandkarton aus Wellpappe ohne Klebeband (THIMM).
>
> **Claims und Ton:** „SNOCKS. feel the fit.“ (Website-Titel), früher „WHY NOT!“, Kampagnenslogan „Für jeden Arsch das Richtige“ (OOH Hamburg, Okt. 2024). Du-Ansprache, Emojis selbst in Produkttiteln („Anti-Loch-Garantie 💯“), derber Humor, Anglizismen, Superlative („weltbeste Community“), Garantien (12 Monate Anti-Loch, 100 Tage Rückgabe).
>
> **Kampagnen:** erste OOH-Kampagne 2024 mit Kund:innen-Pos und Influencer Jan Schlappen; Kritik von W&V („abgekupfert“). TV seit 2023 mit Prime-Video-Stunt „Fake-Stream-Hänger“ [omr.com]; Pepsi x SNOCKS 2024. Prominente Testimonials und Sponsoring: **nicht gefunden**.
>
> **Gründer:** Johannes Kliesch ist das zentrale Markengesicht („Ich will der Jürgen Klopp des E-Commerce werden“). Seine Personal Brand ist professionell gesteuert: Ghostwriter, sechs LinkedIn-Posts pro Woche, seit 2024 die Agentur Oneframe [wuv.de]. Die Markenkommunikation wird inzwischen unabhängiger vom Gründer.
>
> **Aaker (Interpretation):** Erregung sehr hoch, Aufrichtigkeit hoch, Kompetenz hoch, Robustheit mittel, Kultiviertheit niedrig. Analogien: Mensch = „Kumpel aus der Mannheimer Startup-WG“, Promi = Jürgen Klopp, Tier = Golden Retriever, Auto = VW Golf GTI. Emotionen: Wohlgefühl, Spaß, Vertrauen, Zugehörigkeit, Mut.
>
> **Vollbericht:** /home/user/Unternehmenskommunikation-/fallstudie-1-snocks/research/C-kommunikationsanalyse.md

**Bewertung durch den Haupt-Agenten:** Liefert viel Material für Markenbild und Tonalität. Zwei Punkte widersprechen Bericht A und werden vor dem Folienbau geprüft: die Anti-Loch-Garantie (A: 6 Monate, C: 12 Monate) und die Markenfarben (die Brandfetch-Werte stammen vermutlich aus der Zeit vor dem Rebranding). Weil die Unteragenten snocks.com nicht abrufen konnten, versucht der Haupt-Agent anschließend einen direkten Abruf über den Browser im Container (Abschnitt #5).

## #3 → Antwort · 🧩 B → 🤖 · 19.10.2026, 11:55 Uhr · Zielgruppe, Brand Persona & Limbic Map

**Laufzeit:** ca. 21 Min. · 76 Tool-Aufrufe (einzeln im [Auto-Log](auto/2026-10-19.md)) · **Vollständiger Bericht:** [B-zielgruppe-und-persona.md](../../fallstudie-1-snocks/research/B-zielgruppe-und-persona.md)

**Antwort des Unteragenten (wörtlich):**

> ## 10. Zusammenfassung für den Haupt-Agenten
>
> - **Methodik:** WebFetch war durch die Netzwerk-Policy blockiert (u. a. snocks.com, trustpilot.com, wikipedia.org). Alle Angaben stammen aus Suchergebnis-Auszügen (59 Suchen, danach war das Kontingent erschöpft). Zitate und Zahlen vor der Präsentation am Original prüfen. Freigabe in den Environment-Einstellungen unter „Network access“ → „Allowed domains“.
> - **Unternehmen:** Umsatz 2024 83 Mio. € [Q3]; 2025 ca. 110 Mio. € (Eigenangabe) [Q1]; Start 2016 auf Amazon [Q18].
> - **Demografie (Similarweb-Schätzung, widersprüchlich):** Juni 2026: 57,4 % männlich, größte Altersgruppe 25–34 [Q19]; Juli 2026: 53,2 % männlich, größte Gruppe 45–54 [Q20]. Deutschland 65–76 % des Desktop-Traffics, danach AT, PL, FR. Unternehmensangaben zum Kundenalter: nicht gefunden.
> - **Sortiment als Proxy:** älterer Mix 50 % Herrenunterwäsche, 30 % Socken, 15 % Damenunterwäsche [Q12]; Damensortiment war der Wachstumstreiber 2021 [Q13].
> - **Kanäle:** Amazon 2023 wichtigster Kanal, 15–20 % über Zalando, About You und Otto [Q8]; Marktplätze 2024 ca. 30 Mio. € [Q3]; Handel seit 2023 [Q104]; keine eigenen Filialen [Q2].
> - **Bindung und Preis:** Club-Mitglieder kaufen mit 3,5-facher Wahrscheinlichkeit ein zweites Mal [Q46]; Abo −20 %, Bundles bis −15 % [Q40]; Black Friday bis −50 %, Staffel 10/20/30 % ab 45/90/155 € [Q41]. Warenkorb und Wiederkaufrate: nicht gefunden.
> - **Bewertungen:** Trusted Shops 4,42 (59.130) [Q27]; Trustpilot 4,5–4,6 (ca. 10.000+) [Q24]; Amazon-Boxershorts nur 3,5–4,2 (z. B. 3,9 bei 22.711) [Q32]. Lob: Komfort, Passform, Lieferung. Kritik: Löcher, Garantie-Abwicklung, Größen, Verzögerungen bei Sales [Q26], [Q34].
> - **Medien:** ARD/ZDF 2026: Instagram 40 %, Facebook 28 %, TikTok 18 % wöchentlich; 30–49-Jährige 74 % Social Media pro Woche [Q67]; YouTube bei 30–49 J. 60 % (2025) [Q73]. Bitkom 2026: 29 % kaufen über soziale Netzwerke [Q79].
> - **SNOCKS-Kommunikation:** Video ca. 70 % des Meta-Umsatzes, 20–30 neue Creatives pro Woche [Q53]; 145 gesponserte Creator, vor allem YouTube [Q55]; Gründer-LinkedIn mit 575.000 Impressions pro Woche [Q57]; WhatsApp-Newsletter 3 Mio. € [Q8]. Meta-Werbebibliothek nicht prüfbar.
> - **Psychografie und Sinus (Annahme):** Komfort, Verlässlichkeit, Preis-Leistung, Convenience; Nachhaltigkeit eher Hygienefaktor. Primär Adaptiv-Pragmatische Mitte, sekundär Performer.
> - **Limbic Map (Vorschlag):** Produktversprechen = Balance mit Drift zu Disziplin/Kontrolle; Kommunikation mit Stimulanz-Akzent; Gründermarke = Dominanz. Zielgruppe: Disziplinierte/Performer (primär), Harmoniser (sekundär) [Q89], [Q97].
> - **Personas:** Primär „Jonas Berger, 33, Köln, IT-Projektmanager“; sekundär „Sandra Krämer, 46, Rhein-Neckar, Familien-Einkäuferin“. Alle Merkmale sind als belegt, Annahme oder fiktiv gekennzeichnet.

**Bewertung durch den Haupt-Agenten:** Der stärkste der drei Berichte. Jede Persona-Eigenschaft ist als belegt [B], abgeleitet [A] oder fiktiv [F] gekennzeichnet, was direkt in Backup-Folie B5 übernommen werden kann. Die Similarweb-Daten widersprechen sich jedoch (größte Altersgruppe 25–34 vs. 45–54). Das muss die Gruppe am Original klären, bevor die Persona festgelegt wird. Zusätzlich zeigt der Bericht ein interessantes Spannungsfeld auf, das sich als Kernthese der Präsentation eignet: ein Produktversprechen im Bereich Balance (Sicherheit, Komfort) gegenüber einer Kommunikation im Bereich Stimulanz (Humor, Provokation).

---

## #5 · 🤖 Haupt-Agent · 19.10.2026, 11:35–11:56 Uhr · Eigene Recherche, Technik-Setup & Synthese

Neben den Aufträgen an die Unteragenten hat der Haupt-Agent selbst folgende Schritte ausgeführt (alle Websuchen auch im [Auto-Log](auto/2026-10-19.md)):

| Uhrzeit | Aktion | Zweck / Ergebnis |
|---|---|---|
| 11:35 | Hook `prompt-logger.sh` gebaut, mit simulierten Eingaben getestet, in `.claude/settings.json` aktiviert | Automatische Prompt-Dokumentation; ab 11:35:52 live (protokolliert auch die Websuchen der Unteragenten) |
| 11:35 | 🔎 Websuche `reveal.js latest release version 2026` | Technikentscheidung für die Präsentation |
| 11:35 | 🔎 Websuche `Slidev vs reveal.js animations presentation 2026` | Vergleich der Präsentations-Frameworks → Entscheidung für reveal.js (Auto-Animate, freie SVG-Animationen, offline lauffähig) |
| 11:36 | npm-Registry abgefragt: reveal.js 6.0.2, GSAP 3.15.0, Chart.js 4.5.1, DeckTape 3.16.1 | Aktuelle Versionen für den Technik-Stack |
| 11:39 | Push zu GitHub schlägt fehl (403, App-Zugriff fehlte) → Gruppe hat GitHub neu verbunden (11:41) → Push erfolgreich | – |
| 11:43 | Hook-Fehler korrigiert: Ein interner Claude-Code-Hilfsagent (Eingabevorschlag, kein echter Prompt) wurde fälschlich als „Abschlussbericht“ geloggt → Eintrag entfernt, Filter ergänzt | Saubere Dokumentation: nur echte Prompts und Unteragenten |
| 11:50 | Direkter Abruf von snocks.com über den Browser im Container → durch Netzwerk-Policy blockiert (403) | Farben/Schriften der Website konnten nicht direkt ausgelesen werden → als offener Prüfpunkt im Plan |
| 11:56 | Synthese der Berichte A/B/C → [PLAN-Praesentation.md](../../fallstudie-1-snocks/PLAN-Praesentation.md) aktualisiert (Faktenbasis, Arbeitshypothese Markensteuerrad, Prüfliste) | – |

---

## #7 · 👤 → 🤖 · 19.10.2026, 20:55 Uhr · Fortsetzung

**Prompt (wörtlich):**

> mach weiter

**Vorgehen des Haupt-Agenten (Begründung):** Die offenen Fragen (Gruppengröße, Formatvorgabe) sind noch unbeantwortet. Deshalb arbeitet der Haupt-Agent mit Standardannahmen weiter: 4 Personen, keine Formatvorgabe → reveal.js + PDF. Reihenfolge nach Dringlichkeit im Zeitplan:
1. **Interviewleitfaden + Erfassungstabelle** (Excel) für Repertory Grid, Laddering und Analogien, weil die Gruppe ab Di 20.10. Interviews führen muss.
2. **Auswertungsskript** (Python), das aus der ausgefüllten Tabelle direkt die Grafiken und Kennzahlen für die Folien erzeugt (mit erfundenen Testdaten geprüft, die **nicht** ins Repo und nicht in die Präsentation gehen).
3. **Animiertes Grundgerüst der Präsentation** (reveal.js + GSAP), befüllt mit den Ergebnissen der Desk Research. Folien, die auf Interviewdaten warten, sind sichtbar als Platzhalter markiert.

Dieser Schritt wird ohne Unteragenten erledigt (alles in einer Hand, damit Design und Datenformat zusammenpassen).

**Ergebnis (19.10.2026, ca. 21:20 Uhr):**
- [`interviews/Interviewleitfaden.md`](../../fallstudie-1-snocks/interviews/Interviewleitfaden.md): 25-Min.-Leitfaden mit 5 festen Triaden, Laddering-Fragen, Analogien und Markenkarten.
- [`daten/Erfassung_Interviews.xlsx`](../../fallstudie-1-snocks/daten/Erfassung_Interviews.xlsx): Eingabeblätter mit Dropdowns, Beispielzeilen und Codebuch; Formeln mit LibreOffice nachgerechnet (0 Fehler).
- [`auswertung/auswertung.py`](../../fallstudie-1-snocks/auswertung/auswertung.py): Heatmap, Markeneigenschaften, Wahrnehmungskarte, HVM, Analogie-Häufigkeiten. Mit erfundenen Testdaten geprüft, die nur im temporären Arbeitsordner lagen und **weder im Repo noch in der Präsentation** stehen.
- [`praesentation/`](../../fallstudie-1-snocks/praesentation/): 15 Folien + 6 Backup, reveal.js + GSAP, offline lauffähig; [PDF-Export](../../fallstudie-1-snocks/export/SNOCKS-Fallstudie1.pdf).
- **Qualitätssicherung:** Screenshots aller Folien automatisch erzeugt und geprüft, Überläufe korrigiert; Live-Test aller Animationen vorwärts und rückwärts ohne Browser-Fehler; Diagrammfarben mit einem Validator für Farbsehschwäche geprüft.
- **Korrektur:** Auf den Markenkarten hatte der Haupt-Agent zunächst Preise für FALKE und erlich textil geschätzt. Diese standen nicht in der Desk Research und wurden deshalb durch einen Prüfhinweis ersetzt („vor dem ersten Interview nachsehen“).

---

## 📝 Vorlage für manuelle Einträge (andere KI-Tools)

Bitte unten anhängen und die Nummer fortlaufend vergeben:

```markdown
## #N · 👤 [Name] → [Tool, z. B. ChatGPT / Midjourney] · TT.MM.JJJJ, HH:MM Uhr · [Kurztitel]

**Begründung:** Warum wurde dieses Tool/dieser Prompt eingesetzt?

**Prompt (wörtlich):**
> …

**Antwort / Ergebnis:** (wörtlich oder Screenshot-Link, z. B. `docs/prompt-log/anhang/…png`)

**Bewertung / Weiterverwendung:** Was wurde übernommen, was verworfen, was geprüft?
```
