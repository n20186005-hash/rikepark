type BlogLocale = 'en' | 'ka' | 'ru' | 'zh-hans' | 'zh-hant';
type BlogSlug = 'cable-car-adventure' | 'peace-bridge-experience';

type FactItem = {
  label: string;
  value: string;
};

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type FAQItem = {
  question: string;
  answer: string;
};

export type BlogArticle = {
  title: string;
  seoTitle: string;
  description: string;
  author: string;
  intro: string[];
  facts: FactItem[];
  sections: Section[];
  faqs: FAQItem[];
};

const englishArticles: Record<BlogSlug, BlogArticle> = {
  'cable-car-adventure': {
    title: 'Rike Park Cable Car to Narikala Fortress',
    seoTitle: 'Rike Park Cable Car to Narikala: Tickets, Hours & Ride Guide',
    description:
      'Take the Rike Park cable car to Narikala Fortress in Tbilisi. Check tickets, operating hours, ride time, views, map and practical visitor tips.',
    author: '@Guide',
    intro: [
      'The Rike Park cable car is one of the quickest and most scenic ways to reach Narikala Fortress. In about two minutes, the cabins lift you above the Mtkvari River and open up a panoramic view of Old Tbilisi, the Peace Bridge and the hillside landmarks above the city.',
      'For most visitors, this is not just transport. It is the easiest way to combine Rike Park, the Bridge of Peace, Narikala Fortress and the Mother of Georgia statue in a single walkable itinerary.'
    ],
    facts: [
      { label: 'Route', value: 'Rike Park to Narikala Fortress' },
      { label: 'Lower station', value: 'Rike Park lower cable car station' },
      { label: 'Upper station', value: 'Narikala Fortress and Mother of Georgia area' },
      { label: 'Ride time', value: 'About 2 minutes' },
      { label: 'Fare', value: 'Usually around 2.5 GEL one way; verify before travel' },
      { label: 'Hours', value: 'Typically around 10:00 to 22:00, but seasonal changes happen' },
      { label: 'Payment', value: 'Local transport card or station payment options' },
      { label: 'Best time', value: 'Sunset and early evening for the best views' }
    ],
    sections: [
      {
        heading: 'What To Expect',
        paragraphs: [
          'The lower station sits inside the Rike Park area, a short walk from the Peace Bridge. Boarding is straightforward, and the cabins are enclosed, making the ride comfortable for most travelers, including families and visitors who do not want a steep uphill walk.',
          'Once the cable car starts moving, the view opens almost immediately. You can see the river curve through central Tbilisi, the old rooftops on one side and the newer riverside architecture on the other.'
        ]
      },
      {
        heading: 'Why It Is Worth Doing',
        paragraphs: [
          'The main value of the ride is efficiency. Instead of climbing all the way uphill first, you reach the Narikala side quickly and save energy for walking the fortress paths, visiting the Mother of Georgia statue or continuing down toward the sulfur baths and Old Tbilisi.',
          'It is also one of the best short photo experiences in the city. Even if you only have a limited amount of time in Tbilisi, the route gives you a compact overview of the riverfront and the historic center.'
        ],
        bullets: [
          'Pairs naturally with a visit to Rike Park and the Peace Bridge',
          'Useful for sunset views and evening city lights',
          'Good option for visitors who want a short but memorable ride'
        ]
      },
      {
        heading: 'Practical Tips',
        paragraphs: [
          'Operating hours and fare can change, so it is best to verify the latest information at the station or on current local travel resources before you go. This matters especially in winter, during maintenance periods or around public holidays.',
          'If you want the best light for photos, start in Rike Park late in the afternoon, ride up before sunset, then spend time around Narikala before walking or riding back down.'
        ],
        bullets: [
          'Bring a transport card if you already use one in Tbilisi',
          'Allow 1 to 2 hours if you plan to add Narikala and nearby viewpoints',
          'Expect the most pleasant conditions in clear weather and golden hour'
        ]
      }
    ],
    faqs: [
      {
        question: 'Where is the Rike Park cable car?',
        answer:
          'The lower station is inside the Rike Park area near the river and close to the Peace Bridge in central Tbilisi.'
      },
      {
        question: 'How much is the cable car from Rike Park to Narikala?',
        answer:
          'The fare is usually low, commonly around 2.5 GEL one way, but travelers should verify the current price locally before riding.'
      },
      {
        question: 'How long is the ride?',
        answer:
          'The ride itself is short, usually about two minutes, though you may spend longer at the station during busy periods.'
      },
      {
        question: 'Can you use the cable car to reach Narikala Fortress?',
        answer:
          'Yes. It is one of the easiest ways to reach the Narikala area and nearby viewpoints above Old Tbilisi.'
      },
      {
        question: 'When is the best time to ride?',
        answer:
          'Late afternoon and sunset are the most popular times because the riverfront, fortress and city skyline photograph especially well then.'
      }
    ]
  },
  'peace-bridge-experience': {
    title: 'Peace Bridge in Tbilisi',
    seoTitle: 'Peace Bridge Tbilisi: History, Meaning & Best Photo Spots',
    description:
      'Visit the Peace Bridge in Tbilisi from Rike Park. Learn its meaning, opening year, architect, night lighting and the best photo spots nearby.',
    author: '@Guide',
    intro: [
      'The Peace Bridge is the modern landmark most visitors notice first when they arrive at Rike Park. The glass-and-steel pedestrian bridge connects the riverside park with Old Tbilisi and has become one of the citys most recognizable views.',
      'It works as both a practical crossing and a symbol of contemporary Tbilisi. During the day it frames the river and old rooftops, and after dark it becomes one of the best-lit photo spots in the city.'
    ],
    facts: [
      { label: 'Official name', value: 'Bridge of Peace' },
      { label: 'Georgian name', value: 'Mshvidobis Khidi' },
      { label: 'Location', value: 'Between Rike Park and Old Tbilisi' },
      { label: 'Opening year', value: '2010' },
      { label: 'Architect', value: 'Michele De Lucchi' },
      { label: 'Length', value: 'About 156 meters' },
      { label: 'Entry', value: 'Free' },
      { label: 'Hours', value: 'Open all day and night' },
      { label: 'Best for photos', value: 'Sunset, blue hour and night' },
      { label: 'From Rike Park', value: 'About 1 to 2 minutes on foot' }
    ],
    sections: [
      {
        heading: 'Why It Matters',
        paragraphs: [
          'The bridge was designed to connect the newer public spaces around Rike Park with the historic district across the river. That is why it often appears in travel guides as a visual shorthand for old and new Tbilisi meeting in one place.',
          'Its name also shapes search intent. Many visitors look for the meaning of the Peace Bridge because the structure represents openness, renewal and a modern civic identity within a city known for deep history.'
        ]
      },
      {
        heading: 'What You See On The Bridge',
        paragraphs: [
          'From the walkway, you get a clean view of the Mtkvari River, the old quarter, the riverbank below and the hills rising toward Narikala. The bridge is pedestrian-friendly and easy to combine with an evening stroll through Rike Park.',
          'At night the LED lighting gives the bridge a very different feel from the daytime view. That contrast is part of the reason it stays popular with photographers and first-time visitors.'
        ],
        bullets: [
          'Strong city views in both directions',
          'Easy access from Rike Park, the cable car and the riverfront',
          'One of the simplest places in Tbilisi for day and night photo comparisons'
        ]
      },
      {
        heading: 'Best Photo Strategy',
        paragraphs: [
          'If your goal is photos, do not only shoot from the middle of the bridge. Some of the best angles come from the Rike Park side, the riverside walkway and the approach from Old Tbilisi, where the curved roofline is easier to frame.',
          'For a simple route, start in Rike Park, photograph the bridge before sunset, walk across during blue hour and then turn back for night shots once the lights are visible.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Why is it called the Peace Bridge?',
        answer:
          'The name reflects ideas of openness, connection and renewal, linking historic Tbilisi with the citys newer public spaces.'
      },
      {
        question: 'Is the Peace Bridge free?',
        answer:
          'Yes. The bridge is a public pedestrian crossing and there is no entry fee.'
      },
      {
        question: 'Is the Peace Bridge open at night?',
        answer:
          'Yes. It is accessible at night, and the lighting is one of its main attractions after sunset.'
      },
      {
        question: 'Where is the best photo spot for the Peace Bridge?',
        answer:
          'Popular angles are from the Rike Park side, from the riverbank and from the bridge itself during sunset and blue hour.'
      },
      {
        question: 'How far is the Peace Bridge from Rike Park?',
        answer:
          'It sits directly next to Rike Park, so most visitors reach it within a couple of minutes on foot.'
      }
    ]
  }
};

const georgianArticles: Record<BlogSlug, BlogArticle> = {
  'cable-car-adventure': {
    title: 'რიყის პარკის საბაგირო ნარიყალასკენ',
    seoTitle: 'რიყის პარკის საბაგირო ნარიყალაზე: ბილეთები, საათები და გზამკვლევი',
    description:
      'იმგზავრეთ რიყის პარკიდან ნარიყალას ციხემდე საბაგიროთი. შეამოწმეთ ბილეთები, სამუშაო საათები, მგზავრობის ხანგრძლივობა, ხედები და პრაქტიკული რჩევები.',
    author: '@Guide',
    intro: [
      'რიყის პარკის საბაგირო ერთ-ერთი ყველაზე მარტივი და შთამბეჭდავი გზაა ნარიყალას ციხემდე ასასვლელად. რამდენიმე წუთში კაბინა მტკვარს ზემოდან გადაგატარებთ და გაჩვენებთ ძველი თბილისის, მშვიდობის ხიდისა და მთის ხედებს.',
      'ბევრი ვიზიტორისთვის ეს მხოლოდ ტრანსპორტი არ არის. ეს არის სწრაფი მარშრუტი, რომელიც ერთ ვიზიტში აერთიანებს რიყის პარკს, მშვიდობის ხიდს, ნარიყალას და ქართლის დედას.'
    ],
    facts: [
      { label: 'მარშრუტი', value: 'რიყის პარკი -> ნარიყალას ციხე' },
      { label: 'ქვედა სადგური', value: 'რიყის პარკის საბაგიროს ქვედა სადგური' },
      { label: 'ზედა სადგური', value: 'ნარიყალას და ქართლის დედის მხარე' },
      { label: 'მგზავრობის დრო', value: 'დაახლოებით 2 წუთი' },
      { label: 'ფასი', value: 'ხშირად დაახლოებით 2.5 GEL ერთ გზაზე; გადაამოწმეთ ადგილზე' },
      { label: 'საათები', value: 'ხშირად დაახლოებით 10:00-22:00, თუმცა სეზონურად იცვლება' },
      { label: 'გადახდა', value: 'სატრანსპორტო ბარათი ან სადგურის მოქმედი გადახდის მეთოდი' },
      { label: 'საუკეთესო დრო', value: 'მზის ჩასვლა და ადრეული საღამო' }
    ],
    sections: [
      {
        heading: 'რას უნდა ელოდოთ',
        paragraphs: [
          'ქვედა სადგური რიყის პარკის ტერიტორიაზეა და მშვიდობის ხიდიდან სულ რამდენიმე წუთის სავალზე მდებარეობს. ჩასხდომა მარტივია, ხოლო დახურული კაბინები კომფორტულია ოჯახებისთვისაც.',
          'როგორც კი საბაგირო დაიძვრება, მაშინვე იხსნება ფართო ხედი მტკვარზე, ძველი ქალაქის სახურავებზე და ქალაქის ცენტრალურ ნაწილზე.'
        ]
      },
      {
        heading: 'რატომ ღირს მგზავრობა',
        paragraphs: [
          'მთავარი უპირატესობა დროის ეკონომიაა. ფეხით ხანგრძლივი ასვლის ნაცვლად სწრაფად ხვდებით ნარიყალას მხარეს და ენერგიას უკვე ზემოთ სეირნობასა და ხედებზე ხარჯავთ.',
          'ეს ასევე ერთ-ერთი საუკეთესო მოკლე ფოტო-გამოცდილებაა თბილისში, განსაკუთრებით თუ ქალაქში ცოტა დრო გაქვთ.'
        ],
        bullets: [
          'კარგად ებმის რიყის პარკსა და მშვიდობის ხიდს',
          'იდეალურია მზის ჩასვლისა და საღამოს ქალაქის ხედებისთვის',
          'მოსახერხებელია მათთვის, ვისაც მოკლე, მაგრამ დასამახსოვრებელი მარშრუტი უნდა'
        ]
      },
      {
        heading: 'პრაქტიკული რჩევები',
        paragraphs: [
          'ფასი და სამუშაო საათები დროდადრო იცვლება, ამიტომ მგზავრობამდე გადაამოწმეთ ინფორმაცია სადგურზე ან აქტუალურ ადგილობრივ წყაროებში. ეს განსაკუთრებით მნიშვნელოვანია ზამთარში, ტექნიკური პაუზებისას ან დღესასწაულებზე.',
          'ფოტოებისთვის საუკეთესო სცენარი არის გვიან 오후ს რიყის პარკში დაწყება, საბაგიროთი ასვლა მზის ჩასვლამდე და შემდეგ ნარიყალას მხარეს გაჩერება ხედებისთვის.'
        ],
        bullets: [
          'თუ უკვე იყენებთ თბილისის სატრანსპორტო ბარათს, თან იქონიეთ',
          'ნარიყალასა და ხედებთან ერთად 1-2 საათი მაინც დაიტოვეთ',
          'ყველაზე სასიამოვნო მგზავრობა არის კარგ ამინდში და ოქროს საათზე'
        ]
      }
    ],
    faqs: [
      {
        question: 'სად არის რიყის პარკის საბაგირო?',
        answer: 'ქვედა სადგური რიყის პარკშია, მდინარესთან ახლოს და მშვიდობის ხიდიდან რამდენიმე ნაბიჯში.'
      },
      {
        question: 'რა ღირს საბაგირო რიყიდან ნარიყალამდე?',
        answer: 'ფასი ხშირად დაბალია და ხშირად დაახლოებით 2.5 GEL არის ერთ გზაზე, თუმცა უმჯობესია ადგილზე გადაამოწმოთ.'
      },
      {
        question: 'რამდენ ხანს გრძელდება მგზავრობა?',
        answer: 'მგზავრობა მოკლეა და ჩვეულებრივ დაახლოებით 2 წუთს გრძელდება.'
      },
      {
        question: 'შეიძლება თუ არა საბაგიროთი ნარიყალაზე ასვლა?',
        answer: 'დიახ. ეს ნარიყალას მხარეს მისასვლელად ერთ-ერთი ყველაზე მარტივი გზაა.'
      },
      {
        question: 'როდის არის საუკეთესო დრო მგზავრობისთვის?',
        answer: 'გვიანი შუადღე, მზის ჩასვლა და ადრეული საღამო ყველაზე პოპულარული დროებია ხედებისა და ფოტოებისათვის.'
      }
    ]
  },
  'peace-bridge-experience': {
    title: 'მშვიდობის ხიდი თბილისში',
    seoTitle: 'მშვიდობის ხიდი თბილისში: ისტორია, მნიშვნელობა და საუკეთესო ფოტოები',
    description:
      'იხილეთ მშვიდობის ხიდი რიყის პარკიდან. გაიგეთ მისი მნიშვნელობა, გახსნის წელი, არქიტექტორი და საუკეთესო ფოტო წერტილები.',
    author: '@Guide',
    intro: [
      'მშვიდობის ხიდი ის თანამედროვე ღირსშესანიშნაობაა, რომელსაც რიყის პარკში მისული სტუმრები თითქმის ყოველთვის პირველად ამჩნევენ. მინისა და ფოლადის ეს საფეხმავლო ხიდი აკავშირებს პარკს და ძველ თბილისს.',
      'ხიდი ერთდროულად არის პრაქტიკული გადასასვლელი და თანამედროვე თბილისის სიმბოლო. დღისით ის მდინარისა და ძველი უბნის ხედებს აერთიანებს, ხოლო ღამით ქალაქის ერთ-ერთ საუკეთესო განათებულ ფოტო-წერტილად იქცევა.'
    ],
    facts: [
      { label: 'ოფიციალური სახელი', value: 'მშვიდობის ხიდი' },
      { label: 'მდებარეობა', value: 'რიყის პარკსა და ძველ თბილისს შორის' },
      { label: 'გახსნის წელი', value: '2010' },
      { label: 'არქიტექტორი', value: 'მიკელე დე ლუკი' },
      { label: 'სიგრძე', value: 'დაახლოებით 156 მეტრი' },
      { label: 'შესვლა', value: 'უფასო' },
      { label: 'საათები', value: 'ღიაა დღე და ღამე' },
      { label: 'ფოტოებისთვის', value: 'მზის ჩასვლა, ცისფერი საათი და ღამე' },
      { label: 'რიყის პარკიდან', value: 'დაახლოებით 1-2 წუთი ფეხით' }
    ],
    sections: [
      {
        heading: 'რატომ არის მნიშვნელოვანი',
        paragraphs: [
          'ხიდი შეიქმნა იმისთვის, რომ დაეკავშირებინა რიყის პარკის თანამედროვე საჯარო სივრცეები და მდინარის მეორე მხარეს მდებარე ისტორიული უბანი. ამიტომაც მას ხშირად იყენებენ როგორც ახალი და ძველი თბილისის შეხვედრის სიმბოლოს.',
          'მის სახელშიც დევს მთავარი იდეა: მშვიდობა, გახსნილობა და ქალაქის განახლება.'
        ]
      },
      {
        heading: 'რას ნახავთ ხიდზე',
        paragraphs: [
          'საფეხმავლო ბილიკიდან კარგად ჩანს მტკვარი, ძველი ქალაქის სახურავები, ნაპირსავალი და ნარიყალასკენ ამავალი ფერდობები. ხიდი მარტივად ერთდება რიყის პარკში სეირნობასთან.',
          'ღამით LED განათება სრულიად განსხვავებულ ატმოსფეროს ქმნის და სწორედ ეს ხდის მას ფოტოგრაფებისთვის ასე მიმზიდველ ადგილად.'
        ],
        bullets: [
          'კარგი ხედები ორივე მიმართულებით',
          'მარტივი კავშირი რიყის პარკთან, საბაგიროსთან და ნაპირსავალთან',
          'ერთ-ერთი საუკეთესო ადგილი დღის და ღამის ფოტოების შესადარებლად'
        ]
      },
      {
        heading: 'საუკეთესო ფოტო სტრატეგია',
        paragraphs: [
          'ფოტოებისთვის არ შემოიფარგლოთ მხოლოდ ხიდის შუა ნაწილით. კარგი კადრები გამოდის რიყის პარკის მხრიდან, ნაპირსავალიდან და ძველი თბილისის მიდგომიდანაც.',
          'მარტივი მარშრუტია: დაიწყეთ რიყის პარკიდან, გადაიღეთ ხიდი მზის ჩასვლამდე, გადადით ფეხით და შემდეგ ისევ შემობრუნდით ღამის განათებისთვის.'
        ]
      }
    ],
    faqs: [
      {
        question: 'რატომ ჰქვია მშვიდობის ხიდი?',
        answer: 'სახელი უკავშირდება გახსნილობას, კავშირსა და ქალაქის განახლების იდეას.'
      },
      {
        question: 'უფასოა თუ არა მშვიდობის ხიდი?',
        answer: 'დიახ. ეს არის საჯარო საფეხმავლო ხიდი და გადასასვლელად საფასური არ არის.'
      },
      {
        question: 'ღამით ღიაა თუ არა მშვიდობის ხიდი?',
        answer: 'დიახ. ღამითაც ხელმისაწვდომია და სწორედ განათება არის მისი ერთ-ერთი მთავარი ღირსება.'
      },
      {
        question: 'სად არის საუკეთესო ფოტო ადგილი?',
        answer: 'პოპულარული კადრები მიიღება რიყის პარკის მხრიდან, ნაპირსავალიდან და თავად ხიდიდან მზის ჩასვლისას.'
      },
      {
        question: 'რამდენად ახლოსაა მშვიდობის ხიდი რიყის პარკთან?',
        answer: 'ხიდი პირდაპირ რიყის პარკთან მდებარეობს და ფეხით მისვლა ჩვეულებრივ რამდენიმე წუთში შეიძლება.'
      }
    ]
  }
};

const russianArticles: Record<BlogSlug, BlogArticle> = {
  'cable-car-adventure': {
    title: 'Канатная дорога из парка Рике к Нарикале',
    seoTitle: 'Канатная дорога из парка Рике к Нарикале: билеты, часы и гид',
    description:
      'Поднимитесь из парка Рике к крепости Нарикала на канатной дороге. Проверьте билеты, часы работы, длительность поездки и практические советы.',
    author: '@Guide',
    intro: [
      'Канатная дорога из парка Рике - один из самых быстрых и зрелищных способов подняться к крепости Нарикала. За несколько минут вы оказываетесь над рекой Мтквари и получаете отличный обзор Старого Тбилиси, Моста Мира и склонов над городом.',
      'Для большинства путешественников это не просто транспорт. Это удобный маршрут, который связывает парк Рике, Мост Мира, Нарикалу и статую Мать Грузии в одном прогулочном плане.'
    ],
    facts: [
      { label: 'Маршрут', value: 'Парк Рике -> крепость Нарикала' },
      { label: 'Нижняя станция', value: 'Нижняя станция канатной дороги в парке Рике' },
      { label: 'Верхняя станция', value: 'Район Нарикалы и статуи Мать Грузии' },
      { label: 'Время в пути', value: 'Около 2 минут' },
      { label: 'Стоимость', value: 'Часто около 2.5 GEL в одну сторону; уточняйте перед поездкой' },
      { label: 'Часы работы', value: 'Обычно около 10:00-22:00, но возможны сезонные изменения' },
      { label: 'Оплата', value: 'Транспортная карта или доступные варианты на станции' },
      { label: 'Лучшее время', value: 'Закат и ранний вечер' }
    ],
    sections: [
      {
        heading: 'Чего ожидать',
        paragraphs: [
          'Нижняя станция находится в зоне парка Рике, недалеко от Моста Мира. Посадка обычно простая, а закрытые кабины удобны для семей и для тех, кто не хочет долго подниматься пешком.',
          'Сразу после отправления открывается вид на реку, центр города и крыши старого квартала.'
        ]
      },
      {
        heading: 'Почему стоит ехать',
        paragraphs: [
          'Главное преимущество - экономия времени. Вместо долгого подъема пешком вы быстро оказываетесь наверху и можете потратить силы на прогулку по Нарикале и смотровым площадкам.',
          'Это также один из лучших коротких фото-маршрутов в Тбилиси, особенно если у вас ограничено время.'
        ],
        bullets: [
          'Удобно сочетать с парком Рике и Мостом Мира',
          'Подходит для заката и вечерних видов на город',
          'Хороший вариант для короткой, но запоминающейся поездки'
        ]
      },
      {
        heading: 'Практические советы',
        paragraphs: [
          'Стоимость и часы работы иногда меняются, поэтому лучше уточнять актуальную информацию на станции или в свежих местных источниках. Это особенно важно зимой, в дни обслуживания и во время праздников.',
          'Для лучших фотографий начните прогулку в парке Рике ближе к вечеру, поднимитесь до заката и задержитесь на стороне Нарикалы.'
        ],
        bullets: [
          'Возьмите транспортную карту, если уже пользуетесь ею в Тбилиси',
          'Заложите 1-2 часа, если хотите добавить Нарикалу и смотровые точки',
          'Самые приятные условия обычно в ясную погоду и в золотой час'
        ]
      }
    ],
    faqs: [
      {
        question: 'Где находится канатная дорога в парке Рике?',
        answer: 'Нижняя станция находится в парке Рике, рядом с рекой и недалеко от Моста Мира.'
      },
      {
        question: 'Сколько стоит канатная дорога из парка Рике до Нарикалы?',
        answer: 'Цена обычно невысокая и часто составляет около 2.5 GEL в одну сторону, но перед поездкой лучше уточнить ее на месте.'
      },
      {
        question: 'Сколько длится поездка?',
        answer: 'Сама поездка короткая и обычно занимает около двух минут.'
      },
      {
        question: 'Можно ли так добраться до Нарикалы?',
        answer: 'Да. Это один из самых простых способов попасть в район крепости Нарикала.'
      },
      {
        question: 'Когда лучше ехать?',
        answer: 'Поздний день, закат и ранний вечер считаются лучшим временем для видов и фотографий.'
      }
    ]
  },
  'peace-bridge-experience': {
    title: 'Мост Мира в Тбилиси',
    seoTitle: 'Мост Мира в Тбилиси: история, смысл и лучшие фото-точки',
    description:
      'Посетите Мост Мира рядом с парком Рике. Узнайте его смысл, год открытия, архитектора и лучшие точки для фото.',
    author: '@Guide',
    intro: [
      'Мост Мира - одна из самых заметных современных достопримечательностей рядом с парком Рике. Пешеходный мост из стекла и стали соединяет парк с районом Старого Тбилиси.',
      'Он одновременно служит удобным переходом и символом современного Тбилиси. Днем мост помогает увидеть реку и старые кварталы, а вечером становится одной из самых ярких фотолокаций города.'
    ],
    facts: [
      { label: 'Официальное название', value: 'Мост Мира' },
      { label: 'Расположение', value: 'Между парком Рике и Старым Тбилиси' },
      { label: 'Год открытия', value: '2010' },
      { label: 'Архитектор', value: 'Микеле Де Лукки' },
      { label: 'Длина', value: 'Около 156 метров' },
      { label: 'Вход', value: 'Бесплатно' },
      { label: 'Часы', value: 'Открыт днем и ночью' },
      { label: 'Для фото', value: 'Закат, синий час и ночь' },
      { label: 'От парка Рике', value: 'Примерно 1-2 минуты пешком' }
    ],
    sections: [
      {
        heading: 'Почему мост важен',
        paragraphs: [
          'Мост был создан для связи новых общественных пространств у парка Рике с историческим районом на другой стороне реки. Поэтому его часто рассматривают как символ встречи старого и нового Тбилиси.',
          'Само название подчеркивает идеи открытости, связи и обновления города.'
        ]
      },
      {
        heading: 'Что видно с моста',
        paragraphs: [
          'С пешеходной части хорошо видны река, крыши старого города, набережная и склоны в сторону Нарикалы. Мост легко включить в прогулку по парку Рике.',
          'Ночью светодиодная подсветка полностью меняет атмосферу, поэтому место особенно любят фотографы.'
        ],
        bullets: [
          'Красивые виды в обе стороны',
          'Прямая связь с парком Рике, канатной дорогой и набережной',
          'Удобная точка для сравнения дневных и ночных кадров'
        ]
      },
      {
        heading: 'Как лучше фотографировать',
        paragraphs: [
          'Не ограничивайтесь только серединой моста. Хорошие ракурсы получаются со стороны парка Рике, с набережной и с подхода из Старого Тбилиси.',
          'Простой маршрут такой: начните в парке Рике, снимите мост до заката, пройдите по нему, а затем вернитесь к ночной подсветке.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Почему он называется Мост Мира?',
        answer: 'Название связано с идеями открытости, связи и обновления городского пространства.'
      },
      {
        question: 'Мост Мира бесплатный?',
        answer: 'Да. Это общественный пешеходный мост, за проход платить не нужно.'
      },
      {
        question: 'Мост Мира открыт ночью?',
        answer: 'Да. Ночью он доступен, а подсветка считается одной из его главных особенностей.'
      },
      {
        question: 'Где лучше всего фотографировать Мост Мира?',
        answer: 'Популярные ракурсы - со стороны парка Рике, с набережной и с самого моста на закате.'
      },
      {
        question: 'Далеко ли Мост Мира от парка Рике?',
        answer: 'Нет. Мост находится прямо рядом с парком Рике, и до него обычно идут всего пару минут.'
      }
    ]
  }
};

const localizedArticles: Record<'en' | 'ka' | 'ru', Record<BlogSlug, BlogArticle>> = {
  en: englishArticles,
  ka: georgianArticles,
  ru: russianArticles
};

export function getBlogArticle(locale: BlogLocale, slug: string) {
  if (!['cable-car-adventure', 'peace-bridge-experience'].includes(slug)) {
    return null;
  }

  const normalizedLocale = (['en', 'ka', 'ru'].includes(locale) ? locale : 'en') as 'en' | 'ka' | 'ru';
  return localizedArticles[normalizedLocale][slug as BlogSlug];
}
