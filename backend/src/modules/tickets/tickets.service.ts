import { Injectable, NotFoundException } from '@nestjs/common';

export interface ITTicket {
  id: string;
  ticketNumber: string;
  title: string;
  description: string;
  category: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'OPEN' | 'ASSIGNED' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  clientName: string;
  assignedEngineer?: string;
  slaDueDate: string;
  createdAt: string;
}

@Injectable()
export class TicketsService {
  private tickets: ITTicket[] = [
    {
      id: 'tkt-101',
      ticketNumber: 'IT-2026-001',
      title: 'Asosiy PostgreSQL Server javob bermayapti',
      description: 'DB server CPU yuklamasi 100% ga chiqib ketdi, veb servislar sekinlashdi.',
      category: 'SERVER_DOWN',
      priority: 'CRITICAL',
      status: 'IN_PROGRESS',
      clientName: 'Fintech Corp LLC',
      assignedEngineer: 'Yashnar Jumaqulov (Senior DevOps)',
      slaDueDate: '2026-08-20T18:00:00Z',
      createdAt: '2026-08-20T16:00:00Z',
    },
    {
      id: 'tkt-102',
      ticketNumber: 'IT-2026-002',
      title: 'Ofis Wi-Fi tarmog\'i uchun yangi VLAN sozlash',
      description: 'Mehmonlar va xodimlar trafigini xavfsiz ajratish zarur.',
      category: 'NETWORK_ISSUE',
      priority: 'MEDIUM',
      status: 'ASSIGNED',
      clientName: 'Global Logistics',
      assignedEngineer: 'Aliyev Sardor (Network Engineer)',
      slaDueDate: '2026-08-21T12:00:00Z',
      createdAt: '2026-08-20T15:30:00Z',
    },
    {
      id: 'tkt-103',
      ticketNumber: 'IT-2026-003',
      title: 'Yangi xodimlar uchun korporativ email va VPN ochish',
      description: '5 ta yangi dasturchi uchun IAM ruxsatlari va GitLab sozlamalari.',
      category: 'FEATURE_REQUEST',
      priority: 'LOW',
      status: 'OPEN',
      clientName: 'Startup Hub',
      slaDueDate: '2026-08-22T18:00:00Z',
      createdAt: '2026-08-20T14:15:00Z',
    },
  ];

  async findAll() {
    return this.tickets;
  }

  async findOne(id: string) {
    const ticket = this.tickets.find(t => t.id === id || t.ticketNumber === id);
    if (!ticket) throw new NotFoundException('Ticket topilmadi');
    return ticket;
  }

  async create(dto: any) {
    const newTicket: ITTicket = {
      id: 'tkt-' + (this.tickets.length + 101),
      ticketNumber: `IT-2026-${String(this.tickets.length + 1).padStart(3, '0')}`,
      title: dto.title,
      description: dto.description,
      category: dto.category || 'BUG',
      priority: dto.priority || 'MEDIUM',
      status: 'OPEN',
      clientName: dto.clientName || 'Demo Client',
      slaDueDate: new Date(Date.now() + 4 * 3600 * 1000).toISOString(),
      createdAt: new Date().toISOString(),
    };
    this.tickets.unshift(newTicket);
    return newTicket;
  }

  async updateStatus(id: string, status: any) {
    const ticket = await this.findOne(id);
    ticket.status = status;
    return ticket;
  }
}
