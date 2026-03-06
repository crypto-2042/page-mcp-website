import { notFound } from 'next/navigation';
import { getDictionary, isValidLocale } from '@/lib/i18n';

type Props = {
  params: Promise<{ locale: string }>;
};

type ApiRow = { name: string; desc: string };

type ApiGroup = {
  id: string;
  title: string;
  rows: ApiRow[];
};

function ApiTable({ rows }: { rows: ApiRow[] }) {
  return (
    <div className="api-table-wrap">
      <table className="api-table">
        <thead>
          <tr>
            <th>API</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <code>{row.name}</code>
              </td>
              <td>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ApiPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const groups: ApiGroup[] = [
    { id: 'core', title: dict.apiPage.coreTitle, rows: dict.apiPage.coreMethods },
    { id: 'chat', title: dict.apiPage.chatTitle, rows: dict.apiPage.chatMethods },
    { id: 'react', title: dict.apiPage.reactTitle, rows: dict.apiPage.reactMethods }
  ];

  return (
    <div className="container docs-content docs-detail">
      <section className="panel section-block angular-cut">
        <p className="kicker">API REFERENCE</p>
        <h1 className="title">{dict.apiPage.title}</h1>
        <p>{dict.apiPage.subtitle}</p>
      </section>

      <nav className="panel section-block api-index" aria-label="API package index">
        {groups.map((group) => (
          <a key={group.id} href={`#${group.id}`}>
            {group.title}
          </a>
        ))}
      </nav>

      {groups.map((group) => (
        <details className="panel section-block api-group" key={group.id} id={group.id} open>
          <summary className="title section-title">{group.title}</summary>
          <ApiTable rows={group.rows} />
        </details>
      ))}
    </div>
  );
}
