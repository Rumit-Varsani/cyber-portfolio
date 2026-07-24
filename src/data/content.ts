export const site = {
  name: "Rumit Varsani",
  handle: "rumit@ops",
  title: "Cybersecurity & Networking Enthusiast",
  tagline:
    "Building secure systems, mapping networks, and turning curiosity into hands-on labs.",
  location: "Berlin, Germany",
  email: "varsanirumit@gmail.com",
  linkedin: "https://www.linkedin.com/in/rumit-varsani",
  github: "https://github.com/rumitvarsani",
  resumeUrl: "#",
};

export const about = {
  paragraphs: [
    "I'm Rumit Varsani — a builder based in Berlin with a foundation in full-stack development and data analytics, now focused on cybersecurity and computer networking.",
    "I approach security the same way I approach systems: map the attack surface, understand the protocol, then harden the path. Right now I'm deepening skills in network fundamentals, defensive security, threat analysis, and practical lab work.",
    "My background in Unity, Python, SQL, and analytics gives me a systems mindset — useful for log analysis, automation, dashboards, and understanding how software actually talks across the wire.",
  ],
  focusAreas: [
    "Network protocols & packet analysis",
    "Defensive security & SOC fundamentals",
    "Linux hardening & homelab ops",
    "Scripting for security automation",
  ],
};

export const skills = {
  security: [
    { name: "Network Security Fundamentals", level: 70 },
    { name: "Wireshark / Packet Analysis", level: 65 },
    { name: "Linux Administration", level: 75 },
    { name: "Firewalls & Access Control", level: 60 },
    { name: "SIEM Concepts / Log Analysis", level: 55 },
    { name: "OWASP Top 10 Awareness", level: 60 },
  ],
  networking: [
    { name: "TCP/IP & OSI Model", level: 80 },
    { name: "Routing & Switching Concepts", level: 65 },
    { name: "DNS / DHCP / HTTP(S)", level: 75 },
    { name: "VPN & Remote Access", level: 55 },
    { name: "Subnetting & VLANs", level: 70 },
    { name: "Network Troubleshooting", level: 70 },
  ],
  engineering: [
    { name: "Python", level: 80 },
    { name: "SQL", level: 85 },
    { name: "Bash / Shell", level: 65 },
    { name: "Power BI / Tableau", level: 80 },
    { name: "Git / Linux CLI", level: 75 },
    { name: "Unity / C#", level: 70 },
  ],
  tools: [
    "Wireshark",
    "Nmap",
    "tcpdump",
    "Burp Suite (learning)",
    "VirtualBox / VMs",
    "Docker",
    "Git",
    "VS Code",
    "Power BI",
    "MySQL",
    "Linux (Ubuntu/Kali)",
    "Python",
  ],
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  description: string;
  stack: string[];
  highlights: string[];
  status: "lab" | "project" | "writeup";
  link?: string;
};

export const projects: Project[] = [
  {
    id: "homelab-network",
    title: "Homelab Network Lab",
    tag: "networking",
    description:
      "Personal multi-VM lab for routing, VLAN segmentation, and service isolation — practicing secure network design end to end.",
    stack: ["VirtualBox", "Linux", "pfSense", "Wireshark"],
    highlights: [
      "Segmented LAN with firewall rules between zones",
      "DNS/DHCP self-hosted services",
      "Packet capture workflows for troubleshooting",
    ],
    status: "lab",
  },
  {
    id: "packet-forensics",
    title: "Packet Forensics Playbook",
    tag: "security",
    description:
      "Structured analysis of PCAP samples: HTTP exfil patterns, DNS tunneling signals, and baseline vs anomaly traffic.",
    stack: ["Wireshark", "tcpdump", "tshark", "Python"],
    highlights: [
      "Custom display filters for suspicious flows",
      "Exported IO graphs and conversation summaries",
      "Python helpers for bulk PCAP stats",
    ],
    status: "lab",
  },
  {
    id: "sec-dashboard",
    title: "Security Metrics Dashboard",
    tag: "ops",
    description:
      "Analytics-style dashboard concept for failed logins, port scans, and service health — bridging data skills into SOC visibility.",
    stack: ["Python", "SQL", "Power BI", "Log data"],
    highlights: [
      "Normalized auth and network event models",
      "KPI views for top talkers and error rates",
      "Reusable DAX-style metrics for security reporting",
    ],
    status: "project",
  },
  {
    id: "sales-insight",
    title: "Sales Insight — Power BI",
    tag: "data",
    description:
      "End-to-end analytics pipeline: Atliq hardware data into MySQL, cleaning in Power Query, multi-view BI dashboards.",
    stack: ["MySQL", "Power Query", "Power BI", "DAX"],
    highlights: [
      "Finance, sales, marketing & supply chain views",
      "Real-time style data loading patterns",
      "SQL + DAX performance practices",
    ],
    status: "project",
  },
  {
    id: "stock-lstm",
    title: "Stock Price Prediction",
    tag: "ml",
    description:
      "Pulled historical market data via Tiingo API and trained an LSTM model for price movement experiments.",
    stack: ["Python", "TensorFlow", "LSTM", "Excel"],
    highlights: [
      "API-driven data ingestion",
      "Feature prep for time-series modeling",
      "~60% directional accuracy baseline",
    ],
    status: "project",
  },
  {
    id: "net-automation",
    title: "Network Health Scripts",
    tag: "automation",
    description:
      "Python/Bash utilities for host discovery, port checks, and simple uptime alerts — automation for day-to-day network ops.",
    stack: ["Python", "Bash", "Nmap", "Cron"],
    highlights: [
      "Scheduled reachability checks",
      "JSON reports for later SIEM-style ingestion",
      "CLI-first design for homelab ops",
    ],
    status: "lab",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Unity Developer / Data Analyst",
    org: "Glorious Infotech",
    location: "India",
    period: "Previous role",
    bullets: [
      "Built interactive full-stack Unity experiences with a focus on performance and clean architecture.",
      "Analyzed product and business data to surface actionable insights for stakeholders.",
      "Collaborated across engineering and analytics workflows — useful foundation for security tooling and observability.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    degree: "MSc Data Analytics",
    school: "Berlin School of Business and Innovation",
    note: "Berlin, Germany",
  },
  {
    degree: "Bachelor of Computer Application",
    school: "Undergraduate studies",
  },
];

export const certifications = [
  {
    name: "CompTIA Network+ (in progress / planned)",
    focus: "Networking foundations",
  },
  {
    name: "CompTIA Security+ (planned)",
    focus: "Security fundamentals",
  },
  {
    name: "Hands-on labs: TryHackMe / HackTheBox (learning)",
    focus: "Practical cyber skills",
  },
];

export const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "German", level: "Elementary proficiency" },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "reading-the-wire-wireshark-basics",
    title: "Reading the Wire: Wireshark Basics for Defenders",
    date: "2026-06-12",
    tags: ["networking", "wireshark", "soc"],
    excerpt:
      "How I approach a PCAP: capture filters vs display filters, following TCP streams, and spotting odd DNS.",
    content: [
      "Packet analysis is one of the fastest ways to turn theory into intuition. When something feels off on a network, the wire still tells the truth.",
      "My workflow is simple: start broad, then constrain. First I look at Conversations and Protocol Hierarchy to see who is talking and with which protocols. Then I follow TCP streams for the interesting sessions.",
      "Display filters I keep handy: `dns`, `http.request`, `tcp.flags.syn == 1 && tcp.flags.ack == 0`, and `ip.addr == <host>`. Capture filters stay lean so the disk does not fill with noise.",
      "Next steps for me: building a small library of annotated PCAPs (normal web, failed auth, port scan noise) so anomalies jump out faster.",
    ],
  },
  {
    slug: "subnetting-without-panic",
    title: "Subnetting Without Panic",
    date: "2026-05-28",
    tags: ["networking", "fundamentals"],
    excerpt:
      "A practical cheat-sheet mindset for CIDR, host counts, and why VLANs change how you think about trust.",
    content: [
      "Subnetting stops being scary when you treat it as bit accounting. You are just deciding how many host bits you need, then carving the address space cleanly.",
      "I practice with real homelab ranges: management, servers, IoT, and guest. Each segment gets its own trust level and firewall policy — which is where networking meets security.",
      "VLANs are not security by themselves, but they make policy enforcement possible. Without segmentation, every host is one hop from every other host.",
      "If you are learning: calculate /24, /26, /28 by hand until you can do it in under a minute. Muscle memory matters in ops.",
    ],
  },
  {
    slug: "from-data-analytics-to-security-ops",
    title: "From Data Analytics to Security Ops",
    date: "2026-05-10",
    tags: ["career", "soc", "analytics"],
    excerpt:
      "Why SQL, dashboards, and clean pipelines transfer surprisingly well into defensive security work.",
    content: [
      "Security operations is full of data problems: noisy logs, missing context, and the need to turn events into decisions.",
      "Coming from Power BI, SQL, and Python, the muscle memory is familiar — normalize fields, join on keys, chart outliers, automate the boring parts.",
      "The shift is in the questions. Instead of 'what sold last quarter?' it becomes 'which hosts failed auth after midnight?' or 'which subnets suddenly talk to the internet on rare ports?'",
      "If you have an analytics background and want security: learn the domain language (MITRE, kill chain, network baselining), keep your SQL sharp, and build one dashboard that answers a real defensive question.",
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#blog", label: "blog" },
  { href: "#contact", label: "contact" },
];
