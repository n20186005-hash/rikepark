import { defaultLocale } from '@/i18n/config';

export const siteUrl = 'https://www.rikepark.com';

export function buildLocalizedUrl(locale: string, path = '') {
  return locale === defaultLocale ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;
}

export function buildAlternateLanguages(path = '') {
  return {
    ka: `${siteUrl}/ka${path}`,
    en: `${siteUrl}${path}`,
    ru: `${siteUrl}/ru${path}`,
    'zh-Hant': `${siteUrl}/zh-hant${path}`,
    'zh-Hans': `${siteUrl}/zh-hans${path}`,
    'x-default': `${siteUrl}${path}`,
  } as const;
}
