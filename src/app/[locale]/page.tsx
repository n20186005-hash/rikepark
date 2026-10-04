import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Guide from '@/components/Guide';
import MapEmbed from '@/components/MapEmbed';
import Sources from '@/components/Sources';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildLocalizedUrl } from '@/lib/seo';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tMeta = await getTranslations({ locale, namespace: 'meta' });
  const pageUrl = buildLocalizedUrl(locale);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${pageUrl}#website`,
        name: 'Rike Park Guide',
        url: 'https://www.rikepark.com'
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: tMeta('title'),
        description: tMeta('description'),
        isPartOf: {
          '@id': `${buildLocalizedUrl('en')}#website`
        }
      },
      {
        '@type': ['TouristAttraction', 'Park', 'Place'],
        '@id': `${pageUrl}#place`,
        name: 'Rike Park',
        alternateName: 'რიყის პარკი',
        description: tMeta('description'),
        url: pageUrl,
        image: [
          'https://www.rikepark.com/gallery/images%20(1).jpg',
          'https://www.rikepark.com/gallery/images%20(2).jpg',
          'https://www.rikepark.com/gallery/images%20(3).jpg'
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'MRV6+63X',
          addressLocality: 'Tbilisi',
          addressCountry: 'GE'
        },
        isAccessibleForFree: true,
        sameAs: 'https://maps.app.goo.gl/Q7N3jVHbakHzUTaYA',
        touristType: ['Families', 'Photographers', 'City travelers']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Rike Park',
            item: pageUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Intro />
      <Gallery />
      <Reviews />
      <Guide />
      <MapEmbed />
      <Sources />
    </>
  );
}
