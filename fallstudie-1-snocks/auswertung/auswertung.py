"""Auswertung der Interviews (Repertory Grid, Laddering, Analogien) für Fallstudie 1 SNOCKS.

Liest die ausgefüllte Erfassungstabelle und schreibt
  - ergebnisse/ergebnisse.json      alle Kennzahlen (maschinenlesbar)
  - ergebnisse/ERGEBNISSE.md        Zusammenfassung zum Lesen (Backup-Folien)
  - ergebnisse/*.csv                Heatmap und Implikationsmatrix
  - ../praesentation/data/ergebnisse.js   dieselben Daten für die Folien (window.ERGEBNISSE)

Aufruf:
  python3 auswertung.py
  python3 auswertung.py --eingabe andere.xlsx --ausgabe ordner/ --js ordner/ergebnisse.js
"""
import argparse
import json
from collections import Counter, defaultdict
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

import numpy as np
import pandas as pd

HIER = Path(__file__).resolve().parent
ELEMENTE = ["SNOCKS", "FALKE", "Happy Socks", "erlich textil", "Calvin Klein", "Uniqlo", "Lidl-Eigenmarke", "Ideal"]
WETTBEWERB = ELEMENTE[1:7]
STUFEN = ["A", "FK", "PK", "W"]
STUFEN_NAME = {"A": "Attribut", "FK": "funktionale Konsequenz", "PK": "psychosoziale Konsequenz", "W": "Wert"}
WICHTIGKEIT_PUNKTE = {1: 3, 2: 2, 3: 1}


def lies_blatt(pfad, blatt):
    df = pd.read_excel(pfad, sheet_name=blatt, header=0, dtype=object)
    ids = df.iloc[:, 0].astype(str).str.strip()
    behalten = df.iloc[:, 0].notna() & (ids != "") & (ids.str.upper() != "BEISPIEL")
    df = df[behalten].copy()
    df.iloc[:, 0] = ids[behalten]
    return df


def text(wert):
    if wert is None or (isinstance(wert, float) and np.isnan(wert)):
        return ""
    return str(wert).strip()


def zahl(wert):
    try:
        z = float(wert)
    except (TypeError, ValueError):
        return None
    return None if np.isnan(z) else z


def runde(x, n=2):
    return None if x is None or (isinstance(x, float) and np.isnan(x)) else round(float(x), n)


# ---------------------------------------------------------------- Repertory Grid

def werte_grid_aus(df, hinweise):
    konstrukte = []
    for _, z in df.iterrows():
        pol = text(z.iloc[5]).upper()
        bewertungen = [zahl(z.iloc[7 + i]) for i in range(8)]
        if pol not in ("L", "R") or any(b is None for b in bewertungen):
            hinweise.append(f"Grid: Zeile von {z.iloc[0]} (Konstrukt-Nr. {text(z.iloc[1]) or '?'}) unvollständig – übersprungen")
            continue
        orientiert = [b if pol == "R" else 6 - b for b in bewertungen]
        rang = zahl(z.iloc[6])
        konstrukte.append({
            "id": z.iloc[0],
            "triade": text(z.iloc[2]),
            "bevorzugt": text(z.iloc[3]) if pol == "L" else text(z.iloc[4]),
            "gegenpol": text(z.iloc[4]) if pol == "L" else text(z.iloc[3]),
            "kategorie": text(z.iloc[15]) or "Unkategorisiert",
            "wichtigkeit": int(rang) if rang in (1, 2, 3) else None,
            "werte": dict(zip(ELEMENTE, orientiert)),
        })
    if not konstrukte:
        return None

    nach_kat = defaultdict(list)
    for k in konstrukte:
        nach_kat[k["kategorie"]].append(k)

    kategorien = []
    for kat, ks in nach_kat.items():
        mittel = {e: float(np.mean([k["werte"][e] for k in ks])) for e in ELEMENTE}
        wett = float(np.mean([mittel[e] for e in WETTBEWERB]))
        kategorien.append({
            "kategorie": kat,
            "anzahl": len(ks),
            "personen": len({k["id"] for k in ks}),
            "wichtigkeit_punkte": sum(WICHTIGKEIT_PUNKTE.get(k["wichtigkeit"], 0) for k in ks),
            "werte": {e: runde(v) for e, v in mittel.items()},
            "snocks": runde(mittel["SNOCKS"]),
            "ideal": runde(mittel["Ideal"]),
            "wettbewerb_mittel": runde(wett),
            "differenzierung": runde(mittel["SNOCKS"] - wett),
            "luecke_zum_ideal": runde(mittel["Ideal"] - mittel["SNOCKS"]),
            "beispiele": [p for p, _ in Counter(k["bevorzugt"] for k in ks).most_common(3)],
        })
    kategorien.sort(key=lambda k: (-k["anzahl"], -k["wichtigkeit_punkte"], k["kategorie"]))

    # Markeneigenschaften: wichtig/häufig UND SNOCKS liegt auf der bevorzugten Seite (>= 3,5)
    mindest = 2 if len(konstrukte) >= 15 else 1
    kandidaten = [k for k in kategorien if k["kategorie"] != "Unkategorisiert"
                  and k["anzahl"] >= mindest and k["snocks"] >= 3.5]
    kandidaten.sort(key=lambda k: (-(k["wichtigkeit_punkte"] + k["anzahl"]), -k["differenzierung"]))
    eigenschaften = [{"kategorie": k["kategorie"], "snocks": k["snocks"], "differenzierung": k["differenzierung"],
                      "wichtigkeit_punkte": k["wichtigkeit_punkte"], "anzahl": k["anzahl"],
                      "beispiele": k["beispiele"]} for k in kandidaten[:5]]

    # Ähnlichkeit zu SNOCKS: mittlere absolute Differenz über alle Konstrukte (0 = identisch, 4 = maximal)
    X = np.array([[k["werte"][e] for e in ELEMENTE] for k in konstrukte])
    distanz = {e: runde(float(np.mean(np.abs(X[:, i] - X[:, 0])))) for i, e in enumerate(ELEMENTE) if i}

    # Wahrnehmungskarte: Hauptkomponenten der zeilenzentrierten Grid-Matrix (Konstrukte × Elemente)
    karte = None
    if len(konstrukte) >= 3:
        Z = X - X.mean(axis=1, keepdims=True)
        U, S, Vt = np.linalg.svd(Z, full_matrices=False)
        erkl = (S ** 2) / max((S ** 2).sum(), 1e-12)
        pos = Vt[:2].T * S[:2]
        # Vorzeichen so festlegen, dass SNOCKS rechts oben liegt (rein kosmetisch)
        vz = np.where(pos[0] < 0, -1, 1)
        pos, U2 = pos * vz, U[:, :2] * vz
        ladung = defaultdict(list)
        for k, u in zip(konstrukte, U2):
            ladung[k["kategorie"]].append(u)
        karte = {
            "erklaerte_varianz": [runde(erkl[0], 3), runde(erkl[1], 3) if len(erkl) > 1 else 0],
            "elemente": {e: [runde(p[0], 3), runde(p[1], 3)] for e, p in zip(ELEMENTE, pos)},
            "kategorien": {kat: [runde(float(np.mean([v[0] for v in vs])), 3), runde(float(np.mean([v[1] for v in vs])), 3)]
                           for kat, vs in ladung.items()},
        }

    return {
        "anzahl_konstrukte": len(konstrukte),
        "kategorien": kategorien,
        "heatmap": {"zeilen": [k["kategorie"] for k in kategorien], "spalten": ELEMENTE,
                    "werte": [[k["werte"][e] for e in ELEMENTE] for k in kategorien]},
        "markeneigenschaften": eigenschaften,
        "distanz_zu_snocks": dict(sorted(distanz.items(), key=lambda kv: kv[1])),
        "karte": karte,
        "konstrukte": [{k2: v for k2, v in k.items() if k2 != "werte"} | {"snocks": k["werte"]["SNOCKS"]} for k in konstrukte],
    }


# ---------------------------------------------------------------- Laddering

def werte_laddering_aus(df):
    leitern = []
    for _, z in df.iterrows():
        kette = [(s, text(z.iloc[4 + i])) for i, s in enumerate(STUFEN) if text(z.iloc[4 + i])]
        if len(kette) >= 2:
            leitern.append({"id": z.iloc[0], "leiter": text(z.iloc[1]), "start": text(z.iloc[2]), "kette": kette})
    if not leitern:
        return None

    knoten = Counter()
    personen = defaultdict(set)
    direkt, indirekt = Counter(), Counter()
    for l in leitern:
        for s, c in l["kette"]:
            knoten[(s, c)] += 1
            personen[(s, c)].add(l["id"])
        for i, a in enumerate(l["kette"]):
            for j, b in enumerate(l["kette"][i + 1:], start=i + 1):
                (direkt if j == i + 1 else indirekt)[(a, b)] += 1

    grenzwert = 2 if len(leitern) >= 12 else 1
    kanten = [{"von": f"{a[0]}:{a[1]}", "nach": f"{b[0]}:{b[1]}", "direkt": n, "indirekt": indirekt[(a, b)]}
              for (a, b), n in direkt.most_common() if n >= grenzwert]
    genutzt = {k["von"] for k in kanten} | {k["nach"] for k in kanten}
    hvm_knoten = [{"id": f"{s}:{c}", "stufe": s, "code": c, "nennungen": n, "personen": len(personen[(s, c)])}
                  for (s, c), n in knoten.most_common() if f"{s}:{c}" in genutzt]

    def rangliste(stufe):
        return [{"code": c, "nennungen": n, "personen": len(personen[(s, c)])}
                for (s, c), n in knoten.most_common() if s == stufe]

    ketten = Counter(" → ".join(c for _, c in l["kette"]) for l in leitern)
    return {
        "anzahl_leitern": len(leitern),
        "grenzwert_hvm": grenzwert,
        "hvm": {"knoten": hvm_knoten, "kanten": kanten},
        "attribute": rangliste("A"),
        "funktionale_nutzen": rangliste("FK"),
        "emotionale_nutzen": rangliste("PK"),
        "werte": rangliste("W"),
        "haeufigste_ketten": [{"kette": k, "anzahl": n} for k, n in ketten.most_common(5)],
        "implikationsmatrix": [{"von": f"{a[0]}:{a[1]}", "nach": f"{b[0]}:{b[1]}", "direkt": direkt[(a, b)],
                                "indirekt": indirekt[(a, b)]} for (a, b) in sorted(set(direkt) | set(indirekt))],
    }


# ---------------------------------------------------------------- Analogien & Teilnehmende

def zaehle(werte):
    anzeige, zaehler = {}, Counter()
    for w in werte:
        w = text(w)
        if w:
            schluessel = w.lower()
            anzeige.setdefault(schluessel, w)
            zaehler[schluessel] += 1
    return [{"antwort": anzeige[s], "anzahl": n} for s, n in zaehler.most_common()]


def werte_analogien_aus(df):
    if df.empty:
        return None
    erg = {}
    for name, (col, grund) in {"mensch": (1, 2), "promi": (3, 4), "tier": (5, 6), "auto": (7, 8)}.items():
        erg[name] = {"haeufigkeiten": zaehle(df.iloc[:, col]),
                     "begruendungen": [{"antwort": text(a), "warum": text(w)}
                                       for a, w in zip(df.iloc[:, col], df.iloc[:, grund]) if text(a)]}
    erg["adjektive"] = zaehle(pd.concat([df.iloc[:, 9], df.iloc[:, 10], df.iloc[:, 11]]))
    erg["gefuehle"] = zaehle(df.iloc[:, 12])
    return erg


def werte_teilnehmende_aus(df):
    if df.empty:
        return None
    spalten = {"altersgruppe": 4, "geschlecht": 5, "wohnort": 6, "taetigkeit": 7,
               "snocks_bekannt": 8, "snocks_gekauft": 9, "kaufkanal_snocks": 10}
    erg = {name: zaehle(df.iloc[:, i]) for name, i in spalten.items()}
    erg["plattformen"] = zaehle(pd.concat([df.iloc[:, 12], df.iloc[:, 13], df.iloc[:, 14]]))
    erg["ohne_einverstaendnis"] = int((df.iloc[:, 3].astype(str).str.strip().str.lower() == "nein").sum())
    return erg


# ---------------------------------------------------------------- Ausgabe

def schreibe_markdown(e, pfad):
    z = [f"# Auswertung der Interviews – Fallstudie 1 SNOCKS",
         "", f"Automatisch erzeugt von `auswertung/auswertung.py` am {e['meta']['erstellt']} "
             f"aus `{e['meta']['quelle']}`.", "",
         f"**Interviews:** {e['meta']['interviews']} · **Konstrukte:** {e['meta']['konstrukte']} · "
         f"**Leitern:** {e['meta']['leitern']}", ""]
    if e["meta"]["hinweise"]:
        z += ["**Hinweise:**", *[f"- {h}" for h in e["meta"]["hinweise"]], ""]
    g = e.get("grid")
    if g:
        z += ["## Repertory Grid", "",
              "Werte = mittlere Bewertung, so gedreht, dass **5 = bevorzugter Pol** (1 = Gegenpol).", "",
              "| Kategorie | n | Wichtigkeit | " + " | ".join(ELEMENTE) + " | Differenzierung SNOCKS |",
              "|---|---|---|" + "---|" * len(ELEMENTE) + "---|"]
        for k in g["kategorien"]:
            z.append(f"| {k['kategorie']} | {k['anzahl']} | {k['wichtigkeit_punkte']} | "
                     + " | ".join(f"{k['werte'][el]:.1f}" for el in ELEMENTE) + f" | {k['differenzierung']:+.2f} |")
        z += ["", "### Abgeleitete Markeneigenschaften (Markenattribute)", ""]
        z += [f"{i}. **{m['kategorie']}** – SNOCKS {m['snocks']:.1f}/5, Differenzierung {m['differenzierung']:+.2f}, "
              f"Beispiele: {', '.join(m['beispiele'])}" for i, m in enumerate(g["markeneigenschaften"], 1)] or ["(noch keine)"]
        z += ["", "### Ähnlichkeit zu SNOCKS (mittlere Abweichung, 0 = gleich)", "",
              *[f"- {el}: {d:.2f}" for el, d in g["distanz_zu_snocks"].items()], ""]
    lad = e.get("laddering")
    if lad:
        z += ["## Laddering (Means-End-Chains)", "",
              f"HVM-Grenzwert: Verbindungen mit ≥ {lad['grenzwert_hvm']} direkten Nennungen.", ""]
        for titel, key in [("Attribute", "attribute"), ("Funktionale Nutzen", "funktionale_nutzen"),
                           ("Emotionale / psychosoziale Nutzen", "emotionale_nutzen"), ("Werte", "werte")]:
            z += [f"**{titel}:** " + ", ".join(f"{x['code']} ({x['nennungen']})" for x in lad[key][:6]), ""]
        z += ["**Häufigste Ketten:**", *[f"- {k['kette']} ({k['anzahl']}×)" for k in lad["haeufigste_ketten"]], ""]
    an = e.get("analogien")
    if an:
        z += ["## Analogien", ""]
        for name in ("mensch", "promi", "tier", "auto"):
            z.append(f"- **{name.capitalize()}:** " + ", ".join(f"{h['antwort']} ({h['anzahl']})" for h in an[name]["haeufigkeiten"][:5]))
        z += [f"- **Adjektive:** " + ", ".join(f"{h['antwort']} ({h['anzahl']})" for h in an["adjektive"][:8]),
              f"- **Gefühle:** " + ", ".join(f"{h['antwort']} ({h['anzahl']})" for h in an["gefuehle"][:5]), ""]
    pfad.write_text("\n".join(z) + "\n", encoding="utf-8")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--eingabe", default=HIER.parent / "daten" / "Erfassung_Interviews.xlsx", type=Path)
    ap.add_argument("--ausgabe", default=HIER / "ergebnisse", type=Path)
    ap.add_argument("--js", default=HIER.parent / "praesentation" / "data" / "ergebnisse.js", type=Path)
    a = ap.parse_args()

    hinweise = []
    teil = lies_blatt(a.eingabe, "Teilnehmende")
    grid_df = lies_blatt(a.eingabe, "Grid")
    lad_df = lies_blatt(a.eingabe, "Laddering")
    ana_df = lies_blatt(a.eingabe, "Analogien")

    grid = werte_grid_aus(grid_df, hinweise)
    lad = werte_laddering_aus(lad_df)
    ids = set(teil.iloc[:, 0]) | set(grid_df.iloc[:, 0]) | set(lad_df.iloc[:, 0]) | set(ana_df.iloc[:, 0])
    ergebnisse = {
        "meta": {
            "erstellt": datetime.now(ZoneInfo("Europe/Berlin")).strftime("%d.%m.%Y, %H:%M Uhr"),
            "quelle": a.eingabe.name,
            "interviews": len(ids),
            "konstrukte": grid["anzahl_konstrukte"] if grid else 0,
            "leitern": lad["anzahl_leitern"] if lad else 0,
            "hinweise": hinweise,
        },
        "teilnehmende": werte_teilnehmende_aus(teil),
        "grid": grid,
        "laddering": lad,
        "analogien": werte_analogien_aus(ana_df),
    }

    a.ausgabe.mkdir(parents=True, exist_ok=True)
    (a.ausgabe / "ergebnisse.json").write_text(json.dumps(ergebnisse, ensure_ascii=False, indent=2), encoding="utf-8")
    schreibe_markdown(ergebnisse, a.ausgabe / "ERGEBNISSE.md")
    if grid:
        pd.DataFrame(grid["heatmap"]["werte"], index=grid["heatmap"]["zeilen"],
                     columns=grid["heatmap"]["spalten"]).to_csv(a.ausgabe / "grid_heatmap.csv")
    if lad:
        pd.DataFrame(lad["implikationsmatrix"]).to_csv(a.ausgabe / "implikationsmatrix.csv", index=False)
    a.js.parent.mkdir(parents=True, exist_ok=True)
    a.js.write_text("// Automatisch erzeugt von fallstudie-1-snocks/auswertung/auswertung.py – nicht von Hand bearbeiten\n"
                    "window.ERGEBNISSE = " + json.dumps(ergebnisse, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"{ergebnisse['meta']['interviews']} Interviews, {ergebnisse['meta']['konstrukte']} Konstrukte, "
          f"{ergebnisse['meta']['leitern']} Leitern → {a.ausgabe}, {a.js}")
    for h in hinweise:
        print("Hinweis:", h)


if __name__ == "__main__":
    main()
