import type { MenuItem, PromoItem } from './types';

export const MOCK_MENU: MenuItem[] = [
  {
    id: 10183,
    detailText: "Нежная куриная котлета в хрустящей панировке, новая вкуснейшая сырная булочка, ароматный бекон, два ломтика сыра Эмменталь, свежий салат и специальный томатный соус.",
    image: "https://vkusnoitochka.ru/upload/iblock/6dd/umsje2qrps4stdp5afjik456bcb0tr3d/large.png",
    name: "Барселона Бургер с курицей",
    price: 215,
    sticker: "NEW",
  },
  {
    id: 9026,
    detailText: "Сочный бифштекс из натуральной говядины, приготовленный на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, свежий салат, кусочек помидора и лук, маринованные огурчики, кетчуп, горчица и специальный соус",
    image: "https://vkusnoitochka.ru/upload/iblock/174/5qamxplhlt2m4nuksdgnv7wokleyl5e1/large.png",
    name: "Гранд Де Люкс",
    price: 199,
    sticker: "POPULAR",
  },
  {
    id: 9020,
    detailText: "Легендарный бургер с двумя рублеными бифштексами из говядины, маринованными огурчиками, свежим салатом «Айсберг», ломтиком плавленого сыра Чеддер и специальным соусом «Биг Хит» на новой булочке с двумя видами кунжута",
    image: "https://vkusnoitochka.ru/upload/iblock/26e/59ogrczl0el40p9qyut2vu5guzxhuarb/large.png",
    name: "Биг Хит",
    price: 165,
    sticker: "POPULAR",
  },
  {
    id: 9975,
    detailText: "Неповторимый сандвич с большим рубленым бифштексом из говядины, сочными ломтиками Ростбифа, пряным соусом Релиш с зернами горчицы, сыром Эмменталь, свежими овощами и знаменитым соусом с дымком на большой булочке с кунжутом.",
    image: "https://vkusnoitochka.ru/upload/iblock/9ba/04x02drxqigoa3isv9v93tvd45iswwyn/large.png",
    name: "Биг Спешиал Ростбиф",
    price: 325,
    sticker: "NEW",
  },
  {
    id: 10226,
    detailText: "Любимый Комбо Милоша Биковича в больших порциях только в Доставке",
    image: "https://vkusnoitochka.ru/upload/iblock/f2e/63hdbac29ocj7xeikcxxs1p9ojvjethu/large.png",
    name: "Звёздное Комбо Милоша Биковича",
    price: 399,
    size: "Большой",
  },
  {
    id: 9109,
    detailText: "Белое куриное мясо в хрустящей панировке, ломтик помидора, листья салата и ломтики твёрдого сыра, заправленные специальным соусом и завёрнутые в пшеничную лепешку",
    image: "https://vkusnoitochka.ru/upload/iblock/bdf/dc4h9fpebhi0slp2uwu0lwxpbnskr0fw/large.png",
    name: "Цезарь Ролл",
    price: 179,
  },
  {
    id: 9872,
    detailText: "Большие, вкусные палочки картофеля, обжаренные в растительном фритюре и слегка посоленные",
    image: "https://vkusnoitochka.ru/upload/iblock/06d/4g3g37mog36m25fooet9b0c540pk2mzd/large.png",
    name: "Гранд Фри маленький",
    price: 65,
    size: "Маленький",
  },
  {
    id: 10010,
    detailText: "Сочные и нежные Стрипсы – 4 шт. Наггетсы – 4 шт. Сырные треугольники Чоризо– 4 шт. 2 стандартные порции Картофеля.",
    image: "https://vkusnoitochka.ru/upload/iblock/5c5/di4ccmuf2gfvgu9wv5jy4ctaxc76jhfj/large.png",
    name: "Большой Снэк Бокс со стрипсами",
    price: 445,
  },
  {
    id: 9989,
    detailText: "Мороженое из натурального цельного молока с добавкой черничного топпинга",
    image: "https://vkusnoitochka.ru/upload/iblock/fdd/g03zo49nom3mrkrww4ooa3yhi3j7zveb/large.png",
    name: "Мороженое Черничное",
    price: 89,
    sticker: "NEW",
  },
];

export const MOCK_PROMO: PromoItem[] = [
  {
    id: 1,
    name: 'Чикен Премьер + Чикенбургер всего за 199 рублей',
    image: 'https://ma-prod-cdn.mcdonalds.ru/mechanic/f36cff30a4a145ce884e0aa340757af9/android/s/offer_image.png',
    period: 'Действует до 28.05.2023 г.',
  },
  {
    id: 2,
    name: 'Два Барселона Бургера всего за 429 рублей',
    image: 'https://ma-prod-cdn.mcdonalds.ru/mechanic/eb1cb29cf51744df8d12a58da081ddc3/android/s/offer_image.png',
    period: 'Действует до 18.06.2023 г.',
  },
  {
    id: 3,
    name: 'Два Барселона Бургера с курицей всего за 389 рублей',
    image: 'https://ma-prod-cdn.mcdonalds.ru/mechanic/83c706ed36194a8e9ecb1a967a613449/android/s/offer_image.png',
    period: 'Действует до 18.06.2023 г.',
  },
  {
    id: 4,
    name: 'Наггетсы (9 шт.) всего за 89 рублей',
    image: 'https://ma-prod-cdn.mcdonalds.ru/mechanic/2a989a4478534bfabc5588eea6c9db27/android/s/offer_image.png',
    period: 'Действует до 28.05.2023 г.',
  },
  {
    id: 5,
    name: 'Двойной Чизбургер + Наггетсы (6 шт.) всего за 189 рублей',
    image: 'https://ma-prod-cdn.mcdonalds.ru/mechanic/3d5ee5492c414334a7eba94132fdee66/android/s/offer_image.png',
    period: 'Действует до 28.05.2023 г.',
  },
];