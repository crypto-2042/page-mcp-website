const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidLocale, normalizeLocale, getDictionary, switchLocaleInPath } = require('../lib/i18n');

test('validates locales', () => {
  assert.equal(isValidLocale('en'), true);
  assert.equal(isValidLocale('zh'), true);
  assert.equal(isValidLocale('fr'), false);
});

test('normalizes invalid locale to default', () => {
  assert.equal(normalizeLocale('fr'), 'en');
});

test('returns dictionaries by locale', () => {
  assert.ok(getDictionary('en').home.title.length > 0);
  assert.ok(getDictionary('zh').home.title.length > 0);
});

test('switches locale in path', () => {
  assert.equal(switchLocaleInPath('/en/docs/api', 'zh'), '/zh/docs/api');
});
