import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  private invoices = [
    {
      id: 'inv-2026-001',
      invoiceNumber: 'INV-2026-001',
      companyName: 'Fintech Corp LLC',
      amount: 15000000,
      status: 'PAID',
      dueDate: '2026-08-25',
      paidAt: '2026-08-15',
      serviceName: 'Fullstack Next.js/NestJS tizimini ishlab chiqish',
    },
    {
      id: 'inv-2026-002',
      invoiceNumber: 'INV-2026-002',
      companyName: 'Global Logistics',
      amount: 3500000,
      status: 'SENT',
      dueDate: '2026-08-30',
      serviceName: 'Oylik 24/7 IT Helpdesk va Tarmoq texnik xizmati',
    },
  ];

  async getInvoices() {
    return this.invoices;
  }
}
