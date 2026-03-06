import * as i18n from './i18n.js';
import type { SiteDictionary } from '@/messages/types';

export const locales = i18n.locales as readonly ['en', 'zh'];
export const defaultLocale = i18n.defaultLocale as 'en';

export function isValidLocale(locale: string): locale is 'en' | 'zh' {
  return i18n.isValidLocale(locale);
}

export function normalizeLocale(locale: string): 'en' | 'zh' {
  return i18n.normalizeLocale(locale);
}

export function getDictionary(locale: string): SiteDictionary {
  return i18n.getDictionary(locale) as SiteDictionary;
}

export function switchLocaleInPath(pathname: string, targetLocale: string): string {
  return i18n.switchLocaleInPath(pathname, targetLocale);
}
