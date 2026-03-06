import { notFound } from 'next/navigation';
import { getDictionary, isValidLocale } from '@/lib/i18n';
import { loadDocMdx } from '@/lib/docs-content';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function QuickStartPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const Content = await loadDocMdx('quickStart', locale);

  return (
    <div className="container docs-content docs-detail">
      <section className="panel section-block angular-cut">
        <p className="kicker">QUICK START</p>
        <h1 className="title">{dict.quickStartPage.title}</h1>
        <p>{dict.quickStartPage.subtitle}</p>
      </section>

      <section className="panel section-block mdx-content">
        <Content />
      </section>
    </div>
  );
}
