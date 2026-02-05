# Monster v2 - Game Platform

A modern web platform for games, novels, and briefings built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Games Section**: Browse and play a collection of games
- **Novels Section**: Discover and read engaging stories
- **Briefings Section**: Stay updated with the latest news and updates
- **User Profile**: Manage account settings and view statistics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Theme**: Premium dark theme with gold and red accents

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Authentication**: Supabase (configured, ready to integrate)
- **Deployment**: Vercel-ready

## Color Scheme

- **Primary Black**: `#050505`
- **Accent Gold**: `#D4AF37`
- **Accent Red**: `#D32F2F`
- **Text**: White (`#ffffff`)

## Project Structure

```
monster-v2/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── games/page.tsx        # Games gallery
│   │   ├── novels/page.tsx       # Novels browser
│   │   ├── briefings/page.tsx    # Briefings archive
│   │   ├── profile/page.tsx      # User profile
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles & theme
│   └── components/
│       ├── Layout.tsx            # Main layout wrapper
│       ├── Header.tsx            # Navigation header
│       ├── Navigation.tsx        # Sidebar navigation
│       ├── Button.tsx            # Reusable button component
│       └── Card.tsx              # Reusable card component
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies
└── .env.local                    # Environment variables (local)
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kjaylee/monster-v2.git
cd monster-v2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page auto-updates as you edit files.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Supabase Integration

The project is configured to use Supabase for authentication and database. To enable:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Add your Supabase URL and anon key to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

3. Set up database schema for:
   - users
   - games
   - novels
   - briefings

## Component Library

### Button Component
```tsx
<Button variant="primary" size="md">Click me</Button>
```

Variants: `primary` (gold), `secondary` (black), `danger` (red)
Sizes: `sm`, `md`, `lg`

### Card Component
```tsx
<Card title="Title" description="Description">
  Content here
</Card>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy

```bash
npm install -g vercel
vercel login
vercel
```

### Other Platforms

This Next.js project can be deployed to any platform that supports Node.js applications.

## Environment Variables

Required environment variables for deployment:

```
NEXT_PUBLIC_SUPABASE_URL=    # Your Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY= # Your Supabase anon key
STRAPI_API_URL=              # Optional: Strapi CMS API URL
NEXT_PUBLIC_API_URL=         # Your API base URL
```

## Development Roadmap

### Phase 2 (Current) ✅
- ✅ Next.js 15 project structure
- ✅ Tailwind CSS configuration (black+gold+red theme)
- ✅ Basic page scaffolds (home, games, novels, briefings, profile)
- ✅ Component library bootstrap (Button, Card, Layout, Header, Navigation)
- ✅ Environment variables configuration
- ✅ Git repository setup

### Phase 3 (Planned)
- [ ] Supabase database schema and migrations
- [ ] Authentication system (signup/login)
- [ ] Game integration and playable games
- [ ] Novel content management system
- [ ] User statistics and achievements
- [ ] Admin dashboard

### Phase 4 (Planned)
- [ ] Advanced game features
- [ ] Social features (comments, ratings)
- [ ] Mobile app (React Native)
- [ ] Analytics and reporting

## Performance

- **Lighthouse Scores**: Target 90+
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic per-route

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please follow the project's code style and commit conventions.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please reach out to the development team.

## Changelog

### v0.1.0 - Initial Release (2026-02-05)
- Initial project setup with Next.js 15
- Tailwind CSS theme configuration
- Core page structure (home, games, novels, briefings, profile)
- Component library foundation
- Environment variables setup
- Git repository initialization

---

**Status**: Phase 2 Development ✅
**Next**: Phase 3 - Database and Authentication Integration
