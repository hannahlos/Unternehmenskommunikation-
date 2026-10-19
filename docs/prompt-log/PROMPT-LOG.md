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
