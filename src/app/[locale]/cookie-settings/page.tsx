import { useLocale } from 'next-intl';
import { CookieSettingsClient } from './client';
import { defaultLocale } from '@/i18n/config';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const baseUrl = 'https://www.rikepark.com';
  const path = '/cookie-settings';

  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}/ka${path}`,
    'en': `${baseUrl}/en${path}`,
    'ru': `${baseUrl}/ru${path}`,
    'zh-hant': `${baseUrl}/zh-hant${path}`,
    'zh-hans': `${baseUrl}/zh-hans${path}`,
    'x-default': `${baseUrl}/en${path}`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return {
    title: 'Cookie Settings - Rike Park Guide',
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default function CookieSettingsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // Client-side component for state management
  return <CookieSettingsClient locale={locale} />;
}