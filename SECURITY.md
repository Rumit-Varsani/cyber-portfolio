# Security notes (portfolio site)

This is a public marketing site. Layers below **reduce common risk**; they do not make the site “unhackable.”

## In place

| Control | What it does |
|--------|----------------|
| **Security headers** | HSTS, `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy, Permissions-Policy, COOP/CORP |
| **CSP** | Restricts scripts/styles/connect targets; FormSubmit only for outbound form |
| **No `X-Powered-By`** | Less stack fingerprinting |
| **Probe blocking** | Edge middleware returns 404 for `/.env`, `/.git`, `wp-admin`, etc. |
| **Contact API** | Server-side validation, length limits, honeypot, rate limit (best-effort on Edge) |
| **Form not browser→FormSubmit direct** | Client posts only to `/api/contact` |
| **HTTPS** | Enforced by Vercel + HSTS |
| **security.txt** | `/.well-known/security.txt` for responsible disclosure |

## Your checklist after deploy

1. Open the site over **HTTPS** only (Vercel default).
2. Send one **test contact** message; confirm FormSubmit activation mail in Gmail once.
3. Optional: set Vercel env `CONTACT_EMAIL=varsanirumit@gmail.com` (default already this).
4. Optional: set `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app` for sitemap/canonical.

## Out of scope (static portfolio)

- Full WAF / DDoS beyond Vercel’s platform protections  
- App auth / secrets (none stored for browsing)  
- Guarantees against every probe (expect scanners on a cyber-themed site)

## Report issues

Email: varsanirumit@gmail.com  
See also: `/.well-known/security.txt`
