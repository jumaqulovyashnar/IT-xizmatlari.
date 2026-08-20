# 🚀 IT Xizmatlari Platformasi (IT Services & ITSM Platform)

Zamonaviy axborot texnologiyalari (IT) xizmatlarini ko'rsatuvchi kompaniyalar uchun korporativ darajadagi boshqaruv, ITSM/Helpdesk, xizmatlar katalogi va billing platformasi.

---

## 🌟 Asosiy Imkoniyatlar

- **🛠️ IT Xizmatlar Katalogi**: Dasturiy ta'minot ishlab chiqish, Cloud/DevOps, Kiberxavfsizlik, Tizim ma'murligi va 24/7 IT Helpdesk xizmatlari.
- **🎫 ITSM & Ticket Tizimi**: Incidentlar va so'rovlarni avtomatik qabul qilish, SLA monitoring, ustuvorlik bo'yicha navbatlar va muhandislarga biriktirish.
- **💳 Moliya va Billing**: Oylik obuna (Retainer), soatbay to'lovlar, avtomatik invoys generatsiyasi, Payme, Click va Stripe integratsiyasiga tayyorlik.
- **👥 Xodimlar va Loyihalar Boshqaruvi**: IT muhandislar vazifalari, loyiha bosqichlari (milestones) va ish vaqti hisoboti.
- **📊 Analitika va Monitoring**: Tizim holati, SLA ko'rsatkichlari, KPI va daromadlar statistikasi.

---

## 🏗️ Tizim Arxitekturasi

Platforma **Modular Monolith & Clean Architecture** tamoyillari asosida ishlab chiqilgan.
Batafsil arxitektura va diagrammalar bilan quyidagi hujjatlarda tanishishingiz mumkin:

- 📖 [Texnik Arxitektura Hujjati (ARCHITECTURE.md)](docs/ARCHITECTURE.md)
- 🔌 [API Spetsifikatsiyasi (API_SPECIFICATION.md)](docs/API_SPECIFICATION.md)
- 🗄️ [Ma'lumotlar Bazasi Sxemasi (DATABASE_SCHEMA.md)](docs/DATABASE_SCHEMA.md)

---

## 📂 Loyiha Tuzilmasi

```text
IT-xizmatlari/
├── docs/                      # Tizim arxitekturasi, ERD va API hujjatlari
├── backend/                   # NestJS / Node.js backend (Clean Architecture & Modules)
│   ├── src/
│   │   ├── modules/           # Auth, Services, Tickets, Billing, Projects
│   │   ├── common/            # Guards, Interceptors, Filters
│   │   └── config/            # Tizim konfiguratsiyasi
│   ├── prisma/                # Prisma ORM sxemasi va migratsiyalar
│   └── package.json
├── frontend/                  # Next.js 14 / TailwindCSS frontend ilovasi
│   ├── src/
│   │   ├── app/               # App router (Landing, Portal, Admin)
│   │   ├── components/        # Reusable UI komponentlar
│   │   └── lib/               # API klientlar va yordamchilar
│   └── package.json
├── infrastructure/            # Docker, Nginx va monitoring konfiguratsiyalari
│   ├── docker-compose.yml
│   ├── nginx.conf
│   └── prometheus.yml
├── .github/workflows/         # CI/CD avtomatlashtirish pipeline
├── .env.example               # Muhit o'zgaruvchilari namunasi
└── README.md
```

---

## ⚡ Tezkor Ishga Tushirish (Quick Start)

### 1. Talablar:
- [Docker](https://www.docker.com/) va Docker Compose
- [Node.js](https://nodejs.org/) (v18 yoki v20+)
- [Git](https://git-scm.com/)

### 2. Docker orqali ishga tushirish (Tavsiya etiladi):
```bash
# 1. Loyihani yuklab oling
git clone https://github.com/jumaqulovyashnar/IT-xizmatlari..git
cd IT-xizmatlari

# 2. Muhit o'zgaruvchilarini nusxalang
cp .env.example .env

# 3. Docker konteynerlarini ishga tushiring
docker-compose -f infrastructure/docker-compose.yml up -d --build
```

Konteynerlar ishga tushgach:
- **Frontend Veb Portal**: [http://localhost:3000](http://localhost:3000)
- **Backend REST API**: [http://localhost:4000/api/v1](http://localhost:4000/api/v1)
- **API Swagger Hujjatlari**: [http://localhost:4000/api/docs](http://localhost:4000/api/docs)
- **Monitoring (Grafana)**: [http://localhost:3001](http://localhost:3001)

---

## 🛡️ Xavfsizlik va Standartlar

- Barcha API so'rovlar JWT va RBAC orqali himoyalangan.
- Ma'lumotlar bazasida parollar Argon2/Bcrypt orqali heshlanadi.
- CORS, Helmet va Rate-Limiting sozlangan.

---

## 👨‍💻 Muallif va Bog'lanish

- Repozitoriya: [jumaqulovyashnar/IT-xizmatlari](https://github.com/jumaqulovyashnar/IT-xizmatlari..git)
- Litsenziya: MIT
