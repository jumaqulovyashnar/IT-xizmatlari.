# IT Xizmatlari Platformasi — API Spetsifikatsiyasi (REST API)

Barcha API so'rovlari `https://api.itxizmatlari.uz/api/v1` prefiksi orqali amalga oshiriladi.
Xavfsizlik: Barcha shaxsiy yo'llar `Authorization: Bearer <JWT_TOKEN>` headerini talab qiladi.

---

## 1. Autentifikatsiya (Auth Module)

| Metod | Endpoint | Tavsif | Ruxsat (Role) |
|---|---|---|---|
| `POST` | `/auth/register` | Yangi mijoz/kompaniyani ro'yxatdan o'tkazish | Public |
| `POST` | `/auth/login` | Tizimga kirish va JWT tokenlarni olish | Public |
| `POST` | `/auth/refresh-token` | Access tokenni yangilash | Authenticated |
| `GET` | `/auth/profile` | Joriy foydalanuvchi ma'lumotlarini olish | Authenticated |
| `POST` | `/auth/logout` | Sessiyani yakunlash va tokenni bekor qilish | Authenticated |

---

## 2. IT Xizmatlar Katalogi (Services Catalog Module)

| Metod | Endpoint | Tavsif | Ruxsat (Role) |
|---|---|---|---|
| `GET` | `/services` | Barcha IT xizmatlar ro'yxatini olish | Public |
| `GET` | `/services/:id` | Bitta xizmat tafsilotlarini olish | Public |
| `POST` | `/services` | Yangi xizmat turini qo'shish | Admin, TechLead |
| `PUT` | `/services/:id` | Xizmat ma'lumotlari yoki narxini yangilash | Admin, TechLead |
| `DELETE` | `/services/:id` | Xizmatni o'chirish / arxivlash | Admin |
| `GET` | `/services/categories` | Xizmat toifalari (Dev, Cloud, Security, Helpdesk) | Public |

---

## 3. ITSM & Ticket Boshqaruvi (Helpdesk Module)

| Metod | Endpoint | Tavsif | Ruxsat (Role) |
|---|---|---|---|
| `POST` | `/tickets` | Yangi IT nosozlik/so'rov yaratish | Client, Admin |
| `GET` | `/tickets` | Foydalanuvchi/kompaniya ticketlari ro'yxati | Authenticated |
| `GET` | `/tickets/:id` | Ticket tafsilotlari, loglari va chat tarixi | Authenticated |
| `PATCH` | `/tickets/:id/assign` | Ticketni muhandisga biriktirish | Admin, TechLead |
| `PATCH` | `/tickets/:id/status` | Ticket holatini o'zgartirish (In Progress, Resolved) | Engineer, Admin |
| `POST` | `/tickets/:id/comments` | Ticket bo'yicha izoh yoki yechim yozish | Authenticated |
| `POST` | `/tickets/:id/attachments` | Skrinshot yoki log fayllarni biriktirish | Authenticated |

---

## 4. Billing va Invoyslar (Billing Module)

| Metod | Endpoint | Tavsif | Ruxsat (Role) |
|---|---|---|---|
| `GET` | `/billing/invoices` | Barcha invoyslar ro'yxati | Client, Admin |
| `GET` | `/billing/invoices/:id` | Invoys ma'lumotlari va PDF yuklab olish | Client, Admin |
| `POST` | `/billing/checkout` | To'lov sessiyasini boshlash (Payme, Click, Stripe) | Client |
| `POST` | `/billing/webhook/:provider` | To'lov tizimi webhook callback | External Service |
| `GET` | `/billing/subscriptions` | Faol IT xizmat obunalari | Client, Admin |

---

## 5. Loyihalar va Vazifalar (Projects Module)

| Metod | Endpoint | Tavsif | Ruxsat (Role) |
|---|---|---|---|
| `GET` | `/projects` | Kompaniyaga tegishli IT loyihalar ro'yxati | Client, Engineer, Admin |
| `GET` | `/projects/:id` | Loyiha bosqichlari (Milestones) va arxitekturasi | Authenticated |
| `POST` | `/projects` | Yangi IT loyiha yaratish | Admin, TechLead |
| `POST` | `/projects/:id/milestones` | Loyiha bosqichini tasdiqlash / qo'shish | Admin, Client |

---

## 6. Xatolar formati (Standard Error Response)

```json
{
  "statusCode": 400,
  "timestamp": "2026-08-20T11:50:00.000Z",
  "path": "/api/v1/tickets",
  "error": "Bad Request",
  "message": [
    "title must be longer than or equal to 5 characters",
    "priority must be one of: LOW, MEDIUM, HIGH, CRITICAL"
  ]
}
```
