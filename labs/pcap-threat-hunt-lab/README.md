# PCAP Threat Hunt Lab

> **Built by [Rumit Varsani](https://github.com/Rumit-Varsani)** · Berlin, Germany · Cybersecurity & Networking portfolio lab

> Repository: https://github.com/Rumit-Varsani/pcap-threat-hunt-lab

Hands-on packet analysis playbook for junior defenders and network analysts.

## What you practice

- Wireshark / tshark display filters used in real investigations
- Following TCP streams and spotting suspicious DNS
- Documenting findings like a ticket / case note
- Lightweight Python stats over PCAP summaries

## Contents

| Path | Purpose |
|------|---------|
| `playbook.md` | Step-by-step hunt workflow |
| `filters.md` | Ready-to-use Wireshark filters |
| `tools/pcap_stats.py` | Quick conversation / protocol summary helper |
| `cases/case-01-notes.md` | Example investigation notes |

## Suggested lab workflow

1. Capture or download a **legal sample PCAP** (e.g. your own lab traffic).
2. Open in Wireshark → Protocol Hierarchy + Conversations.
3. Apply filters from `filters.md`.
4. Write findings using the case note template.
5. Optional: `python3 tools/pcap_stats.py --summary sample.pcap` (requires `tshark`).

## German market relevance

Network visibility + documentation is core for:

- Junior SOC Analyst
- Network Administrator (Security-aware)
- IT Security Specialist (m/w/d)
- Security Operations trainee programs

## Author

**Rumit Varsani** · Berlin · [GitHub](https://github.com/Rumit-Varsani)