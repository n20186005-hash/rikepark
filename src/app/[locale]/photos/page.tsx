import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { defaultLocale } from '@/i18n/config';
import { buildAlternateLanguages, buildLocalizedUrl } from '@/lib/seo';

const photos = Array.from({ length: 8 }, (_, index) => ({
  src: `/gallery/images (${index + 1}).jpg`,
  id: index + 1
}));

const pageCopy = {
  en: {
    title: 'Rike Park Photos: Peace Bridge, Cable Car & Tbilisi Views',
    description:
      'Browse Rike Park photos featuring the Peace Bridge, cable car, riverfront and panoramic views of Tbilisi.',
    intro:
      'This gallery focuses on the visual side of Rike Park: day views, evening light, the Peace Bridge, the cable car station and the riverside setting that makes the area so photogenic.',
    backHome: 'Back to Home'
  },
  ka: {
    title: 'რიყის პარკის ფოტოები: მშვიდობის ხიდი, საბაგირო და თბილისის ხედები',
    description:
      'დაათვალიერეთ რიყის პარკის ფოტოები: მშვიდობის ხიდი, საბაგირო, ნაპირსავალი და თბილისის პანორამული ხედები.',
    intro:
      'ეს გვერდი აერთიანებს რიყის პარკის ვიზუალურ მხარეს: დღის ხედებს, საღამოს განათებას, მშვიდობის ხიდს, საბაგიროს სადგურს და მდინარისპირა გარემოს.',
    backHome: 'მთავარ გვერდზე დაბრუნება'
  },
  ru: {
    title: 'Фото парка Рике: Мост Мира, канатная дорога и виды Тбилиси',
    description:
      'Посмотрите фотографии парка Рике: Мост Мира, канатная дорога, набережная и панорамные виды Тбилиси.',
    intro:
      'Эта страница собрала визуальные образы парка Рике: дневные кадры, вечерний свет, Мост Мира, станцию канатной дороги и набережную.',
    backHome: 'На главную'
  },
  'zh-hans': {
    title: 'Rike Park Photos: Peace Bridge, Cable Car & Tbilisi Views',
    description:
      'Browse Rike Park photos featuring the Peace Bridge, cable car, riverfront and panoramic views of Tbilisi.',
    intro:
      'This gallery focuses on the visual side of Rike Park: day views, evening light, the Peace Bridge, the cable car station and the riverside setting.',
    backHome: '返回首页'
  },
  'zh-hant': {
    title: 'Rike Park Photos: Peace Bridge, Cable Car & Tbilisi Views',
    description:
      'Browse Rike Park photos featuring the Peace Bridge, cable car, riverfront and panoramic views of Tbilisi.',
    intro:
      'This gallery focuses on the visual side of Rike Park: day views, evening light, the Peace Bridge, the cable car station and the riverside setting.',
    backHome: '返回首頁'
  }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = pageCopy[(locale as keyof typeof pageCopy) || 'en'] || pageCopy.en;
  const path = '/photos';

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: buildLocalizedUrl(locale, path),
      languages: buildAlternateLanguages(path)
    }
  };
}

export default async function PhotosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = pageCopy[(locale as keyof typeof pageCopy) || 'en'] || pageCopy.en;
  const tGallery = await getTranslations({ locale, namespace: 'gallery' });
  const captions = tGallery.raw('photos') as Array<{ caption: string }>;
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const pageUrl = buildLocalizedUrl(locale, '/photos');

  const imageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: copy.title,
    description: copy.description,
    url: pageUrl,
    hasPart: photos.map((photo, index) => ({
      '@type': 'ImageObject',
      contentUrl: `https://www.rikepark.com${photo.src.replace(/ /g, '%20')}`,
      caption: captions[index]?.caption || `Rike Park photo ${photo.id}`
    }))
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href={`${prefix}/`}
          className="inline-flex items-center gap-2 mb-10 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="font-medium">{copy.backHome}</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">{copy.title}</h1>
          <p className="text-lg leading-relaxed max-w-3xl text-[var(--text-secondary)]">{copy.intro}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <figure
              key={photo.id}
              className="overflow-hidden rounded-2xl"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
            >
              <img
                src={photo.src}
                alt={captions[index]?.caption || `Rike Park photo ${photo.id}`}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <figcaption className="p-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {captions[index]?.caption || `Rike Park photo ${photo.id}`}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://maps.app.goo.gl/Q7N3jVHbakHzUTaYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}
          >
            {tGallery('viewAllOnMaps')}
          </a>
        </div>
      </div>
    </main>
  );
}
