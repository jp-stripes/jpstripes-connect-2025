# JP_Stripes Connect 2025

A modern conference website for **JP_Stripes Connect 2025** - a Japanese Stripe developer conference featuring cutting-edge payment technology discussions and innovations.

## 🎯 Project Overview

JP_Stripes Connect 2025 is a single-page conference website built with Next.js 15, featuring:

- **Dark-themed interactive design** with custom cursor effects
- **Three core themes**: Theory (理論), Practice (実践), and Future (未来)
- **Japanese-first localization** with SEO optimization
- **Responsive layout** optimized for all devices
- **Event countdown timer** and dynamic content sections
- **Cloudflare Workers deployment** for edge performance

## 🚀 Tech Stack

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[React 19](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first styling
- **[Cloudflare Workers](https://workers.cloudflare.com)** - Edge deployment
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** - Next.js adapter for Cloudflare
- **Inter Font** - Optimized via next/font

## 📦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/jp-stripes/jpstripes-connect-2025.git
cd jpstripes-connect-2025

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

The page auto-updates as you edit files in the `src/` directory.

### Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Build and preview with Wrangler locally
- `npm run deploy` - Build and deploy to Cloudflare Workers
- `npm run cf-typegen` - Generate TypeScript types for Cloudflare environment

## 📁 Project Structure

```
jpstripes-connect-2025/
├── src/
│   └── app/
│       ├── components/          # React components
│       │   ├── CustomCursor.tsx # Interactive cursor component
│       │   ├── Hero.tsx         # Main hero section
│       │   ├── Themes.tsx       # Three-panel theme section
│       │   ├── Future.tsx       # Future-focused content
│       │   ├── Countdown.tsx    # Event countdown timer
│       │   └── Footer.tsx       # Site footer
│       ├── layout.tsx           # Root layout with metadata
│       ├── page.tsx             # Home page composition
│       └── globals.css          # Global styles with Tailwind
├── public/                      # Static assets
├── CLAUDE.md                    # Claude Code project instructions
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── next.config.ts               # Next.js configuration
├── wrangler.toml                # Cloudflare Workers configuration
└── README.md                    # This file
```

## 🎨 Key Features

### Interactive Components

- **Custom Cursor**: Smooth, interactive cursor that follows mouse movement
- **Hero Section**: Eye-catching landing section with conference branding
- **Three Themes Panel**: Interactive cards showcasing:
  - 🧠 **Theory (理論)**: Foundational Stripe API knowledge
  - 💼 **Practice (実践)**: Real-world implementation examples
  - 🚀 **Future (未来)**: Next-generation payment possibilities
- **Countdown Timer**: Real-time countdown to the conference date
- **Responsive Footer**: Contact information and social links

### Internationalization

- Primary language: Japanese (日本語)
- Japanese SEO metadata and Open Graph tags
- Locale-aware HTML attributes (`lang="ja"`)
- Optimized Japanese typography with Inter font

### Performance Optimizations

- Edge deployment via Cloudflare Workers
- Static asset optimization
- Automatic font optimization with next/font
- Server-side rendering with Next.js 15 App Router
- Tailwind CSS for minimal bundle size

## 🌐 Deployment

### Cloudflare Workers

This project is configured for deployment to Cloudflare Workers:

```bash
# Preview the production build locally
npm run preview

# Deploy to Cloudflare Workers
npm run deploy
```

Ensure you have:
1. Cloudflare account with Workers enabled
2. Wrangler CLI configured with authentication
3. `wrangler.toml` properly configured with your account details

### Alternative Deployments

While optimized for Cloudflare, the site can also be deployed to:
- **Vercel**: Native Next.js deployment platform
- **Netlify**: Supports Next.js with adapters
- **Self-hosted**: Using Docker or traditional Node.js hosting

## 🛠️ Development Guidelines

### TypeScript

The project uses TypeScript with strict mode enabled:

```typescript
// Path alias support
import Component from '@/app/components/Component'
```

### Styling

Tailwind CSS 4 is used throughout the project:

- Follow utility-first approach
- Dark theme is the default
- Responsive design utilities for mobile/tablet/desktop

### Component Structure

Components follow React best practices:
- Functional components with TypeScript
- Client components marked with `'use client'` directive
- Server components by default (App Router)

## 📄 License

Private repository. All rights reserved.

## 🤝 Contributing

This is a conference website project. For contributions or questions, please contact the project maintainers.

## 📞 Support

For issues or questions about JP_Stripes Connect 2025:
- Visit the conference website (when deployed)
- Contact the organizing team
- Check the conference social media channels

---

Built with ❤️ for the Japanese Stripe developer community
