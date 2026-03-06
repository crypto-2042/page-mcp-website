# Page MCP SDK Official Site Design

## Scope
Build an official multi-page documentation website for `https://github.com/crypto-2042/page-mcp-sdk` with Next.js App Router, bilingual support (English/Chinese), and a production-ready skeleton.

## Product Decisions
- Site type: Multi-page docs website
- Language support: EN + ZH switchable
- Stack: Next.js (App Router)
- Delivery depth (phase 1): Launchable skeleton

## Information Architecture
- `/{locale}`: Home
- `/{locale}/docs`: Docs home
- `/{locale}/docs/quick-start`: Quick start skeleton
- `/{locale}/docs/api`: API skeleton
- `/{locale}/docs/faq`: FAQ skeleton

Global navigation:
- Home
- Docs
- GitHub
- Language switcher (EN / 中文), preserving current path when switching locale

Primary CTAs:
- Get Started -> `/{locale}/docs/quick-start`
- View on GitHub -> `https://github.com/crypto-2042/page-mcp-sdk`

## Technical Architecture
Directory shape:
- `app/[locale]/layout.tsx`: Locale layout (header/footer/language switcher)
- `app/[locale]/page.tsx`: Home
- `app/[locale]/docs/page.tsx`: Docs home
- `app/[locale]/docs/quick-start/page.tsx`
- `app/[locale]/docs/api/page.tsx`
- `app/[locale]/docs/faq/page.tsx`
- `messages/en.ts`, `messages/zh.ts`: typed dictionaries
- `lib/i18n.ts`: locale validation + dictionary retrieval
- `components/site-header.tsx`, `components/language-switcher.tsx`
- `app/globals.css`: visual system inspired by `ui/code.html`

Implementation principles:
- Locale in URL is the single source of truth.
- Server-side dictionary selection per locale.
- No i18n framework in phase 1 (YAGNI).
- Static generation defaults for simple deployability.

## Data Flow & Interaction
- Incoming route locale (`en` or `zh`) validated in `lib/i18n.ts`.
- Pages fetch copy from locale dictionary and render server components.
- Language switch computes equivalent path with target locale and redirects.

Interactions:
- Locale switching preserves route suffix.
- Header nav highlights current section.
- CTA navigation and external GitHub link.
- Mobile-friendly navigation behavior.

## Error Handling
- Invalid locale -> redirect to default locale (`en`).
- Missing dictionary keys -> fail fast in dev (no silent fallback).
- Skeleton pages with explicit “Coming soon” sections where content is pending.

## Testing Scope (Phase 1)
- Route availability for all locale + docs pages.
- Locale switch correctness (same path, different locale).
- CTA/link correctness.
- Responsive nav usability on desktop/mobile.
- `next build` passes with no type errors.

## Out of Scope (Phase 1)
- Full API reference authoring
- MDX docs system
- Playground/live code execution
- Search and analytics integration

## Follow-up
Phase 2 can adopt `next-intl` or MDX-driven docs if content scale increases.
