import { useLocale } from 'next-intl';
import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const baseUrl = 'https://www.rikepark.com';
  const path = '/privacy-policy';

  const alternateLanguages: Record<string, string> = {
    'ka': `${baseUrl}/ka${path}`,
    'en': `${baseUrl}/en${path}`,
    'ru': `${baseUrl}/ru${path}`,
    'zh-hant': `${baseUrl}/zh-hant${path}`,
    'zh-hans': `${baseUrl}/zh-hans${path}`,
    'x-default': `${baseUrl}/en${path}`,
  };

  const canonicalUrl = locale === defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return {
    title: 'Privacy Policy - Rike Park Guide',
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default function PrivacyPolicyPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: March 2026",
      sections: [
        {
          title: "1. Information Collection",
          text: "We are committed to protecting your privacy. This site primarily serves as an informational platform and generally does not actively collect personally identifiable information from users. However, through server logs and analytics tools, we may collect non-personally identifiable information such as browser type, access times, and page view records."
        },
        {
          title: "2. Use of Cookies",
          text: "To provide a better user experience and understand how the site is used, we may use cookies. These cookies are used to remember user preferences and analyze site traffic. You can adjust cookie settings in your browser."
        },
        {
          title: "3. Third-Party Links",
          text: "This site may contain links to third-party sites (e.g., Google Maps). We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy statements of any site that collects personal information when you leave our site."
        },
        {
          title: "4. Contact Us",
          text: "If you have any questions or concerns regarding this privacy policy, please contact us at: n20186005@gmail.com"
        }
      ],
      backHome: "Back to Home"
    },
    'zh-hant': {
      title: "隱私政策",
      lastUpdated: "最後更新：2026年3月",
      sections: [
        {
          title: "1. 資訊收集",
          text: "我們致力於保護您的隱私。本網站主要作為資訊平台，通常不會主動收集使用者的個人識別資訊。然而，透過伺服器日誌和分析工具，我們可能會收集非個人識別資訊，例如瀏覽器類型、存取時間和網頁瀏覽記錄。"
        },
        {
          title: "2. Cookie 的使用",
          text: "為了提供更好的使用者體驗並了解網站的使用情況，我們可能會使用 Cookie。這些 Cookie 用於記住使用者偏好和分析網站流量。您可以在瀏覽器中調整 Cookie 設定。"
        },
        {
          title: "3. 第三方連結",
          text: "本網站可能包含指向第三方網站（例如 Google 地圖）的連結。我們對這些外部網站的隱私慣例不承擔任何責任。我們鼓勵您在離開本網站時閱讀收集個人資訊的任何網站的隱私聲明。"
        },
        {
          title: "4. 聯絡我們",
          text: "如果您對本隱私政策有任何疑問或疑慮，請聯絡我們：n20186005@gmail.com"
        }
      ],
      backHome: "返回首頁"
    },
    'zh-hans': {
      title: "隐私政策",
      lastUpdated: "最后更新：2026年3月",
      sections: [
        {
          title: "1. 信息收集",
          text: "我们致力于保护您的隐私。本网站主要作为信息平台，通常不会主动收集用户的个人识别信息。然而，通过服务器日志和分析工具，我们可能会收集非个人识别信息，例如浏览器类型、访问时间和网页浏览记录。"
        },
        {
          title: "2. Cookie 的使用",
          text: "为了提供更好的用户体验并了解网站的使用情况，我们可能会使用 Cookie。这些 Cookie 用于记住用户偏好和分析网站流量。您可以在浏览器中调整 Cookie 设置。"
        },
        {
          title: "3. 第三方链接",
          text: "本网站可能包含指向第三方网站（例如 Google 地图）的链接。我们对这些外部网站的隐私惯例不承担任何责任。我们鼓励您在离开本网站时阅读收集个人信息的任何网站的隐私声明。"
        },
        {
          title: "4. 联系我们",
          text: "如果您对本隐私政策有任何疑问或疑虑，请联系我们：n20186005@gmail.com"
        }
      ],
      backHome: "返回首页"
    },
    ru: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление: Март 2026",
      sections: [
        {
          title: "1. Сбор информации",
          text: "Мы стремимся защитить вашу конфиденциальность. Этот сайт в первую очередь служит информационной платформой и обычно не собирает активно личную информацию пользователей."
        },
        {
          title: "2. Использование файлов cookie",
          text: "Чтобы обеспечить лучший пользовательский опыт и понять, как используется сайт, мы можем использовать файлы cookie. Эти файлы cookie используются для запоминания пользовательских предпочтений и анализа трафика сайта."
        },
        {
          title: "3. Сторонние ссылки",
          text: "Этот сайт может содержать ссылки на сторонние сайты (например, Google Карты). Мы не несем ответственности за политику конфиденциальности этих внешних сайтов. Мы рекомендуем вам прочитать заявления о конфиденциальности любого сайта, который собирает персональную информацию, когда вы покидаете наш сайт."
        },
        {
          title: "4. Связаться с нами",
          text: "Если у вас есть какие-либо вопросы или проблемы относительно этой политики конфиденциальности, пожалуйста, свяжитесь с нами: n20186005@gmail.com"
        }
      ],
      backHome: "На главную"
    },
    ka: {
      title: "კონფიდენციალურობის პოლიტიკა",
      lastUpdated: "ბოლო განახლება: მარტი 2026",
      sections: [
        {
          title: "1. ინფორმაციის შეგროვება",
          text: "ჩვენ ვცდილობთ დავიცვათ თქვენი კონფიდენციალურობა. ეს საიტი ძირითადად ინფორმაციული პლატფორმაა და ჩვეულებრივ არ აგროვებს აქტიურად მომხმარებლების პირად ინფორმაციას."
        },
        {
          title: "2. ქუქი-ფაილების გამოყენება",
          text: "უკეთესი მომხმარებლის გამოცდილებისა და საიტის გამოყენების გასაგებად, ჩვენ შეიძლება გამოვიყენოთ ქუქი-ფაილები. ეს ქუქი-ფაილები გამოიყენება მომხმარებლის პრეფერენციების დასამახსოვრებლად და საიტის ტრაფიკის ანალიზისთვის."
        },
        {
          title: "3. მესამე მხარის ბმულები",
          text: "ეს საიტი შეიძლება შეიცავდეს მესამე მხარის საიტების ბმულებს (მაგ. Google Maps). ჩვენ არ ვართ პასუხისმგებელი ამ გარე საიტების კონფიდენციალურობის პოლიტიკაზე. ჩვენ გირჩევთ წაიკითხოთ კონფიდენციალურობის განაცხადები ნებისმიერი საიტისთვის, რომელიც აგროვებს პირად ინფორმაციას, როდესაც ტოვებთ ჩვენს საიტს."
        },
        {
          title: "4. დაგვიკავშირდით",
          text: "თუ გაქვთ რაიმე კითხვა ან შეშფოთება ამ კონფიდენციალურობის პოლიტიკასთან დაკავშირებით, გთხოვთ დაგვიკავშირდეთ: n20186005@gmail.com"
        }
      ],
      backHome: "მთავარ გვერდზე დაბრუნება"
    }
  };

  const loc = locale as keyof typeof content;
  const data = content[loc] || content.en;

  const prefix = locale === defaultLocale ? '' : `/${locale}`;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          href={`${prefix}/`}
          className="inline-flex items-center gap-2 mb-8 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="font-medium">{data.backHome}</span>
        </Link>
        
        <h1 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">{data.title}</h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">{data.lastUpdated}</p>

        <div className="space-y-8 text-[var(--text-secondary)]">
          {data.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{section.title}</h2>
              <p className="leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}