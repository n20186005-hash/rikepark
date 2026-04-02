import Link from 'next/link';
import { defaultLocale } from '@/i18n/config';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const baseUrl = 'https://www.rikepark.com';
  const path = '/terms-of-service';

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
    title: 'Terms of Service - Rike Park Guide',
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

export default function TermsOfServicePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: March 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          text: "By accessing and using this website, you accept and agree to be bound by these terms of use. If you do not agree to any part of these terms, please do not use our site."
        },
        {
          title: "2. Use of Content",
          text: "The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information."
        },
        {
          title: "3. Intellectual Property",
          text: "Unless otherwise stated, all content on this site (including text, images, logos) is protected by copyright. No reproduction, distribution, or commercial use is permitted without explicit authorization. Photo credits may include royalty-free resources from platforms like Unsplash or contributors on Google Maps."
        },
        {
          title: "4. Contact Us",
          text: "For any enquiries, please contact us at: n20186005@gmail.com"
        }
      ],
      backHome: "Back to Home"
    },
    'zh-hant': {
      title: "服務條款",
      lastUpdated: "最後更新：2026年3月",
      sections: [
        {
          title: "1. 接受條款",
          text: "透過存取和使用本網站，您接受並同意受這些使用條款的約束。如果您不同意這些條款的任何部分，請不要使用我們的網站。"
        },
        {
          title: "2. 內容的使用",
          text: "本網站上提供的資訊僅供一般參考之用。雖然我們努力保持資訊的準確性和最新性，但我們不對資訊的完整性、準確性、可靠性或適用性做出任何形式的明示或暗示的陳述或保證。"
        },
        {
          title: "3. 智慧財產權",
          text: "除非另有說明，本網站上的所有內容（包括文字、圖像、標誌）均受版權保護。未經明確授權，不允許進行任何複製、散佈或商業使用。照片來源可能包括 Unsplash 等平台的免版稅資源或 Google 地圖上的貢獻者。"
        },
        {
          title: "4. 聯絡我們",
          text: "如果您對本條款有任何疑問，請聯絡我們：n20186005@gmail.com"
        }
      ],
      backHome: "返回首頁"
    },
    'zh-hans': {
      title: "服务条款",
      lastUpdated: "最后更新：2026年3月",
      sections: [
        {
          title: "1. 接受条款",
          text: "通过访问和使用本网站，您接受并同意受这些使用条款的约束。如果您不同意这些条款的任何部分，请不要使用我们的网站。"
        },
        {
          title: "2. 内容的使用",
          text: "本网站上提供的信息仅供一般参考之用。虽然我们努力保持信息的准确性和最新性，但我们不对信息的完整性、准确性、可靠性或适用性做出任何形式的明示或暗示的陈述或保证。"
        },
        {
          title: "3. 知识产权",
          text: "除非另有说明，本网站上的所有内容（包括文字、图像、标志）均受版权保护。未经明确授权，不允许进行任何复制、分发或商业使用。照片来源可能包括 Unsplash 等平台的免版税资源或 Google 地图上的贡献者。"
        },
        {
          title: "4. 联系我们",
          text: "如果您对本条款有任何疑问，请联系我们：n20186005@gmail.com"
        }
      ],
      backHome: "返回首页"
    },
    ru: {
      title: "Условия использования",
      lastUpdated: "Последнее обновление: Март 2026",
      sections: [
        {
          title: "1. Принятие условий",
          text: "Посещая и используя этот сайт, вы принимаете эти условия использования."
        },
        {
          title: "2. Использование контента",
          text: "Информация предоставляется только для общих ознакомительных целей. Мы не гарантируем ее полноту или точность."
        },
        {
          title: "3. Интеллектуальная собственность",
          text: "Все материалы на сайте защищены авторским правом. Использование без разрешения запрещено."
        },
        {
          title: "4. Связаться с нами",
          text: "Если у вас есть вопросы, свяжитесь с нами: n20186005@gmail.com"
        }
      ],
      backHome: "На главную"
    },
    ka: {
      title: "მომსახურების პირობები",
      lastUpdated: "ბოლო განახლება: მარტი 2026",
      sections: [
        {
          title: "1. პირობების მიღება",
          text: "ამ ვებსაიტზე წვდომით თქვენ ეთანხმებით ამ პირობებს."
        },
        {
          title: "2. კონტენტის გამოყენება",
          text: "ინფორმაცია მხოლოდ ზოგადი საინფორმაციო მიზნებისთვისაა. ჩვენ არ ვიძლევით გარანტიას მის სისწორეზე."
        },
        {
          title: "3. ინტელექტუალური საკუთრება",
          text: "ყველა მასალა დაცულია საავტორო უფლებებით. უნებართვო გამოყენება აკრძალულია."
        },
        {
          title: "4. დაგვიკავშირდით",
          text: "კითხვების შემთხვევაში, მოგვწერეთ: n20186005@gmail.com"
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