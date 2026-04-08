import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const baseUrl = 'https://www.rikepark.com';
  const path = '/blog';

  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}/ka${path}`,
    'en': `${baseUrl}/en${path}`,
    'ru': `${baseUrl}/ru${path}`,
    'zh-Hant': `${baseUrl}/zh-hant${path}`,
    'zh-Hans': `${baseUrl}/zh-hans${path}`,
    'x-default': `${baseUrl}/en${path}`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return {
    title: 'Tourist Blogs - Rike Park Guide',
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default async function BlogIndexPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);

  const tBlogs = await getTranslations({ locale, namespace: 'blogs' });
  
  const blogsItems = tBlogs.raw('items') as Array<{
    id: string;
    title: string;
    author: string;
    excerpt: string;
    content: string[];
  }>;

  const prefix = locale === defaultLocale ? '' : `/${locale}`;

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
      <div className="max-w-6xl mx-auto px-6">
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
        
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[var(--text-primary)]">
            {tBlogs('title')}
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            {locale === 'zh-hans' ? '发现其他游客的精彩旅程与心得' : 
             locale === 'zh-hant' ? '發現其他遊客的精彩旅程與心得' : 
             locale === 'ka' ? 'აღმოაჩინეთ სხვა ტურისტების საინტერესო მოგზაურობები და გამოცდილება' :
             locale === 'ru' ? 'Откройте для себя захватывающие путешествия и впечатления других туристов' : 
             'Discover exciting journeys and experiences from other tourists'}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsItems.map((blog) => (
            <Link 
              key={blog.id} 
              href={`${prefix}/blog/${blog.id}`}
              className="group block p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold text-xs border border-[var(--border-color)]">
                  {blog.author.replace(/^@/, '').charAt(0)}
                </span>
                <span className="text-sm font-medium text-[var(--accent)]">{blog.author}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-blue-500 transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-4">
                {blog.excerpt}
              </p>
              <div className="text-sm font-medium text-blue-500 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {locale === 'zh-hans' ? '阅读全文' : 
                 locale === 'zh-hant' ? '閱讀全文' : 
                 locale === 'ka' ? 'სრულად წაკითხვა' :
                 locale === 'ru' ? 'Читать далее' : 
                 'Read More'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}