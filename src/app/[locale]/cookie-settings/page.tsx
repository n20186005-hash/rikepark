import { CookieSettingsClient } from './client';
import { defaultLocale } from '@/i18n/config';
import { buildAlternateLanguages, buildLocalizedUrl } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const path = '/cookie-settings';

  return {
    title: 'Cookie Settings - Rike Park Guide',
    alternates: {
      canonical: buildLocalizedUrl(locale, path),
      languages: buildAlternateLanguages(path),
    },
  };
}

export default async function CookieSettingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Client-side component for state management
  return <CookieSettingsClient locale={locale} />;
}
