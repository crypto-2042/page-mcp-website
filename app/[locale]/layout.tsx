import type { ReactNode } from 'react';
import { notFound, redirect } from 'next/navigation';
import { getDictionary, isValidLocale, locales, normalizeLocale } from '@/lib/i18n';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
