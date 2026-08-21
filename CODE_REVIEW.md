# IT SERVICE — To'liq Loyiha Reviewi

**Sana:** 2026-08-20
**Ko'rib chiqilgan:** `backend/` (NestJS + Prisma), `frontend/` (Next.js 14 + Tailwind + daisyUI), `infrastructure/`, `docs/`, `.github/workflows/`
**Tekshirish usuli:** kodni qo'lda o'qish + `next build`, `nest build`, `tsc --noEmit`, `npm audit` real ishga tushirildi + sahifa Chromium'da render qilinib, DOM o'lchamlari o'lchandi (uz/en/ru va desktop/mobil).

---

## 0. Umumiy xulosa

Loyiha **prezentatsiya darajasida juda yaxshi**: struktura toza, hujjatlar (C4 diagramma, ERD, API spec) professional, frontend dizayni zamonaviy, Docker/CI skeleti bor.

Ammo **funksional jihatdan bu hali ishlaydigan mahsulot emas, balki demo/prototip**:

| Qatlam | Hujjatda va'da qilingan | Kodda haqiqatda bor |
|---|---|---|
| Autentifikatsiya | JWT + Refresh + RBAC + 2FA | `'mock_jwt_' + Date.now()` qatori |
| Ma'lumotlar bazasi | PostgreSQL + Prisma | RAM'dagi massivlar (`private tickets = [...]`) |
| Validatsiya | class-validator DTO | `@Body() dto: any` |
| Xavfsizlik | Helmet, Rate-limit, RBAC | Yo'q |
| Frontend ↔ Backend | REST integratsiya | **Umuman ulanmagan** — hardcoded data |
| Testlar | CI'da "Lint & Tests" | 0 ta test |

Ya'ni backend va frontend **bir-birini ko'rmaydi**. Ikkalasi ham alohida "chiroyli maket".

**Build holati:** `next build` ✅ toza o'tadi, `nest build` ✅ toza o'tadi, TypeScript xatolari yo'q.

---

## 1. BUGUN TUZATILDI — Layout xatosi (siz ko'rsatgan)

### Muammo
`page.tsx` dagi 3 ta bo'limda (Veb-saytlar / Mobil / Lending) grid `items-center` edi, o'ng tomondagi rasm karta esa **qat'iy balandlik** bilan berilgan edi:

```
h-[460px] sm:h-[500px] lg:h-[530px]
```

Matn ustuni esa kontentga qarab o'sadi. Real o'lchov (1920px, uz tili):

| Bo'lim | Matn ustuni | Rasm karta | Farq |
|---|---|---|---|
| section-websites | **855px** | 552px | 303px |
| section-mobile | **715px** | 552px | 163px |
| section-landing | **735px** | 552px | 183px |

Natijada karta o'rtada "suzib" turardi, matn esa uning tepasi va pastidan chiqib ketardi — siz screenshotda ko'rgan nomutanosiblik shu.

Bu til bo'yicha ham o'zgaradi (EN va RU matnlari boshqa uzunlikda), shuning uchun qat'iy `530px` **hech qachon** mos kelmasdi.

### Yechim
Kartani matn balandligiga **avtomatik moslashadigan** qildim:

```diff
- <div className="grid ... items-center">
+ <div className="grid ... items-stretch">

- <div className="lg:col-span-5 space-y-6">
+ <div className="lg:col-span-5 flex flex-col justify-center space-y-6">

- <div className="relative rounded-3xl border ...">
+ <div className="relative h-full flex flex-col rounded-3xl border ...">

- <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[530px] ...">
+ <div className="relative w-full h-[460px] sm:h-[500px] lg:h-full lg:min-h-[530px] ...">
```

`min-h-[530px]` saqlab qolindi — agar matn kalta bo'lsa (masalan qisqa tarjimada) karta 530px dan pastga tushmaydi va matn vertikal markazlashadi.

### Natija (Chromium'da o'lchandi)

| Til | section-websites | section-mobile | section-landing |
|---|---|---|---|
| UZ | 855 = 855 ✅ | 715 = 715 ✅ | 735 = 735 ✅ |
| EN | 735 = 735 ✅ | 755 = 755 ✅ | 715 = 715 ✅ |
| RU | 715 = 715 ✅ | 815 = 815 ✅ | 735 = 735 ✅ |

Uchala tilda ham ikkala ustun **piksel-in-piksel** teng. Mobil (390px) da gorizontal scroll yo'q.

### Yana bitta tuzatilgan bug (shu oiladan)
"Bizning Loyihalar" kartalarida:

```diff
- <div className="w-full h-60 sm:h-68 lg:h-76 ...">
+ <div className="w-full h-60 sm:h-72 lg:h-80 ...">
```

`h-68` va `h-76` — Tailwind'da **mavjud bo'lmagan** klasslar (standart shkala: 60, 64, 72, 80). Ya'ni CSS umuman generatsiya qilinmagan va rasm maydoni barcha ekranlarda `h-60` (240px) bo'lib qolgan — sm/lg uchun mo'ljallangan kattalashish **hech qachon ishlamagan**.

---

## 2. KRITIK — Backend umuman ishlamaydi (production uchun)

### 2.1. Auth butunlay soxta
`backend/src/modules/auth/auth.service.ts`:

```ts
accessToken: 'mock_jwt_access_token_' + Date.now(),
```

- Parol tekshirilmaydi, hash qilinmaydi (`bcrypt` o'rnatilgan, lekin **ishlatilmagan**).
- Token imzolanmaydi (`@nestjs/jwt`, `passport-jwt` o'rnatilgan, **ishlatilmagan**).
- `GET /auth/profile` tokenni umuman o'qimaydi — har doim hardcoded `Yashnar Jumaqulov / SUPER_ADMIN` qaytaradi.

### 2.2. RBAC va Guard'lar yo'q
Butun kod bazasida **birorta `@UseGuards`** yo'q. Ya'ni:

- `POST /services` — istalgan odam yangi xizmat qo'sha oladi
- `PATCH /tickets/:id/status` — istalgan odam ticket statusini o'zgartira oladi
- `GET /billing/invoices` — barcha mijozlarning invoyslari **ochiq**

`API_SPECIFICATION.md` da har bir endpoint uchun "Ruxsat (Role)" ustuni bor — kodda hech biri amalga oshirilmagan.

### 2.3. Prisma ulanmagan
- `PrismaService` / `PrismaModule` yo'q
- `prisma/migrations/` papkasi bo'sh
- Hech bir service `PrismaClient` ni import qilmaydi

Barcha ma'lumot RAM'da:
```ts
private tickets: ITTicket[] = [ ... ];  // server restart = hamma narsa yo'qoladi
```
Bu `docker-compose` da 2 ta backend replica ko'tarilsa ham buziladi (har birida boshqa data).

### 2.4. Validatsiya o'lik
`main.ts` da global `ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })` bor — bu yaxshi. **Lekin** barcha controller'lar `@Body() dto: any` ishlatadi. `any` uchun metatype bo'lmaganligi sababli **ValidationPipe hech narsa tekshirmaydi va hech narsani filtrlamaydi**.

`class-validator` va `class-transformer` package.json'da bor, lekin bitta DTO klass ham yozilmagan.

**Yechim:** `CreateTicketDto`, `LoginDto`, `CreateServiceDto` va h.k. yozish:
```ts
export class CreateTicketDto {
  @IsString() @MinLength(5) title: string;
  @IsEnum(Priority) priority: Priority;
}
```

### 2.5. CORS xavfli sozlangan
```ts
app.enableCors({ origin: true, credentials: true });
```
`origin: true` — kelgan **istalgan** Origin'ni aks ettiradi va bir vaqtda `credentials: true`. Production uchun bu CSRF/ma'lumot o'g'irlash uchun ochiq eshik. Aniq domenlar ro'yxati kerak:
```ts
origin: process.env.FRONTEND_URL?.split(',') ?? false
```

### 2.6. README yolg'on gapiryapti
README:
> CORS, Helmet va Rate-Limiting sozlangan.
> Parollar Argon2/Bcrypt orqali heshlanadi.

Haqiqatda: `helmet` yo'q, `@nestjs/throttler` yo'q, hashing yo'q. Bu **hujjat bilan kod o'rtasidagi eng xavfli nomuvofiqlik** — kimdir bunga ishonib deploy qilishi mumkin.

### 2.7. `.env` hech qachon o'qilmaydi
`dotenv` dependency'da bor, lekin `app.module.ts` da `ConfigModule` yo'q va `dotenv.config()` chaqirilmaydi. Lokal `npm run start:dev` da `.env` **e'tiborsiz qoldiriladi**. `@nestjs/config` qo'shish kerak.

### 2.8. Kichikroq backend nuqsonlari
- `ServicesService.create()` — `id: 'srv-' + (length + 1)`. Element o'chirilsa ID takrorlanadi. `dto` validatsiyasiz `...dto` bilan spread qilinadi (istalgan maydon kirib ketadi).
- `TicketsService.updateStatus()` — `status: any`, enum tekshirilmaydi. `PATCH .../status` ga `"BANANA"` yuborsa ham qabul qiladi.
- `tsconfig.json` — `strictNullChecks: false`, `noImplicitAny: false`. TypeScript'ning asosiy foydasi o'chirilgan.
- Prisma sxemasi hujjatdan orqada: `Project`, `Milestone`, `Subscription`, `Contract`, `InvoiceItem`, `TicketAttachment` modellari **umuman yo'q**, `Ticket.category` enum yo'q, `Invoice.taxAmount` yo'q. `ProjectsModule` bor, lekin `Project` modeli yo'q.

---

## 3. YUQORI — Frontend backend'ga umuman ulanmagan

- `frontend/src/lib/` da faqat `cn()` helper bor. README'da va'da qilingan "API klientlar" yo'q.
- `NEXT_PUBLIC_API_URL` `docker-compose.yml` da beriladi, lekin **kodda hech qayerda o'qilmaydi**.
- `/portal` — ticketlar `useState` ichida hardcoded, yangi ticket faqat brauzer xotirasida (refresh = yo'qoladi).
- `/admin` — barcha KPI va server metrikalari hardcoded massiv.

**Muhim nuqta:** `NEXT_PUBLIC_*` o'zgaruvchilar Next.js'da **build vaqtida** kodga yoziladi, runtime'da emas. Shuning uchun `docker-compose` dagi `environment:` orqali berish baribir ishlamaydi — `build.args` kerak.

### 3.1. Real bug: `/portal` da tavsif yo'qoladi
`portal/page.tsx`, `handleCreateTicket`:

```ts
const newTkt = { id, title: newTitle, category, priority, status, assignedTo, updatedAt };
// ↑ description YO'Q
setTickets([newTkt, ...tickets]);
setNewDesc("");   // tozalanadi, lekin hech qayerga saqlanmagan
```

Foydalanuvchi "Batafsil Tavsif" ga log/stack-trace yozadi → **jimgina yo'qoladi**. Shuningdek `newPriority` submit'dan keyin reset qilinmaydi.

### 3.2. Dizayn tizimi ziddiyati (ko'zga tashlanadi)
Loyihada **ikkita** UI kutubxona aralashgan:

- **daisyUI** — `bg-base-100`, `badge-primary`, `btn` (temaga moslashadi ✅)
- **shadcn/ui** — `Button`, `Card`, `Badge`, `Input` (`bg-primary`, `border-input`, `bg-background`)

Muammo: `tailwind.config.ts` da shadcn tokenlari fallback bilan yozilgan —
```ts
primary: "hsl(var(--primary, 217.2 91.2% 59.8%))"
```
— lekin `--primary`, `--background`, `--border`, `--ring`, `--card`, `--destructive` **hech qayerda (globals.css'da ham) e'lon qilinmagan**.

Brauzerda o'lchadim:

| | Light tema | Dark tema |
|---|---|---|
| daisyUI `--p` | `49.12% 0.3096 275.75` | `65.69% 0.196 275.75` (o'zgaradi ✅) |
| shadcn `--primary` | *(bo'sh)* | *(bo'sh)* |
| Submit tugma foni | `rgb(59,130,246)` | `rgb(59,130,246)` (**o'zgarmaydi ❌**) |

Natija: `/portal` sahifasida bitta ekranda **ikkita har xil "primary" rang** — daisyUI badge'lari binafsha, shadcn tugmasi ko'k. `Badge variant="destructive"` ("CRITICAL (15m SLA)") esa qorong'i qizil `hsl(0 62.8% 30.6%)` da qotib qolgan va light temada rangsiz/xira ko'rinadi.

**Yechim (2 variantdan biri):**
1. `globals.css` ga `:root { --primary: ...; --background: ...; }` va `[data-theme="dark"] { ... }` bloklarini yozib, shadcn tokenlarini daisyUI temasiga bog'lash; **yoki**
2. shadcn komponentlarini butunlay olib tashlab, faqat daisyUI'da qolish (yoki teskarisi). Bittasini tanlash kerak.

### 3.3. Til/tema hydration muammolari
- `layout.tsx` da `<html lang="uz">` **qat'iy** yozilgan. Foydalanuvchi RU tanlasa ham `lang="uz"` qoladi — SEO va screen reader uchun noto'g'ri.
- Tema uchun inline script bor (yaxshi), lekin **til uchun yo'q**. `ru` saqlagan foydalanuvchi har safar sahifa ochilganda bir lahza o'zbekcha matnni ko'radi (FOUC).
- Tema logikasi **ikki joyda takrorlangan**: `layout.tsx` inline script + `ThemeLanguageSwitcher` ning `useEffect` i.
- `next-themes` o'rnatilgan, lekin **ishlatilmagan** — aynan shu muammoni hal qiladigan kutubxona.

### 3.4. Til dropdown'i tashqariga bosganda yopilmaydi
`ThemeLanguageSwitcher.tsx` — `isOpen` faqat tugma orqali toggle bo'ladi. Tashqariga bosilsa ochiq qoladi. `Escape` ham ishlamaydi, `aria-expanded` / `aria-haspopup` yo'q.

### 3.5. Tarjimalar tipi xavfsiz emas
```ts
t: typeof translations.uz
```
`en` yoki `ru` da kalit yetishmasa TypeScript **ushlamaydi** → runtime'da `undefined`. To'g'risi:
```ts
export const translations: Record<Language, TranslationSchema> = { ... }
```

Hozirda ham drift bor: `section2.stats` va `section3.actionText` bor, lekin `section1` da yo'q.

### 3.6. O'lik kod
- `page.tsx`: 19 ta lucide ikonasidan **15 tasi ishlatilmaydi** (`Smartphone`, `ShoppingCart`, `Database`, `Globe2`, `Cpu`, `ShieldCheck`, `MapPin`, `Rocket`, `Check`, `ChevronRight`, `TrendingUp`, `BarChart3`, `Sparkles`, `ArrowRight`, `ExternalLink`)
- `admin/page.tsx`: `Activity`, `HardDrive` ishlatilmaydi
- Ishlatilmaydigan tarjima kalitlari: `slogan`, `subSlogan`, `contactUs`, `alwaysWithYou`, `nav.contact`, `hero.badge`, `hero.orderBtn`, `section2.stats`, `section3.actionText`, `theme`, `lang`
- Ishlatilmaydigan paketlar: `next-themes`, `i18next`, `react-i18next`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-tabs`
- `public/ecommerce-template.png` — `ecommerce-showcase.png` ning **aynan nusxasi** (361 063 bayt), hech qayerda ishlatilmaydi

### 3.7. `/portal` va `/admin` ga havola yo'q
Ikkala dashboard ham UI'dan **umuman ochib bo'lmaydi** — faqat URL'ni qo'lda yozib. Navbar'da ham, footer'da ham link yo'q. Va ular himoyalanmagan (auth yo'q).

---

## 4. O'RTA — Performance va SEO

### 4.1. Rasmlar
- Barcha rasmlar oddiy `<img>` orqali — `next/image` emas. Optimizatsiya, `srcset`, `width/height` yo'q → **CLS** (layout siljishi).
- Umumiy hajm ~**3.4 MB** PNG:
  `landing-showcase.png` 737 KB, `project3-taxi.png` 737 KB, `project2-edu.png` 413 KB, `project4-arch.png` 396 KB, `ecommerce-showcase.png` 361 KB, `ecommerce-template.png` 361 KB (dublikat), `project1-travel.png` 264 KB, `mobile-showcase.png` 199 KB
- WebP/AVIF'ga o'tkazilsa ~70–80% qisqaradi.
- Birinchi bo'lim rasmida `loading="lazy"` — u ekran tepasiga yaqin, LCP'ni sekinlashtiradi.

> Landing'da "Google PageSpeed 99/100" deb yozilgan — hozirgi holatda sayt o'zi bu ko'rsatkichga chiqmaydi.

### 4.2. SEO deyarli yo'q
- OpenGraph / Twitter card teglari yo'q
- `metadataBase` yo'q
- favicon yo'q
- `sitemap.ts`, `robots.ts` yo'q
- JSON-LD (Organization / Service schema) yo'q
- `metadata` faqat o'zbekcha, uch til uchun `alternates.languages` yo'q

> Landing'da "SEO & Reklama Integratsiyasi / tayyor metateglar" deb yozilgan — saytning o'zida yo'q.

### 4.3. Font
`globals.css` da:
```css
font-family: 'Google Sans', 'Plus Jakarta Sans', ...
```
`Google Sans` hech qachon yuklanmaydi (faqat Plus Jakarta Sans import qilingan) — chalg'ituvchi. Bundan tashqari CSS ichidagi `@import url(fonts.googleapis.com)` **render'ni bloklaydi**; `next/font/google` ishlatilsa tezroq va CLS'siz bo'ladi.

### 4.4. Accessibility
- `alt="Mobile App Showcase"`, `alt="Landing Page Website Showcase"` — sahifa o'zbekcha bo'lsa ham inglizcha
- Tema tugmasida `title` bor, lekin `aria-label` yo'q
- Loyiha kartalaridagi `↗` belgisi dekorativ, `aria-hidden="true"` kerak
- Navbar "Bosh sahifa" havolasi `href="#"` — URL'ga `#` qo'shadi, `scroll-behavior: smooth` ham yo'q, sakrash keskin

### 4.5. `app/` da xato sahifalari yo'q
`error.tsx`, `not-found.tsx`, `loading.tsx` fayllari yo'q — production'da xato bo'lsa Next.js'ning standart oq sahifasi chiqadi.

---

## 5. O'RTA — Infratuzilma va CI/CD

### 5.1. CI **ishlamaydi** (backend job qulaydi)
`.github/workflows/ci-cd.yml`:
```yaml
- run: npm ci     # working-directory: ./backend
```
`npm ci` **majburiy ravishda lock-fayl talab qiladi**, lekin `backend/package-lock.json` **yo'q** (faqat frontend'da bor). Backend job birinchi qadamdayoq xato beradi.

Shuningdek:
- Job nomi "Lint & Tests", lekin lint ham, test ham yo'q
- Fayl nomi "CI/**CD**", lekin deploy job umuman yo'q
- `cache-dependency-path: backend/package.json` — odatda `package-lock.json` ko'rsatiladi

### 5.2. Docker/Compose
- `version: '3.8'` — Compose v2'da eskirgan, ogohlantirish beradi
- **PostgreSQL (5432), Redis (6379), MinIO (9000/9001) hostga ochilgan.** Production'da bu keraksiz va xavfli — faqat ichki `it_network` da qolishi kerak
- **Redis parolsiz** (`.env.example` da `REDIS_PASSWORD` bo'sh, compose'da umuman uzatilmaydi)
- Backend konteynerida `prisma migrate deploy` **yo'q** → DB sxemasi hech qachon yaratilmaydi
- `NEXT_PUBLIC_API_URL: http://localhost:4000/api/v1` — (a) runtime'da berilgani uchun ishlamaydi, (b) nginx `/api/` ni proxy qilgani uchun `/api/v1` bo'lishi kerak edi
- `prometheus.yml` mavjud, lekin compose'da **Prometheus ham, Grafana ham yo'q**. README esa "Monitoring (Grafana): localhost:3001" deb yozadi — bunday servis yo'q
- Prometheus `/api/v1/metrics` ni scrape qiladi — backend'da bunday endpoint yo'q

### 5.3. Nginx
- SSL/TLS yo'q (443, sertifikat, HTTP→HTTPS redirect). ARCHITECTURE.md "TLS 1.3" deydi
- Xavfsizlik header'lari yo'q: `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Content-Security-Policy`
- `client_max_body_size` yo'q — fayl biriktirish (attachments) rejalashtirilgan bo'lsa kerak bo'ladi
- Rate limiting yo'q

### 5.4. Vercel bilan ziddiyat
`next.config.js` da `output: 'standalone'` (Docker uchun) — lekin `vercel.json` ham bor. Ikkalasi bir vaqtda mos kelmaydi; Vercel'da odatda "Root Directory = frontend" sozlanadi, `cd frontend && ...` build command emas.

---

## 6. Xavfsizlik: `npm audit` natijalari (real ishga tushirildi)

**Frontend — 2 ta zaiflik (1 high, 1 critical):**
- `next@14.1.0` — cache poisoning, XSS (beforeInteractive), Image Optimization DoS, SSRF (WebSocket upgrade va rewrites), Server Action DoS, ichki Server Function endpoint'larining oshkor bo'lishi va h.k.
- `postcss <=8.5.22` — XSS va `sourceMappingURL` orqali ixtiyoriy fayl o'qish

→ `next@14.2.35` ga ko'tarish kerak (npm o'rnatishda ham ogohlantiradi: *"This version has a security vulnerability"*).

**Backend — 14 ta zaiflik (7 moderate, 6 high, 1 critical):**
- `bcrypt@5.1.1` → `@mapbox/node-pre-gyp` → `tar` zanjiri: symlink path traversal, DoS, file smuggling
- `bcrypt@6.0.0` ga ko'tarish kerak (breaking change), yoki `argon2` ga o'tish (ARCHITECTURE.md da baribir Argon2 yozilgan)

**Sirlar:**
`.env.example` da haqiqiy ko'rinishdagi standart parollar bor (`JWT_SECRET=super_secret_jwt_key_change_in_production_2026`, `it_secret_pass`, `minio_secret_password`) va `docker-compose.yml` **aynan shularni default qilib oladi**. Kimdir `.env` siz deploy qilsa — ma'lum parollar bilan ishga tushadi. Compose'da default qiymatlarni olib tashlab, majburiy qilish kerak.

---

## 7. Testlar

**0 ta test.** `*.spec.ts` yo'q, jest konfiguratsiyasi yo'q, `test` skripti yo'q, `@nestjs/testing` o'rnatilmagan. Frontend'da ham (Vitest/Playwright) yo'q.

Shuningdek `frontend/package.json` da `"lint": "next lint"` bor, lekin `eslint` dependency ham, `.eslintrc` ham yo'q → buyruq interaktiv setup so'raydi yoki CI'da qotadi.

---

## 8. Tavsiya etilgan tartib (prioritet bo'yicha)

**1-bosqich — Xavfsizlik (darhol)**
1. `next@14.2.35` ga ko'tarish, `bcrypt` → `argon2`
2. `.env.example` va `docker-compose.yml` dan default sirlarni olib tashlash
3. CORS'ni aniq domenlarga cheklash
4. Postgres/Redis/MinIO portlarini hostdan yopish, Redis'ga parol

**2-bosqich — Backend'ni jonlantirish**
5. `PrismaModule` + `PrismaService` yozish, `prisma migrate dev` bilan birinchi migratsiya
6. Barcha service'lardagi RAM massivlarini Prisma so'rovlariga almashtirish
7. Haqiqiy JWT auth: argon2 hash, `JwtStrategy`, `JwtAuthGuard`, `RolesGuard` + `@Roles()` dekoratori
8. Har bir endpoint uchun DTO + class-validator
9. `@nestjs/config`, `helmet`, `@nestjs/throttler` qo'shish

**3-bosqich — Integratsiya**
10. `frontend/src/lib/api.ts` — API klient, `NEXT_PUBLIC_API_URL` ni `build.args` orqali berish
11. `/portal` va `/admin` ni real API'ga ulash, ularga navigatsiya va auth qo'shish
12. Portal formasidagi `description` yo'qolish bug'ini tuzatish

**4-bosqich — Sifat**
13. `backend/package-lock.json` ni commit qilish (CI hozir buzilgan)
14. ESLint + Prettier + Husky
15. Kamida happy-path testlar (auth, tickets CRUD) + CI'ga qo'shish
16. Dizayn tizimini bittaga keltirish (daisyUI **yoki** shadcn)
17. `next/image` + WebP, `next/font`, OG teglari, sitemap/robots
18. O'lik kod va paketlarni tozalash

---

## 9. Nima yaxshi (saqlab qolish kerak)

- `docs/` — C4 diagrammalari, ERD, API spec haqiqatan professional darajada. Ko'p loyihada bunday hujjat umuman bo'lmaydi.
- Modul strukturasi (`auth`, `services`, `tickets`, `billing`, `projects`) toza va kengaytiriladigan.
- Prisma sxemasidagi enum'lar va `@map` bilan snake_case naming — to'g'ri yondashuv.
- Multi-stage Dockerfile'lar (builder + runner) to'g'ri yozilgan.
- Landing dizayni chiroyli, uch tilli va responsive.
- `next build` va `nest build` — ikkalasi ham xatosiz o'tadi.
