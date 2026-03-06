import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary, isValidLocale } from '@/lib/i18n';
import { GITHUB_URL, SITE_NAME, SITE_URL } from '@/lib/site';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: locale,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/${locale}/docs`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'SoftwareApplication',
        name: SITE_NAME,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        url: SITE_URL,
        codeRepository: GITHUB_URL,
        keywords: 'webmcp, ai mcp, mcp skills, mcp tools, webmcp polyfill'
      }
    ]
  };

  return (
    <div className="container home-wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero panel angular-cut">
        <div className="hero-grid">
          <div>
            <p className="kicker">{dict.home.kicker}</p>
            <h1 className="title hero-title">{dict.home.title}</h1>
            <p className="hero-subtitle">{dict.home.subtitle}</p>

            <div className="hero-actions">
              <Link className="btn btn-primary" href={`/${locale}/docs/quick-start`}>
                {dict.home.primaryCta}
              </Link>
              <a className="btn btn-ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
                {dict.home.secondaryCta}
              </a>
            </div>

            <div className="source-badge">
              <span>{dict.home.sourceLabel}</span>
              <strong>{dict.home.sourceCommit}</strong>
            </div>
          </div>

          <aside className="terminal panel angular-cut-inverse">
            <div className="terminal-head">root@page-mcp:~</div>
            <code>$ {dict.home.installCommand}</code>
            <code>&gt; registerTool + registerResource + registerSkill</code>
            <code>&gt; connect client and invoke by MCP RPC</code>
            <code className="ok">status: ready</code>
          </aside>
        </div>
      </section>

      <section className="card-grid">
        {dict.home.cards.map((card) => (
          <article key={card.title} className="panel card angular-cut">
            <h2 className="title card-title">{card.title}</h2>
            <p>{card.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
