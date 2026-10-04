import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { defaultLocale, locales } from '@/i18n/config';
import { getBlogArticle } from '@/lib/blog-content';
import { buildAlternateLanguages, buildLocalizedUrl } from '@/lib/seo';

export function generateStaticParams() {
  const slugs = ['peace-bridge-experience', 'cable-car-adventure'];
  const params: { locale: string; slug: string }[] = [];
  
  locales.forEach((locale) => {
    slugs.forEach((slug) => {
      params.push({ locale, slug });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const path = `/blog/${slug}`;
  const article = getBlogArticle(locale as 'en' | 'ka' | 'ru' | 'zh-hans' | 'zh-hant', slug);

  if (!article) {
    return {};
  }

  return {
    title: article.seoTitle,
    description: article.description,
    alternates: {
      canonical: buildLocalizedUrl(locale, path),
      languages: buildAlternateLanguages(path),
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  
  setRequestLocale(locale);

  const tGuide = await getTranslations({ locale, namespace: 'guide' });
  const blog = getBlogArticle(locale as 'en' | 'ka' | 'ru' | 'zh-hans' | 'zh-hant', slug);

  if (!blog) {
    notFound();
  }

  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const articleUrl = buildLocalizedUrl(locale, `/blog/${slug}`);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: blog.seoTitle,
        description: blog.description,
        author: {
          '@type': 'Organization',
          name: 'Rike Park Guide'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Rike Park Guide'
        },
        mainEntityOfPage: articleUrl,
        url: articleUrl
      },
      {
        '@type': 'FAQPage',
        mainEntity: blog.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Rike Park',
            item: buildLocalizedUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: locale === 'ka' ? 'ბლოგი' : locale === 'ru' ? 'Блог' : locale.startsWith('zh') ? '博客' : 'Blog',
            item: buildLocalizedUrl(locale, '/blog')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: blog.title,
            item: articleUrl
          }
        ]
      }
    ]
  };

  // Get back home text from privacy policy translation for simplicity, 
  // or define a local one:
  const backHomeTexts: Record<string, string> = {
    'zh-hans': '返回首页',
    'zh-hant': '返回首頁',
    'en': 'Back to Home',
    'ru': 'На главную',
    'ka': 'მთავარ გვერდზე დაბრუნება'
  };
  const backHome = backHomeTexts[locale] || backHomeTexts['en'];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          href={`${prefix}/`}
          className="inline-flex items-center gap-2 mb-10 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="font-medium">{backHome}</span>
        </Link>
        
        <article>
          <div className="flex justify-center mb-8 overflow-hidden rounded-lg">
            <iframe src="https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%BE%85%E8%A8%A5%E6%B2%B3%E5%8F%A3" style={{width: "728px", height: "90px", border: "none", maxWidth: "100%"}} frameBorder="0" scrolling="no" id="SB15266995"></iframe>
          </div>
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[var(--text-primary)]">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold text-sm border border-[var(--border-color)]">
                {blog.author.replace(/^@/, '').charAt(0)}
              </span>
              <p className="text-sm font-medium text-[var(--accent)]">
                {blog.author}
              </p>
            </div>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
              {blog.description}
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {blog.facts.map((fact) => (
              <div
                key={fact.label}
                className="p-4 rounded-xl"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
              >
                <p className="text-xs uppercase tracking-wide mb-2 text-[var(--text-muted)]">{fact.label}</p>
                <p className="text-sm md:text-base text-[var(--text-primary)]">{fact.value}</p>
              </div>
            ))}
          </section>

          <div className="space-y-6 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-12">
            {blog.intro.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-10">
            {blog.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">{section.heading}</h2>
                <div className="space-y-4 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)]">
                        <span className="mt-2 w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-14">
            <h2 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
              {locale === 'zh-hans' ? '常见问题' :
               locale === 'zh-hant' ? '常見問題' :
               locale === 'ka' ? 'ხშირად დასმული კითხვები' :
               locale === 'ru' ? 'Частые вопросы' :
               'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {blog.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-5 rounded-xl"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                >
                  <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">{faq.question}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Recommended Tours Section */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {tGuide('recommendedTours')}
          </h3>
          
          <div className="flex justify-center mb-8 overflow-hidden rounded-lg">
            <iframe src="https://www.trip.com/partners/ad/SB15353074?Allianceid=7974128&SID=300882170&trip_sub1=" style={{width: "728px", height: "90px", border: "none", maxWidth: "100%"}} frameBorder="0" scrolling="no" id="SB15353074"></iframe>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {(tGuide.raw('tours') as Array<{url: string, title: string}>).map((tour, idx) => (
              <a key={idx} href={tour.url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ border: '1px solid var(--border-color)' }}>
                <span className="text-[var(--text-primary)] hover:text-blue-500 font-medium">{tour.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Next/Prev simple navigation back to other blogs could go here, or just back home */}
        <div className="mt-16 pt-8 border-t border-[var(--border-color)]">
          <Link 
            href={`${prefix}/blog`}
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-full text-sm font-medium transition-colors"
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
            }}
          >
            {locale === 'zh-hans' ? '查看更多博客文章' : 
             locale === 'zh-hant' ? '查看更多博客文章' : 
             locale === 'ka' ? 'მეტის ნახვა' :
             locale === 'ru' ? 'Смотреть больше блогов' : 
             'View More Blogs'}
          </Link>
        </div>
      </div>
    </main>
  );
}
