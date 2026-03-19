# SecureHorizon — Setup & Deployment Guide

## Prerequisites

### 1. Install Node.js
Download and install Node.js (LTS version) from:
**https://nodejs.org**

After installing, restart your terminal and verify:
```bash
node --version    # Should show v18+ or v20+
npm --version     # Should show 9+
```

---

## Local Development

### 2. Install Dependencies
Open a terminal in this project folder and run:
```bash
npm install
```

### 3. Start the Dev Server
```bash
npm run dev
```
Open **http://localhost:3000** in your browser.

---

## Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```
Follow the prompts. Vercel will auto-detect Next.js and configure everything.

4. For production deployment:
```bash
vercel --prod
```

### Option B: Deploy via GitHub + Vercel Dashboard

1. Create a GitHub repository and push this code:
```bash
git init
git add .
git commit -m "Initial commit: SecureHorizon insurance lead funnel"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Go to **https://vercel.com/new**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site will be live at `your-project.vercel.app`

---

## Production Considerations

### Database
The current setup stores leads in a local JSON file (`data/leads.json`). For production, replace with:
- **Vercel Postgres** (built into Vercel)
- **Supabase** (free tier available)
- **PlanetScale** (serverless MySQL)

### Email Notifications
Add email notifications when new leads come in:
- **Resend** (modern email API)
- **SendGrid** (established, free tier)
- **Mailchimp** (for nurture sequences)

### Custom Domain
In Vercel Dashboard → Settings → Domains, add your custom domain (e.g., `securehorizon.com`).

### Analytics
Add tracking to measure campaign performance:
- **Vercel Analytics** (built-in, one click)
- **Google Analytics 4**
- **Facebook Pixel** (for ad retargeting)

---

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Navbar/Footer
│   │   ├── page.tsx            # Landing page (marketing funnel)
│   │   ├── globals.css         # Global styles + Tailwind
│   │   ├── quote/
│   │   │   └── page.tsx        # Multi-step lead capture form
│   │   ├── thank-you/
│   │   │   └── page.tsx        # Post-submission confirmation
│   │   └── api/
│   │       └── leads/
│   │           └── route.ts    # API endpoint for lead submission
│   └── components/
│       ├── Navbar.tsx           # Sticky navigation
│       └── Footer.tsx           # Site footer
├── MARKETING-CAMPAIGN.md        # Full marketing strategy
├── vercel.json                  # Vercel deployment config
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
