# IT Xizmatlari Platformasi — Ma'lumotlar Bazasi Sxemasi (Database Schema)

Tizim relyatsion **PostgreSQL 16+** va ORM sifatida **Prisma / TypeORM** dan foydalanadi.

---

## 1. ERD (Entity Relationship Diagram)

```mermaid
erDiagram
    USERS ||--o{ TICKETS : "creates"
    USERS ||--o{ TICKETS : "assigned_to"
    USERS ||--o{ INVOICES : "belongs_to"
    USERS ||--o{ PROJECTS : "client_or_lead"

    COMPANIES ||--o{ USERS : "has"
    COMPANIES ||--o{ CONTRACTS : "signs"

    SERVICES ||--o{ SUBSCRIPTIONS : "plans"
    COMPANIES ||--o{ SUBSCRIPTIONS : "subscribes"

    TICKETS ||--o{ TICKET_COMMENTS : "contains"
    TICKETS ||--o{ TICKET_ATTACHMENTS : "has"

    INVOICES ||--o{ INVOICE_ITEMS : "includes"
    PROJECTS ||--o{ MILESTONES : "tracks"

    USERS {
        uuid id PK
        string email UK
        string password_hash
        string full_name
        string phone
        enum role "SUPER_ADMIN, TECH_LEAD, ENGINEER, CLIENT_ADMIN, CLIENT_STAFF"
        uuid company_id FK
        boolean is_active
        timestamp created_at
    }

    COMPANIES {
        uuid id PK
        string name
        string tax_id
        string address
        string contact_phone
        timestamp created_at
    }

    SERVICES {
        uuid id PK
        string code UK
        string name
        string description
        string category "SOFTWARE, CLOUD, CYBERSECURITY, HELPDESK, NETWORK"
        decimal base_price
        enum billing_type "ONE_TIME, HOURLY, MONTHLY_SUBSCRIPTION"
        boolean is_active
    }

    TICKETS {
        uuid id PK
        string ticket_number UK
        string title
        text description
        enum category "SERVER_DOWN, BUG, FEATURE_REQUEST, NETWORK_ISSUE, SECURITY_ALERT"
        enum priority "LOW, MEDIUM, HIGH, CRITICAL"
        enum status "OPEN, ASSIGNED, IN_PROGRESS, PENDING_CLIENT, RESOLVED, CLOSED"
        uuid client_id FK
        uuid assigned_engineer_id FK
        timestamp sla_due_date
        timestamp resolved_at
        timestamp created_at
    }

    TICKET_COMMENTS {
        uuid id PK
        uuid ticket_id FK
        uuid author_id FK
        text content
        boolean is_internal_note
        timestamp created_at
    }

    INVOICES {
        uuid id PK
        string invoice_number UK
        uuid company_id FK
        decimal total_amount
        decimal tax_amount
        enum status "DRAFT, SENT, PAID, OVERDUE, CANCELLED"
        date due_date
        timestamp paid_at
        string payment_method "PAYME, CLICK, STRIPE, BANK_TRANSFER"
    }

    PROJECTS {
        uuid id PK
        string name
        text description
        uuid client_company_id FK
        uuid lead_engineer_id FK
        enum status "PLANNING, IN_PROGRESS, TESTING, COMPLETED, ON_HOLD"
        date start_date
        date target_end_date
    }
```

---

## 2. Asosiy Jadvallar Tavsifi

1. **`users`**: Tizim foydalanuvchilari (Mijozlar, IT muhandislar, Administratorlar).
2. **`companies`**: Korporativ mijozlar va yuridik shaxslar ma'lumotlari.
3. **`services`**: IT xizmatlari katalogi, narxlar va xizmat turlari.
4. **`tickets`**: ITSM yordam va nosozliklarni qayd qilish jadvallari, SLA vaqt hisoboti.
5. **`ticket_comments`**: Ticketlar bo'yicha mijoz va muhandislar muloqoti.
6. **`invoices` & `invoice_items`**: Barcha oylik va bir martalik IT xizmatlar to'lov hisob-kitoblari.
7. **`projects` & `milestones`**: Katta hajmdagi IT loyihalar boshqaruvi.
