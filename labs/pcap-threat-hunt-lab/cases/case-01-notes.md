# Case 01 — Suspicious auth noise after scan

**Analyst:** Rumit Varsani  
**Date:** 2026-07-20  
**Severity:** Medium  

## Summary
Lab capture showed repeated failed SSH authentication attempts from a single external IP following a short port scan pattern.

## Evidence
- Multiple SYN packets to ports 22/80/443
- Failed password events correlated in auth log analyzer
- No successful privilege escalation observed in sample window

## Action
- Block source IP on lab firewall
- Enforce key-only SSH
- Continue monitoring for password spraying

## Status
Closed — lab exercise complete.
