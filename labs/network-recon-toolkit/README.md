# Network Recon Toolkit

Educational network reconnaissance toolkit for **authorized labs only**.

Built for entry / intermediate cybersecurity & networking roles in Germany  
(e.g. Junior Network Security, IT Security Specialist, SOC Analyst trainee).

## Features

- Host discovery (ICMP / TCP connect checks)
- Port scanning with service name hints
- Banner grabbing (HTTP / SSH style probes)
- JSON report export for documentation
- Strict **authorization banner** — refuse to run without explicit opt-in

## Why this matters for recruiters

Demonstrates:

- TCP/IP fundamentals and service awareness
- Safe recon methodology (scope, consent, documentation)
- Python for security automation
- Clear operational reporting

## Quick start

```bash
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Lab only — you must own / have written permission for the target
python recon.py --target 127.0.0.1 --ports 22,80,443,8080 --i-own-this-target
```

## Ethical use

Use **only** on systems you own or have written authorization to test.  
Unauthorized scanning is illegal in Germany (§ 202a–202c StGB and related law).

## Project structure

```
recon.py              # CLI entrypoint
modules/
  discovery.py        # Host up/down checks
  ports.py            # Port scan + banners
  report.py           # JSON report writer
sample_report.json    # Example output
```

## Author

**Rumit Varsani** — Berlin, Germany  
GitHub: [Rumit-Varsani](https://github.com/Rumit-Varsani)
