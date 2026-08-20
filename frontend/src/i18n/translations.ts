export type Language = 'uz' | 'en' | 'ru';

export const translations = {
  uz: {
    brandName: "IT Xizmatlar",
    slogan: "SIFAT • ISHONCH • NATIJA",
    subSlogan: "BIRGA YUKSALAMIZ!",
    phone: "+998 91 951 73 35",
    contactUs: "BIZ BILAN BOG'LANING",
    alwaysWithYou: "BIZ HAR DOIM SIZ BILAN",
    nav: {
      home: "Bosh sahifa",
      web: "Veb-saytlar",
      mobile: "Mobil Ilovalar",
      landing: "Lending Saytlar",
      projects: "Bizning Loyihalar",
      contact: "Aloqa",
      orderNow: "Buyurtma berish",
    },
    hero: {
      badge: "Professional IT Xizmatlar",
      titleStart: "Biznesingiz uchun Zamonaviy",
      titleGradient: "Veb-Saytlar, Mobil Ilovalar va IT Xizmatlar",
      subtitle: "Biznesingizni raqamlashtirish, mijozlar oqimini oshirish va savdoni avtomatlashtirish uchun yuqori sifatli dasturiy yechimlar yaratamiz.",
      orderBtn: "Loyiha Bo'yicha Maslahat",
      viewServices: "Xizmatlarimiz",
    },
    projectsSection: {
      title: "Bizning Bajarilgan Loyihalar",
      subtitle: "Biznesingizni yuksaltirish uchun ishlab chiqilgan zamonaviy va samarali raqamli loyihalarimiz.",
      items: [
        {
          title: "Lotos Field Travel",
          category: "Turizm & Sayohat Platformasi",
          link: "https://travel.lotosfield.uz",
          image: "/projects/project1-travel.png",
          desc: "All-Inclusive turlar, ko'p tilli interaktiv sayyohlik platformasi."
        },
        {
          title: "Al-Hakim At-Termiziy",
          category: "Ta'lim & O'quv Markazi",
          link: "https://edu.lotosfield.uz",
          image: "/projects/project2-edu.png",
          desc: "Xorijiy tillar va xalqaro metodika bo'yicha ta'lim portali."
        },
        {
          title: "O'rgimchak Taxi",
          category: "Taksi & Transport Xizmati",
          link: "https://taxi-landing-page-five.vercel.app",
          image: "/projects/project3-taxi.png",
          desc: "Tezkor, qulay va xavfsiz safarlar uchun premium taksi lendingi."
        },
        {
          title: "Arxitektura Byurosi",
          category: "Arxitektura & Interyer",
          link: "https://architectury.lotosfield.uz",
          image: "/projects/project4-arch.png",
          desc: "Zamonaviy fazoviy yechimlar va eksklyuziv arxitektura byurosi."
        }
      ]
    },
    threeSections: {
      section1: {
        title: "E-Commerce va Zamonaviy Veb-Saytlar",
        desc: "Kompaniyangiz mahsulot va tovarlarini internet orqali avtomatlashtirilgan tarzda sotish, to'lovlarni xavfsiz qabul qilish hamda savdo hajmini bir necha barobar oshirish uchun to'liq funksional E-Commerce tizimlarini ishlab chiqamiz.",
        features: [
          { title: "Bosh sahifa (Homepage)", desc: "Yangi kolleksiyalar, aksiyalar, brendlar taqdimoti va tezkor qidiruv." },
          { title: "Mahsulot sahifasi (Product Detail Page)", desc: "Rasmlar galereyasi, o'lchamlar, ranglar, narxlar va mijozlar sharhlari." },
          { title: "Kategoriyalar va Filtrlar (Category Page)", desc: "Narx, brend, o'lcham va toifalar bo'yicha aqlli saralash tizimi." },
          { title: "Savatcha va To'lov (Cart & Checkout)", desc: "Payme, Click, Uzum, Visa va MasterCard orqali xavfsiz to'lovlar." },
          { title: "100% Mobil Moslashuvchan (Mobile Responsive)", desc: "Barcha turdagi smartfon va planshetlarda qulay xarid qilish." }
        ]
      },
      section2: {
        title: "Mobil Ilovalar (iOS & Android)",
        desc: "Foydalanuvchilar uchun qulay, chiroyli UI/UX dizaynga ega hamda App Store va Google Play uchun optimallashtirilgan mobil dasturlar.",
        features: [
          { title: "Cross-Platform & Native", desc: "Flutter, React Native, Swift va Kotlin orqali iOS va Android ilovalar." },
          { title: "Push Bildirishnomalar", desc: "Mijozlarni qaytarish uchun avtomatik push xabarlar va offline rejim." },
          { title: "Biometrik Kirish & To'lovlar", desc: "FaceID, TouchID hamda Payme, Click, Apple Pay orqali xavfsiz to'lovlar." },
          { title: "App Store & Google Play", desc: "Ilovani 100% kafolat bilan xalqaro do'konlarga muvaffaqiyatli joylashtirish." },
          { title: "24/7 Texnik Qo'llab-quvvatlash", desc: "Muntazam yangilanishlar, xavfsizlik va server monitoringi." }
        ],
        stats: "100K+ Yuklab olishlarga mos arxitektura"
      },
      section3: {
        title: "Yuqori Konversiyali Lending Saytlar",
        desc: "Mahsulot yoki xizmatingizni birinchi daqiqalardanoq sotishga mo'ljallangan, zamonaviy va ultra-tezkor sotuvchi saytlar.",
        features: [
          { title: "AIDA Sotuvchi Struktura", desc: "Mijoz diqqatini jalb qilish va sotuvga yo'naltirish marketing psixologiyasi." },
          { title: "Google PageSpeed 99/100", desc: "Ultra-tezkor 1-2 soniyada yuklanish va yuqori konversiya ko'rsatkichi." },
          { title: "Telegram Bot & CRM Integratsiya", desc: "Har bir yangi lid va buyurtma soniya ichida Telegramingizga kelib tushadi." },
          { title: "100% Moslashuvchan Dizayn", desc: "Barcha smartfonlar, planshetlar va kompyuterlarda benuqson ko'rinish." },
          { title: "SEO & Reklama Integratsiyasi", desc: "Google va Yandex qidiruv tizimlariga mos, tayyor metateglar va piksel." }
        ],
        actionText: "3-5 kunda tayyor bo'ladi"
      }
    },
    portal: {
      title: "Mening IT So'rovlarim (Tickets)",
      activeTickets: "ta faol so'rov",
      createTitle: "Yangi IT So'rov Yaratish",
      createSubtitle: "Nosozlik yoki talabni yozing. Bizning IT muhandislarimiz SLA bo'yicha darhol bog'lanadi.",
      subjectLabel: "Muammo yoki Xizmat Mavzusi",
      priorityLabel: "Ustuvorlik (Priority)",
      descLabel: "Batafsil Tavsif",
      submitBtn: "So'rovni Yuborish",
      inProgress: "Jarayonda",
      resolved: "Yechildi",
      open: "Ochiq",
    },
    admin: {
      title: "Boshqaruv Paneli & KPI Tahlil",
      subtitle: "IT infratuzilma, xodimlar vazifalari va moliyaviy oqimlar ko'rsatkichi",
      serversTitle: "IT Infratuzilma & Server Klasteri Holati",
      refreshInfo: "Har 15 soniyada yangilanadi",
    },
    theme: "Mavzu",
    lang: "Til",
  },

  en: {
    brandName: "IT Services",
    slogan: "QUALITY • TRUST • RESULT",
    subSlogan: "LET'S GROW TOGETHER!",
    phone: "+998 91 951 73 35",
    contactUs: "CONTACT US",
    alwaysWithYou: "ALWAYS WITH YOU",
    nav: {
      home: "Home",
      web: "Websites",
      mobile: "Mobile Apps",
      landing: "Landing Pages",
      projects: "Our Projects",
      contact: "Contact",
      orderNow: "Get in Touch",
    },
    hero: {
      badge: "Professional IT Solutions",
      titleStart: "Modern High-Performance",
      titleGradient: "Websites, Mobile Apps & IT Systems",
      subtitle: "We build cutting-edge digital solutions to automate workflows, accelerate sales, and scale your business globally.",
      orderBtn: "Get Free Consultation",
      viewServices: "Our Solutions",
    },
    projectsSection: {
      title: "Our Delivered Projects",
      subtitle: "Explore our real, production-ready digital products. Click on any card to visit the live site.",
      items: [
        {
          title: "Lotos Field Travel",
          category: "Tourism & Travel Platform",
          link: "https://travel.lotosfield.uz",
          image: "/projects/project1-travel.png",
          desc: "All-inclusive tour packages, interactive multilingual travel portal."
        },
        {
          title: "Al-Hakim At-Termiziy",
          category: "Education & Learning Center",
          link: "https://edu.lotosfield.uz",
          image: "/projects/project2-edu.png",
          desc: "Foreign languages and comprehensive 28-month curriculum portal."
        },
        {
          title: "O'rgimchak Taxi",
          category: "Taxi & Mobility Solution",
          link: "https://taxi-landing-page-five.vercel.app",
          image: "/projects/project3-taxi.png",
          desc: "High-converting landing page for fast and safe urban taxi rides."
        },
        {
          title: "Architecture Bureau",
          category: "Architecture & Interior Design",
          link: "https://architectury.lotosfield.uz",
          image: "/projects/project4-arch.png",
          desc: "Exclusive spatial architecture, 3D renders, and turnkey project planning."
        }
      ]
    },
    threeSections: {
      section1: {
        title: "E-Commerce & Modern Websites",
        desc: "We develop high-converting online stores, retail marketplaces, and robust web applications tailored for digital commerce.",
        features: [
          { title: "Homepage", desc: "Showcase new collections, sales, brands, and instant global search." },
          { title: "Product Detail Page", desc: "High-res gallery, size/color selectors, reviews, and detailed specs." },
          { title: "Category Page & Filters", desc: "Smart filters by price, brand, rating, and product attributes." },
          { title: "Cart & Checkout", desc: "Instant and secure Payme, Click, Stripe, Visa, and MasterCard checkout." },
          { title: "100% Mobile Responsive", desc: "Optimized for frictionless shopping on any mobile phone or tablet." }
        ]
      },
      section2: {
        title: "Mobile App Development (iOS & Android)",
        desc: "Intuitive UI/UX, blazingly fast mobile applications published and maintained on App Store and Google Play.",
        features: [
          { title: "Cross-Platform & Native", desc: "iOS and Android apps with Flutter, React Native, Swift and Kotlin." },
          { title: "Push Notifications", desc: "Automated push notifications to engage users and seamless offline sync." },
          { title: "Biometric Auth & Payments", desc: "FaceID, TouchID and integrated Stripe, Apple Pay, Payme payments." },
          { title: "App Store & Google Play", desc: "100% guaranteed publishing on international app stores." },
          { title: "24/7 Technical Support", desc: "Continuous updates, security hardening, and server monitoring." }
        ],
        stats: "Built for 100K+ concurrent users"
      },
      section3: {
        title: "High-Converting Landing Pages",
        desc: "Ultra-fast, conversion-optimized landing pages designed to turn visitors into paying customers from day one.",
        features: [
          { title: "AIDA Sales Structure", desc: "Conversion psychology designed to maximize customer acquisition." },
          { title: "Google PageSpeed 99/100", desc: "Loads in under 1-2 seconds with top SEO and performance scores." },
          { title: "Telegram Bot & CRM", desc: "Direct real-time lead capture to your Telegram and CRM pipeline." },
          { title: "100% Responsive Design", desc: "Flawless layout across smartphones, tablets, and desktops." },
          { title: "SEO & Ads Ready", desc: "Pre-configured metatags, OpenGraph, Google & Meta Ads tracking." }
        ],
        actionText: "Delivery in 3-5 days"
      }
    },
    portal: {
      title: "My IT Support Tickets",
      activeTickets: "active tickets",
      createTitle: "Create New IT Ticket",
      createSubtitle: "Describe the incident or request. Our engineers will respond within the SLA window.",
      subjectLabel: "Incident / Request Subject",
      priorityLabel: "Priority Level",
      descLabel: "Detailed Description",
      submitBtn: "Submit Ticket",
      inProgress: "In Progress",
      resolved: "Resolved",
      open: "Open",
    },
    admin: {
      title: "Admin Dashboard & KPI Analytics",
      subtitle: "Live overview of IT infrastructure, engineering workloads, and revenue streams.",
      serversTitle: "IT Infrastructure & Cluster Health",
      refreshInfo: "Updated every 15 seconds",
    },
    theme: "Theme",
    lang: "Language",
  },

  ru: {
    brandName: "IT Услуги",
    slogan: "КАЧЕСТВО • ДОВЕРИЕ • РЕЗУЛЬТАТ",
    subSlogan: "РАСТЕМ ВМЕСТЕ!",
    phone: "+998 91 951 73 35",
    contactUs: "СВЯЖИТЕСЬ С НАМИ",
    alwaysWithYou: "МЫ ВСЕГДА С ВАМИ",
    nav: {
      home: "Главная",
      web: "Веб-сайты",
      mobile: "Мобильные приложения",
      landing: "Лендинги",
      projects: "Наши Проекты",
      contact: "Контакты",
      orderNow: "Связаться с нами",
    },
    hero: {
      badge: "Профессиональные IT Услуги",
      titleStart: "Современные и Надежные",
      titleGradient: "Веб-Сайты, Мобильные Приложения и IT Системы",
      subtitle: "Разрабатываем высокотехнологичные цифровые продукты для автоматизации бизнеса, увеличения продаж и привлечения клиентов.",
      orderBtn: "Получить Консультацию",
      viewServices: "Наши Услуги",
    },
    projectsSection: {
      title: "Наши Реализованные Проекты",
      subtitle: "Ознакомьтесь с реальными проектами, которые мы успешно запустили. Нажмите на карточку для перехода на сайт.",
      items: [
        {
          title: "Lotos Field Travel",
          category: "Туристическая Платформа",
          link: "https://travel.lotosfield.uz",
          image: "/projects/project1-travel.png",
          desc: "All-Inclusive туры, многоязычный интерактивный туристический портал."
        },
        {
          title: "Al-Hakim At-Termiziy",
          category: "Образовательный Центр",
          link: "https://edu.lotosfield.uz",
          image: "/projects/project2-edu.png",
          desc: "Образовательный портал изучения иностранных языков по спецметодике."
        },
        {
          title: "O'rgimchak Taxi",
          category: "Служба Такси и Транспорта",
          link: "https://taxi-landing-page-five.vercel.app",
          image: "/projects/project3-taxi.png",
          desc: "Продающий лендинг для быстрого и безопасного вызова такси."
        },
        {
          title: "Архитектурное Бюро",
          category: "Архитектура и Интерьер",
          link: "https://architectury.lotosfield.uz",
          image: "/projects/project4-arch.png",
          desc: "Современные архитектурные решения и 3D-визуализация под ключ."
        }
      ]
    },
    threeSections: {
      section1: {
        title: "E-Commerce и Современные Веб-Сайты",
        desc: "Разрабатываем современные интернет-магазины, платформы онлайн-торговли и масштабируемые корпоративные веб-системы.",
        features: [
          { title: "Главная страница (Homepage)", desc: "Акции, новинки, баннеры брендов и быстрый поиск." },
          { title: "Страница товара (Product Detail Page)", desc: "Галерея фото, размеры, цвета, отзывы и описание." },
          { title: "Категории и Фильтры (Category Page)", desc: "Удобная сортировка по цене, брендам и характеристикам." },
          { title: "Корзина и Оплата (Cart & Checkout)", desc: "Безопасная оплата через Payme, Click, Uzum, Visa и MasterCard." },
          { title: "100% Адаптивность (Mobile Responsive)", desc: "Идеальная работа на смартфонах и планшетах." }
        ]
      },
      section2: {
        title: "Разработка Мобильных Приложений (iOS & Android)",
        desc: "Удобный интерфейс, премиальный UI/UX дизайн, публикация и сопровождение в App Store и Google Play.",
        features: [
          { title: "Кроссплатформенная & Native", desc: "iOS и Android приложения на Flutter, React Native, Swift и Kotlin." },
          { title: "Push-уведомления", desc: "Удержание клиентов и стабильная работа в offline режиме." },
          { title: "Биометрия & Платежи", desc: "FaceID, TouchID и безопасная оплата через Payme, Click, Apple Pay." },
          { title: "App Store & Google Play", desc: "100% гарантированная публикация в международных магазинах." },
          { title: "24/7 Техподдержка", desc: "Регулярные обновления, безопасность и мониторинг серверов." }
        ],
        stats: "Архитектура под 100K+ пользователей"
      },
      section3: {
        title: "Высококонверсионные Лендинги",
        desc: "Продающие одностраничные сайты нового поколения, созданные для максимального привлечения клиентов и заявок.",
        features: [
          "Маркетинговая структура AIDA и современный визуал",
          "Google PageSpeed 95+ (загрузка менее чем за 2 секунды)",
          "Мгновенный сбор заявок прямо в Telegram-бот и CRM",
          "100% адаптивность под смартфоны, планшеты и ПК",
          "Полная готовность к SEO и рекламе в Google/Яндекс"
        ],
        actionText: "Срок разработки: 3-5 дней"
      }
    },
    portal: {
      title: "Мои Заявки в IT Поддержку (Тикеты)",
      activeTickets: "активных заявок",
      createTitle: "Создать Заявку в IT Отдел",
      createSubtitle: "Опишите проблему или задачу. Инженеры подключатся согласно регламенту SLA.",
      subjectLabel: "Тема Заявки / Проблемы",
      priorityLabel: "Приоритет",
      descLabel: "Подробное Описание",
      submitBtn: "Отправить Заявку",
      inProgress: "В процессе",
      resolved: "Решено",
      open: "Открыто",
    },
    admin: {
      title: "Панель Управления и KPI Аналитика",
      subtitle: "Мониторинг IT инфраструктуры, загрузка инженеров и финансовые показатели.",
      serversTitle: "Состояние IT Инфраструктуры и Кластеров",
      refreshInfo: "Обновление каждые 15 сек",
    },
    theme: "Тема",
    lang: "Язык",
  },
};
