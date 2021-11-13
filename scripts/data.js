const cityEventCards = [
  {
    сity:   'Москва',
    active: 'false',
    data:   [
      {
        category: 'лекция',
        title:    'идентичность: почему нам сложно меняться?',
        subtitle: 'лектор: Мария Бархатова',
        image:    './images/events/event-card-identity.jpg',
        alt:      'идентичность',
        date:     '1 мая, 12:30-13:50',
        adress:   'улица Блохина, 22',
        count:    '+ ещё 3',
        like:     'false',
      },
      {
        category: 'концерт',
        title:    'Концерт «Триумф виолончели»',
        subtitle: 'с Калужским камерным оркестром в концерте выступит лауреат международных конкурсов виолончелист Александр Ермаков',
        image:    './images/events/event-card-triumph-of-the-cello.jpg',
        alt:      'культура',
        date:     'Сб 13 ноября, 17:00',
        adress:   'Калужский Дом музыки ул Кирова, д 6',
        count:    '+ ещё 3',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'coffee therapy',
        subtitle: 'кофе и угощения в пользу Ночлежки',
        image:    './images/events/event-card-coffee-therapy.jpg',
        alt:      'кофетерапия',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'улица Льва Толстого, 5',
        count:    '+ ещё 24',
        like:     'false',
      },
      {
        category: 'спектакль',
        title:    'Спектакль «Несколько разговоров о»',
        subtitle: 'пластический спектакль по пьесе литовского драматурга и сценаристки Текле Кавтарадзе',
        image:    './images/events/event-card-a-few-conversations-about.jpg',
        alt:      'искуство',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'ул. Октябрьская, д. 17А',
        count:    '+ ещё 24',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'coffee therapy',
        subtitle: 'кофе и угощения в пользу Ночлежки',
        image:    './images/events/event-card-coffee-therapy.jpg',
        alt:      'кофетерапия',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'улица Льва Толстого, 5',
        count:    '+ ещё 24',
        like:     'false',
      }
    ]
  },
  {
    сity:   'Санкт-Петербург',
    active: 'true',
    data:   [
      {
        category: 'лекция',
        title:    'идентичность: почему нам сложно меняться?',
        subtitle: 'лектор: Мария Бархатова',
        image:    './images/events/event-card-identity.jpg',
        alt:      'идентичность',
        date:     '1 мая, 12:30-13:50',
        adress:   'улица Блохина, 22',
        count:    '+ ещё 3',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'xачапури и вино',
        subtitle: 'капучино, эспрессо и американо в пользу Ночлежки',
        image:    './images/events/event-card-feast.jpg',
        alt:      'Застолье',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'Малая Конюшенная улица...',
        count:    '+ ещё 4',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'coffee therapy',
        subtitle: 'кофе и угощения в пользу Ночлежки',
        image:    './images/events/event-card-coffee-therapy.jpg',
        alt:      'кофетерапия',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'улица Льва Толстого, 5',
        count:    '+ ещё 24',
        like:     'false',
      },
      {
        category: 'посиделки',
        title:    'апрельский хэллоуин у Ники',
        subtitle: 'закрытое событие',
        image:    './images/events/event-card-halloween.jpg',
        alt:      'праздник',
        date:     '',
        adress:   '',
        count:    '',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'coffee therapy',
        subtitle: 'кофе и угощения в пользу Ночлежки',
        image:    './images/events/event-card-coffee-therapy.jpg',
        alt:      'кофетерапия',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'улица Льва Толстого, 5',
        count:    '+ ещё 24',
        like:     'false',
      }
    ]
  },
  {
    сity:   'Сочи',
    active: 'false',
    data:   [
      {
        category: 'спектакль',
        title:    'Спектакль «Несколько разговоров о»',
        subtitle: 'пластический спектакль по пьесе литовского драматурга и сценаристки Текле Кавтарадзе',
        image:    './images/events/event-card-a-few-conversations-about.jpg',
        alt:      'искуство',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'ул. Октябрьская, д. 17А',
        count:    '+ ещё 24',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'xачапури и вино',
        subtitle: 'капучино, эспрессо и американо в пользу Ночлежки',
        image:    './images/events/event-card-feast.jpg',
        alt:      'Застолье',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'Малая Конюшенная улица...',
        count:    '+ ещё 4',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'coffee therapy',
        subtitle: 'кофе и угощения в пользу Ночлежки',
        image:    './images/events/event-card-coffee-therapy.jpg',
        alt:      'кофетерапия',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'улица Льва Толстого, 5',
        count:    '+ ещё 24',
        like:     'false',
      },
      {
        category: 'Здоровье',
        title:    'Программа «Алкоголь и табак – твой первый враг!»',
        subtitle: 'Встреча будет направлена на профилактику борьбы с алкоголизмом и табакокурением',
        image:    './images/events/event-card-alcohol-and-tobacco.jpg',
        alt:      'Оздоровление',
        date:     'Сб 14, 14:00',
        adress:   'Малая Конюшенная улица...',
        count:    '+ ещё 4',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'coffee therapy',
        subtitle: 'кофе и угощения в пользу Ночлежки',
        image:    './images/events/event-card-coffee-therapy.jpg',
        alt:      'кофетерапия',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'улица Льва Толстого, 5',
        count:    '+ ещё 24',
        like:     'false',
      }
    ]
  },
  {
    сity:   'Калуга',
    active: 'false',
    data:   [
      {
        category: 'концерт',
        title:    'Концерт «Триумф виолончели»',
        subtitle: 'с Калужским камерным оркестром в концерте выступит лауреат международных конкурсов виолончелист Александр Ермаков',
        image:    './images/events/event-card-triumph-of-the-cello.jpg',
        alt:      'культура',
        date:     'Сб 13 ноября, 17:00',
        adress:   'Калужский Дом музыки ул Кирова, д 6',
        count:    '+ ещё 3',
        like:     'false',
      },
      {
        category: 'Здоровье',
        title:    'Программа «Алкоголь и табак – твой первый враг!»',
        subtitle: 'Встреча будет направлена на профилактику борьбы с алкоголизмом и табакокурением',
        image:    './images/events/event-card-alcohol-and-tobacco.jpg',
        alt:      'Оздоровление',
        date:     'Сб 14, 14:00',
        adress:   'Малая Конюшенная улица...',
        count:    '+ ещё 4',
        like:     'false',
      },
      {
        category: 'спектакль',
        title:    'Спектакль «Несколько разговоров о»',
        subtitle: 'пластический спектакль по пьесе литовского драматурга и сценаристки Текле Кавтарадзе',
        image:    './images/events/event-card-a-few-conversations-about.jpg',
        alt:      'искуство',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'ул. Октябрьская, д. 17А',
        count:    '+ ещё 24',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'coffee therapy',
        subtitle: 'кофе и угощения в пользу Ночлежки',
        image:    './images/events/event-card-coffee-therapy.jpg',
        alt:      'кофетерапия',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'улица Льва Толстого, 5',
        count:    '+ ещё 24',
        like:     'false',
      },
      {
        category: 'концерт',
        title:    'Концерт «Парад трубачей»',
        subtitle: 'в честь 100 летия со дня рождения выдающегося музыканта, российского трубача Тимофея Александровича Докшицера',
        image:    './images/events/event-card-trumpeters-parade.jpg',
        alt:      'культура',
        date:     '18 ноября, 19:00',
        adress:   'Ленина ул. 60',
        count:    '+ ещё 24',
        like:     'false',
      }
    ]
  },
  {
    сity:   'Екатеринбург',
    active: 'false',
    data:   [
      {
        category: 'спектакль',
        title:    'Спектакль «Волшебный горшочек»',
        subtitle: 'По мотивам сказки братьев Гримм',
        image:    './images/events/event-card-the-magic-pot.jpg',
        alt:      'искуство',
        date:     '13 ноября, 10:00',
        adress:   '8 Марта ул., 104',
        count:    '+ ещё 3',
        like:     'false',
      },
      {
        category: 'концерт',
        title:    'Концерт «Парад трубачей»',
        subtitle: 'в честь 100 летия со дня рождения выдающегося музыканта, российского трубача Тимофея Александровича Докшицера',
        image:    './images/events/event-card-trumpeters-parade.jpg',
        alt:      'культура',
        date:     '18 ноября, 19:00',
        adress:   'Ленина ул. 60',
        count:    '+ ещё 24',
        like:     'false',
      },
      {
        category: 'Здоровье',
        title:    'Программа «Алкоголь и табак – твой первый враг!»',
        subtitle: 'Встреча будет направлена на профилактику борьбы с алкоголизмом и табакокурением',
        image:    './images/events/event-card-alcohol-and-tobacco.jpg',
        alt:      'Оздоровление',
        date:     'Сб 14, 14:00',
        adress:   'Малая Конюшенная улица...',
        count:    '+ ещё 4',
        like:     'false',
      },
      {
        category: 'посиделки',
        title:    'апрельский хэллоуин у Ники',
        subtitle: 'закрытое событие',
        image:    './images/events/event-card-halloween.jpg',
        alt:      'праздник',
        date:     '',
        adress:   '',
        count:    '',
        like:     'false',
      },
      {
        category: 'еда и напитки',
        title:    'coffee therapy',
        subtitle: 'кофе и угощения в пользу Ночлежки',
        image:    './images/events/event-card-coffee-therapy.jpg',
        alt:      'кофетерапия',
        date:     'Пн-Вс, 10:00-22:00',
        adress:   'улица Льва Толстого, 5',
        count:    '+ ещё 24',
        like:     'false',
      },
    ]
  },
];
