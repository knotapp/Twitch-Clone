#!/usr/bin/env bash
# Idempotently create the local env file the Alloy compose stack expects.
# Existing non-blank, non-placeholder values are preserved.
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
env_file="$repo_root/.env.local"

touch "$env_file"

get_value() {
  # prints current value for key from env file (may be empty)
  sed -n "s/^$1=//p" "$env_file" | tail -n 1
}

is_placeholder() {
  case "$1" in
    "" | "changeme" | "replace-me" | "your-value-here" | "TODO") return 0 ;;
    *) return 1 ;;
  esac
}

set_value() {
  local key="$1" value="$2"
  if grep -q "^${key}=" "$env_file"; then
    local current
    current="$(get_value "$key")"
    if is_placeholder "$current"; then
      local tmp
      tmp="$(mktemp)"
      grep -v "^${key}=" "$env_file" > "$tmp" || true
      printf '%s=%s\n' "$key" "$value" >> "$tmp"
      mv "$tmp" "$env_file"
      echo "  set $key (was blank/placeholder)"
    else
      echo "  kept existing $key"
    fi
  else
    printf '%s=%s\n' "$key" "$value" >> "$env_file"
    echo "  set $key"
  fi
}

echo "Populating $env_file"
set_value "PORT" "${PORT:-3000}"
set_value "IS_ALLOY" "${IS_ALLOY:-false}"
set_value "NEXT_TELEMETRY_DISABLED" "1"
set_value "SESSION_SECRET" "${SESSION_SECRET:-$(openssl rand -hex 32)}"
echo "Done."
