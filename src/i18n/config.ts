export const locales = ['ka', 'en', 'ru', 'zh-hant', 'zh-hans'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];
