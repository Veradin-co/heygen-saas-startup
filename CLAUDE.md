# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Important**: This is NOT the Next.js you know. This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
npm start        # Serve production build
```

No test framework is configured.

## Architecture

**Stack**: Next.js 16 App Router · React 19 · TypeScript 5 (strict) · Tailwind CSS 4 · Supabase · shadcn/ui

### Directory Layout

- `app/` — Next.js App Router pages and layouts
- `components/ui/` — 30 shadcn/ui components (Base UI headless, all `"use client"`)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `hooks/` — React hooks (`useIsMobile` at 768px breakpoint)

### Key Patterns

**Components**: All UI components live in `components/ui/` and use `class-variance-authority` (CVA) for variants. Import via `@/components/ui/...`.

**Styling**: Tailwind CSS 4 with CSS custom properties (OKLch color space) defined in `app/globals.css`. Dark mode via `next-themes`. Use the `cn()` utility for conditional classes.

**Icons**: HugeIcons (`@hugeicons/react`). Configured as the icon library in `components.json`.

**Notifications**: Sonner (`sonner`) for toasts.

**Backend**: Supabase via `@supabase/supabase-js` and `@supabase/ssr`. No environment variables are configured yet — create `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

**Path alias**: `@/*` resolves to the project root.

## System Paths

- **Code:** `~/Local_claude_projects/heygen-saas-startup/`
- **GitHub:** `github.com/Veradin-co/heygen-saas-startup` (private)
- **Obsidian notes:** `Veradin_GD_Vault/Obsidian/10 - Projects/heygen-saas-startup/`
- **System architecture:** `~/.claude/SYSTEM.md`
