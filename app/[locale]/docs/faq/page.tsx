import { notFound } from 'next/navigation';
import { getDictionary, isValidLocale } from '@/lib/i18n';
import { loadDocMdx } from '@/lib/docs-content';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const Content = await loadDocMdx('faq', locale);

  return (
    <div className="container docs-content docs-detail">
      <section className="panel section-block angular-cut">
        <p className="kicker">FAQ</p>
        <h1 className="title">{dict.faqPage.title}</h1>
        <p>{dict.faqPage.subtitle}</p>
      </section>

      <section className="panel section-block mdx-content">
        <Content />
      </section>
    </div>
  );
}
