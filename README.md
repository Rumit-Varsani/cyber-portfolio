# Rumit Varsani — Cybersecurity Portfolio

Terminal-themed portfolio focused on **Cybersecurity & Networking** for the German job market.

- **Default language: German (DE)** with **English (EN) toggle**
- IT Support foundation → Security/Networking career story
- MSc Data Analytics framed as transferable for logs / SOC analytics
- 4 hands-on labs under `labs/`
- Certificates with public verification links

## Quick start

```bash
cd ~/cyber-portfolio
npm install
npm run dev
```

Open http://localhost:3000 — site loads in **German** first. Use **DE | EN** in the navbar.

## Publish lab repos to GitHub

GitHub write was not available from the automated environment. Labs live in:

```
labs/network-recon-toolkit
labs/soc-auth-log-analyzer
labs/linux-hardening-checklist
labs/pcap-threat-hunt-lab
```

Publish each as a public repo under `Rumit-Varsani`:

```bash
# once
gh auth login

# publish all 4 labs
./scripts/publish-labs-to-github.sh
```

After that, portfolio cards linking to:

- https://github.com/Rumit-Varsani/network-recon-toolkit
- https://github.com/Rumit-Varsani/soc-auth-log-analyzer
- https://github.com/Rumit-Varsani/linux-hardening-checklist
- https://github.com/Rumit-Varsani/pcap-threat-hunt-lab

will resolve publicly.

## Deploy to Vercel

```bash
npx vercel
```

Or push this folder to GitHub and import in Vercel (connect to your existing project if you want to replace the current site).

## Edit content

All DE/EN copy lives in:

`src/i18n/translations.ts`

## Stack

Next.js · TypeScript · Tailwind CSS · App Router
