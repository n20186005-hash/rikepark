'use client';
import Link from 'next/link';
import { useState } from 'react';
import { defaultLocale } from '@/i18n/config';

export function CookieSettingsClient({ locale }: { locale: string }) {
  const [analyticsAccepted, setAnalyticsAccepted] = useState(true);
  const [marketingAccepted, setMarketingAccepted] = useState(true);

  const content = {
    en: {
      title: "Cookie Settings",
      lastUpdated: "Last updated: March 2026",
      intro: "We use cookies to enhance your browsing experience. You can choose to accept or decline certain types of cookies. Please note that disabling some cookies may affect the functionality of the website.",
      sections: [
        {
          title: "Strictly Necessary Cookies",
          status: "Always Active",
          text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or language."
        },
        {
          title: "Analytics Cookies",
          text: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most popular and see how visitors move around the site.",
          action: "Accept Analytics Cookies",
          state: analyticsAccepted,
          setState: setAnalyticsAccepted
        },
        {
          title: "Marketing Cookies",
          text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.",
          action: "Accept Marketing Cookies",
          state: marketingAccepted,
          setState: setMarketingAccepted
        }
      ],
      backHome: "Back to Home"
    },
    'zh-hant': {
      title: "Cookie 設定",
      lastUpdated: "最後更新：2026年3月",
      intro: "我們使用 Cookie 來增強您的瀏覽體驗。您可以選擇接受或拒絕某些類型的 Cookie。請注意，停用某些 Cookie 可能會影響網站的功能。",
      sections: [
        {
          title: "絕對必要的 Cookie",
          status: "始終處於活動狀態",
          text: "這些 Cookie 是網站運作所必需的，無法在我們的系統中關閉。它們通常僅為了回應您相當於請求服務的操作而設定，例如設定您的隱私偏好或語言。"
        },
        {
          title: "分析 Cookie",
          text: "這些 Cookie 允許我們計算訪問量和流量來源，以便我們可以測量和改善我們網站的性能。它們幫助我們了解哪些頁面最受歡迎，並了解訪問者在網站上的活動情況。",
          action: "接受分析 Cookie",
          state: analyticsAccepted,
          setState: setAnalyticsAccepted
        },
        {
          title: "行銷 Cookie",
          text: "這些 Cookie 可能由我們的廣告合作夥伴透過我們的網站設定。這些公司可能會使用它們來建立您的興趣概況，並在其他網站上向您展示相關廣告。",
          action: "接受行銷 Cookie",
          state: marketingAccepted,
          setState: setMarketingAccepted
        }
      ],
      backHome: "返回首頁"
    },
    'zh-hans': {
      title: "Cookie 设置",
      lastUpdated: "最后更新：2026年3月",
      intro: "我们使用 Cookie 来增强您的浏览体验。您可以选择接受或拒绝某些类型的 Cookie。请注意，停用某些 Cookie 可能会影响网站的功能。",
      sections: [
        {
          title: "绝对必要的 Cookie",
          status: "始终处于活动状态",
          text: "这些 Cookie 是网站运作所必需的，无法在我们的系统中关闭。它们通常仅为了回应您相当于请求服务的操作而设定，例如设置您的隐私偏好或语言。"
        },
        {
          title: "分析 Cookie",
          text: "这些 Cookie 允许我们计算访问量和流量来源，以便我们可以测量和改善我们网站的性能。它们帮助我们了解哪些页面最受欢迎，并了解访问者在网站上的活动情况。",
          action: "接受分析 Cookie",
          state: analyticsAccepted,
          setState: setAnalyticsAccepted
        },
        {
          title: "营销 Cookie",
          text: "这些 Cookie 可能由我们的广告合作伙伴通过我们的网站设定。这些公司可能会使用它们来建立您的兴趣概况，并在其他网站上向您展示相关广告。",
          action: "接受营销 Cookie",
          state: marketingAccepted,
          setState: setMarketingAccepted
        }
      ],
      backHome: "返回首页"
    },
    ru: {
      title: "Настройки Cookie",
      lastUpdated: "Последнее обновление: Март 2026",
      intro: "Мы используем файлы cookie для улучшения вашего опыта. Вы можете выбрать, какие типы cookie принимать.",
      sections: [
        {
          title: "Строго необходимые Cookie",
          status: "Всегда активны",
          text: "Эти файлы cookie необходимы для функционирования сайта."
        },
        {
          title: "Аналитические Cookie",
          text: "Эти файлы cookie позволяют нам подсчитывать посещения и источники трафика.",
          action: "Принять",
          state: analyticsAccepted,
          setState: setAnalyticsAccepted
        },
        {
          title: "Маркетинговые Cookie",
          text: "Эти файлы cookie могут устанавливаться нашими рекламными партнерами.",
          action: "Принять",
          state: marketingAccepted,
          setState: setMarketingAccepted
        }
      ],
      backHome: "На главную"
    },
    ka: {
      title: "ქუქი-ფაილების პარამეტრები",
      lastUpdated: "ბოლო განახლება: მარტი 2026",
      intro: "ჩვენ ვიყენებთ ქუქი-ფაილებს თქვენი გამოცდილების გასაუმჯობესებლად.",
      sections: [
        {
          title: "აუცილებელი ქუქი-ფაილები",
          status: "ყოველთვის აქტიური",
          text: "ეს ქუქი-ფაილები აუცილებელია საიტის ფუნქციონირებისთვის."
        },
        {
          title: "ანალიტიკური ქუქი-ფაილები",
          text: "ეს ქუქი-ფაილები გვეხმარება გავაანალიზოთ საიტის ტრაფიკი.",
          action: "მიღება",
          state: analyticsAccepted,
          setState: setAnalyticsAccepted
        },
        {
          title: "მარკეტინგული ქუქი-ფაილები",
          text: "ეს ქუქი-ფაილები შეიძლება დაყენდეს ჩვენი სარეკლამო პარტნიორების მიერ.",
          action: "მიღება",
          state: marketingAccepted,
          setState: setMarketingAccepted
        }
      ],
      backHome: "მთავარ გვერდზე დაბრუნება"
    }
  };

  const currentContent = content[locale as keyof typeof content] || content.en;
  const homeHref = locale === defaultLocale ? '/' : `/${locale}`;

  return (
    <div className="section-spacing min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <Link 
            href={homeHref}
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: 'var(--accent)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {currentContent.backHome}
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          {currentContent.title}
        </h1>
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          {currentContent.lastUpdated}
        </p>
        <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {currentContent.intro}
        </p>

        <div className="space-y-8">
          {currentContent.sections.map((section, idx) => (
            <div key={idx} className="p-6 rounded-xl border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {section.title}
                </h2>
                {section.status ? (
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {section.status}
                  </span>
                ) : (
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked={section.state}
                        onChange={() => section.setState?.(!section.state)}
                      />
                      <div className={`block w-14 h-8 rounded-full transition-colors ${section.state ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                      <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${section.state ? 'transform translate-x-6' : ''}`}></div>
                    </div>
                    <div className="ml-3 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {section.action}
                    </div>
                  </label>
                )}
              </div>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}