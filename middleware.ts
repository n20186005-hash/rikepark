import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed' // Only adds prefix when it's not the default locale
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ka|en|ru|zh-hant|zh-hans)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
