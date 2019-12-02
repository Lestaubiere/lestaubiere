import NextI18Next from 'next-i18next';

export const nextI18next = new NextI18Next({
  browserLanguageDetection: false,
  defaultLanguage: 'nl',
  otherLanguages: ['fr', 'en'],
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  localeSubpaths: {
    nl: 'nl',
    fr: 'fr',
    en: 'en',
  },
});

export const includeDefaultNamespaces = (namespaces: string[]) =>
  ['navigation', 'widget', 'footer'].concat(namespaces);

export const appWithTranslation = nextI18next.appWithTranslation;
