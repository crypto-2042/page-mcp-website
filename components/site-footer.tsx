import type { SiteDictionary } from '@/messages/types';

type Props = {
  dictionary: SiteDictionary;
};

export function SiteFooter({ dictionary }: Props) {
  return (
    <footer className="site-footer">
      <div className="container">{dictionary.footer.text}</div>
    </footer>
  );
}
