import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n/config';

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

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  setRequestLocale(locale);
  const baseUrl = 'https://www.rikepark.com';
  const path = `/blog/${slug}`;

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
    title: `Tourist Check-in Notes - Chronicles of Georgia`,
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default async function BlogPage({ params }: { params: { slug: string, locale: string } }) {
  const { slug, locale } = params;
  
  setRequestLocale(locale);

  const tBlogs = await getTranslations({ locale, namespace: 'blogs' });
  
  const blogsItems = tBlogs.raw('items') as Array<{
    id: string;
    title: string;
    author: string;
    excerpt: string;
    content: string[];
  }>;

  const blog = blogsItems.find(b => b.id === slug);

  if (!blog) {
    notFound();
  }

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
          </header>

          <div className="space-y-6 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
            {(blog.content || [blog.excerpt]).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>

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