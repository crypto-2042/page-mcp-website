const en = require('../messages/en');
const zh = require('../messages/zh');

const locales = ['en', 'zh'];
const defaultLocale = 'en';

function isValidLocale(locale) {
  return locales.includes(locale);
}

function normalizeLocale(locale) {
  return isValidLocale(locale) ? locale : defaultLocale;
}

function getDictionary(locale) {
  const safeLocale = normalizeLocale(locale);
  return safeLocale === 'zh' ? zh : en;
}

function switchLocaleInPath(pathname, targetLocale) {
  const safeTarget = normalizeLocale(targetLocale);
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) {
    return `/${safeTarget}`;
  }

  if (isValidLocale(parts[0])) {
    parts[0] = safeTarget;
    return `/${parts.join('/')}`;
  }

  return `/${safeTarget}/${parts.join('/')}`;
}

module.exports = {
  locales,
  defaultLocale,
  isValidLocale,
  normalizeLocale,
  getDictionary,
  switchLocaleInPath
};
