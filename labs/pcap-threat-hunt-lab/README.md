# PCAP Threat Hunt Lab

Notes and helpers for reading packet captures with Wireshark / tshark.

## Contents

| Path | Purpose |
|------|---------|
| `playbook.md` | Investigation workflow |
| `filters.md` | Common display / CLI filters |
| `tools/pcap_stats.py` | Quick tshark summary wrapper |
| `cases/case-01-notes.md` | Example case note template filled with lab data |

## Suggested workflow

1. Capture traffic you are allowed to inspect, or use a legal lab PCAP.
2. Open in Wireshark → Protocol Hierarchy and Conversations.
3. Apply filters from `filters.md`.
4. Record findings with the case note structure.
5. Optional: `python3 tools/pcap_stats.py --summary capture.pcap` (requires `tshark`).

## Notes

This is study material for packet analysis practice, not a detection product.
