#!/usr/bin/env python3
"""Wrapper helpers around tshark for quick PCAP stats."""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
from pathlib import Path


def require_tshark() -> str:
    path = shutil.which("tshark")
    if not path:
        print("tshark not found. Install Wireshark CLI tools first.", file=sys.stderr)
        raise SystemExit(1)
    return path


def run(cmd: list[str]) -> str:
    return subprocess.check_output(cmd, text=True, stderr=subprocess.STDOUT)


def main() -> int:
    parser = argparse.ArgumentParser(description="PCAP quick stats via tshark")
    parser.add_argument("--summary", type=Path, required=True, help="Path to .pcap")
    args = parser.parse_args()
    tshark = require_tshark()
    pcap = str(args.summary)

    print("=== Protocol hierarchy ===")
    print(run([tshark, "-r", pcap, "-q", "-z", "io,phs"]))
    print("=== IP conversations ===")
    print(run([tshark, "-r", pcap, "-q", "-z", "conv,ip"]))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
