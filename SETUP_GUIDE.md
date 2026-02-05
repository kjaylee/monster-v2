# Monster v2 - Complete Setup & Deployment Guide

## Phase 2 Completion Report

**Status**: ✅ **COMPLETE**  
**Date**: 2026-02-05  
**Version**: 0.1.0

### What's Been Delivered

#### 1. Project Infrastructure ✅
- **Framework**: Next.js 15.1.6 with App Router
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x with custom theme
- **Build Tool**: Turbopack (modern, fast)
- **Node.js**: 18.17+

#### 2. Design System ✅
**Color Palette**:
- Primary Black: `#050505` - Main background
- Accent Gold: `#D4AF37` - Headers, titles, premium elements
- Accent Red: `#D32F2F` - Actions, CTAs, danger states
- Text White: `#ffffff` - Primary text on dark backgrounds

**Components**:
- `Button.tsx` - With variants (primary, secondary, danger) and sizes (sm, md, lg)
- `Card.tsx` - Gold-bordered cards with hover effects
- `Layout.tsx` - Main layout wrapper with sidebar + content
- `Header.tsx` - Navigation header with logo and menu
- `Navigation.tsx` - Responsive sidebar navigation

#### 3. Page Scaffolds ✅
- `/` (Home) - Welcome screen with featured content
- `/games` - Game gallery with 4 placeholder games
- `/novels` - Novel browser with author information
- `/briefings` - Update feed with date and category tracking
- `/profile` - User account and statistics page

#### 4. Configuration Files ✅
- `tailwind.config.ts` - Theme customization
- `tsconfig.json` - TypeScript settings
- `next.config.ts` - Next.js optimization
- `.env.local` - Environment variables template
- `.gitignore` - Git ignore patterns

#### 5. Git Repository ✅
```bash
# Initialize status
Initial branch: master
Total commits: 2
  - Commit 1: Initial project setup
  - Commit 2: Documentation and README

# Ready to push to GitHub
```

---

## Local Development Setup

### Prerequisites
```bash
# Check Node.js version
node --version  # Should be 18.17+
npm --version   # Should be 8.0+
```

### Step 1: Start Development Server
```bash
cd /Users/kjaylee/.openclaw/workspace/monster-v2
npm run dev
```

**Output**:
```
▲ Next.js 16.1.6 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://169.254.215.153:3000
- Environments: .env.local

✓ Ready in 675ms
```

**Pages Tested**:
- ✅ Home: http://localhost:3000/
- ✅ Games: http://localhost:3000/games
- ✅ Novels: http://localhost:3000/novels
- ✅ Briefings: http://localhost:3000/briefings
- ✅ Profile: http://localhost:3000/profile

### Step 2: Build for Production
```bash
npm run build
```

**Build Output**:
```
✓ Compiled successfully in 1485.7ms
✓ Generating static pages using 9 workers (8/8) in 285.2ms

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /briefings
├ ○ /games
├ ○ /novels
└ ○ /profile

✓ Build completed successfully
```

### Step 3: Run Production Build
```bash
npm start
```

---

## GitHub Setup & Deployment

### Option 1: Vercel Deployment (Recommended)

Vercel is the creator of Next.js and provides the best integration.

#### A. Create GitHub Repository
```bash
cd /Users/kjaylee/.openclaw/workspace/monster-v2

# Initialize git (already done)
git status

# Create repo on GitHub
# https://github.com/new
# Name: monster-v2
# Description: Game Platform with Next.js
# Public/Private: Your choice

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/monster-v2.git
git branch -M main
git push -u origin main
```

#### B. Deploy to Vercel
```bash
# Option 1: Using Vercel CLI
npm install -g vercel
vercel login
vercel

# Option 2: Vercel Web Dashboard
# Visit https://vercel.com/import
# Select your GitHub repository
# Confirm settings
# Deploy with one click
```

**Vercel Configuration**:
```
Project Name: monster-v2
Framework: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**Environment Variables** (add in Vercel Dashboard):
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
STRAPI_API_URL=your_strapi_api_url
NEXT_PUBLIC_API_URL=https://your-domain.vercel.app/api
```

#### C. Custom Domain
```
Vercel Dashboard > Settings > Domains
Add: yourdomain.com
Add: www.yourdomain.com
```

### Option 2: Railway Deployment

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

### Option 3: Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## Environment Variables Setup

### Local Development (.env.local)
```bash
# Copy the template
cp .env.local .env.local

# Edit with your values
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
STRAPI_API_URL=https://your-strapi.com
NEXT_PUBLIC_API_URL=http://localhost:3000/api
ENVIRONMENT=development
```

### Production (Vercel/Deployment Platform)
Add the same variables in your deployment platform's dashboard:
1. Settings > Environment Variables
2. Add each variable
3. Select environments (production, preview, development)
4. Redeploy

---

## Supabase Integration (Next Phase)

### Setup Steps
1. Create account: https://supabase.com
2. Create new project
3. Get API credentials from Project Settings
4. Create database schema:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR NOT NULL,
  username VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Games table
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Novels table
CREATE TABLE novels (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  author VARCHAR NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Briefings table
CREATE TABLE briefings (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  content TEXT,
  category VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Project Commands Reference

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000

# Production
npm run build            # Build for production
npm start                # Run production build

# Code Quality
npm run lint             # Run ESLint

# Utilities
npm list                 # List installed packages
npm update               # Update packages
npm audit                # Check for vulnerabilities
```

---

## Performance Metrics

### Build Performance
- **Build Time**: ~1.5 seconds (Turbopack)
- **TypeScript Check**: ~500ms
- **Static Generation**: ~285ms for 6 pages

### Runtime Performance
- **First Load**: Optimized (Turbopack)
- **Code Splitting**: Automatic per route
- **Image Optimization**: Ready with Next.js Image

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

---

## Monitoring & Maintenance

### Recommended Setup
```
Vercel Dashboard
├── Deployments (auto-deploy on push)
├── Analytics (Web Vitals)
├── Error Tracking
└── Performance Monitoring
```

### Key Metrics to Watch
- **Core Web Vitals**: LCP, FID, CLS
- **Build Time**: Should stay under 2s
- **Error Rate**: Aim for 0%

---

## Next Steps (Phase 3)

### Immediate (This Week)
- [ ] Create GitHub repository
- [ ] Deploy to Vercel
- [ ] Get custom domain
- [ ] Set up Supabase project

### Short Term (This Sprint)
- [ ] Implement Supabase authentication
- [ ] Create database schema
- [ ] Connect database to pages
- [ ] User signup/login flow

### Medium Term (Next Sprint)
- [ ] Game API integration
- [ ] Novel content management
- [ ] User statistics tracking
- [ ] Admin dashboard

---

## Troubleshooting

### Issue: Port 3000 already in use
```bash
# Find process using port 3000
lsof -i :3000

# Kill it
kill -9 <PID>

# Or use different port
PORT=3001 npm run dev
```

### Issue: Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Issue: TypeScript errors
```bash
# Check TypeScript compilation
npx tsc --noEmit
```

### Issue: Tailwind styles not working
```bash
# Rebuild Tailwind CSS
npm run build

# Ensure globals.css is imported in layout.tsx
```

---

## File Structure Reference

```
monster-v2/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout + metadata
│   │   ├── globals.css           # Tailwind + theme config
│   │   ├── games/
│   │   │   └── page.tsx          # Games page
│   │   ├── novels/
│   │   │   └── page.tsx          # Novels page
│   │   ├── briefings/
│   │   │   └── page.tsx          # Briefings page
│   │   └── profile/
│   │       └── page.tsx          # Profile page
│   └── components/
│       ├── Layout.tsx            # Main layout wrapper
│       ├── Header.tsx            # Top navigation
│       ├── Navigation.tsx        # Sidebar nav
│       ├── Button.tsx            # Button component
│       └── Card.tsx              # Card component
├── public/                       # Static assets (SVG, images, etc.)
├── .env.local                    # Local environment variables
├── tailwind.config.ts            # Tailwind customization
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config
├── package.json                  # Dependencies
├── package-lock.json             # Dependency lock
├── README.md                      # Main documentation
├── SETUP_GUIDE.md               # This file
└── .gitignore                    # Git ignore patterns
```

---

## Support & Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs
- Supabase: https://supabase.com/docs
- Vercel: https://vercel.com/docs

### Community
- Next.js Discord: https://discord.gg/nextjs
- Tailwind CSS Discord: https://tailwindcss.com/discord
- Vercel Community: https://vercel.com/help

---

## Deployment Checklist

- [ ] GitHub repository created
- [ ] Repository linked to Vercel
- [ ] Environment variables configured
- [ ] Custom domain set up
- [ ] SSL certificate active
- [ ] Analytics enabled
- [ ] Error tracking configured
- [ ] Monitoring alerts set up

---

**Happy Coding! 🚀**

For questions or issues, check the troubleshooting section or refer to the official documentation links above.
