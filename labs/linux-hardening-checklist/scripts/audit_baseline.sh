#!/usr/bin/env bash
# Non-destructive Linux baseline audit for labs.
set -euo pipefail

echo "=== Linux Hardening Audit ==="
echo "Host: $(hostname)"
echo "Date: $(date -Is)"
echo "Kernel: $(uname -r)"
echo

echo "--- Users with shells ---"
getent passwd | awk -F: '$7 !~ /nologin|false/ {print $1,$7}' || true
echo

echo "--- Listening ports (if ss available) ---"
if command -v ss >/dev/null 2>&1; then
  ss -tuln || true
else
  echo "ss not found"
fi
echo

echo "--- SSH config highlights ---"
if [[ -f /etc/ssh/sshd_config ]]; then
  grep -E '^(PermitRootLogin|PasswordAuthentication|Port|PubkeyAuthentication)' /etc/ssh/sshd_config || true
else
  echo "sshd_config not found (not Linux server or no sshd)"
fi
echo

echo "--- Firewall tools ---"
for t in ufw firewall-cmd nft iptables; do
  if command -v "$t" >/dev/null 2>&1; then
    echo "found: $t"
  fi
done
echo

echo "--- Failed logins (last 20 if available) ---"
if command -v lastb >/dev/null 2>&1; then
  lastb 2>/dev/null | head -20 || echo "no lastb data / need root"
else
  echo "lastb not available"
fi

echo
echo "Audit complete (read-only)."
