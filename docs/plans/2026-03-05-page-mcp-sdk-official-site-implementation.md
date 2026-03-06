# Page MCP SDK Official Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a launchable bilingual (EN/ZH) Next.js official website skeleton for page-mcp-sdk with Home + Docs structure.

**Architecture:** Use Next.js App Router with locale-prefixed routes (`/en`, `/zh`) as the single source of truth. Keep i18n lightweight via typed local dictionaries and centralized locale validation helpers. Build reusable layout/header/switcher components and style with a cyber-tech visual system inspired by `ui/code.html`.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, ESLint, PostCSS/CSS

---

### Task 1: Initialize Next.js app skeleton

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `next-env.d.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `.gitignore`
- Create: `eslint.config.mjs`

**Step 1: Write the failing test**

Create basic route test placeholder file:
- `tests/routes.test.ts`

```ts
import { describe, it, expect } from 'vitest';

describe('route placeholders', () => {
  it('ensures test runner is wired', () => {
    expect(1).toBe(1);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because test tooling is not configured yet.

**Step 3: Write minimal implementation**

Create minimal Next.js app files and scripts in `package.json` so app boots and lint/build commands are available.

**Step 4: Run test/build to verify baseline passes**

Run: `npm run lint && npm run build`
Expected: PASS

**Step 5: Commit**

```bash
git add package.json next.config.ts tsconfig.json next-env.d.ts app/layout.tsx app/page.tsx app/globals.css .gitignore eslint.config.mjs
git commit -m "chore: initialize next.js app skeleton"
```

### Task 2: Add locale infrastructure and dictionaries

**Files:**
- Create: `lib/i18n.ts`
- Create: `messages/en.ts`
- Create: `messages/zh.ts`
- Create: `messages/types.ts`
- Modify: `app/page.tsx`

**Step 1: Write the failing test**

Create:
- `tests/i18n.test.ts`

```ts
import { describe, it, expect } from 'vitest';
import { isValidLocale, normalizeLocale } from '../lib/i18n';

describe('i18n locale helpers', () => {
  it('validates locales', () => {
    expect(isValidLocale('en')).toBe(true);
    expect(isValidLocale('zh')).toBe(true);
    expect(isValidLocale('fr')).toBe(false);
  });

  it('normalizes invalid locale to default', () => {
    expect(normalizeLocale('fr')).toBe('en');
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- i18n.test.ts`
Expected: FAIL with missing module/functions.

**Step 3: Write minimal implementation**

Implement locale constants, validation, normalization, dictionary getter, and typed dictionary shape.

**Step 4: Run test to verify it passes**

Run: `npm test -- i18n.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add lib/i18n.ts messages/en.ts messages/zh.ts messages/types.ts tests/i18n.test.ts
git commit -m "feat: add lightweight locale and dictionary infrastructure"
```

### Task 3: Implement locale routes and docs pages

**Files:**
- Create: `app/[locale]/layout.tsx`
- Create: `app/[locale]/page.tsx`
- Create: `app/[locale]/docs/page.tsx`
- Create: `app/[locale]/docs/quick-start/page.tsx`
- Create: `app/[locale]/docs/api/page.tsx`
- Create: `app/[locale]/docs/faq/page.tsx`
- Create: `app/[locale]/not-found.tsx`

**Step 1: Write the failing test**

Create:
- `tests/dictionaries.test.ts`

```ts
import { describe, it, expect } from 'vitest';
import { getDictionary } from '../lib/i18n';

describe('dictionaries', () => {
  it('returns home title in both locales', () => {
    expect(getDictionary('en').home.title.length).toBeGreaterThan(0);
    expect(getDictionary('zh').home.title.length).toBeGreaterThan(0);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- dictionaries.test.ts`
Expected: FAIL if keys/pages are not wired.

**Step 3: Write minimal implementation**

Build locale-prefixed pages and render dictionary content.

**Step 4: Run tests/build**

Run: `npm test -- dictionaries.test.ts && npm run build`
Expected: PASS

**Step 5: Commit**

```bash
git add app/[locale] lib/i18n.ts messages tests/dictionaries.test.ts
git commit -m "feat: add locale-prefixed home and docs route skeleton"
```

### Task 4: Build shared header, language switch, and navigation state

**Files:**
- Create: `components/site-header.tsx`
- Create: `components/language-switcher.tsx`
- Create: `components/site-footer.tsx`
- Modify: `app/[locale]/layout.tsx`
- Modify: `lib/i18n.ts`

**Step 1: Write the failing test**

Create:
- `tests/path-switch.test.ts`

```ts
import { describe, it, expect } from 'vitest';
import { switchLocaleInPath } from '../lib/i18n';

describe('switchLocaleInPath', () => {
  it('preserves suffix path while switching locale', () => {
    expect(switchLocaleInPath('/en/docs/api', 'zh')).toBe('/zh/docs/api');
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- path-switch.test.ts`
Expected: FAIL with missing function.

**Step 3: Write minimal implementation**

Implement path-switch utility and hook components into layout.

**Step 4: Run test/build**

Run: `npm test -- path-switch.test.ts && npm run build`
Expected: PASS

**Step 5: Commit**

```bash
git add components app/[locale]/layout.tsx lib/i18n.ts tests/path-switch.test.ts
git commit -m "feat: add shared nav and locale switcher"
```

### Task 5: Apply visual system inspired by ui/code.html

**Files:**
- Modify: `app/globals.css`
- Modify: `app/[locale]/page.tsx`
- Modify: `components/site-header.tsx`

**Step 1: Write the failing test**

Create style smoke test placeholder:
- `tests/smoke.test.ts`

```ts
import { describe, it, expect } from 'vitest';

describe('smoke', () => {
  it('runs test suite', () => {
    expect(true).toBe(true);
  });
});
```

**Step 2: Run tests to verify baseline**

Run: `npm test`
Expected: PASS baseline.

**Step 3: Write implementation**

Add CSS variables, gradients, scanline overlay effect, and cyber-tech typography hierarchy while maintaining readability.

**Step 4: Run lint/build**

Run: `npm run lint && npm run build`
Expected: PASS

**Step 5: Commit**

```bash
git add app/globals.css app/[locale]/page.tsx components/site-header.tsx tests/smoke.test.ts
git commit -m "style: apply cyber-tech visual system for official site"
```

### Task 6: Verification and final docs

**Files:**
- Modify: `README.md`

**Step 1: Verify locally**

Run:
- `npm run lint`
- `npm run test`
- `npm run build`

Expected: All PASS.

**Step 2: Manual checks**

- Open `/en`, `/zh`, `/en/docs`, `/zh/docs`, and docs subpages.
- Confirm locale switching preserves path.
- Confirm CTA targets and GitHub link correctness.

**Step 3: Document usage**

Add `README.md` with install/run/build instructions and route map.

**Step 4: Commit**

```bash
git add README.md
git commit -m "docs: add local development and route documentation"
```
