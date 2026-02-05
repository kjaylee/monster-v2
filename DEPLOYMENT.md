# Monster v2 - Deployment Guide

**Status:** 🟢 READY FOR PRODUCTION DEPLOYMENT

## ⚡ 1-Click Deployment (Recommended)

### Option A: Deploy to Vercel (Easiest)

1. **Create GitHub Repository**
   ```bash
   gh repo create kjaylee/monster-v2 --source=. --remote=origin --push
   ```
   Or manually on github.com → New Repository

2. **Deploy to Vercel**
   - Visit: https://vercel.com/new
   - Import the GitHub repository
   - Configure environment variables (optional for MVP)
   - Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Authenticate with Vercel
vercel login

# Deploy to production
cd /Users/kjaylee/.openclaw/workspace/monster-v2
vercel --prod
```

## 🚀 Quick Start Deployment Steps

### Step 1: Create GitHub Repo (One-time)
```bash
cd /Users/kjaylee/.openclaw/workspace/monster-v2

# Create empty repo on github.com or via CLI
# Then set remote:
git remote set-url origin https://github.com/kjaylee/monster-v2.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
Option 1: Via Web UI
- Go to https://vercel.com/new
- Select "Import from Git"
- Choose kjaylee/monster-v2
- Click "Deploy"

Option 2: Via CLI
```bash
vercel --prod
```

### Step 3: Configure Custom Domain (Optional)
In Vercel dashboard:
- Go to Project Settings → Domains
- Add `eastsea.monster` or `monster.eastsea.xyz`
- Update DNS records (if necessary)

## 📊 Deployment Status

| Component | Status | Notes |
|-----------|--------|-------|
| **Code Ready** | ✅ | All source committed |
| **Build Test** | ✅ | `npm run build` succeeds |
| **Briefings Data** | ✅ | Real content from Jekyll posts |
| **Vercel Config** | ✅ | vercel.json configured |
| **GitHub Repo** | ⏳ | Ready to push |
| **Environment Vars** | ✅ | Templates provided |

## 🎯 What's Included in This Deploy

- ✅ **5 Core Pages:** Home, Games, Novels, Briefings, Profile
- ✅ **Real Briefings:** Latest from Jekyll posts (2026-02-05, 2026-02-04)
- ✅ **Design System:** Black + Gold + Red theme
- ✅ **Components:** Reusable Button, Card, Layout, Header, Navigation
- ✅ **Responsive:** Mobile, tablet, desktop optimized
- ✅ **TypeScript:** Fully typed, production-ready
- ✅ **Performance:** Static pre-rendering, optimized bundle

## 📝 Environment Variables (Optional)

For Strapi/CMS integration, add in Vercel dashboard:

```env
STRAPI_API_URL=https://strapi.example.com
NEXT_PUBLIC_API_URL=https://monster.eastsea.xyz
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
```

(Not required for MVP - briefings are hardcoded for now)

## 🔗 Domain Configuration

### If using eastsea.monster:
- Current: Jekyll site (GitHub Pages)
- New: Point to Vercel nameservers
- **Process:**
  1. Deploy to Vercel
  2. Add domain in Vercel dashboard
  3. Update GitHub Pages DNS settings to point to Vercel
  4. Or update domain registrar DNS

### If using monster.eastsea.xyz (Subdomain):
- Current: GCP VM (Traefik)
- New: Create CNAME record → Vercel URL
- **Process:**
  1. Deploy to Vercel (get URL like monster-v2.vercel.app)
  2. In Cloudflare:
     - Add CNAME: monster.eastsea.xyz → monster-v2.vercel.app
  3. Add domain in Vercel dashboard
  4. Done!

## 🐛 Troubleshooting

### GitHub Push Fails
```bash
# Ensure SSH key is set up
ssh -T git@github.com

# Or use HTTPS with personal access token
# Create token at github.com/settings/tokens
git remote set-url origin https://<TOKEN>@github.com/kjaylee/monster-v2.git
```

### Vercel Build Fails
```bash
# Test build locally
npm run build

# Check build logs in Vercel dashboard
# Common issues: missing env vars, node_modules corruption
rm -rf .next node_modules
npm install
npm run build
```

### Domain Not Working
- Allow 24-48 hours for DNS propagation
- Check Vercel dashboard for SSL certificate status
- Verify DNS records with: `dig eastsea.monster`

## 📚 Strapi CMS Integration (Phase 3)

For now, briefings are hardcoded. To add Strapi integration:

1. **Deploy Strapi:**
   - Option A: Railway/Heroku cloud hosting
   - Option B: Docker on GCP VM

2. **Update Next.js:**
   ```bash
   npm install axios swr
   ```
   - Modify `src/app/briefings/page.tsx` to fetch from Strapi
   - Add API routes in `src/app/api/`

3. **Enable Real-time:**
   - Strapi webhooks → Next.js revalidation
   - Or Strapi GraphQL subscriptions

## 🎯 Next Steps

1. ✅ Code is ready
2. ⏳ Push to GitHub (need credentials)
3. ⏳ Deploy to Vercel (one-click or CLI)
4. ⏳ Configure domain (DNS update)
5. 📋 Add Strapi CMS (Phase 3, optional)
6. 📋 Enable blog post auto-sync (Phase 4)

## 🟢 Ready to Deploy!

**All code is production-ready.** You can deploy immediately by:

```bash
# Option 1: GitHub + Vercel Web UI (Easiest)
cd /Users/kjaylee/.openclaw/workspace/monster-v2
git push origin main
# Then: vercel.com/new → import kjaylee/monster-v2 → deploy

# Option 2: Vercel CLI
cd /Users/kjaylee/.openclaw/workspace/monster-v2
vercel --prod
```

---

**Questions?** Check SETUP_GUIDE.md or QUICKSTART.md
