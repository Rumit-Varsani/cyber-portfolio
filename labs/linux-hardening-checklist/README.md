# Linux Hardening Checklist

> **Built by [Rumit Varsani](https://github.com/Rumit-Varsani)** · Berlin, Germany · Cybersecurity & Networking portfolio lab

> Repository: https://github.com/Rumit-Varsani/linux-hardening-checklist

Practical **CIS-inspired** Linux hardening checklist + Bash helpers for lab VMs.

Ideal talking points for German employers looking for Junior IT Security /
System hardening awareness (BSI-minded operations).

## What's included

| Item | Description |
|------|-------------|
| `checklist.md` | Human checklist for audit conversations |
| `scripts/audit_baseline.sh` | Non-destructive audit snapshot |
| `scripts/apply_lab_hardening.sh` | Lab-only hardening steps (opt-in) |
| `reports/` | Example audit output |

## Run audit (safe)

```bash
chmod +x scripts/*.sh
./scripts/audit_baseline.sh | tee reports/audit-$(date +%F).txt
```

## Lab hardening (VM only)

```bash
# Review first — do NOT run on production
sudo ./scripts/apply_lab_hardening.sh --i-am-on-a-lab-vm
```

## Topics covered

- SSH hardening checklist
- Unnecessary services
- Firewall presence (ufw/firewalld)
- Password & sudo hygiene
- Automatic updates awareness
- Logging / journald basics

## Author

**Rumit Varsani** · Berlin · [GitHub](https://github.com/Rumit-Varsani)