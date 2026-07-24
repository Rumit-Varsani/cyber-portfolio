# Wireshark / tshark filters

```
# DNS only
dns

# Suspicious DNS long queries (heuristic)
dns.qry.name.len > 40

# HTTP requests
http.request

# TLS handshakes
tls.handshake.type == 1

# SYN scan-ish
tcp.flags.syn == 1 && tcp.flags.ack == 0

# Traffic to/from one host
ip.addr == 10.0.0.5

# Failed TCP (RST)
tcp.flags.reset == 1
```

tshark examples:

```bash
tshark -r sample.pcap -q -z conv,ip
tshark -r sample.pcap -Y "dns" -T fields -e dns.qry.name | sort | uniq -c | sort -nr | head
```
