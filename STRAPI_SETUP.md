# Monster Strapi CMS Setup Guide

**Purpose:** Enable real-time content updates for Briefings, Blog Posts, Games, and Diary entries.

## 🚀 Quick Setup (10 minutes)

### Option 1: Cloud Deployment (Easiest)

**Deploy to Railway (Free tier)**
1. Create account at railway.app
2. Click "Deploy from GitHub"
3. Select kjaylee/monster-v2
4. Set environment variables:
   - DB_PASSWORD: (auto-generated)
   - JWT_SECRET: (generate random string)
5. Deploy and get Strapi URL

### Option 2: Local Docker Setup

```bash
# Clone repo
cd /Users/kjaylee/.openclaw/workspace/monster-v2

# Start Strapi + PostgreSQL
docker-compose -f docker-compose.strapi.yml up -d

# Initialize Strapi (first run)
docker exec -it monster-strapi npm run build
docker exec -it monster-strapi npm run develop

# Access admin panel
# http://localhost:1337/admin
```

### Option 3: GCP VM Deployment

```bash
# SSH to GCP VM
gcloud compute ssh instance-20250423-131130 --zone=us-west1-a

# Clone repo
cd /home/k_jaylee
git clone https://github.com/kjaylee/monster-v2.git
cd monster-v2

# Set up environment
cat > .env << EOF
DB_PASSWORD=$(openssl rand -base64 32)
JWT_SECRET=$(openssl rand -base64 32)
ADMIN_JWT_SECRET=$(openssl rand -base64 32)
API_TOKEN_SALT=$(openssl rand -base64 32)
EOF

# Deploy with docker-compose
docker-compose -f docker-compose.strapi.yml up -d

# Create Traefik rule for monster.eastsea.xyz:api
# (Instructions below)
```

## 📊 Strapi Collections Setup

After Strapi is running, create these collections:

### 1. **BlogPosts**
- Fields:
  - `title` (Text)
  - `slug` (UID)
  - `content` (Rich Text)
  - `excerpt` (Text)
  - `date` (Date)
  - `author` (Text)
  - `category` (Enumeration: Game Updates, News, Features, Community)
  - `published` (Boolean)

### 2. **Briefings**
- Fields:
  - `title` (Text)
  - `headline` (Text)
  - `content` (Rich Text)
  - `date` (Date)
  - `category` (Enumeration: Daily, Market & Tech, Game Updates, Features)
  - `priority` (Enumeration: High, Normal, Low)
  - `published` (Boolean)

### 3. **Diary**
- Fields:
  - `title` (Text)
  - `date` (Date)
  - `content` (Rich Text)
  - `mood` (Text, optional)
  - `author` (Text)
  - `published` (Boolean)

### 4. **Games**
- Fields:
  - `title` (Text)
  - `slug` (UID)
  - `description` (Text)
  - `image_url` (Text)
  - `play_url` (Text)
  - `category` (Text)
  - `published` (Boolean)

## 🔐 API Setup

### Create API Token
1. Go to Strapi Admin: http://strapi.eastsea.xyz/admin
2. Settings → API Tokens
3. Create new token:
   - Name: "monster-frontend"
   - Scopes: Select all content types
4. Copy token → Add to Next.js `.env.local`:
   ```
   STRAPI_API_URL=https://strapi.eastsea.xyz
   STRAPI_API_TOKEN=your_token_here
   ```

## 🔌 Connect Next.js to Strapi

### Update Briefings Page

**File:** `src/app/briefings/page.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

interface Briefing {
  id: string;
  title: string;
  date: string;
  category: string;
  headline: string;
}

export default function BriefingsPage() {
  const [briefings, setBriefings] = useState<Briefing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBriefings = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/briefings?sort=date:desc`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setBriefings(data.data || []);
      } catch (error) {
        console.error('Failed to fetch briefings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBriefings();
  }, []);

  if (loading) return <Layout><p>Loading briefings...</p></Layout>;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gold mb-4">Briefings</h1>
        <p className="text-xl text-gray-300 mb-12">Latest updates and news</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {briefings.map((briefing) => (
            <Card key={briefing.id} title={briefing.title}>
              <p className="text-sm text-gray-400 mb-2">{briefing.date}</p>
              <p className="text-gold text-sm mb-4">{briefing.category}</p>
              <p className="text-gray-300 text-sm mb-4">{briefing.headline}</p>
              <Button variant="danger" size="sm" className="w-full">
                Read Briefing
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
```

### Update .env.local

```env
NEXT_PUBLIC_STRAPI_URL=https://strapi.eastsea.xyz
NEXT_PUBLIC_STRAPI_TOKEN=your_api_token_here
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## 🌐 Domain Configuration (GCP VM)

### Add Traefik Route for Strapi

**File:** `/home/k_jaylee/spritz/dynamic/strapi.yml`

```yaml
http:
  routers:
    strapi:
      rule: Host(`strapi.eastsea.xyz`)
      service: strapi
      entrypoints:
        - websecure
      tls:
        certResolver: cloudflare

  services:
    strapi:
      loadBalancer:
        servers:
          - url: http://100.80.169.94:1337  # MiniPC IP if deployed there
          # OR
          - url: http://localhost:1337     # If local on VM
```

Then:
```bash
# Reload Traefik
docker restart traefik
```

### Update Cloudflare DNS

1. Go to Cloudflare DNS settings
2. Add CNAME record:
   - Name: `strapi`
   - Target: `eastsea.xyz`
   - Proxy: Cloudflare (orange cloud)

## 📅 Import Existing Jekyll Posts

To migrate existing Jekyll posts to Strapi:

```bash
# Export Jekyll posts
cd ~/.openclaw/workspace/_posts

# Parse and convert to Strapi format
# Script: (create strapi-importer.js)
node strapi-importer.js --source _posts --target strapi.eastsea.xyz

# Or manual upload via Strapi admin UI
```

## 🔄 Auto-Sync from Jekyll (Optional)

**Use Strapi Webhooks:**

1. Setup GitHub webhook → Strapi endpoint
2. When Jekyll post is updated, trigger Strapi update
3. Next.js auto-revalidates via ISR (Incremental Static Regeneration)

## 🚀 Deployment Checklist

- [ ] Strapi running (local or cloud)
- [ ] API token created
- [ ] Collections created (BlogPosts, Briefings, Diary, Games)
- [ ] Sample content added
- [ ] Next.js connected to Strapi
- [ ] Environment variables set
- [ ] Domain configured
- [ ] CORS enabled (if needed)
- [ ] SSL certificate applied

## 🐛 Troubleshooting

### Strapi won't start
```bash
# Clear cache and reinstall
docker exec monster-strapi rm -rf .cache node_modules
docker exec monster-strapi npm install
docker restart monster-strapi
```

### Next.js can't reach Strapi
- Check CORS settings in Strapi admin
- Verify API token is valid
- Check network connectivity: `curl https://strapi.eastsea.xyz/api/briefings`

### Database connection fails
```bash
# Check PostgreSQL logs
docker logs monster-postgres

# Reset database
docker exec monster-postgres psql -U strapi -d monster_strapi -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
docker restart monster-strapi
```

## 📚 References

- Strapi Docs: https://docs.strapi.io
- Next.js Strapi Integration: https://strapi.io/documentation/content-api/integrations
- PostgreSQL: https://www.postgresql.org/docs/

---

**Next Phase:** Auto-sync Jekyll posts → Strapi → Next.js
