import type { ComponentType } from 'react';

const docsMdx = {
  quickStart: {
    en: () => import('@/content/docs/en/quick-start.mdx'),
    zh: () => import('@/content/docs/zh/quick-start.mdx')
  },
  faq: {
    en: () => import('@/content/docs/en/faq.mdx'),
    zh: () => import('@/content/docs/zh/faq.mdx')
  }
} as const;

type Locale = 'en' | 'zh';
type DocSlug = keyof typeof docsMdx;

export async function loadDocMdx(slug: DocSlug, locale: Locale): Promise<ComponentType> {
  const mod = await docsMdx[slug][locale]();
  return mod.default;
}
