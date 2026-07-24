# SOC Auth Log Analyzer

Junior SOC / security monitoring style tool that parses authentication logs and
highlights **failed logins**, **brute-force patterns**, and top noisy sources.

## Skills demonstrated

- Log analysis mindset (SOC Analyst junior / IT Security Operations)
- Detection logic for authentication abuse
- Structured findings export (JSON / CSV) for tickets or SIEM practice
- Clean documentation — important for German enterprise environments

## Quick start

```bash
python3 analyzer.py --log samples/auth_sample.log --threshold 5 --out findings.json
python3 analyzer.py --log samples/auth_sample.log --csv findings.csv
```

## Sample detection rules

| Rule | Description |
|------|-------------|
| `failed_login` | Single failed authentication event |
| `brute_force_burst` | ≥ N failures from same source IP within window |
| `password_spray_hint` | Many usernames failing from one IP |

## Author

**Rumit Varsani** · Berlin · [GitHub](https://github.com/Rumit-Varsani)
