'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { switchLocaleInPath } from '@/lib/i18n';

type Props = {
  locale: 'en' | 'zh';
};

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div className="lang-switch" aria-label="Language switcher">
      <Link className={locale === 'en' ? 'active' : ''} href={switchLocaleInPath(pathname, 'en')}>
        EN
      </Link>
      <span>/</span>
      <Link className={locale === 'zh' ? 'active' : ''} href={switchLocaleInPath(pathname, 'zh')}>
        中文
      </Link>
    </div>
  );
}
