#!/usr/bin/env bash
# Publish each lab as its own public GitHub repo under Rumit-Varsani.
# Requires: gh auth login  (or GITHUB_TOKEN) + git
set -euo pipefail

OWNER="${GITHUB_OWNER:-Rumit-Varsani}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LABS_DIR="$ROOT/labs"

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: https://cli.github.com/"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Run: gh auth login"
  exit 1
fi

for lab in network-recon-toolkit soc-auth-log-analyzer linux-hardening-checklist pcap-threat-hunt-lab; do
  src="$LABS_DIR/$lab"
  tmp="$(mktemp -d)"
  echo "=== Publishing $lab ==="
  cp -R "$src/." "$tmp/"
  cd "$tmp"
  git init -b main
  git add .
  git commit -m "Initial commit: $lab portfolio lab by Rumit Varsani"
  if gh repo view "$OWNER/$lab" >/dev/null 2>&1; then
    echo "Repo exists — pushing updates"
  else
    gh repo create "$OWNER/$lab" --public --source=. --remote=origin --description "Cybersecurity lab project by Rumit Varsani"
  fi
  git remote remove origin 2>/dev/null || true
  git remote add origin "https://github.com/$OWNER/$lab.git"
  git push -u origin main --force
  echo "Live: https://github.com/$OWNER/$lab"
  cd "$ROOT"
  rm -rf "$tmp"
done

echo "All labs published."
