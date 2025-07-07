# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 conference website for "JP_Stripes Connect 2025" - a Japanese Stripe developer conference. The site features a dark theme with interactive components and focuses on three main themes: Theory (理論), Practice (実践), and Future (未来).

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

The project follows Next.js App Router architecture:
- `src/app/` - App Router pages and layouts
- `src/app/components/` - React components including:
  - `CustomCursor.tsx` - Interactive cursor component
  - `Hero.tsx` - Main hero section
  - `Themes.tsx` - Three-panel theme section (Theory/Practice/Future)
  - `Future.tsx` - Future-focused content section
  - `Countdown.tsx` - Event countdown component
  - `Footer.tsx` - Site footer
- `src/app/layout.tsx` - Root layout with Inter font and Japanese SEO metadata
- `src/app/page.tsx` - Home page component composition
- `src/app/globals.css` - Global styles with Tailwind CSS

## Key Technologies

- **Next.js 15** with App Router
- **React 19** 
- **TypeScript** with strict mode enabled
- **Tailwind CSS 4** for styling
- **ESLint** with Next.js configuration
- **Inter font** optimized via next/font

## TypeScript Configuration

The project uses TypeScript with strict mode and includes path aliases:
- `@/*` maps to `./src/*` for cleaner imports

## Site Architecture

The site is structured as a single-page application with component-based sections:

1. **CustomCursor** - Interactive cursor effects throughout the site
2. **Hero** - Main landing section with conference branding
3. **Themes** - Core content section featuring three interactive panels:
   - Theory (理論): Foundational Stripe knowledge
   - Practice (実践): Real-world implementation examples
   - Future (未来): Next-generation payment possibilities
4. **Future** - Extended future-focused content
5. **Countdown** - Event countdown timer
6. **Footer** - Contact and additional information

## Internationalization

The site is designed for Japanese audience with:
- Japanese language content throughout
- Japanese SEO metadata and Open Graph tags
- `lang="ja"` HTML attribute
- Japanese keywords and descriptions