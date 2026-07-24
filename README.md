# Rumit Varsani — Cyber Portfolio

Terminal-themed personal portfolio focused on **cybersecurity** and **networking**.

Built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Ready to deploy on **Vercel**.

## Features

- Dark terminal / hacker aesthetic (scanlines, green glow, mono UI)
- Sections: Home, About, Skills, Projects/Labs, Experience, Blog, Contact
- Blog writeups with dedicated routes (`/blog`, `/blog/[slug]`)
- Contact form opens your mail client (`mailto:`)
- Content centralized in `src/data/content.ts` — edit once, update everywhere

## Quick start

```bash
cd ~/cyber-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Local development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | ESLint                   |

## Customize your content

Edit **`src/data/content.ts`**:

- `site` — name, email, LinkedIn, tagline
- `about`, `skills`, `projects`
- `experience`, `education`, `certifications`
- `blogPosts` — writeups (slug, title, body)

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
cd ~/cyber-portfolio
vercel
```

### Option B — GitHub + Vercel dashboard

1. Create a GitHub repo and push this project
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy

If you already have a Vercel project for your site, either:

- Point that project’s Git root to this repo, or
- Replace the old project files with this codebase and redeploy

## Project structure

```
src/
  app/                 # App Router pages (home, blog, 404)
  components/          # UI sections (Hero, Skills, etc.)
  data/content.ts      # All portfolio copy & data
public/                # Static assets
```

## Notes

- Skill percentages and lab descriptions are starting points — update them as you grow
- Contact form uses `mailto:` (no backend required). Swap in Formspree / Resend later if you want server-side delivery
- GitHub URL in content may need correcting if your handle differs

## License

Personal portfolio — free to adapt for your own use.
