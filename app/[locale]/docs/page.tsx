import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary, isValidLocale } from '@/lib/i18n';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DocsPage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="container docs-wrap">
      <section className="panel docs-hero angular-cut">
        <p className="kicker">SDK DOCS</p>
        <h1 className="title">{dict.docs.title}</h1>
        <p>{dict.docs.subtitle}</p>
      </section>

      <section className="docs-links">
        <Link className="panel docs-link angular-cut" href={`/${locale}/docs/quick-start`}>
          {dict.docs.quickStart}
        </Link>
        <Link className="panel docs-link angular-cut" href={`/${locale}/docs/api`}>
          {dict.docs.api}
        </Link>
        <Link className="panel docs-link angular-cut" href={`/${locale}/docs/faq`}>
          {dict.docs.faq}
        </Link>
      </section>

      <section className="packages">
        <h2 className="title section-title">{dict.docs.packageTitle}</h2>
        <div className="package-grid">
          {dict.docs.packageCards.map((pkg) => (
            <article className="panel package-card" key={pkg.name}>
              <div className="package-top">
                <h3>{pkg.name}</h3>
                <span>{pkg.size}</span>
              </div>
              <p>{pkg.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
