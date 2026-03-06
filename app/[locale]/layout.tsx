import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getDictionary, isValidLocale, locales, normalizeLocale } from '@/lib/i18n';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SITE_URL } from '@/lib/site';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isValidLocale(locale) ? locale : normalizeLocale(locale);

  return {
    alternates: {
      canonical: `${SITE_URL}/${safeLocale}`,
      languages: {
        en: `${SITE_URL}/en`,
        zh: `${SITE_URL}/zh`,
        'x-default': `${SITE_URL}/en`
      }
    }
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locale) {
    notFound();
  }

  if (!isValidLocale(locale)) {
    redirect(`/${normalizeLocale(locale)}`);
  }

  const dictionary = getDictionary(locale);

  return (
    <div className="scanlines app-shell">
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main>{children}</main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
