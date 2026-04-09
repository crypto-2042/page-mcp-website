# Page MCP Official Website

Bilingual Next.js website for the Page MCP ecosystem. It serves the public-facing homepage plus SDK docs, while also reflecting how the browser extension fits into the overall Page MCP workflow.

## What This Site Covers

- marketing homepage for **Page MCP**
- bilingual docs in English and Chinese
- SDK-focused reference pages:
  - `/[locale]/docs/quick-start`
  - `/[locale]/docs/api`
  - `/[locale]/docs/faq`
- shared positioning for the SDK, browser extension, WebMCP adapter, and chat/widget ecosystem

Current locales:
- `/en`
- `/zh`

## Development

```bash
npm install
npm run dev
```

Useful verification commands:

```bash
npm run test   # node:test checks for i18n utilities
npm run lint   # eslint
npm run build  # production build
```

## Content Sources of Truth

When updating website copy, verify claims against:

- `../page-mcp-sdk/README.md`
- `../page-mcp-sdk/packages/*/README.md`
- `../page-mcp-plugin/README.md`

The website should describe **currently shipped behavior only**. Do not add roadmap promises or unsupported claims.

## Project Structure

- `app/` — routes, metadata, OG/Twitter image generation
- `content/docs/` — MDX docs content (`en/`, `zh/`)
- `messages/` — bilingual UI copy dictionaries
- `components/` — shared layout/navigation pieces
- `lib/` — i18n and site config helpers
- `tests/` — lightweight site and locale checks

## SEO & Verification

- `robots.txt`: `/robots.txt`
- `sitemap.xml`: `/sitemap.xml`
- Open Graph image: `/opengraph-image`
- Twitter image: `/twitter-image`

Optional Vercel env vars:
- `GOOGLE_SITE_VERIFICATION`
- `BING_SITE_VERIFICATION`
