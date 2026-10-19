# Kommunikationsanalyse SNOCKS – Markenbild, Corporate Design & Markentonalität

**Erstellt von:** Research-Subagent C (Claude)
**Datum:** 19.10.2026
**Hinweis:** Auftrags-Prompt: siehe `docs/prompt-log/PROMPT-LOG.md`, Eintrag #4

---

## 0. Methodik, Einschränkungen und Lesehilfe

**Vorgehen.** Desk Research mit 75 ausgeführten Websuchen (WebSearch) und mehreren Direktabrufen (WebFetch/curl). Die Ergebnisse wurden nach den sechs Auftragsfeldern gegliedert. Jede Faktenaussage hat eine Quelle (URL) und, soweit erkennbar, ein Datum.

**Wichtige Einschränkungen (bitte bei der Weiterverwendung beachten):**

1. **snocks.com ließ sich nicht direkt abrufen.** WebFetch meldete für `snocks.com`, `www.snocks.com`, `snocks.com/en-es/pages/press-kit` und `progressreport.snocks.com` jeweils `getaddrinfo ENOTFOUND`. Ein curl-Abruf von `snocks.com` scheiterte am Proxy (`CONNECT tunnel failed, response 403`), und web.archive.org war für WebFetch gesperrt. Auch andere Seiten (shopify.com, fuer-gruender.de, omkb.de, instagram.com, youtube.com, de.wikipedia.org) waren nicht direkt erreichbar. **Alle Website-Zitate stammen deshalb aus Suchergebnis-Auszügen** (Seitentitel und Text-Snippets, die die Suchmaschine von snocks.com indexiert hat). Daraus folgt:
   - **Hex-Codes aus dem CSS/Theme und Schriftarten konnten nicht direkt ausgelesen werden.** Die angegebenen Farbwerte stammen aus einer Drittquelle (Brandfetch) und sind als unsicher markiert.
   - **Bildsprache (Licht, Perspektiven, Farben einzelner Posts) konnte nicht durch eigene Bildansicht geprüft werden.** Belegt ist nur, was Fachpresse und Unternehmensseiten darüber schreiben.
2. **Das Websuch-Budget der Sitzung war nach 75 Suchanfragen aufgebraucht** (Limit für alle Agenten zusammen). Zwei geplante Suchen (weitere „SNOCKS x“-Kollaborationen, Details zur Rebranding-Podcastfolge) konnten nicht mehr laufen. Wer diese Punkte vertiefen will, kann die Recherche in einer neuen Nachricht fortsetzen.
3. **Follower-Zahlen sind fast immer Momentaufnahmen aus Drittquellen** (Tracker, Such-Snippets). Sie sind als *[unsicher]* gekennzeichnet, mit Stand-Datum, wenn eines erkennbar war.
4. **Datumsableitungen:** Bei LinkedIn- und TikTok-Links wurde das Veröffentlichungsdatum aus der Beitrags-ID berechnet (eigene Berechnung; LinkedIn-IDs und TikTok-Video-IDs enthalten einen Zeitstempel). Solche Daten sind als „(Datum aus ID abgeleitet)“ markiert. Bei Fachartikeln ohne sichtbares Datum ist das Alter teils aus dem Suchindex geschätzt („ca.“).

**Kennzeichnung im Text:**
- *[belegt]*: Unternehmensquelle oder seriöse Fachpresse
- *[unsicher]*: Drittquelle, Tracker, Snippet ohne Datum, Anzeige, widersprüchliche Angaben
- *[Interpretation]*: eigene analytische Einordnung durch Subagent C, kein Fakt
- **nicht gefunden**: trotz Suche kein Beleg

---

## 1. Kanalanalyse

### 1.1 Überblick

| Kanal | Handle / URL | Reichweite (Stand) | Status |
|---|---|---|---|
| Instagram (Hauptaccount) | `@snocks`, https://www.instagram.com/snocks/ | **285.867 Follower**, 539 gefolgt (Likeometer, Stand 28.09.2026); ältere Snapshots: 249.000 Follower / 2.116 Beiträge (Datum unbekannt), 111.739 Follower / 1.591 Beiträge (SpeakRJ, 11.06.2022) | [unsicher], Drittquellen |
| Instagram (Länder) | `@snocksitaly`, `@snocksnetherlands`, `@snockspoland` | nicht gefunden | [belegt]: Accounts existieren |
| Instagram (Café) | `@snocks.coffee`, `@snockscoffee_bynomad` | nicht gefunden | [belegt]: Accounts existieren |
| Facebook | https://www.facebook.com/snocks/ | **44.014 Follower**, „5.909 talking about this“; anderer Snapshot 43.304 (beide ohne Datum) | [unsicher] |
| YouTube (Marke) | `@snocks-whynot`, https://www.youtube.com/@snocks-whynot | Abonnentenzahl **nicht gefunden** | Kanal [belegt] |
| YouTube (Podcast) | `@ecommercewhynot`, https://www.youtube.com/@ecommercewhynot | beim Start des Videopodcasts genannt: „12.000 Follower“ und 25.000 Streams pro Monat (Datum unklar, vermutlich Juni 2023) | [unsicher] |
| YouTube (Gründer) | „Johannes Kliesch“, https://www.youtube.com/channel/UC-wnSoNtClZSUTtX2p2vRzA bzw. `@johanneskliesch` („Johannes Kliesch & Friends“) | nicht gefunden | Kanal [belegt] |
| TikTok (Marke, aktuell) | `@snocks.feelthefit`, https://www.tiktok.com/@snocks.feelthefit | **126.500 Follower, 1,9 Mio. Likes**, 118 gefolgt (Snapshot, Datum unbekannt) | [unsicher] |
| TikTok (Marke, älter) | `@snocks.whynot` | 121.500 Follower, 140 Videos (Snapshot, Datum unbekannt) | [unsicher] |
| TikTok (Gründer) | `@johannes.snocks`, https://www.tiktok.com/@johannes.snocks | nicht gefunden | Account [belegt] |
| LinkedIn (Unternehmen) | https://de.linkedin.com/company/snocks | **22.495 Follower** (höchster Snapshot); ältere: 22.244 / 20.324 / 17.171 / 16.815 / 14.916 / 9.466 | [unsicher], Snapshots ohne Datum |
| LinkedIn (Gründer) | https://de.linkedin.com/in/johannes-kliesch | ca. 90.000 Follower (laut OMR, April 2022); „über 170.000 Follower“ über alle Plattformen (Sept. 2023) | [unsicher] |
| Pinterest | `snocksofficial`, https://in.pinterest.com/snocksofficial/ | nicht gefunden | Account [belegt] |
| Website | https://snocks.com/ (Länder: `/de-ch`, `/fr-fr`, `/nl-nl`, `/en-es` …) | Trusted Shops: 4,42/5 bei ca. 92.000 Bewertungen; auf der eigenen Website „115.000+ Bewertungen“ | [unsicher] (Datum unbekannt) |
| Newsletter / WhatsApp | Pop-up auf der Website | WhatsApp-Newsletter: ca. 3 Mio. € Umsatz (OMR, ca. 2022) | [unsicher] |
| Podcast | „E-Commerce, Why Not?!“ (Kliesch & Romy Riffel); früher „SNOCKAST“ | ca. 320 Apple-Bewertungen (DE), 5/5 | [unsicher] |

**Quellen zur Tabelle:**
- Instagram: https://likeometer.co/@snocks?lang=en (Stand 28.09.2026; Verlauf von ca. 272.700 Ende August 2026 auf 285.867); https://www.instagram.com/snocks/ (Snippet: „249K seguidores, 539 siguiendo, 2,116 publicaciones“); https://www.speakrj.com/audit/report/snocks/instagram (11.06.2022)
- Länder- und Café-Accounts: https://www.instagram.com/snocksitaly/, https://www.instagram.com/snocksnetherlands/, https://www.instagram.com/snockspoland/, https://www.instagram.com/snocks.coffee/, https://www.instagram.com/snockscoffee_bynomad/
- Facebook: https://www.facebook.com/snocks/
- YouTube: https://www.youtube.com/@snocks-whynot, https://www.youtube.com/@ecommercewhynot, https://gruendermetropole-berlin.de/snocks-startet-video-podcast, https://de.linkedin.com/posts/snocks_podcast-video-ecommerce-activity-7079392754606166017-sXlS (27.06.2023, Datum aus ID abgeleitet)
- TikTok: https://www.tiktok.com/@snocks.feelthefit, https://www.tiktok.com/@snocks.whynot/video/7160747173343235333
- LinkedIn: https://de.linkedin.com/company/snocks, https://www.linkedin.com/posts/officiallyomr_omrpodcast-startups-volocopter-activity-6922504015855407104-pbLo (20.04.2022, Datum aus ID abgeleitet), https://de.linkedin.com/posts/weberlarissa_socialmedia-personalbranding-snocks-activity-7113063990938734592-RmBg (28.09.2023, Datum aus ID abgeleitet)
- Website und Bewertungen: https://www.trustedshops.eu/company/snocks_gmbh/, https://snocks.com/pages/erfahrungsberichte
- Podcast: https://www.ecosistant.eu/die-besten-e-commerce-podcasts-2023/, https://rephonic.com/podcasts/snockast-unternehmer-podcast-uber-amazon-fba

### 1.2 Instagram (Schwerpunkt)

- **Profil:** Anzeigename „SNOCKS 🧦“. Bio-Claim: **„You focus on your purpose, we focus on your basics – #feelthefit“**. Derselbe Claim steht auf Facebook, Pinterest und den Trusted-Shops-Länderprofilen. *[belegt]* Quellen: https://www.instagram.com/snocks/, https://www.facebook.com/snocks/, https://in.pinterest.com/snocksofficial/
- **Follower-Entwicklung:** 111.739 (Juni 2022), dann 249.000 (Datum unbekannt), dann 285.867 (28.09.2026). Laut Likeometer kamen zwischen Ende August und dem 28.09.2026 rund 13.000 Follower hinzu, davon ca. 3.900 an einem einzigen Tag (28.09.). Woher dieser Sprung kommt (Gewinnspiel, Kampagne o. Ä.), wurde **nicht gefunden**. *[unsicher]*
- **Engagement:** SpeakRJ (Juni 2022): Engagement-Rate 0,75 %, im Schnitt ca. 751 Likes und 108 Kommentare pro Post (letzte 30 Posts). Likeometer (Sept. 2026): Tageswerte zwischen ca. 0,06 % und 0,21 %; die Berechnungsmethode ist nicht dokumentiert. Zum Vergleich nennt Socialinsider für Markenaccounts 2026 durchschnittlich ca. 0,45–0,48 %. *[unsicher]* Quellen: https://www.speakrj.com/audit/report/snocks/instagram, https://likeometer.co/@snocks?lang=en, https://www.socialinsider.io/social-media-benchmarks/instagram
- **Posting-Frequenz:** **nicht verlässlich ermittelbar.** Der Beitragszähler stieg von 1.591 (Juni 2022) auf 2.116 (Snapshot unbekannten Datums); ohne Datum des zweiten Werts lässt sich daraus keine Frequenz berechnen.
- **Content-Formate (belegt über Stellenanzeigen und Fachpresse):**
  - **Short-Form-Video/Reels:** Eine Stellenanzeige auf snocks.com nennt als Aufgabe: „Du übernimmst die Konzeption für unsere Social Kanäle (TikTok, YouTube, Instagram, Facebook & Snapchat) mit Fokus auf Short-Form-Content, der Reichweite und Performance liefert.“ Dazu gehört Community Management in Kommentaren, DMs und Stories. *[unsicher]*: Die Anzeige trägt den Titel „Störtebekker: Social Media Manager (m/w/d)“ und könnte sich auf eine andere Marke der Gruppe beziehen. Quelle: https://snocks.com/pages/stortebekker-social-media-manager-m-w-d
  - **UGC/Creator-Content als Anzeigen:** Laut OMR-Podcast schreibt das Team kleine TikTok-Creator an, schickt ihnen Socken und schaltet deren Videos als Anzeigen auf Facebook und Instagram („60-Sekunden-Clips im Tiktok-Stil“). *[belegt]* Quelle: https://omr.com/de/daily/snocks-omr-podcast-johannes-kliesch-felix-bauer (Datum nicht gesichert, vermutlich ca. 2020)
  - **Community-Aufrufe und Community-Shooting:** Über einen Instagram-Aufruf bewarben sich mehr als 260 Personen für das Kampagnen-Shooting 2024 (siehe 4.1). *[belegt]*
  - **Social Shop:** Verkauf direkt über Instagram- und Facebook-Shops. *[unsicher, Stand ca. 2022]* Quelle: https://www.webspotting.de/e-commerce/snocks-multi-channel-analyse/
  - **Memes / Karussells / reine Produktfotos:** Ob und wie oft SNOCKS diese Formate nutzt, wurde **nicht gefunden**; ohne direkten Zugriff auf Instagram war das nicht prüfbar.
- **Tools:** Influencer-Recherche mit InfluData, Follower-Segmentierung mit SocialRank. Kliesch: „We do research with InfluData for suitable influencers and use SocialRank, to segment our followers and approach them specifically“. *[belegt]* Quelle: https://omr.com/en/reviews/contenthub/snocks-tech-stack

### 1.3 Facebook

- Seite https://www.facebook.com/snocks/ (Ort: Mannheim) mit **ca. 43.000–44.000 Followern** *[unsicher]*; eine Bewertungsseite ist vorhanden (https://www.facebook.com/snocks/reviews/).
- **Funktion: vor allem Werbe- und Performance-Kanal.** CEO-Zitat aus einem Roundtable 2021: „Das größte Volumen bringen bei uns Facebook und Amazon.“ TikTok-artige Creatives liefen dort als Facebook-Ads. *[belegt, 2021]* Quelle: https://omkb.de/startup-roundtable-2
- Separate Seiten: „Snocks Coffee“ (930 Follower, Café in Mannheim) https://www.facebook.com/snockscoffee/ und die Gründerseite https://www.facebook.com/johannes.snocks
- Organische Posting-Frequenz und Engagement: **nicht gefunden.**

### 1.4 YouTube

- **Markenkanal `@snocks-whynot`.** Beschreibung (wörtlich laut Snippet): **„Willkommen auf dem YT-Kanal von SNOCKS 🧦 Dem coolsten Socken Start-Up aus Mannheim! 🔥 Wir leben nach dem Motto WHY NOT!“** *[belegt]* Quelle: https://www.youtube.com/@snocks-whynot. Abonnenten- und Videozahl: **nicht gefunden.**
- **Gründer-/Business-Content** (läuft überwiegend über Kanäle Dritter und den Gründerkanal), zum Beispiel:
  - „0 auf 100 Millionen € Jahresumsatz mit Johannes Kliesch (SNOCKS Office Tour)“, mit Werbevolumen und KI-generierten Creatives als Thema: https://www.youtube.com/watch?v=r3YtHnG_u1Y
  - „Snocks-Chef spricht über Oceansapart-Deal, Tiktok-Shop und seine Social-Strategie“: https://www.youtube.com/watch?v=YR08oFgeN5g
  - „Mit Socken zum Millionär - Johannes Kliesch“: https://www.youtube.com/watch?v=BkP10pwir2A
  - Gründerkanal „Johannes Kliesch“ (kostenloser E-Commerce-Content): https://www.youtube.com/channel/UC-wnSoNtClZSUTtX2p2vRzA
- **YouTube-Influencer-Sponsoring (Schwerpunkt der YouTube-Nutzung):**
  - CreatorDB: 143 Creator, ca. 1.200 gesponserte YouTube-Beiträge, 133 Mio. Aufrufe insgesamt, rund 90 % der Partner aus Deutschland; Top-Partner u. a. Joshinator (20 Videos) und Scherzovic (7). *[unsicher, Datum nicht angegeben]* Quelle: https://creatordb.app/brands/snocks.com/
  - SponsorRadar: 18 Creator, 57+ Videos, jüngste Deals August 2026; AlphaKevin (17), Coach Stef (8), TurboTsallo (7), Christian Eckerlin (4), Naturensöhne (4), Jonas Winkler (3). Typische Mechanik ist ein 20-%-Code, z. B. „alphakevin20“. *[unsicher]* Quelle: https://sponsorradar.com/brands/snocks
- **Podcast-Videokanal** `@ecommercewhynot` (siehe 1.8).

### 1.5 TikTok

- **Markenaccount `@snocks.feelthefit`:** ca. 126.500 Follower und 1,9 Mio. Likes. *[unsicher, Snapshot]* Dass es der offizielle Account ist, lässt sich nur aus Name und Branding schließen. Quelle: https://www.tiktok.com/@snocks.feelthefit
- **Älterer Account `@snocks.whynot`:** ca. 121.500 Follower, 140 Videos. Beispiel-Caption (wörtlich): **„Ein Tag bei Snocks, let's go ✨ #eintagimleben #startuplife #snocks #so…“** (31.10.2022, Datum aus ID abgeleitet). Typisches Format: Behind the Scenes bzw. „Day in the Life“. Quelle: https://www.tiktok.com/@snocks.whynot/video/7160747173343235333
- *[Interpretation]* Die beiden Account-Namen bilden die Entwicklung der Markentonalität ab: vom Gründer- und Startup-Motto „WHY NOT!“ zum Produkt- und Komfortversprechen „feel the fit“ (vgl. 3.1).
- **Frühe Strategie:** Organische Videos mit teils über 500.000 Views; Werbung auf TikTok „habe sich aber bisher nicht gelohnt“ (OMR, ca. 2020). 2021 kamen laut Roundtable pro Woche über 8.000 neue Follower hinzu; TikTok und Pinterest dienten vor allem der Bekanntheit. *[belegt, historisch]* Quellen: https://omr.com/de/daily/snocks-omr-podcast-johannes-kliesch-felix-bauer, https://omkb.de/startup-roundtable-2
- **Creator-Content auf TikTok** (Beispiele, wörtlich):
  - @janaz90: „It‘s a good Day für neue Socken @Snocks mit dem Code: YRRYQ7 könnt -20% sparen 🔥 #feelthefit #snocks #rabattcode #sundayshopping #influencer #autumn #fall“ (26.10.2024, Datum aus ID abgeleitet): https://www.tiktok.com/@janaz90/video/7430004418180844832
  - @julesslw: „-Anzeige keine Löcher in den Socken kein Problem! 6 Monate Anti-Loch Garantie und 20% bei Snocks klingt doch nach nem Traum oder 🤤❤️ Code: Juleslw20 meine Lieben“ (26.09.2023, Datum aus ID abgeleitet): https://www.tiktok.com/@julesslw/video/7283158986033990944
- **TikTok Shop:** wird als Thema in einem Interviewvideo genannt (siehe 1.4). Details: **nicht gefunden.**

### 1.6 LinkedIn

- **Unternehmensseite:** ca. 22.500 Follower *[unsicher]*. Branche „Textilherstellung“, 51–200 Beschäftigte, gegründet 2016, Sitz Mannheim. Quelle: https://de.linkedin.com/company/snocks
- **Corporate Influencing:** Seit Anfang 2023 setzt SNOCKS gezielt auf Corporate Influencer. Mehrere Mitarbeitende veröffentlichen zusammen **über 30 Posts pro Woche mit durchschnittlich knapp 575.000 Impressions pro Woche**. Der verantwortliche Experte Marius Müller fasst das Konzept so zusammen: „Wir machen einfach im echten Leben coole Sachen und dokumentieren das alles dann hier auf LinkedIn.“ *[belegt]* Quelle: https://meedia.de/news/beitrag/18309-wie-snocks-auf-linkedin-575-000-impressions-pro-woche-generiert.html (ca. Mai 2025, Alter aus Suchindex geschätzt)
- **Beispielhafte Unternehmensposts** (Titel laut URL-Slug, Datum aus ID abgeleitet):
  - „Wer steckt eigentlich hinter SNOCKS? Um unser Team hinter den…“ (07.10.2022): https://www.linkedin.com/posts/snocks_wer-steckt-eigentlich-hinter-snocks-um-activity-6984055840458600448-rba0
  - „Friends For Life – Jeder kann Leben retten“ (16.08.2023): https://de.linkedin.com/posts/snocks_friends-for-life-jeder-kann-leben-retten-activity-7097488571124584448-DcGo
  - „SNOCKS wird international – Bock dabei zu …“ (05.01.2024): https://de.linkedin.com/posts/snocks_snocks-wird-international-bock-dabei-zu-activity-7148964344591020032-x1D2
  - Eintritt ins Bündnis für nachhaltige Textilien (19.08.2022): https://de.linkedin.com/posts/textilbuendnis_willkommen-im-b%C3%BCndnis-snocks-gmbh-b%C3%BCndnis-activity-6966386776030486528-L8ci
- Zur Gründer-Kommunikation auf LinkedIn siehe Kapitel 5.

### 1.7 Website (snocks.com)

- **Seitentitel der Startseite: „SNOCKS. feel the fit.“** *[belegt]* Quelle: https://snocks.com/
- **Leistungsversprechen** *[belegt; Snippets teils älter]*:
  - 100 Tage Rückgaberecht; kostenloser Versand ab 39 € Bestellwert; kostenloser Rückversand (https://snocks.com/pages/retoure)
  - **Anti-Loch-Garantie** von meist 12 Monaten ab Kauf; auf der Seite der Retro-Boxershorts stehen widersprüchlich auch 6 Monate (https://snocks.com/products/retro-boxershorts, https://snocks.com/collections/unterwaesche)
  - Seite „Care & Repair: So halten deine Basics länger“ (https://snocks.com/pages/care-and-repair)
- **Selbstbeschreibung:** Auf der Pressekit-Seite (https://snocks.com/pages/press-kit) bezeichnet sich SNOCKS als „eine der bekanntesten Basics-Marken Deutschlands“. Sie nennt Johannes Kliesch und Rehan Choudhry als Doppelspitze (seit Ende 2023), 163 Mitarbeitende und 110 Mio. € Umsatz 2025. Eine „Grounding Page“ für KI-Systeme (https://snocks.com/pages/grounding-page, „Letzte Verifizierung: Juli 2026“) nennt ca. 160 Mitarbeitende. *[belegt; Zahlen widersprechen sich leicht]*
- **Mission und Werte** (Karriereseite, wörtlich laut Snippet): **„Wir produzieren Basics, die konkrete Probleme lösen und den Alltag erleichtern. Wir empowern Menschen.“**, außerdem: **„Wir setzen in jedem Aspekt unserer Arbeit auf Komfort.“** Ziel sei „feeling good“. *[belegt]* Quellen: https://snocks.com/pages/karriere, https://snocks.com/pages/grounding-page
- **Regionaler Bezug:** Mannheim-Seite: „Damit wollen wir Mannheim als gefragten Standort für Startups mit aktiver Gründerszene groß machen.“ (Seite ca. Feb. 2023) Quelle: https://snocks.com/pages/mannheim
- **Weitere Inhalte:** Gründerstory (https://snocks.com/pages/grunderstory-v7), Gründerprofil (https://snocks.com/pages/johannes), Qualitätsseite (https://qualitaet.snocks.com/), Nachhaltigkeitsseite (https://snocks.com/pages/sustainability) und Sustainability Progress Report 2025 (https://progressreport.snocks.com/our-approach), Startup-Blog (https://snocks.com/blogs/startups/startups-in-mannheim), Podcast-Blog (z. B. „SNOCKAST #96“: https://snocks.com/blogs/podcasts/96-amazonfba-q-a-uber-amazon-fba-johannes-beantwortet-fragen-von-amazon)
- **Treueprogramm „SNOCKS Club“:** Statt Punkten sammelt man die virtuelle Währung **„SNOKEN“**; die Stufen reichen von der **„Bronzenen Socke“ bis zur „Goldenen Socke“**. SNOKEN gibt es auch für Kontoerstellung, Newsletter-Anmeldung, Social-Media-Follows, Bewertungen und zum Geburtstag. *[unsicher: Quelle als Anzeige gekennzeichnet, ohne Datum]* Quelle: https://retail-news.de/snocks-club-neues-loyalty-programm-zur-steigerung-der-kundenbindung/. Laut Sparwelt (Aug. 2026) bringt die Newsletter-Anmeldung 50 SNOKEN: https://www.sparwelt.de/gutscheine/snocks
- **Offline-Ableger:** „SNOCKS Coffee“, ein Café in Mannheim (Mo–Fr 9–16, Sa–So 9–17 Uhr laut Instagram-Bio). *[belegt]* Quelle: https://www.instagram.com/snocks.coffee/

### 1.8 Newsletter, WhatsApp und Podcast

- **WhatsApp-Newsletter:** Laut OMR-Podcast (ca. April 2022) wurden darüber rund **3 Mio. € Umsatz** erzielt („Drei Millionen Umsatz über Whatsapp-Newsletter“). *[belegt]* Quelle: https://omr.com/de/daily/snocks-omr-podcast. Ein Pop-up auf der Website lädt zur Anmeldung ein, Anreiz ist ein **10-€-Gutschein**. *[unsicher, Drittquelle 2026]* Quelle: https://connect.lime-technologies.com/de/blog/whatsapp-newsletter/
- **E-Mail-Newsletter:** bis zu 30 % Rabatt auf die erste Bestellung laut MonsterDealz (Aug. 2026). *[unsicher]* Quelle: https://www.monsterdealz.de/magazin/snocks-gutschein. Wortlaut, Frequenz und Gestaltung der Newsletter: **nicht gefunden.**
- **Podcast „E-Commerce, Why Not?!“:** Moderiert von Johannes Kliesch und Romy Riffel, betrieben über die Agentur Snocksulting (heute „Remazing Nova“, https://www.snocksulting.com/). Erscheint montags, Folgen ca. 45 Minuten. *[belegt]* Quellen: https://www.ecosistant.eu/die-besten-e-commerce-podcasts-2023/, https://www.podcast.de/episode/684149742/johannes-kliesch-snocks-5-dinge-die-ich-gerne-mit-20-gewusst-haette. Seit 2023 gibt es den Podcast auch als Video (siehe 1.1). Thema sind Business und E-Commerce, kein Lifestyle-Content; er stärkt also vor allem das Gründer- und Expertenimage.
- **Älterer Podcast „SNOCKAST“** (Amazon-FBA-Themen; Rephonic führt einen „Johannes Kliesch Podcast“ mit ca. 303 Folgen): https://rephonic.com/podcasts/snockast-unternehmer-podcast-uber-amazon-fba *[unsicher, ob identisch]*

---

## 2. Corporate Design

### 2.1 Logo

- **Form:** Den verfügbaren Hinweisen nach eine **reine Wortmarke „SNOCKS“ in Großbuchstaben**; die Marke schreibt ihren Namen in der Eigenkommunikation durchgehend in Versalien („SNOCKS. feel the fit.“). Auf Produkten erscheint der Schriftzug z. B. weiß auf dem Bund. Eine eigenständige **Bildmarke** (Symbol) wurde **nicht gefunden**. Als Bild-Signet wird in Social Media das **Socken-Emoji 🧦** genutzt (Instagram-Name „SNOCKS 🧦“, YouTube-Beschreibung). *[unsicher; nicht durch eigene Bildansicht geprüft]* Quellen: https://snocks.com/, https://www.zalando.de/damenbekleidung/snocks, https://www.instagram.com/snocks/
- **Namensherkunft:** „Der Markenname SNOCKS ist eine Wortschöpfung aus ‚Sneaker‘ und ‚Socks‘.“ (https://snocks.com/pages/grounding-page). Ältere Fassung: „Der Name setzt sich zusammen aus "Socken" und "Sneaker" und dementsprechend verkaufen wir Sneaker-Socken.“ (https://www.shopify.com/de/blog/snocks-sneaker-socken) *[belegt]*
- **Entwicklung und Rebranding:**
  - Das Rebranding entstand **inhouse**: Tamara Göbel und Robin Hanreich vom SNOCKS Creative Team leiteten das Projekt, laut einem LinkedIn-Beitrag über 8 Monate neben dem Tagesgeschäft. Am Anfang stand ein Kickoff-Workshop in Kroatien. Es ging um eine **komplett neue Identität und Tone of Voice, nicht nur um das Logo**. Die Podcastfolge „So lief das SNOCKS Rebranding ab“ erschien ca. Mai 2024 (Alter aus Suchindex geschätzt). *[belegt: Podcastfolge; unsicher: Details aus dem LinkedIn-Beitrag, dessen URL sich nicht eindeutig zuordnen ließ]* Quelle: https://www.podcast.de/episode/631530559/so-lief-das-snocks-rebranding-ab-tamara-goebel-robin-hanreich-von-snocks
  - Derselbe LinkedIn-Beitrag nennt das Logo **minimalistisch**: Seine Wirkung hänge davon ab, dass jede Linie, jeder Abstand und jede Position stimme; auch „nur“ schwarze Schrift auf weißem Grund könne hochwertig oder billig wirken. *[unsicher, sinngemäß nach Snippet]*
  - Tamara Göbel ist seit November 2024 Group Head of Creative & Brand für SNOCKS, OCEANSAPART und femtis. Laut W&V-Sprecherprofil verantwortet sie mit einem 15-köpfigen Kreativteam „alle Branding- und Marketing-Aktivitäten, vom Re-Branding über TV Spots bis zur OOH-Kampagne“. *[belegt]* Quellen: https://www.horizont.net/marketing/nachrichten/mannheimer-e-commerce-unternehmen-wie-snocks-sein-inhouse-kreativteam-zum-wachstumsmotor-macht-232077, https://events.wuv.de/summit-2025/speaker/
  - Ein älterer LinkedIn-Beitrag mit dem Hashtag #branding von Tim Jaschke (01.09.2022, Datum aus ID abgeleitet) deutet auf eine frühere Branding-Phase hin; der Inhalt wurde **nicht gefunden**. https://de.linkedin.com/posts/timjaschke_snocks-branding-activity-6971033029125271555-GGTk

### 2.2 Farbwelt

| Farbe | Hex | Quelle | Bewertung |
|---|---|---|---|
| „Saffron Mango“ (warmes Gelb/Gold) | `#FAC950` | Brandfetch | *[unsicher]*: Brandprofil „Unclaimed“ (nicht von SNOCKS bestätigt), Snippet ca. 5 Jahre alt, also **vermutlich vor dem Rebranding** |
| White | `#FFFFFF` | Brandfetch | *[unsicher]* |
| „Mine Shaft“ (sehr dunkles Grau, fast Schwarz) | `#333333` | Brandfetch | *[unsicher]* |

Quelle: https://brandfetch.com/snocks.com

- *[Interpretation]* Nach dem Rebranding (ca. 2024) deutet der LinkedIn-Hinweis auf eine **reduzierte Schwarz-Weiß-Logik** im Logo hin. Ob Gelb `#FAC950` heute noch Akzentfarbe ist, ist **ungeklärt**.
- **Hex-Codes aus dem aktuellen Website-CSS/Theme: nicht gefunden** (snocks.com war technisch nicht abrufbar). Empfehlung an die Gruppe: snocks.com im Browser öffnen, mit den Entwicklertools (F12, Reiter „Elements/Computed“) die CSS-Variablen für Farben und `font-family` auslesen und als Screenshot dokumentieren.

### 2.3 Typografie

- **Nicht gefunden.** Weder Brandfetch-Snippet noch Fachpresse nennen eine Schriftart. Die Suchtreffer zu Schriften namens „Snacks“ (dafont, ffonts) betreffen andere Schriften ohne Bezug zur Marke und sind **nicht** zu verwenden. Empfehlung: im Browser prüfen (siehe 2.2) oder ein Font-Erkennungstool nutzen.

### 2.4 Bildsprache, Bildwelten und Schlüsselbilder

Was belegt ist:
- **Echte Community statt Models:** Für die erste OOH-Kampagne 2024 hat SNOCKS nach eigener Aussage „keine professionellen Models gebucht, sondern unsere weltbeste Community vor die Kamera geholt“. Gezeigt wurden Kundinnen und Kunden von hinten, in Unterwäsche. Projektleiterin Yannika Hecht: **„Die Menschen auf den Fotos sind wirklich die, die unsere Produkte tragen.“** *[belegt]* Quellen: https://snocks.com/pages/arsch-kampagne, https://www.neuhandeln.de/beitraege/db/230959jg.html, https://www.marketingscout.com/news/snocks-kunden-zeigen-ihre-hoeschen-erste-ooh-kampagne-zielt-auf-viral-effekt/
- **Lifestyle- und Sportszenen im TV:** Eine Nutzer-Rezension auf adclips.tv beschreibt einen Spot mit Sport- und Actionszenen (Sandboarding, Motorrad, Skateboarding) als „klassische Lifestyle-Werbung“, in der die Marke durchgängig präsent ist. *[unsicher, nutzergenerierte Seite]* Quelle: https://adclips.tv/de-DE/tv-werbung/tv-spots/tv-spot-brand/snocks/2853885049885984
- **KI-gestützte Produktbilder:** SNOCKS sucht eine:n „(Junior) AI Visual Creator:in E-Commerce“. Aufgabe ist, dass Produkte im Shop und auf Marktplätzen „so aussehen, dass man sie haben will“. In der Office Tour ist von KI-generierten Creatives die Rede. *[belegt]* Quellen: https://www.arbeitnow.com/jobs/companies/snocks-gmbh/junior-ai-visual-creatorin-e-commerce-mannheim-buro-315337, https://www.youtube.com/watch?v=r3YtHnG_u1Y, https://www.wuv.de/Themen/Marke/KI-bei-Snocks-Wir-kommen-naeher-an-unsere-Kund-innen-heran
- **Bild vor Text:** Laut einem Interview-Auszug legt Kliesch den Content-Schwerpunkt auf Bildsprache, weil Kund:innen Produktbeschreibungen kaum noch lesen. *[unsicher; Quelle im Snippet nicht eindeutig zuzuordnen, vermutlich https://www.adference.com/blog/snocks-gruender-johannes-kliesch]*
- **Creator- und UGC-Ästhetik:** Hochkantvideos im TikTok-Stil, selbst gefilmt, als Anzeigen (siehe 1.2). *[belegt]*
- **Licht, Settings, Farben, Perspektiven einzelner Instagram-Posts: nicht gefunden**, weil kein Bildzugriff möglich war. Empfehlung: 9 bis 12 aktuelle Posts als Screenshots sichern und nach Raster codieren (Model ja/nein, Setting, Lichtstimmung, Farbe, Perspektive, Format).

*[Interpretation]* Mögliche **Schlüsselbilder** der Marke:
1. die Socke bzw. das Emoji 🧦 als Erkennungszeichen,
2. der „Po“ in Unterwäsche aus der Kampagne „Für jeden Arsch das Richtige“, also echte und vielfältige Körper,
3. die Kombination Sneaker und Socke (Namensherkunft, erstes Produkt: Füßlinge, die „dank Gel-Pad nicht rutschen“, https://qualitaet.snocks.com/),
4. das Gesicht des Gründers Johannes Kliesch als Personal Brand.

### 2.5 Verpackung

- **Versandkarton:** Der Verpackungshersteller THIMM beschreibt einen Wellpappe-Versandkarton für SNOCKS (Socken, Boxershorts) mit **integriertem Verschluss aus Wellpappe**. Er komme ohne Klebeband aus, zeige, ob der Karton geöffnet wurde, und biete eine Kommunikationsfläche zwischen Marke und Kund:in. *[unsicher: Herstellerangabe]* Quelle: https://www.thimm.com/en/packaging/shipping-boxes/e-commerce-packaging/shipping-boxes-for-clothes-laundry-packed-sustainably-and-safely/
- **Adventskalender 2024:** 24 Paar Socken für 99,99 € (laut Unboxing-Video auf YouTube; ob es ein Marken- oder Fremdvideo ist, ist unklar). *[unsicher]* Quelle: https://www.youtube.com/watch?v=Y_ay8TI3Vh8
- Gestaltung (Farbe, Druck, Claim auf dem Karton), Produktverpackung im Handel (Zalando, Decathlon, Otto): **nicht gefunden.**

---

## 3. Slogans, Claims und Tonalität

### 3.1 Claims und Motti (chronologisch)

| Claim / Motto | Kontext | Quelle | Zeit |
|---|---|---|---|
| **„WHY NOT!“** / „Why not“ | Gründer- und Startup-Motto: Ohne lange Businesspläne wird einfach ausprobiert; YouTube- und TikTok-Handles `@snocks-whynot` / `@snocks.whynot`; Podcast „E-Commerce, Why Not?!“ | https://www.youtube.com/@snocks-whynot, https://snocks.com/pages/grunderstory-v7, https://www.gruender.de/startups/gruender-geheimnis-snocks/ | ab ca. 2016/2018, bis heute im Podcast |
| **„You focus on your purpose, we focus on your basics“** | Bio auf Instagram, Facebook und Pinterest | https://www.instagram.com/snocks/ | aktuell |
| **„feel the fit.“** / **#feelthefit** | Hauptclaim (Seitentitel „SNOCKS. feel the fit.“), TikTok-Handle `@snocks.feelthefit`, Hashtag in Creator-Posts | https://snocks.com/, https://www.wuv.de/Themen/Marke/KI-bei-Snocks-Wir-kommen-naeher-an-unsere-Kund-innen-heran | aktuell (nachweisbar mindestens seit Okt. 2024 im Creator-Hashtag) |
| **„Für jeden Arsch das Richtige“** | Slogan der ersten OOH-Kampagne, im Team entwickelt | https://www.absatzwirtschaft.de/snocks-macht-aussenwerbung-fuer-den-arsch-263576/ | Okt. 2024 |
| **„Anti-Loch-Garantie“** | wiederkehrendes Produktversprechen in Produkttiteln und Creator-Captions | https://snocks.com/products/boxershorts | durchgehend |

*[Interpretation]* Die Claims zeigen eine **Entwicklung in zwei Phasen**. Die frühe Phase stellt das Unternehmen in den Mittelpunkt: „WHY NOT!“, Startup-Hustle, Gründer im Vordergrund. Die aktuelle Phase stellt Produkt und Gefühl in den Mittelpunkt: „feel the fit.“, Komfort, Passform, Wohlgefühl. Das passt zum Rebranding um 2024, das ausdrücklich auch den Tone of Voice umfasste (vgl. 2.1), und zum Wert „Komfort“ auf der Karriereseite.

### 3.2 Merkmale der Tonalität mit wörtlichen Belegen

| Merkmal | Wörtliches Beispiel | Quelle |
|---|---|---|
| **Du-Ansprache** | „Care & Repair: So halten **deine** Basics länger“ | https://snocks.com/pages/care-and-repair |
| | „**Du** übernimmst die Konzeption für unsere Social Kanäle …“ | https://snocks.com/pages/stortebekker-social-media-manager-m-w-d |
| | „You focus on **your** purpose, we focus on **your** basics“ | https://www.instagram.com/snocks/ |
| **Emojis, auch in Produkttiteln** | „Boxershorts Herren mit Anti-Loch-Garantie 💯“ | https://snocks.com/products/boxershorts |
| | „Boxershorts langes Bein - mit Anti-Loch-Garantie 🦵“ | https://snocks.com/products/boxershorts-mit-langerem-bein |
| | „Tennissocken mit Anti-Loch-Garantie online kaufen 🎾“ | https://snocks.com/products/tennissocken-weiss |
| | „Sneakersocken mit Anti-Loch Garantie von SNOCKS ✓“ | https://snocks.com/collections/alle-sneaker-socken |
| **Humor, Frechheit, Tabubruch** | „Für jeden Arsch das Richtige“ | https://www.absatzwirtschaft.de/snocks-macht-aussenwerbung-fuer-den-arsch-263576/ |
| | „Getragene Boxershorts und löchrige Socken 🤢 #storytime #ecommerce“ (Gründer-TikTok, 29.11.2022, Datum aus ID abgeleitet) | https://www.tiktok.com/@johannes.snocks/video/7171396451963096325 |
| **Selbstbewusstsein, Superlative** | „Dem coolsten Socken Start-Up aus Mannheim! 🔥“ | https://www.youtube.com/@snocks-whynot |
| | „unsere weltbeste Community“ | https://snocks.com/pages/arsch-kampagne (laut Berichterstattung) |
| | „eine der bekanntesten Basics-Marken Deutschlands“ | https://snocks.com/pages/press-kit |
| **Englisch-deutscher Mix, Startup-Jargon** | „Ein Tag bei Snocks, let's go ✨ #eintagimleben #startuplife“ | https://www.tiktok.com/@snocks.whynot/video/7160747173343235333 |
| | „Wir empowern Menschen.“ | https://snocks.com/pages/karriere |
| | „SNOCKS wird international – Bock dabei zu …“ (Umgangssprache „Bock“) | https://de.linkedin.com/posts/snocks_snocks-wird-international-bock-dabei-zu-activity-7148964344591020032-x1D2 |
| **Problem-Lösungs-Sprache** | „Wir produzieren Basics, die konkrete Probleme lösen und den Alltag erleichtern.“ | https://snocks.com/pages/karriere |
| | „Socken, die dank Gel-Pad nicht rutschen.“ | https://qualitaet.snocks.com/ |
| **Sicherheit, Risikoabbau** | 100 Tage Rückgaberecht, Anti-Loch-Garantie, „SNOCKS Erfahrungen: 115.000+ Bewertungen & Kritik“ | https://snocks.com/pages/retoure, https://snocks.com/pages/erfahrungsberichte |
| **Rabattsprache (TV, Creator)** | „bis zu 50 %“ (TV-Spots 2025), Creator-Codes mit 20 % | https://adclips.tv/de-DE/tv-werbung/tv-spots/tv-spot-brand/snocks/, https://sponsorradar.com/brands/snocks |
| **Community-Einbindung** | Frage an die Community, wie sie „Bandenwerbung bei der nächsten Fußball-WM“ fände | *[unsicher]*: im Snippet zu den Kampagnenberichten 2024, Quelle nicht eindeutig zuzuordnen |

**Zusammenfassung Tonalität** *[Interpretation auf Basis der Belege]*: Konsequent **Du**, locker, umgangssprachlich bis derb-humorvoll („Arsch“, „Bock“), durchsetzt mit Anglizismen. **Emojis** gehören selbst in Produkttitel; die wiederkehrenden Marken-Emojis sind 🧦 und 🔥. Die Marke tritt **selbstbewusst bis großspurig** auf („coolsten“, „weltbeste“), argumentiert aber **sehr konkret** (Garantie, Rückgabe, „nicht rutschen“). Humor dient als Aufmerksamkeitshebel, die Garantien als Vertrauensanker.

---

## 4. Kampagnen und Kooperationen

### 4.1 OOH-Kampagne „Für jeden Arsch das Richtige“ (Hamburg, KW 42/2024)

- **Erste Out-of-Home-Kampagne** der Marke, in Hamburg: ein LED-Board für eine Woche, eine digitale Media Stage an zwei Tagen, mobile Guerilla-Projektionen an einem Abend. Budget im **niedrigen fünfstelligen Bereich**. Ziel war Reichweite, nicht Abverkauf. Die Idee entstand komplett inhouse. Ein Gewinnspiel über einen 500-€-Gutschein begleitete die Aktion. *[belegt]*
- **Motive:** echte Kund:innen statt Models; mehr als 260 Bewerbungen auf einen Instagram-Aufruf führten zum „Community-Shooting“. **Influencer:** Parkour-Läufer Jan Schlappen (ca. 407.000 Follower), der „ebenfalls seine Rückseite für SNOCKS vor die Kamera gehalten“ hat. *[belegt]*
- **Kritik:** W&V warf SNOCKS vor, das Konzept der Berliner Marke Buttz übernommen zu haben, und berichtete, die Kampagne sei vorzeitig beendet worden. *[unsicher: nur eine Quelle]* Quelle: https://www.wuv.de/themen/marke/abgekupfert-snocks-arsch-kampagne-geht-in-die-hose
- Quellen: https://www.absatzwirtschaft.de/snocks-macht-aussenwerbung-fuer-den-arsch-263576/, https://www.neuhandeln.de/beitraege/db/230959jg.html, https://de.fashionnetwork.com/news/Snocks-starten-mit-erster-out-of-home-kampagne,1671673.html, https://www.textilwirtschaft.de/business/news/premiere-in-hamburg-das-ist-die-erste-out-of-home-kampagne-von-snocks-247409, https://www.marketing-boerse.de/web/details/2442-snocks-dehnt-aussenwerbung-auf-alle-kanaele-aus/198061, https://www.wuv.de/Themen/Marke/Snocks-wagt-sich-mit-Kunden-Hintern-auf-Plakate, https://snocks.com/pages/arsch-kampagne

### 4.2 TV- und Streaming-Werbung

- **Start der TV-Werbung:** Kliesch berichtet auf LinkedIn, die TV-Werbung sei „im Juli“ gestartet (Post vom 23.10.2023, Datum aus ID abgeleitet). *[belegt]* Quelle: https://de.linkedin.com/posts/johannes-kliesch_startup-tv-ads-activity-7122122001409785859-2SB7
- **Prime-Video-Spot vor Champions-League-Übertragungen:** Der Spot arbeitete mit einem **vorgetäuschten „Stream-Hänger“** und brachte laut OMR 15.000 € Sofortumsatz. *[belegt; Datum unsicher, ca. 2023]* Quelle: https://omr.com/de/daily/snocks-prime-champions-league-spot
- **TV-Spots 2025** laut Werbearchiv adclips.tv *[unsicher]*: Frühlingssale (bis zu 50 %, 100 Tage Rückgaberecht, zuerst auf ProSieben erkannt), Boxershorts-Spot (16.07.2025), Herbst-Sale (05.10.2025), Black Friday mit „9 Jahre SNOCKS“ (23.11.2025). Quelle: https://adclips.tv/de-DE/tv-werbung/tv-spots/tv-spot-brand/snocks/
- **Amazon-Startseite:** „Am 1. Mai haben wir die Startseite von Amazon gebucht“ (FashionUnited, April 2022). Quelle: https://fashionunited.de/nachrichten/business/snocks-am-1-mai-haben-wir-die-startseite-von-amazon-gebucht/2022041346089

### 4.3 Influencer und Creator

- **Sehr breite Micro- und Mid-Tier-Strategie statt einzelner Stars:** 143 Creator und ca. 1.200 gesponserte YouTube-Beiträge (CreatorDB); 18 Creator und 57+ Videos (SponsorRadar, bis Aug. 2026); 33 Creator (Modash, Feb. 2026; u. a. @BelYves, @SonnyLoops, @JackieLina, @cheaplikeabird, @ShirinsChaos, @rosagold, @kommandofrei). Häufigste Mechanik: **20-%-Rabattcode**. *[unsicher, Tracker]* Quellen: https://creatordb.app/brands/snocks.com/, https://sponsorradar.com/brands/snocks, https://www.modash.io/content-library/brands/snocks-examples/influencers
- **Namentlich bekannte YouTube-Partner:** Joshinator, Scherzovic, AlphaKevin, Coach Stef, TurboTsallo, Christian Eckerlin, Naturensöhne, Jonas Winkler. *[unsicher, Tracker]*
- **Creator-Content als Werbemittel** (Whitelisting bzw. Ads aus UGC), siehe 1.2.
- Podcast-Folge zum Influencer-Marketing von SNOCKS: https://shows.acast.com/649c031f564b0800114e2d03/episodes/socken-stories-und-sales-snocks-innovationen-im-influencer-m
- W&V DMEXCO 2022: Kliesch: „Mein Influencer-Business läuft super“: https://www.wuv.de/specials/dmexco-2022/johannes-kliesch-von-snocks-mein-business-influencer-geschaeft-laeuft-super

### 4.4 Markenkooperationen

- **Pepsi x SNOCKS (2024):** Pepsi-Socken und -Caps ab Juni 2024, im Rahmen von Pepsis neuem Markendesign zum 125-jährigen Jubiläum (parallel ein Pepsi-Sneaker von KangaROOS). *[belegt]* Quellen: https://www.turi2.de/?p=4050293 (März 2024), https://www.about-drinks.com/pepsico-mit-neuem-markendesign-und-kooperationen-mit-kangaroos-und-snocks/
- **SNOCKS x AIRWAVES:** Sockenkollaboration, belegt nur über einen LinkedIn-Beitrag (20.10.2021, Datum aus ID abgeleitet). *[unsicher]* Quelle: https://www.linkedin.com/posts/timjaschke_snocks-airwaves-branding-activity-6856475140415373312-6Ol9

### 4.5 Prominente, Testimonials, Sponsoring, CSR

- **Prominente Werbegesichter oder Markenbotschafter (z. B. Sportler): nicht gefunden.** SNOCKS setzt nach den verfügbaren Belegen auf Community, Creator und das Gesicht des Gründers.
- **Sport- oder Vereinssponsoring: nicht gefunden.** Hinweis: Hauptsponsor des SV Waldhof Mannheim ist laut Rheinpfalz der Sockenhersteller **Falke**, also ein Wettbewerber, nicht SNOCKS: https://www.rheinpfalz.de/lokal/ludwigshafen_artikel,-sv-waldhof-macht-sich-auf-die-socken-_arid,946597.html
- **Nachhaltigkeit und CSR:** Beitritt zum Bündnis für nachhaltige Textilien (Aug. 2022, siehe 1.6). Unter https://gruener-knopf.de/en/node/338 ist ein SNOCKS-Logo gelistet; das deutet auf eine Grüner-Knopf-Lizenz hin *[unsicher]*. Dazu der Sustainability Progress Report 2025. LinkedIn-Aktion „Friends For Life – Jeder kann Leben retten“ (Aug. 2023; Inhalt **nicht gefunden**).

---

## 5. Gründer-Kommunikation

### 5.1 Johannes Kliesch (Mitgründer, Co-CEO) als zentrales Markengesicht

- **Kanäle:** LinkedIn (Hauptkanal), eigener YouTube-Kanal, TikTok `@johannes.snocks`, Facebook `johannes.snocks`, Instagram (Profil existiert, Followerzahl **nicht gefunden**), Podcast-Host „E-Commerce, Why Not?!“, Gast in vielen Podcasts (u. a. dreimal im OMR Podcast). Quellen: siehe 1.1, https://omr.com/de/daily/johannes-kliesch-snocks
- **Professionell gesteuerte Personal Brand:**
  - Aufbau seit April 2019, anfangs fünf LinkedIn-Posts pro Woche; Ende Sept. 2023 laut Larissa Weber (Teamlead Personal Brand bei SNOCKS) „über 170.000 Follower“ über alle Plattformen. *[unsicher, Eigenangabe]* Quelle: https://de.linkedin.com/posts/weberlarissa_socialmedia-personalbranding-snocks-activity-7113063990938734592-RmBg
  - Laut W&V schreibt Kliesch seine LinkedIn-Posts seit Jahren nicht selbst. Ein Team mit Ghostwriter (Oliver Kohl) produziert sechs Posts pro Woche; seit 2024 verantwortet die Agentur Oneframe Media seine Personal-Branding-Kommunikation. Mit Oneframe-Gründer Moritz Maas testete er 30 Tage lang KI statt Mensch. *[belegt; Volltexte hinter Paywall]* Quellen: https://www.wuv.de/Themen/Social-Media/Was-und-wer-Snocks-Gruender-Johannes-Kliesch-zur-Marke-macht, https://executive-briefing.wuv.de/linkedin/snocks, https://www.wuv.de/Themen/Media/30-Tage-KI-statt-Mensch-Snocks-CEO-wagt-den-LinkedIn-Test
- **Kernbotschaften und Selbstinszenierung:**
  - „Ich will der Jürgen Klopp des E-Commerce werden“: Spitzenkräfte suchten sich ihren „Trainer“ aus, also positioniere er sich öffentlich (OMR Podcast, ca. April 2022). Quelle: https://omr.com/de/daily/snocks-omr-podcast
  - Aufstiegsgeschichte: Mit 4.000 € Startkapital zum Millionär; sicherer Bankjob aufgegeben. Quellen: https://news.kununu.com/snocks-gruender-kliesch-mit-4-000-euro-startkapital-zum-millionaer/, ARD-Reihe „Money Maker“, Folge „Mit Socken zum Millionär“ (Das Erste, 16.04.2025): https://www.thetvdb.com/series/money-maker/episodes/11195856, https://retail-news.de/ard-doku-snocks-gruender-johannes-kliesch/
  - Transparenz über Zahlen und Wachstum („0 auf 100 Millionen €“, „Mit Socken zum 3-stelligen Millionenumsatz“ als LinkedIn-Headline): https://de.linkedin.com/in/johannes-kliesch
  - Ambition „Louis-Vuitton-Playbook“: Aufbau eines House of Brands nach dem LVMH-Vorbild (OMR, ca. Juni 2025): https://omr.com/de/daily/johannes-kliesch-snocks
  - Auszeichnung: Forbes „30 Under 30 Europe“ (2022): https://fashionunited.de/press/personen/snocks-gruender-auf-der-forbes-liste-30-under-30-europe/2022050446414/

### 5.2 Felix Bauer und Rehan Choudhry

- **Felix Bauer** (Cousin, Mitgründer; anfangs Finanzen und Logistik) ist in der heutigen Kommunikation **kaum sichtbar**. Im Impressum stehen laut Snippet Kliesch und Choudhry als Geschäftsführer. Quellen: https://snocks.com/pages/impressum, https://snocks.com/pages/grunderstory-v7
- **Rehan Choudhry** ist seit Ende 2023 Co-CEO. Eine eigene öffentliche Markenkommunikation (Interviews, Social Media) wurde **nicht gefunden**. Quelle: https://snocks.com/pages/press-kit

### 5.3 Wirkung auf das Markenbild *[Interpretation]*

- **Personifizierung:** Kliesch gibt der Marke ein Gesicht und eine Geschichte. Diese Underdog-Story (Cousins, 4.000 €, Amazon, rutschende Socken) macht eine austauschbare Basics-Kategorie emotional aufladbar. Seine Eigenschaften, nämlich nahbar, ehrgeizig, transparent und mutig („Why not“), werden auf die Marke übertragen.
- **Zwei Zielgruppen, zwei Bilder:** Auf LinkedIn und im Podcast spricht er vor allem Gründer:innen, E-Commerce-Profis und Talente an (Employer Branding: „Klopp des E-Commerce“). Endkund:innen erreicht SNOCKS eher über Creator, Community und TV. Die Gründer-Kommunikation stärkt also besonders die *Kompetenz*-Dimension und die Arbeitgebermarke, weniger direkt das Produktimage.
- **Risiken:** (1) Die Marke hängt stark an einer Person. (2) Glaubwürdigkeit leidet, wenn Ghostwriting und Agentursteuerung öffentlich werden, obwohl die Personal Brand auf Authentizität setzt. (3) Die Business- und Geld-Erzählung („Millionär“, „100 Millionen“) kann bei preissensiblen Endkund:innen anders ankommen als bei der Gründer-Community.
- **Tendenz:** Mit dem Rebranding, dem Inhouse-Kreativteam unter Tamara Göbel und dem Claim „feel the fit.“ wird die Produktmarke sichtbar **unabhängiger vom Gründer** aufgestellt. „Why not“ lebt vor allem im Gründer- und Podcastumfeld weiter.

---

## 6. Analogie-Input für die Markentonalität

> **Hinweis:** Dieses Kapitel ist **analytische Einordnung (Interpretation)** von Subagent C und stützt sich auf die Belege der Kapitel 1–5. Die Analogien sind Vorschläge für die Gruppe, keine Fakten.
> Literatur: Aaker, J. L. (1997): Dimensions of Brand Personality. *Journal of Marketing Research*, 34(3), 347–356. (Angabe aus Fachwissen, nicht web-recherchiert)

### 6.1 Einordnung nach den Brand-Personality-Dimensionen von Aaker

| Dimension (Aaker) | Ausprägung bei SNOCKS | Begründung aus der Kommunikation |
|---|---|---|
| **Aufrichtigkeit** (bodenständig, ehrlich, gesund, fröhlich) | **hoch** (★★★★☆) | Echte Kund:innen statt Models („Die Menschen auf den Fotos sind wirklich die, die unsere Produkte tragen“); Anti-Loch-Garantie und 100 Tage Rückgabe als ehrliche Risikoübernahme; Du-Ansprache und Augenhöhe; Mannheim-Bezug und Café als lokale Verwurzelung; offene Gründer-Story mit Zahlen. |
| **Erregung/Spannung** (gewagt, temperamentvoll, fantasievoll, zeitgemäß) | **sehr hoch** (★★★★★) | Motto „WHY NOT!“; provokante OOH-Kampagne „Für jeden Arsch das Richtige“; Spot mit Fake-Stream-Hänger; früh auf TikTok und Short-Form; KI-Creatives; Emojis und Jugendsprache („let's go“, „Bock“). |
| **Kompetenz** (zuverlässig, intelligent, erfolgreich) | **hoch** (★★★★☆) | Problemlösende Produkte („Socken, die … nicht rutschen“); Performance-Marketing-Exzellenz (WhatsApp-Newsletter mit 3 Mio. €, Corporate Influencing mit 575.000 Impressions pro Woche); Wachstum auf 110 Mio. € Umsatz; Forbes 30 Under 30; Gründer als E-Commerce-Experte und Podcast-Host. |
| **Kultiviertheit** (gehoben, glamourös, charmant) | **niedrig bis mittel** (★★☆☆☆) | Für Kultiviertheit sprechen das minimalistische Rebranding (Schwarz-Weiß-Wortmarke), der englische Claim „feel the fit.“ und die Ambition „Louis-Vuitton-Playbook“. Dagegen sprechen Basics zu Mengenpreisen, starke Rabattkommunikation („bis zu 50 %“, 20-%-Codes) und derber Humor. |
| **Robustheit** (outdoor, zäh, widerstandsfähig) | **mittel** (★★★☆☆) | Für Robustheit sprechen die Haltbarkeit als Kernversprechen (Anti-Loch-Garantie, „Care & Repair“), Sport- und Kompressionssocken, Action- und Sportszenen im TV-Spot und Parkour-Influencer Jan Schlappen. Ein Outdoor- oder Abenteuer-Image fehlt aber weitgehend. |

**Fazit:** SNOCKS ist vor allem eine **„aufregend-aufrichtige“ Marke**: frech, mutig und zeitgemäß, dabei ehrlich, nahbar und zuverlässig. Kompetenz bildet das Fundament. Kultiviertheit ist die schwächste Dimension, die Marke versucht sie aber mit dem Rebranding und dem House-of-Brands-Anspruch auszubauen.

### 6.2 „Wenn SNOCKS … wäre“

| Analogie | Vorschlag | Begründung aus der Kommunikation |
|---|---|---|
| **… ein Mensch** | **„Der Kumpel aus der Mannheimer Startup-WG“**: Ende 20, Sneaker, Hoodie, duzt alle, macht derbe Witze, ist aber der Erste, der beim Umzug hilft und pünktlich kommt. | Du-Ansprache, Humor („Arsch“, „Bock“), Startup-Jargon („let's go“, „#startuplife“), Mannheim-Verwurzelung; dazu Zuverlässigkeit (Garantie, Rückgabe) und Alltagsnähe („Basics, die … den Alltag erleichtern“). |
| **… eine prominente Person** | **Jürgen Klopp** (Hauptvorschlag) | Kliesch selbst will „der Jürgen Klopp des E-Commerce werden“. Klopp steht öffentlich für Nahbarkeit, Emotion, Humor, Teamgeist („Community“) und Erfolg ohne Arroganz; das passt zu Aufrichtigkeit, Erregung und Kompetenz. |
| | Alternative: **Joko Winterscheidt** | Seine öffentliche Persona verbindet „Why not?“-Mutproben, Selbstironie und Unternehmergeist; das entspricht dem Mix aus „WHY NOT!“, provokantem Humor und Business-Erfolg. *(Rein assoziativ; keine Verbindung zu SNOCKS belegt.)* |
| **… ein Tier** | **Golden Retriever** (Hauptvorschlag) | Freundlich, verspielt, unkompliziert, treu und für alle zugänglich: Humor und Community-Nähe plus Verlässlichkeit (Anti-Loch-Garantie) und Massentauglichkeit der Basics. |
| | Alternative: **Erdmännchen** | Gesellig und gemeinschaftsorientiert (Community-Shooting, Corporate Influencer), neugierig, flink und immer „auf Ausschau“ nach neuen Trends (TikTok, KI, TV-Stunts). |
| **… ein Auto** | **VW Golf GTI** (Hauptvorschlag) | Der Golf ist *das* Alltags-Basic: zuverlässig, klassenlos, für alle. Das GTI-Kürzel bringt Sportlichkeit und Frechheit hinein. So verbindet SNOCKS solide Basics (Kompetenz/Aufrichtigkeit) mit lautem, jungem Auftritt (Erregung). |
| | Alternative: **MINI Cooper** | Urban, frech, mit Augenzwinkern beworben und designbewusst. Passt zur Erregungs-Dimension und zum minimalistischen Rebranding, ist aber etwas „kultivierter“, als SNOCKS heute wirkt. |

### 6.3 Abgeleitete Markenemotionen

| Emotion | Herleitung |
|---|---|
| **Wohlgefühl und Komfort** | Claim „feel the fit.“, Wert „Komfort“ („Wir setzen in jedem Aspekt unserer Arbeit auf Komfort“), Ziel „feeling good“ |
| **Spaß, Leichtigkeit, Humor** | „Für jeden Arsch das Richtige“, Emojis, Creator-Content, „let's go ✨“ |
| **Vertrauen und Sicherheit** | Anti-Loch-Garantie, 100 Tage Rückgaberecht, „115.000+ Bewertungen“ |
| **Zugehörigkeit und Gemeinschaft** | „unsere weltbeste Community“, Community-Shooting, SNOCKS Club mit „Socken“-Stufen, Café in Mannheim |
| **Mut, Aufbruch, Neugier** | Motto „WHY NOT!“, Gründer-Story, Stunts (Fake-Stream, OOH-Premiere) |
| **Selbstakzeptanz und Körperpositivität** | echte, vielfältige Körper statt Models („für jeden Arsch“) |
| **Stolz und Erfolg** (vor allem bei der B2B- und Gründer-Zielgruppe) | 110 Mio. € Umsatz, „Klopp des E-Commerce“, Forbes 30 Under 30 |

*[Interpretation]* Für die Limbic Map (Bearbeitung durch Subagent B) liegen die Schwerpunkte vermutlich im Bereich **Stimulanz** (Spaß, Neugier, Mut) und im Übergang zu **Balance** (Wohlgefühl, Vertrauen, Geborgenheit). Bei der Gründer-Kommunikation kommt **Dominanz** hinzu (Leistung, Erfolg).

---

## 7. Offene Punkte und Empfehlungen zur manuellen Prüfung

1. **Instagram-Feed manuell sichten** (9–12 aktuelle Posts plus Reels): Formate, Posting-Frequenz der letzten 30 Tage, Captions wörtlich, Bildsprache (Licht, Setting, Model ja/nein, Farben). Mit Datum als Screenshot sichern.
2. **Website-CSS im Browser auslesen** (F12): Hex-Codes und `font-family` der aktuellen Seite. Danach die Brandfetch-Werte (#FAC950 / #FFFFFF / #333333) bestätigen oder ersetzen.
3. **Live-Followerzahlen** von Instagram, TikTok (`@snocks.feelthefit`), YouTube (`@snocks-whynot`), Facebook, LinkedIn und Pinterest am Tag der Präsentation notieren.
4. **Podcastfolge „So lief das SNOCKS Rebranding ab“** anhören: Logo-Details, Farben, Tone-of-Voice-Regeln.
5. **Newsletter abonnieren** (E-Mail und WhatsApp), um Betreffzeilen, Tonalität und Frequenz zu dokumentieren.

---

## Recherche-Protokoll

### A) Ausgeführte Websuchen (WebSearch), wörtlich, in Reihenfolge

1. `SNOCKS Markenidentität Brand Kommunikation Instagram`
2. `SNOCKS Instagram Follower snocks`
3. `SNOCKS press kit founders Johannes Kliesch Felix Bauer brand` (Domainfilter: snocks.com)
4. `SNOCKS über uns Geschichte Socken Mannheim Cousins`
5. `SNOCKS Instagram Follower 2025 2026 Engagement Rate`
6. `SNOCKS YouTube Kanal Abonnenten Johannes Kliesch Vlog`
7. `SNOCKS TikTok Follower Likes snocks`
8. `"@snocks" TikTok`
9. `SNOCKS Social-Media-Strategie TikTok Instagram Content OMR`
10. `SNOCKS Slogan Claim Werbung Socken "SNOCKS"`
11. `SNOCKS logo brand colors hex brandfetch`
12. `SNOCKS Rebranding neues Logo Markenauftritt Agentur`
13. `SNOCKS Kampagne Testimonial Influencer Kooperation Werbespot`
14. `Snocks "Für jeden Arsch das Richtige" Kampagne Hamburg Plakate`
15. `Snocks Corporate Influencing LinkedIn 575.000 Impressions meedia`
16. `Horizont Snocks Inhouse-Kreativteam Tamara Göbel Wachstumsmotor`
17. `"SNOCKS Rebranding" Tamara Göbel Robin Hanreich Logo Farben`
18. `"E-Commerce, Why Not?!" Podcast Johannes Kliesch Romy Riffel`
19. `SNOCKS TV-Spot 2025 Werbung Fernsehen`
20. `snocks instagram post` (Domainfilter: instagram.com)
21. `Snocks Champions-League-Spot Prime Video Fake-Stream-Hänger`
22. `SNOCKS Facebook Seite Follower snocks.official`
23. `"we focus on your basics" SNOCKS`
24. `SNOCKS "feelthefit" OR "feel the fit"`
25. `snocks youtube channel @snocks videos subscribers` (Domainfilter: youtube.com)
26. `SNOCKS "Why not" Motto YouTube Vlog Startup Mannheim Abonnenten`
27. `Johannes Kliesch LinkedIn Follower Personal Branding Snocks`
28. `Snockast Podcast Johannes Kliesch Folgen`
29. `"Was (und wer) Snocks-Gründer Johannes Kliesch zur Marke macht" W&V Oneframe Ghostwriter`
30. `Snocks starten mit Video-Podcast FashionNetwork "Why Not"`
31. `"30 Tage KI statt Mensch" Snocks-CEO LinkedIn-Test`
32. `snocks instagram hypeauditor OR socialblade OR "followers" statistics`
33. `likeometer snocks instagram analytics`
34. `tiktok.com snocks Socken Unterwäsche Video` (Domainfilter: tiktok.com)
35. `tiktok @snocks official account Follower Likes` (Domainfilter: tiktok.com)
36. `johannes.snocks TikTok Follower`
37. `SNOCKS LinkedIn Unternehmen Follower Mannheim Basics` (Domainfilter: linkedin.com)
38. `Snocks Facebook Gefällt mir Follower` (Domainfilter: facebook.com)
39. `SNOCKS Pinterest snocksofficial Follower monatliche Aufrufe`
40. `SNOCKS Newsletter Anmeldung Rabatt 10% "SNOCKS" E-Mail`
41. `SNOCKS Schriftart Font Typografie Logo Wortmarke`
42. `SNOKEN Treueprogramm SNOCKS Punkte Club`
43. `snocks.com Anti-Loch-Garantie 100 Tage Rückgabe Versand "SNOCKS"` (Domainfilter: snocks.com)
44. `snocks.com Gründerstory "Why not" Johannes Felix Socken rutschen` (Domainfilter: snocks.com)
45. `"feel the fit" SNOCKS Claim Bedeutung`
46. `snocks.com pages mannheim grounding page SNOCKS Werte Mission` (Domainfilter: snocks.com)
47. `SNOCKS Karriere "Wir empowern Menschen" Werte Komfort Augenhöhe`
48. `SNOCKS Verpackung Karton Versandverpackung nachhaltig Design`
49. `SNOCKS Influencer Marketing creatordb modash YouTube Sponsoring Creator`
50. `SNOCKS Kooperation Collab Limited Edition Pepsi Socken`
51. `SNOCKS Sponsoring Sportverein Mannheim Partner Trikot`
52. `SNOCKS prominente Werbegesicht Promi Kampagne Fußballer Markenbotschafter`
53. `"SNOCKS in den Medien" Pressekit Logo Download Pressekontakt Fakten`
54. `SNOCKS Markenbild Bildsprache Models Fotos Kampagne Unterwäsche Diversität echte Menschen`
55. `adference Johannes Kliesch SNOCKS Bildsprache Produktbeschreibungen Amazon Advertising Interview`
56. `adclips.tv Snocks TV-Spot Beschreibung Sandboarding Skateboard Boxershorts`
57. `"KI bei Snocks" "Wir kommen näher an unsere Kund:innen heran" W&V`
58. `"Louis-Vuitton-Playbook" Johannes Kliesch Snocks OMR Marke`
59. `"Jürgen Klopp des E-Commerce" Snocks OMR Podcast WhatsApp Newsletter TV-Werbung`
60. `"Johannes Kliesch" LinkedIn "Mit Socken zum 3-stelligen Millionenumsatz" Follower`
61. `Johannes Kliesch Instagram Follower johanneskliesch`
62. `"Johannes Kliesch & Friends" YouTube Abonnenten Kanal`
63. `SNOCKS Vlog YouTube "Ein Tag bei SNOCKS" Startup Alltag Video`
64. `ARD Money Maker Johannes Kliesch Snocks Doku 2025`
65. `Rehan Choudhry Snocks Co-CEO Interview Marke Strategie 2026`
66. `WebSpotting Snocks Multi Channel Analyse Instagram Facebook TikTok Newsletter WhatsApp`
67. `Snocks Instagram Content Humor Memes Community Reels Analyse Marke`
68. `"SNOCKS" "@snocks" Instagram Influencer Analytics likeometer followers 2026` (Domainfilter: likeometer.co)
69. `SNOCKS YouTube @snocks-whynot Abonnenten Videos Shorts`
70. `sponsorradar Snocks YouTube Sponsorships creators` (Domainfilter: sponsorradar.com)
71. `modash SNOCKS influencers sponsored creators list Instagram TikTok` (Domainfilter: modash.io)
72. `Joshinator Snocks Werbung Rabattcode YouTube Sponsor`
73. `snocks.com brand assets logo colors fonts` (Domainfilter: brandfetch.com)
74. `SNOCKS Logo schwarz weiß Wortmarke Großbuchstaben Socke Symbol`
75. `Tamara Göbel LinkedIn SNOCKS Rebranding Tone of Voice neue Identität minimalistisches Logo`
76. `"SNOCKS x" Kollaboration Socken Airwaves OR Haribo OR Kooperation Marke`: **nicht ausgeführt** (Suchbudget erschöpft)
77. `podcast.de "So lief das SNOCKS Rebranding ab" Kroatien Workshop Folge`: **nicht ausgeführt** (Suchbudget erschöpft)

### B) Direkt aufgerufene URLs (WebFetch / curl), alle erfolglos

| URL | Werkzeug | Ergebnis |
|---|---|---|
| https://snocks.com | WebFetch | Fehler `getaddrinfo ENOTFOUND snocks.com` |
| https://www.snocks.com | WebFetch | Fehler `ENOTFOUND` |
| https://snocks.com/en-es/pages/press-kit | WebFetch | Fehler `ENOTFOUND` |
| https://web.archive.org/web/2026/https://snocks.com/ | WebFetch | „unable to fetch from web.archive.org“ |
| https://progressreport.snocks.com/our-approach | WebFetch | Fehler `ENOTFOUND` |
| https://www.shopify.com/de/blog/snocks-sneaker-socken | WebFetch | Fehler `ENOTFOUND` |
| https://www.fuer-gruender.de/blog/snocks/ | WebFetch | Fehler `ENOTFOUND` |
| https://omkb.de/startup-roundtable-2 | WebFetch | Fehler `ENOTFOUND` |
| https://snocks.com/ | curl | Proxy: `CONNECT tunnel failed, response 403` |
| https://de.wikipedia.org/wiki/Snocks | curl | keine Verbindung (HTTP 000) |
| https://www.youtube.com/@snocks | curl | keine Verbindung (HTTP 000) |
| https://www.instagram.com/snocks/ | curl | keine Verbindung (HTTP 000) |

### C) Über Suchergebnis-Auszüge ausgewertete Quell-URLs (nicht direkt geöffnet)

**Unternehmensquellen (snocks.com und eigene Kanäle):**
https://snocks.com/ · https://snocks.com/pages/press-kit · https://snocks.com/de-ch/pages/press-kit · https://snocks.com/nl-nl/pages/press-kit · https://snocks.com/en-es/pages/press-kit · https://snocks.com/pages/grounding-page · https://snocks.com/en-es/pages/grounding-page · https://snocks.com/pages/grunderstory-v7 · https://snocks.com/pages/johannes · https://snocks.com/pages/mannheim · https://snocks.com/pages/ladenburg · https://snocks.com/pages/karriere · https://snocks.com/pages/karriere-x · https://snocks.com/en-es/pages/jobs · https://snocks.com/pages/impressum · https://snocks.com/pages/sustainability · https://snocks.com/pages/arsch-kampagne · https://snocks.com/pages/retoure · https://snocks.com/pages/erfahrungsberichte · https://snocks.com/pages/care-and-repair · https://snocks.com/products/boxershorts · https://snocks.com/products/boxershorts-mit-langerem-bein · https://snocks.com/products/tennissocken-weiss · https://snocks.com/products/retro-boxershorts · https://snocks.com/products/sport-kompressionssocken · https://snocks.com/collections/alle-sneaker-socken · https://snocks.com/collections/unterwaesche · https://snocks.com/pages/stortebekker-social-media-manager-m-w-d · https://snocks.com/pages/redakteuer-in-linkedin-personalbranding-mwd · https://snocks.com/de-ch/pages/partnership-snocks · https://snocks.com/de-ch/pages/snocksulting-content-manager-m-w-d · https://snocks.com/pages/snocksulting-werkstudent-in-w-w-d-im-bereich-content-management · https://snocks.com/blogs/startups/startups-in-mannheim · https://snocks.com/blogs/podcasts/96-amazonfba-q-a-uber-amazon-fba-johannes-beantwortet-fragen-von-amazon · https://qualitaet.snocks.com/ · https://progressreport.snocks.com/our-approach · https://www.snocksulting.com/

**Social-Media-Profile und -Posts:**
https://www.instagram.com/snocks/ · https://www.instagram.com/snocks/channel/?hl=en · https://www.instagram.com/snocksitaly/ · https://www.instagram.com/snocksnetherlands/ · https://www.instagram.com/snockspoland/ · https://www.instagram.com/snocks.coffee/ · https://www.instagram.com/snockscoffee_bynomad/ · https://www.facebook.com/snocks/ · https://www.facebook.com/snocks/reviews/ · https://www.facebook.com/snockscoffee/ · https://www.facebook.com/snocksulting/ · https://www.facebook.com/johannes.snocks · https://www.youtube.com/@snocks-whynot · https://www.youtube.com/@ecommercewhynot · https://www.youtube.com/@johanneskliesch · https://www.youtube.com/channel/UC-wnSoNtClZSUTtX2p2vRzA · https://www.youtube.com/watch?v=r3YtHnG_u1Y · https://www.youtube.com/watch?v=YR08oFgeN5g · https://www.youtube.com/watch?v=HTsIC6P3KPw · https://www.youtube.com/watch?v=U9H4IDR9cAs · https://www.youtube.com/watch?v=B9zr2OGbWfU · https://www.youtube.com/watch?v=ymtVcPdlDvE · https://www.youtube.com/watch?v=S9zFMvNFym0 · https://www.youtube.com/watch?v=rSiIea1YF-I · https://www.youtube.com/watch?v=BkP10pwir2A · https://www.youtube.com/watch?v=Y_ay8TI3Vh8 · https://www.youtube.com/watch?v=Pvq3bONBKEA · https://www.tiktok.com/@snocks.feelthefit · https://www.tiktok.com/@johannes.snocks · https://www.tiktok.com/@snocks.whynot/video/7160747173343235333 · https://www.tiktok.com/@johannes.snocks/video/7287605147318947105 · https://www.tiktok.com/@johannes.snocks/video/7171396451963096325 · https://www.tiktok.com/@janaz90/video/7430004418180844832 · https://www.tiktok.com/@julesslw/video/7283158986033990944 · https://www.tiktok.com/discover/snocks-werbung · https://de.linkedin.com/company/snocks · https://de.linkedin.com/in/johannes-kliesch · https://www.linkedin.com/in/tamaragoebel/ · https://www.linkedin.com/in/rehan-choudhry-123674129/ · https://de.linkedin.com/posts/snocks_snocks-wird-international-bock-dabei-zu-activity-7148964344591020032-x1D2 · https://de.linkedin.com/posts/snocks_friends-for-life-jeder-kann-leben-retten-activity-7097488571124584448-DcGo · https://www.linkedin.com/posts/snocks_wer-steckt-eigentlich-hinter-snocks-um-activity-6984055840458600448-rba0 · https://de.linkedin.com/posts/snocks_podcast-video-ecommerce-activity-7079392754606166017-sXlS · https://de.linkedin.com/posts/textilbuendnis_willkommen-im-b%C3%BCndnis-snocks-gmbh-b%C3%BCndnis-activity-6966386776030486528-L8ci · https://de.linkedin.com/posts/johannes-kliesch_startup-tv-ads-activity-7122122001409785859-2SB7 · https://de.linkedin.com/posts/weberlarissa_socialmedia-personalbranding-snocks-activity-7113063990938734592-RmBg · https://de.linkedin.com/posts/timjaschke_snocks-branding-activity-6971033029125271555-GGTk · https://www.linkedin.com/posts/timjaschke_snocks-airwaves-branding-activity-6856475140415373312-6Ol9 · https://www.linkedin.com/posts/officiallyomr_omrpodcast-startups-volocopter-activity-6922504015855407104-pbLo · https://in.pinterest.com/snocksofficial/

**Fachpresse, Podcasts, Medien:**
https://omr.com/de/daily/snocks-omr-podcast-johannes-kliesch-felix-bauer · https://omr.com/de/daily/snocks-omr-podcast · https://omr.com/de/daily/johannes-kliesch-snocks · https://omr.com/de/daily/snocks-prime-champions-league-spot · https://omr.com/en/reviews/contenthub/snocks-tech-stack · https://www.horizont.net/marketing/nachrichten/mannheimer-e-commerce-unternehmen-wie-snocks-sein-inhouse-kreativteam-zum-wachstumsmotor-macht-232077 · https://www.textilwirtschaft.de/business/news/mannheimer-e-commerce-unternehmen-wie-snocks-sein-inhouse-kreativteam-zum-wachstumsmotor-macht-253197 · https://www.textilwirtschaft.de/business/news/premiere-in-hamburg-das-ist-die-erste-out-of-home-kampagne-von-snocks-247409 · https://www.textilwirtschaft.de/fashion-management/das-ist-die-erste-out-of-home-kampagne-von-snocks-93679 · https://events.wuv.de/summit-2025/speaker/ · https://www.wuv.de/Themen/Social-Media/Was-und-wer-Snocks-Gruender-Johannes-Kliesch-zur-Marke-macht · https://executive-briefing.wuv.de/linkedin/snocks · https://www.wuv.de/Themen/Media/30-Tage-KI-statt-Mensch-Snocks-CEO-wagt-den-LinkedIn-Test · https://www.wuv.de/Themen/Marke/KI-bei-Snocks-Wir-kommen-naeher-an-unsere-Kund-innen-heran · https://www.wuv.de/Themen/Marke/Snocks-wagt-sich-mit-Kunden-Hintern-auf-Plakate · https://www.wuv.de/themen/marke/abgekupfert-snocks-arsch-kampagne-geht-in-die-hose · https://www.wuv.de/specials/dmexco-2022/johannes-kliesch-von-snocks-mein-business-influencer-geschaeft-laeuft-super · https://meedia.de/news/beitrag/18309-wie-snocks-auf-linkedin-575-000-impressions-pro-woche-generiert.html · https://www.absatzwirtschaft.de/snocks-macht-aussenwerbung-fuer-den-arsch-263576/ · https://www.neuhandeln.de/beitraege/db/230959jg.html · https://de.fashionnetwork.com/news/Snocks-starten-mit-erster-out-of-home-kampagne,1671673.html · https://www.marketingscout.com/news/snocks-kunden-zeigen-ihre-hoeschen-erste-ooh-kampagne-zielt-auf-viral-effekt/ · https://www.marketing-boerse.de/web/details/2442-snocks-dehnt-aussenwerbung-auf-alle-kanaele-aus/198061 · https://fashionunited.de/nachrichten/business/snocks-am-1-mai-haben-wir-die-startseite-von-amazon-gebucht/2022041346089 · https://fashionunited.de/press/personen/snocks-gruender-auf-der-forbes-liste-30-under-30-europe/2022050446414/ · https://www.turi2.de/?p=4050293 · https://www.about-drinks.com/pepsico-mit-neuem-markendesign-und-kooperationen-mit-kangaroos-und-snocks/ · https://gruendermetropole-berlin.de/snocks-startet-video-podcast · https://de.fashionnetwork.com/news/Snocks-starten-mit-video-podcast,1530257.html · https://www.podcast.de/episode/631530559/so-lief-das-snocks-rebranding-ab-tamara-goebel-robin-hanreich-von-snocks · https://www.podcast.de/episode/684149742/johannes-kliesch-snocks-5-dinge-die-ich-gerne-mit-20-gewusst-haette · https://www.podcast.de/episode/624594054/snocks-baut-aus-basics-eine-brand-mit-johannes-kliesch · https://www.podcast.de/episode/703159595/ma-als-wachstumshebel-wie-snocks-mit-insolventen-marken-waechst-k643 · https://www.podcast.de/episode/650580523/k559-kann-man-demnaechst-snocks-produkte-bei-temu-und-shein-kaufen · https://shows.acast.com/649c031f564b0800114e2d03/episodes/socken-stories-und-sales-snocks-innovationen-im-influencer-m · https://connectingforfuture.podigee.io/15-snocks · https://rephonic.com/podcasts/snockast-unternehmer-podcast-uber-amazon-fba · https://www.ecosistant.eu/die-besten-e-commerce-podcasts-2023/ · https://www.startbase.de/mediathek/digitale-vorreiterinnen/das-snocks-update-mit-johannes-kliesch-7050b5607c/ · https://www.joyn.de/serien/omr25/1-6-lessons-learned-johannes-kliesch-bewertet-die-uebernahme-von-oceans-apart · https://www.thetvdb.com/series/money-maker/episodes/11195856 · https://retail-news.de/ard-doku-snocks-gruender-johannes-kliesch/ · https://retail-news.de/snocks-club-neues-loyalty-programm-zur-steigerung-der-kundenbindung/ · https://news.kununu.com/snocks-gruender-kliesch-mit-4-000-euro-startkapital-zum-millionaer/ · https://www.gruender.de/startups/gruender-geheimnis-snocks/ · https://www.shopify.com/de/blog/snocks-sneaker-socken · https://omkb.de/startup-roundtable-2 · https://www.webspotting.de/e-commerce/snocks-multi-channel-analyse/ · https://branchenleader.com/wie-snocks-ein-branchenleader-wurde/ · https://www.adference.com/blog/snocks-gruender-johannes-kliesch · https://www.heidelberg24.de/region/ladenburg-unternehmer-hoehle-der-loewen-vox-juror-staffel-andreas-herb-snocks-mannheim-zr-94437900.html · https://www.rheinpfalz.de/lokal/ludwigshafen_artikel,-sv-waldhof-macht-sich-auf-die-socken-_arid,946597.html

**Drittanbieter, Tracker, Sonstiges:**
https://likeometer.co/@snocks?lang=en · https://www.speakrj.com/audit/report/snocks/instagram · https://www.socialinsider.io/social-media-benchmarks/instagram · https://creatordb.app/brands/snocks.com/ · https://sponsorradar.com/brands/snocks · https://www.modash.io/content-library/brands/snocks-examples · https://www.modash.io/content-library/brands/snocks-examples/influencers · https://brandfetch.com/snocks.com · https://adclips.tv/de-DE/tv-werbung/tv-spots/tv-spot-brand/snocks/ · https://adclips.tv/de-DE/tv-werbung/tv-spots/tv-spot-brand/snocks/2853885049885984 · https://adclips.tv/de-DE/tv-werbung/tv-spots/tv-spot-brand/snocks/8690455779745229 · https://www.trustedshops.eu/company/snocks_gmbh/ · https://www.trustedshops.de/bewertung/info_XA8E70348757EAC5A128853A2F2CF5B65.html · https://www.trustedshops.fr/evaluation/info_X3ACDC6AE13D3AF4B65D20ACEB70A02FB.html · https://www.sparwelt.de/gutscheine/snocks · https://www.monsterdealz.de/magazin/snocks-gutschein · https://connect.lime-technologies.com/de/blog/whatsapp-newsletter/ · https://www.thimm.com/en/packaging/shipping-boxes/e-commerce-packaging/shipping-boxes-for-clothes-laundry-packed-sustainably-and-safely/ · https://gruener-knopf.de/en/node/338 · https://www.arbeitnow.com/jobs/companies/snocks-gmbh/junior-ai-visual-creatorin-e-commerce-mannheim-buro-315337 · https://www.zalando.de/damenbekleidung/snocks · https://www.peek-cloppenburg.nl/nl/merken/snocks

**Als irrelevant verworfen** (Treffer ohne SNOCKS-Bezug, z. B. Follower-Kauf-Seiten, Schriften „Snacks“, Snickers, Sock Club, andere Accounts mit ähnlichem Namen): nicht verwendet.

---

## Zusammenfassung für den Haupt-Agenten

**Methodik-Hinweis:** snocks.com, Instagram und YouTube waren technisch nicht direkt abrufbar (DNS- bzw. Proxy-Fehler). Alle Angaben stammen aus 75 Websuchen; danach war das Suchbudget erschöpft. Hex-Codes aus dem CSS und Schriftarten: **nicht gefunden**.

**Kanäle (Followerzahlen aus Drittquellen, unsicher):**
- Instagram `@snocks`: 285.867 Follower (Likeometer, 28.09.2026); 2022 waren es 111.739, Engagement 0,75 % (SpeakRJ). Bio: „You focus on your purpose, we focus on your basics – #feelthefit“ [instagram.com/snocks]
- TikTok `@snocks.feelthefit`: ca. 126.500 Follower, 1,9 Mio. Likes; älterer Account `@snocks.whynot` [tiktok.com]
- Facebook: ca. 44.000 Follower, vor allem Ad- und Performance-Kanal („Das größte Volumen bringen bei uns Facebook und Amazon“, 2021) [omkb.de]
- YouTube `@snocks-whynot`: „Dem coolsten Socken Start-Up aus Mannheim! 🔥 Wir leben nach dem Motto WHY NOT!“; Schwerpunkt Creator-Sponsoring mit 143 Creatorn, ca. 1.200 Videos und 133 Mio. Views [creatordb.app]
- LinkedIn: ca. 22.500 Follower; Corporate Influencing mit über 30 Posts und ca. 575.000 Impressions pro Woche [meedia.de]
- WhatsApp-Newsletter: ca. 3 Mio. € Umsatz [omr.com]; Podcast „E-Commerce, Why Not?!“ erscheint montags

**Corporate Design:** Wortmarke „SNOCKS“ in Versalien, minimalistisch, nach dem Inhouse-Rebranding um 2024 (Tamara Göbel, Robin Hanreich) [podcast.de]; 🧦 als Social-Signet. Farben laut Brandfetch (unbestätigt, vermutlich vor dem Rebranding): #FAC950, #FFFFFF, #333333. Bildsprache: echte Community statt Models, UGC und Short-Form, KI-Produktvisuals. Versandkarton aus Wellpappe ohne Klebeband (THIMM).

**Claims und Ton:** „SNOCKS. feel the fit.“ (Website-Titel), früher „WHY NOT!“, Kampagnenslogan „Für jeden Arsch das Richtige“ (OOH Hamburg, Okt. 2024). Du-Ansprache, Emojis selbst in Produkttiteln („Anti-Loch-Garantie 💯“), derber Humor, Anglizismen, Superlative („weltbeste Community“), Garantien (12 Monate Anti-Loch, 100 Tage Rückgabe).

**Kampagnen:** erste OOH-Kampagne 2024 mit Kund:innen-Pos und Influencer Jan Schlappen; Kritik von W&V („abgekupfert“). TV seit 2023 mit Prime-Video-Stunt „Fake-Stream-Hänger“ [omr.com]; Pepsi x SNOCKS 2024. Prominente Testimonials und Sponsoring: **nicht gefunden**.

**Gründer:** Johannes Kliesch ist das zentrale Markengesicht („Ich will der Jürgen Klopp des E-Commerce werden“). Seine Personal Brand ist professionell gesteuert: Ghostwriter, sechs LinkedIn-Posts pro Woche, seit 2024 die Agentur Oneframe [wuv.de]. Die Markenkommunikation wird inzwischen unabhängiger vom Gründer.

**Aaker (Interpretation):** Erregung sehr hoch, Aufrichtigkeit hoch, Kompetenz hoch, Robustheit mittel, Kultiviertheit niedrig. Analogien: Mensch = „Kumpel aus der Mannheimer Startup-WG“, Promi = Jürgen Klopp, Tier = Golden Retriever, Auto = VW Golf GTI. Emotionen: Wohlgefühl, Spaß, Vertrauen, Zugehörigkeit, Mut.

**Vollbericht:** /home/user/Unternehmenskommunikation-/fallstudie-1-snocks/research/C-kommunikationsanalyse.md
