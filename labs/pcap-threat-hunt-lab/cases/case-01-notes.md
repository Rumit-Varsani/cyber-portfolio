# Case 01 — SSH noise after port probes

**Date:** 2026-07-20  
**Severity:** Medium  
**Environment:** Lab capture only  

## Summary

Lab traffic showed repeated failed SSH authentication attempts from one external IP after short probing of common ports.

## Evidence

- SYN activity toward ports 22/80/443
- Failed password events in auth logs for the same source
- No successful elevated access observed in the sample window

## Actions taken (lab)

- Block source IP on lab firewall
- Prefer key-based SSH in lab VM config
- Keep monitoring for multi-user password attempts

## Status

Closed — lab exercise.
