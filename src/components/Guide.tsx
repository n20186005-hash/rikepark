'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';

export default function Guide() {
  const t = useTranslations('guide');
  const whatInsideItems = t.raw('whatInside.items') as string[];
  const tipsItems = t.raw('tips.items') as string[];
  const compHeaders = t.raw('comparison.headers') as string[];
  const compRows = t.raw('comparison.rows') as string[][];
  
  const locale = useLocale();
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  
  const tBlogs = useTranslations('blogs');
  const blogsItems = tBlogs.raw('items') as Array<{
    id: string;
    title: string;
    author: string;
    excerpt: string;
  }>;

  return (
    <section id="guide" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Visit Duration */}
          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('visitDuration.title')}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('visitDuration.text')}
            </p>
          </div>

          {/* Worth It */}
          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('worthIt.title')}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('worthIt.text')}
            </p>
          </div>
        </div>

        {/* What Inside */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('whatInside.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatInsideItems.map((item: string, i: number) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
              >
                <span className="text-lg">
                  {['\u{1F3DB}\uFE0F', '\u271D\uFE0F', '\u26EA', '\u{1F30A}', '\u{1FA9C}'][i] || '\u{1F4CD}'}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('tips.title')}
          </h3>
          <ol className="space-y-3">
            {tipsItems.map((tip: string, i: number) => (
              <li key={i} className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                >
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('comparison.title')}
          </h3>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  {compHeaders.map((h: string, i: number) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compRows.map((row: string[], i: number) => (
                  <tr key={i}>
                    {row.map((cell: string, j: number) => (
                      <td key={j} className={j === 0 ? 'font-medium' : ''}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommended Tours Section */}
        <div className="mb-16 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            Recommended Tours
          </h3>
          
          <div className="flex justify-center mb-8">
            <iframe src="https://www.trip.com/partners/ad/SB15271426?Allianceid=7974128&SID=300882170&trip_sub1=" style={{width: "728px", height: "90px", border: "none"}} frameBorder="0" scrolling="no" id="SB15271426"></iframe>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <a href="https://www.trip.com/t/pJoQPuLZDU2" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-[var(--text-primary)] hover:text-blue-500 font-medium">從第比利斯出發：姆茨赫塔、十字修道院、哥里及烏普利斯齊赫王朝一日遊</span>
            </a>
            <a href="https://www.trip.com/t/hIOsasWZDU2" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-[var(--text-primary)] hover:text-blue-500 font-medium">第比利斯：姆茨赫塔十字市集、喬治亞紀事紀念碑及葡萄酒之旅</span>
            </a>
            <a href="https://www.trip.com/t/ZQ0oOYYZDU2" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-[var(--text-primary)] hover:text-blue-500 font-medium">從第比利斯出發的魔法卡赫季之旅 – 西格納吉、博德貝與編年史之旅</span>
            </a>
            <a href="https://www.trip.com/t/4UzsRFbZDU2" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-[var(--text-primary)] hover:text-blue-500 font-medium">第比利斯：古多里及卡茲貝吉一日遊（含四驅車）</span>
            </a>
            <a href="https://www.trip.com/t/ssPwvDdZDU2" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-[var(--text-primary)] hover:text-blue-500 font-medium">第比利斯：卡赫季地區，西格納吉之旅連9次品酒體驗</span>
            </a>
            <a href="https://www.trip.com/t/7p32n1fZDU2" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-[var(--text-primary)] hover:text-blue-500 font-medium">西格納吉（愛之城）+女修道院+紅酒體驗+第比利斯海（包車）</span>
            </a>
            <a href="https://www.trip.com/t/8QotX3hZDU2" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-[var(--text-primary)] hover:text-blue-500 font-medium">慢遊第比利斯海：將日子浸在湖藍與晴空裡的一天【格魯吉亞】</span>
            </a>
            <a href="https://www.trip.com/t/sLLlgCjZDU2" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-[var(--text-primary)] hover:text-blue-500 font-medium">第比利斯高架電車道+格魯吉亞之母雕像+里克公園+第比利斯海</span>
            </a>
          </div>
        </div>

        {/* Tourist Blogs Section */}
        <div className="pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {tBlogs('title')}
            </h3>
            <Link
              href={`${prefix}/blog`}
              className="text-sm font-medium hover:underline flex items-center gap-1"
              style={{ color: 'var(--accent)' }}
            >
              {locale === 'zh-hans' ? '查看全部博客' : 
               locale === 'zh-hant' ? '查看全部博客' : 
               locale === 'ka' ? 'ყველა ბლოგის ნახვა' :
               locale === 'ru' ? 'Посмотреть все блоги' : 
               'View all blogs'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogsItems.slice(0, 4).map((blog, i) => (
              <Link
                key={i}
                href={`${prefix}/blog/${blog.id}`}
                className="group block p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: 'var(--bg-card)', 
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h4 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {blog.title}
                </h4>
                <p className="text-xs font-medium mb-3" style={{ color: 'var(--accent)' }}>
                  {blog.author}
                </p>
                <p className="text-sm leading-relaxed line-clamp-3 mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium transition-colors group-hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                  <span>{locale === 'zh-hans' ? '阅读全文' : locale === 'zh-hant' ? '閱讀全文' : locale === 'ka' ? 'სრულად წაკითხვა' : locale === 'ru' ? 'Читать далее' : 'Read more'}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
