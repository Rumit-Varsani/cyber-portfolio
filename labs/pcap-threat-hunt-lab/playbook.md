# Threat Hunt Playbook (PCAP)

## 1. Scope
- Asset / capture source:
- Time window:
- Question to answer: (exfil? malware C2? misconfig?)

## 2. Baseline
- Top talkers (Conversations → IPv4)
- Protocol mix (Statistics → Protocol Hierarchy)
- Unexpected ports?

## 3. Hunt pivots
1. New external destinations
2. DNS queries to rare domains
3. Long connections with low packet volume
4. Cleartext credentials (HTTP / FTP / Telnet)

## 4. Evidence
- Packet numbers / stream index
- Screenshots or exported objects
- IOC list (IPs, domains, URIs)

## 5. Outcome
- Benign / suspicious / malicious
- Recommended action
- Residual risk
