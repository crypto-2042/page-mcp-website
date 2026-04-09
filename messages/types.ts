export type SiteDictionary = {
  nav: { home: string; docs: string; example: string; github: string };
  common: { languageLabel: string; apiLabel: string; descriptionLabel: string };
  home: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    sourceLabel: string;
    sourceCommit: string;
    installCommand: string;
    terminalHead: string;
    terminalLine1: string;
    terminalLine2: string;
    terminalStatus: string;
    cards: Array<{ title: string; body: string }>;
  };
  docs: {
    kicker: string;
    title: string;
    subtitle: string;
    quickStart: string;
    api: string;
    faq: string;
    packageTitle: string;
    packageCards: Array<{ name: string; desc: string; size: string }>;
  };
  quickStartPage: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  apiPage: {
    kicker: string;
    title: string;
    subtitle: string;
    coreTitle: string;
    coreMethods: Array<{ name: string; desc: string }>;
    adapterTitle: string;
    adapterMethods: Array<{ name: string; desc: string }>;
    chatTitle: string;
    chatMethods: Array<{ name: string; desc: string }>;
    reactTitle: string;
    reactMethods: Array<{ name: string; desc: string }>;
  };
  faqPage: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  footer: { text: string };
};
