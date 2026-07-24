# Deploy to Vercel (one-time login)

Repo is already on GitHub:  
https://github.com/Rumit-Varsani/cyber-portfolio

## Option A — CLI (fast)

```bash
cd ~/cyber-portfolio
npx vercel login          # browser login once
npx vercel --prod --yes   # production deploy
```

Optional env in Vercel project settings:

- `CONTACT_EMAIL` = `varsanirumit@gmail.com`
- `NEXT_PUBLIC_SITE_URL` = your live URL

## Option B — Dashboard

1. Open https://vercel.com/new  
2. Import **Rumit-Varsani/cyber-portfolio**  
3. Framework: Next.js (auto)  
4. Deploy  

## After deploy

1. Visit the URL Vercel prints  
2. Test DE/EN toggle and contact form  
3. Confirm FormSubmit email in Gmail if first message  
