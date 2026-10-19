#!/usr/bin/env bash
# Prompt-Logger für die Fallstudien-Dokumentation ("Dokumentieren Sie Ihre Prompts").
# Wird von Claude Code als Hook aufgerufen (siehe .claude/settings.json) und schreibt
# mit Zeitstempel (deutsche Zeit) nach docs/prompt-log/auto/JJJJ-MM-TT.md:
#   - jeden Prompt der Gruppe an Claude            (UserPromptSubmit)
#   - jeden Auftrag an einen Unteragenten           (PreToolUse  Agent|Task)
#   - jede Antwort eines Unteragenten               (PostToolUse Agent|Task, SubagentStop)
#   - jede Websuche / jeden Webabruf                (PreToolUse  WebSearch|WebFetch)
# Gibt nichts auf stdout aus (bei UserPromptSubmit würde stdout sonst im Kontext landen).

input=$(cat)
root="${CLAUDE_PROJECT_DIR:-$(pwd)}"
dir="$root/docs/prompt-log/auto"
mkdir -p "$dir" || exit 0

export TZ=Europe/Berlin
file="$dir/$(date '+%Y-%m-%d').md"
ts=$(date '+%d.%m.%Y, %H:%M:%S Uhr')

if [ ! -f "$file" ]; then
  printf '# Automatisches Prompt-Log – %s\n\n> Automatisch erzeugt durch `.claude/hooks/prompt-logger.sh` (Zeiten: deutsche Zeit).\n> Kommentierte Fassung mit Begründungen: [PROMPT-LOG.md](../PROMPT-LOG.md)\n\n' \
    "$(date '+%d.%m.%Y')" > "$file"
fi

field() { jq -r "$1 // empty" <<<"$input" 2>/dev/null; }

event=$(field '.hook_event_name')
tool=$(field '.tool_name')
# Tool-Aufrufe innerhalb eines Unteragenten tragen eine agent_id
who="🤖 Haupt-Agent"
[ -n "$(field '.agent_id')" ] && who="🧩 Unteragent"

# Schreibt einen Abschnitt in einem Zug, damit parallele Hooks sich nicht vermischen
block() {
  printf '## %s · %s\n\n````text\n%s\n````\n\n' "$ts" "$1" "$2" >> "$file"
}
line() {
  printf -- '- %s · %s\n\n' "$ts" "$1" >> "$file"
}

case "$event:$tool" in
  UserPromptSubmit:*)
    block "👤 → 🤖 Prompt der Gruppe an Claude" "$(field '.prompt')"
    ;;
  PreToolUse:Agent|PreToolUse:Task)
    block "$who → 🧩 Auftrag an Unteragent: $(field '.tool_input.description') ($(field '.tool_input.subagent_type'))" \
      "$(field '.tool_input.prompt')"
    ;;
  PostToolUse:Agent|PostToolUse:Task)
    text=$(jq -r '.tool_response
      | if type == "string" then .
        elif type == "object" and has("content") then ([.content[]? | .text? // empty] | join("\n"))
        else tojson end' <<<"$input" 2>/dev/null)
    if grep -q 'agent launched' <<<"$text"; then
      line "🧩 Unteragent „$(field '.tool_input.description')“ läuft im Hintergrund – Antwort folgt beim Abschluss (SubagentStop)."
    else
      block "🧩 → 🤖 Antwort des Unteragenten: $(field '.tool_input.description')" "$text"
    fi
    ;;
  SubagentStop:*)
    text=$(field '.last_assistant_message')
    transcript=$(field '.agent_transcript_path')
    if [ -z "$text" ] && [ -f "$transcript" ]; then
      text=$(jq -rs '[.[] | select(.type == "assistant") | .message.content[]?
               | select(.type == "text") | .text] | last // empty' "$transcript" 2>/dev/null)
    fi
    block "🧩 → 🤖 Abschlussbericht Unteragent ($(field '.agent_type'))" "${text:-(kein Text übermittelt)}"
    ;;
  PreToolUse:WebSearch)
    line "🔎 $who · Websuche: \`$(field '.tool_input.query')\`"
    ;;
  PreToolUse:WebFetch)
    line "🌐 $who · Webabruf: <$(field '.tool_input.url')> – Frage: „$(field '.tool_input.prompt')“"
    ;;
esac
exit 0
