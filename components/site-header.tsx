'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GITHUB_URL } from '@/lib/site';
import type { SiteDictionary } from '@/messages/types';
import { LanguageSwitcher } from '@/components/language-switcher';

type Props = {
  locale: 'en' | 'zh';
  dictionary: SiteDictionary;
};

export function SiteHeader({ locale, dictionary }: Props) {
  const pathname = usePathname() || `/${locale}`;
  const isDocs = pathname.includes('/docs');

  return (
    <header className="site-header panel">
      <div className="container header-inner">
        <Link href={`/${locale}`} className="brand title">
          PAGE MCP SDK
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href={`/${locale}`} className={!isDocs ? 'active' : ''}>
            {dictionary.nav.home}
          </Link>
          <Link href={`/${locale}/docs`} className={isDocs ? 'active' : ''}>
            {dictionary.nav.docs}
          </Link>
          <a href="https://example.page-mcp.org" target="_blank" rel="noreferrer">
            {dictionary.nav.example}
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            {dictionary.nav.github}
          </a>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
