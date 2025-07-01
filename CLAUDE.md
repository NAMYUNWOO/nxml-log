# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NXML LOG - 동호회 정기모임 활동 기록 어플리케이션 (Club regular meeting activity log application)

## Development Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run Next.js linting
```

## Architecture

This is a Next.js 15 application using:
- **App Router** (files in `/app` directory)
- **TypeScript** with strict mode enabled
- **Tailwind CSS** for styling
- **React 19** for UI components

### App Router Architecture

- All pages and layouts live in the `/app` directory
- `layout.tsx` serves as the root layout wrapping all pages
- `page.tsx` files define route pages
- Server Components are the default (add `'use client'` directive for client components)
- API routes can be created as `route.ts` files within the app directory

## Project Structure

- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with HTML structure and metadata
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind directives
- Configuration files at root level (tsconfig.json, tailwind.config.js, etc.)

## Key Technical Details

- **Path Alias**: Use `@/*` to import from project root
- **TypeScript**: Strict mode is enabled - ensure proper typing
- **Styling**: Tailwind CSS classes are preferred over custom CSS
- **Language**: Application is in Korean (ko locale)
- **Image Optimization**: Use Next.js `Image` component from `next/image`
- **Font Optimization**: Geist font family is configured via `next/font/google`

## Testing

No testing framework is currently configured. When adding tests, consider:
- Jest with React Testing Library for unit/integration tests
- Playwright or Cypress for E2E tests

## Current State

The application is in initial setup phase with only a basic page displaying "NXML LOG". Ready for feature development.