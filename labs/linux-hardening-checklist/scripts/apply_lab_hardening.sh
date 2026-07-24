#!/usr/bin/env bash
# Lab-only hardening helpers. Review every line before use.
set -euo pipefail

if [[ "${1:-}" != "--i-am-on-a-lab-vm" ]]; then
  echo "Refusing to change system. Pass --i-am-on-a-lab-vm if this is a disposable lab."
  exit 2
fi

if [[ $EUID -ne 0 ]]; then
  echo "Run with sudo on a lab VM."
  exit 1
fi

echo "[*] Lab hardening starting…"

if [[ -f /etc/ssh/sshd_config ]]; then
  cp /etc/ssh/sshd_config "/etc/ssh/sshd_config.bak.$(date +%s)"
  # Conservative lab defaults — operator must restart sshd manually
  if ! grep -q '^PermitRootLogin' /etc/ssh/sshd_config; then
    echo 'PermitRootLogin no' >> /etc/ssh/sshd_config
  else
    sed -i.bak 's/^#\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
  fi
  echo "[+] sshd_config updated (backup created). Restart sshd manually after review."
fi

if command -v ufw >/dev/null 2>&1; then
  ufw default deny incoming || true
  ufw default allow outgoing || true
  ufw allow OpenSSH || ufw allow 22/tcp || true
  echo "[+] ufw defaults prepared. Enable with: ufw enable"
fi

echo "[*] Done. Document residual risk in your ticket notes."
