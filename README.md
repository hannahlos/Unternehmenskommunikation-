# Unternehmenskommunikation – Fallstudien zur Marke SNOCKS

Gruppenarbeit im Modul *Unternehmenskommunikation* (Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern), WS 2026/27.
Unsere Marke: **SNOCKS** (Socken, Unterwäsche & Basics, Mannheim).

| Fallstudie | Thema | Termin | Status |
|---|---|---|---|
| **1** | Brand Persona & Markenidentität (Markensteuerrad nach Esch) | **26.10.2026** | 🟡 Desk Research ✅ · Plan ✅ · Interviews offen |
| 2 | Customer Journey & Blog-Beitrag | 09.11.2026 | ⚪ offen |
| 3 | Instagram-Post & Eye-Tracking | 16.11.2026 | ⚪ offen |

## Struktur

```
├── docs/
│   ├── aufgabenstellung/        Folien 57–60 (Screenshots + Transkription, Bewertungskriterien)
│   └── prompt-log/
│       ├── PROMPT-LOG.md        ⭐ kommentiertes Log aller KI-Prompts & Unteragenten-Gespräche (Backup)
│       └── auto/                automatisch mitgeschriebenes Roh-Log (ein File pro Tag)
├── fallstudie-1-snocks/
│   ├── research/                Desk-Research-Berichte der Unteragenten A, B, C (mit Quellen)
│   └── PLAN-Praesentation.md    Plan für die 15-Minuten-Präsentation am 26.10.
└── .claude/
    ├── settings.json            Hook-Konfiguration für Claude Code
    └── hooks/prompt-logger.sh   protokolliert Prompts, Subagent-Aufträge & Websuchen automatisch
```

## KI-Dokumentation („Dokumentieren Sie Ihre Prompts“)

Die Aufgabenstellung verlangt, dass alle KI-Prompts dokumentiert werden. Dafür gibt es zwei Ebenen:

1. **[`docs/prompt-log/PROMPT-LOG.md`](docs/prompt-log/PROMPT-LOG.md)** – die kommentierte Fassung: jeder Prompt wörtlich, mit Datum/Uhrzeit, Begründung und Link zum Ergebnis. Diese Datei ist die Grundlage für die Backup-Folien.
2. **[`docs/prompt-log/auto/`](docs/prompt-log/auto/)** – das Roh-Log. Sobald jemand mit Claude Code in diesem Repository arbeitet, schreibt der Hook `.claude/hooks/prompt-logger.sh` automatisch mit:
   - jeden Prompt an Claude,
   - jeden Auftrag an einen Unteragenten und dessen Antwort,
   - jede Websuche und jeden Webabruf (auch die der Unteragenten).

Wer andere KI-Tools nutzt (ChatGPT, Gemini, Perplexity, Bildgeneratoren …), trägt die Prompts bitte mit der Vorlage am Ende von `PROMPT-LOG.md` nach.
