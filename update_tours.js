const fs = require('fs');
const path = require('path');

const locales = ['en', 'zh-hans', 'zh-hant', 'ru', 'ka'];
const dir = path.join(__dirname, 'messages');

const tours = [
  {
    url: 'https://www.trip.com/t/0wKcorr7FU2',
    zhHant: '第比利斯：歷史城市導賞步行團',
    zhHans: '第比利斯：历史城市导赏步行团',
    en: 'Tbilisi: Historical City Guided Walking Tour',
    ru: 'Тбилиси: Историческая пешеходная экскурсия по городу',
    ka: 'თბილისი: ისტორიული ქალაქის საფეხმავლო ტური'
  },
  {
    url: 'https://www.trip.com/t/aF8qkDs7FU2',
    zhHant: '第比利斯探索之旅：初訪者必備步行導覽',
    zhHans: '第比利斯探索之旅：初访者必备步行导览',
    en: 'Tbilisi Exploration: Must-Do Walking Tour for First-Timers',
    ru: 'Исследование Тбилиси: Пешеходная экскурсия для новичков',
    ka: 'თბილისის აღმოჩენა: საფეხმავლო ტური დამწყებთათვის'
  },
  {
    url: 'https://www.trip.com/t/F1EMrWs7FU2',
    zhHant: '高加索【格魯吉亞包車一日遊】第比利斯邂逅童話與黃昏的浪漫旅程',
    zhHans: '高加索【格鲁吉亚包车一日游】第比利斯邂逅童话与黄昏的浪漫旅程',
    en: 'Caucasus [Georgia Private Day Tour] Tbilisi Romantic Journey of Fairy Tales and Twilight',
    ru: 'Кавказ [Индивидуальный тур на день по Грузии] Тбилиси: романтическое путешествие сказок и сумерек',
    ka: 'კავკასია [საქართველოს კერძო ერთდღიანი ტური] თბილისი: ზღაპრებისა და შებინდების რომანტიკული მოგზაურობა'
  },
  {
    url: 'https://www.trip.com/t/Kjx4Qvs7FU2',
    zhHant: '第比利斯高架電車道+格魯吉亞之母雕像+里克公園+第比利斯海',
    zhHans: '第比利斯高架电车道+格鲁吉亚之母雕像+里克公园+第比利斯海',
    en: 'Tbilisi Aerial Tramway + Mother of Georgia Statue + Rike Park + Tbilisi Sea',
    ru: 'Тбилисская канатная дорога + Статуя Мать Картли + Парк Рике + Тбилисское море',
    ka: 'თბილისის საბაგირო გზა + ქართლის დედა + რიყის პარკი + თბილისის ზღვა'
  },
  {
    url: 'https://www.trip.com/t/c3gjAKt7FU2',
    zhHant: '第比利斯高架電車道+格魯吉亞之母雕像+里克公園包車一日',
    zhHans: '第比利斯高架电车道+格鲁吉亚之母雕像+里克公园包车一日',
    en: 'Tbilisi Aerial Tramway + Mother of Georgia Statue + Rike Park Private Day Tour',
    ru: 'Тбилисская канатная дорога + Статуя Мать Картли + Парк Рике (Индивидуальный тур на день)',
    ka: 'თბილისის საბაგირო გზა + ქართლის დედა + რიყის პარკი (კერძო ერთდღიანი ტური)'
  },
  {
    url: 'https://www.trip.com/t/9p4iPht7FU2',
    zhHant: '第比利斯市區citywalk中/英文地陪 包車 行程可調',
    zhHans: '第比利斯市区citywalk中/英文地陪 包车 行程可调',
    en: 'Tbilisi City Walk with EN/CN Guide, Private Tour, Adjustable Itinerary',
    ru: 'Прогулка по Тбилиси с гидом (EN/CN), индивидуальный тур, настраиваемый маршрут',
    ka: 'თბილისის ქალაქის ტური გიდით (EN/CN), კერძო ტური, რეგულირებადი მარშრუტი'
  },
  {
    url: 'https://www.trip.com/t/ki2Zi6u7FU2',
    zhHant: '第比利斯高架電車道+華凌公園+里克公園+第比利斯海包車一日',
    zhHans: '第比利斯高架电车道+华凌公园+里克公园+第比利斯海包车一日',
    en: 'Tbilisi Aerial Tramway + Hualing Park + Rike Park + Tbilisi Sea Private Day Tour',
    ru: 'Тбилисская канатная дорога + Парк Хуалинг + Парк Рике + Тбилисское море (Индивидуальный тур на день)',
    ka: 'თბილისის საბაგირო გზა + ჰუალინგის პარკი + რიყის პარკი + თბილისის ზღვა (კერძო ერთდღიანი ტური)'
  },
  {
    url: 'https://www.trip.com/t/xJF6XRu7FU2',
    zhHant: '母親堡壘+第比利斯錫安大教堂+里克公園包車',
    zhHans: '母亲堡垒+第比利斯锡安大教堂+里克公园包车',
    en: 'Mother Fortress + Tbilisi Sioni Cathedral + Rike Park Private Tour',
    ru: 'Крепость Нарикала + Сионский собор в Тбилиси + Парк Рике (Индивидуальный тур)',
    ka: 'ნარიყალას ციხე + თბილისის სიონის საკათედრო ტაძარი + რიყის პარკი (კერძო ტური)'
  },
  {
    url: 'https://www.trip.com/t/RS151nu7FU2',
    zhHant: '女王宮殿+歐洲廣場+柏林圍牆紀念片段+奧爾貝公園+里克公園',
    zhHans: '女王宫殿+欧洲广场+柏林围墙纪念片段+奥尔贝公园+里克公园',
    en: "Queen's Palace + Europe Square + Berlin Wall Memorial Fragment + Orbeliani Park + Rike Park",
    ru: 'Дворец королевы + Площадь Европы + Фрагмент Берлинской стены + Парк Орбелиани + Парк Рике',
    ka: 'დედოფლის სასახლე + ევროპის მოედანი + ბერლინის კედლის მემორიალური ფრაგმენტი + ორბელიანის პარკი + რიყის პარკი'
  },
  {
    url: 'https://www.trip.com/t/yU5qj9v7FU2',
    zhHant: '梅特希教堂+戈爾加薩利國王雕像+纜車+里克音樂廳+里克公園',
    zhHans: '梅特希教堂+戈尔加萨利国王雕像+缆车+里克音乐厅+里克公园',
    en: 'Metekhi Church + King Gorgasali Statue + Cable Car + Rike Concert Hall + Rike Park',
    ru: 'Храм Метехи + Статуя царя Горгасали + Канатная дорога + Концертный зал Рике + Парк Рике',
    ka: 'მეტეხის ეკლესია + მეფე გორგასლის ქანდაკება + საბაგირო გზა + რიყის საკონცერტო დარბაზი + რიყის პარკი'
  }
];

locales.forEach(loc => {
  const filePath = path.join(dir, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  data.guide.tours = tours.map(t => {
    let title = t.en;
    if (loc === 'zh-hans') title = t.zhHans;
    else if (loc === 'zh-hant') title = t.zhHant;
    else if (loc === 'ru') title = t.ru;
    else if (loc === 'ka') title = t.ka;
    
    return {
      url: t.url,
      title: title
    };
  });
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
});

console.log('Updated tours successfully!');
