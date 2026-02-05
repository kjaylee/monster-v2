# Monster v2 - Quick Start Guide

**Get up and running in 2 minutes!**

## 🚀 Quick Start

### 1️⃣ Install & Run
```bash
cd /Users/kjaylee/.openclaw/workspace/monster-v2
npm install
npm run dev
```

### 2️⃣ Open Browser
```
http://localhost:3000
```

### 3️⃣ Explore Pages
- Home: http://localhost:3000/
- Games: http://localhost:3000/games
- Novels: http://localhost:3000/novels
- Briefings: http://localhost:3000/briefings
- Profile: http://localhost:3000/profile

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           ← Home page
│   ├── games/page.tsx     ← Games page
│   ├── novels/page.tsx    ← Novels page
│   ├── briefings/page.tsx ← Briefings page
│   ├── profile/page.tsx   ← Profile page
│   ├── layout.tsx         ← Root layout
│   └── globals.css        ← Theme & styles
└── components/
    ├── Button.tsx         ← Reusable button
    ├── Card.tsx           ← Reusable card
    ├── Layout.tsx         ← Main layout
    ├── Header.tsx         ← Navigation header
    └── Navigation.tsx     ← Sidebar nav
```

---

## 🎨 Color System

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#050505` | Backgrounds |
| Gold | `#D4AF37` | Titles, accents |
| Red | `#D32F2F` | Buttons, CTAs |
| White | `#ffffff` | Text |

---

## 🧩 Component Examples

### Button
```tsx
import Button from '@/components/Button';

<Button variant="primary" size="md">Click Me</Button>
<Button variant="secondary" size="sm">Edit</Button>
<Button variant="danger" size="lg">Delete</Button>
```

**Variants**: `primary` (gold) | `secondary` (black) | `danger` (red)  
**Sizes**: `sm` | `md` | `lg`

### Card
```tsx
import Card from '@/components/Card';

<Card title="My Card" description="Card description">
  <p>Your content here</p>
</Card>
```

### Layout
```tsx
import Layout from '@/components/Layout';

<Layout>
  <h1>Your page content</h1>
</Layout>
```

---

## 📝 Common Commands

```bash
# Development
npm run dev           # Start dev server
npm run build         # Build for production
npm start             # Run production build
npm run lint          # Check code style

# Git
git status            # Check git status
git add .             # Stage all changes
git commit -m "msg"   # Commit with message
git push              # Push to GitHub
```

---

## 🌍 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
STRAPI_API_URL=your_api
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

## 📱 Responsive Design

- **Mobile**: Full-width on screens < 768px
- **Tablet**: 2-column layout on 768px - 1024px
- **Desktop**: Full 3-4 column grid on screens > 1024px

Sidebar navigation hides on mobile (visible on `md` breakpoint and up).

---

## 🔗 Useful Links

| Resource | URL |
|----------|-----|
| Next.js Docs | https://nextjs.org/docs |
| Tailwind Docs | https://tailwindcss.com/docs |
| TypeScript Docs | https://typescriptlang.org/docs |
| Supabase Docs | https://supabase.com/docs |
| Vercel Docs | https://vercel.com/docs |

---

## 🐛 Quick Troubleshooting

### Port 3000 in use?
```bash
kill -9 $(lsof -t -i:3000)
PORT=3001 npm run dev
```

### Build fails?
```bash
rm -rf .next
npm run build
```

### Styles not showing?
```bash
npm run build
npm run dev
```

### TypeScript errors?
```bash
npx tsc --noEmit
```

---

## 📊 Project Stats

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Pages**: 5
- **Components**: 10+
- **Build Time**: ~1.5s
- **Status**: ✅ Production Ready

---

## 🚀 Next Steps

1. [ ] Create GitHub repository
2. [ ] Deploy to Vercel
3. [ ] Add custom domain
4. [ ] Set up Supabase
5. [ ] Create admin dashboard

---

## 📞 Support

- Check `SETUP_GUIDE.md` for detailed instructions
- Check `README.md` for overview
- Check `PHASE2_COMPLETION.md` for technical details

---

**Happy coding! 🎉**
