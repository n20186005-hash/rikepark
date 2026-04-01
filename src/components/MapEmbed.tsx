'use client';
import { useTranslations } from 'next-intl';

export default function MapEmbed() {
  const t = useTranslations('map');

  return (
    <section id="map" className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('address')}
        </p>

        <div className="map-container rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.2748301293245!2d44.81012934869022!3d41.693002404478634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cfae6b42e2d%3A0x7113a448ec104f5b!2sRike%20Park!5e0!3m2!1sen!2sus!4v1775043325385!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://maps.app.goo.gl/kiQSQyEsMRfZL4Vg7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('openMaps')}
          </a>
        </div>
      </div>
    </section>
  );
}