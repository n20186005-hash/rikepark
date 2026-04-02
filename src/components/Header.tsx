'use client';
import { useLocale, useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { defaultLocale, locales } from '@/i18n/config';

function isHomePathname(pathname: string): boolean {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return true;
  if (parts.length === 1 && locales.includes(parts[0] as (typeof locales)[number])) return true;
  return false;
}

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const isHome = useMemo(() => isHomePathname(pathname), [pathname]);
  const homeBase = locale === defaultLocale ? '/' : `/${locale}`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const barSolid = scrolled || !isHome;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: barSolid ? 'var(--bg-primary)' : 'transparent',
        borderBottom: barSolid ? '1px solid var(--border-color)' : 'none',
        backdropFilter: barSolid ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href={isHome ? '#' : homeBase} className="text-lg font-semibold tracking-tight" style={{ color: barSolid ? 'var(--text-primary)' : '#fff' }}>
          Rike Park
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: barSolid ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}>
          <a href={isHome ? '#intro' : `${homeBase}#intro`} className="hover:opacity-70 transition-opacity">{t('home')}</a>
          <a href={isHome ? '#gallery' : `${homeBase}#gallery`} className="hover:opacity-70 transition-opacity">{t('gallery')}</a>
          <a href={isHome ? '#reviews' : `${homeBase}#reviews`} className="hover:opacity-70 transition-opacity">{t('reviews')}</a>
          <a href={isHome ? '#guide' : `${homeBase}#guide`} className="hover:opacity-70 transition-opacity">{t('guide')}</a>
          <a href={isHome ? '#map' : `${homeBase}#map`} className="hover:opacity-70 transition-opacity">{t('map')}</a>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
