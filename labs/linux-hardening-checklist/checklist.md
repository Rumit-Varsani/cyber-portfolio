# Linux Hardening Checklist (Lab)

## Identity & access
- [ ] Root SSH login disabled (`PermitRootLogin no`)
- [ ] Password auth reviewed / key-based preferred
- [ ] Sudo group membership reviewed
- [ ] Unused local accounts disabled

## Network
- [ ] Host firewall enabled (ufw / firewalld / nftables)
- [ ] Only required ports exposed
- [ ] Outdated listeners documented

## Patch & software
- [ ] Automatic security updates configured or scheduled
- [ ] Unneeded packages removed
- [ ] Package sources trusted

## Logging & monitoring
- [ ] journald / syslog active
- [ ] Failed auth visible in logs
- [ ] Disk space for logs monitored

## System integrity
- [ ] Secure boot / disk encryption noted if applicable
- [ ] World-writable sensitive paths reviewed
- [ ] Cron jobs reviewed

## Process notes for tickets
Document: asset name, OS version, owner, residual risk, next review date.
