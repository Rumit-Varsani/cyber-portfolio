# Linux Hardening Checklist

Practical checklist and Bash helpers for reviewing a Linux lab VM baseline.

## Contents

| Path | Description |
|------|-------------|
| `checklist.md` | Manual review checklist |
| `scripts/audit_baseline.sh` | Read-only audit snapshot |
| `scripts/apply_lab_hardening.sh` | Optional lab-only changes (opt-in) |
| `reports/example-audit.txt` | Example audit output |

## Audit (safe / read-only)

```bash
chmod +x scripts/*.sh
./scripts/audit_baseline.sh | tee reports/audit-$(date +%F).txt
```

## Lab hardening (disposable VM only)

```bash
# Review the script first. Do not run on production.
sudo ./scripts/apply_lab_hardening.sh --i-am-on-a-lab-vm
```

## Coverage

- SSH config checks
- Listening ports
- Firewall tooling presence
- Local interactive accounts
- Failed login visibility (when available)

## Disclaimer

Scripts are for learning and lab use. Validate every change for your environment before applying it.
