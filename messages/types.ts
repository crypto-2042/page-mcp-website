export type SiteDictionary = {
  nav: { home: string; docs: string; github: string };
  common: { languageLabel: string };
  home: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    sourceLabel: string;
    sourceCommit: string;
    installCommand: string;
    cards: Array<{ title: string; body: string }>;
  };
  docs: {
    title: string;
    subtitle: string;
    quickStart: string;
    api: string;
    faq: string;
    packageTitle: string;
    packageCards: Array<{ name: string; desc: string; size: string }>;
  };
  quickStartPage: {
    title: string;
    subtitle: string;
    installTitle: string;
    installCode: string;
    exampleTitle: string;
    exampleCode: string;
    tipsTitle: string;
    tips: string[];
  };
  apiPage: {
    title: string;
    subtitle: string;
    coreTitle: string;
    coreMethods: Array<{ name: string; desc: string }>;
    chatTitle: string;
    chatMethods: Array<{ name: string; desc: string }>;
    reactTitle: string;
    reactMethods: Array<{ name: string; desc: string }>;
  };
  faqPage: {
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  footer: { text: string };
};
