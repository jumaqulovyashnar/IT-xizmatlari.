import { Injectable, NotFoundException } from '@nestjs/common';

export interface ITServiceItem {
  id: string;
  code: string;
  name: string;
  category: 'SOFTWARE' | 'CLOUD' | 'CYBERSECURITY' | 'HELPDESK' | 'NETWORK';
  description: string;
  basePrice: number;
  billingType: 'ONE_TIME' | 'HOURLY' | 'MONTHLY_SUBSCRIPTION';
  features: string[];
}

@Injectable()
export class ServicesService {
  private services: ITServiceItem[] = [
    {
      id: 'srv-1',
      code: 'SOFTWARE_DEV',
      name: 'Maxsus Dasturiy Ta\'minot Ishlab Chiqish',
      category: 'SOFTWARE',
      description: 'Web va Mobile platformalar, ERP/CRM tizimlarini noldan ishlab chiqish va integratsiya qilish.',
      basePrice: 15000000,
      billingType: 'ONE_TIME',
      features: ['Fullstack Next.js/NestJS', 'PostgreSQL DB', 'CI/CD va Docker', '1 yil kafolat'],
    },
    {
      id: 'srv-2',
      code: 'CLOUD_DEVOPS',
      name: 'Cloud & Server Infratuzilmasi va DevOps',
      category: 'CLOUD',
      description: 'AWS/GCP/DigitalOcean serverlarini sozlash, Kubernetes klasterlar va avtomatik deploy quvurlari.',
      basePrice: 5000000,
      billingType: 'MONTHLY_SUBSCRIPTION',
      features: ['24/7 Server Monitoring', 'Backup tizimi', 'SSL & Firewall', 'Dockerlashtirish'],
    },
    {
      id: 'srv-3',
      code: 'CYBERSECURITY_AUDIT',
      name: 'Kiberxavfsizlik Auditi va Himoya',
      category: 'CYBERSECURITY',
      description: 'Axborot xavfsizligi auditi, Pentest (zaifliklarni aniqlash) va ISO 27001 muvofiqlik.',
      basePrice: 8000000,
      billingType: 'ONE_TIME',
      features: ['Vulnerability Scan', 'Penetration Testing', 'Xavfsizlik hisoboti', 'Himoya tavsiyalari'],
    },
    {
      id: 'srv-4',
      code: 'HELPDESK_24_7',
      name: '24/7 IT Helpdesk va Korporativ Texnik Yordam',
      category: 'HELPDESK',
      description: 'Kompaniya xodimlari kompyuterlari, dasturlari va printerlarini masofaviy va joyida qo\'llab-quvvatlash.',
      basePrice: 3500000,
      billingType: 'MONTHLY_SUBSCRIPTION',
      features: ['15 daqiqalik SLA javob', 'Cheksiz so\'rovlar', 'Joyida servis', 'Oylik hisobot'],
    },
    {
      id: 'srv-5',
      code: 'NETWORK_INFRA',
      name: 'Korporativ Tarmoq va VPN Infratuzilmasi',
      category: 'NETWORK',
      description: 'MikroTik, Cisco routerlar, ofis Wi-Fi tarmoqlari va xavfsiz korporativ VPN sozlash.',
      basePrice: 4000000,
      billingType: 'ONE_TIME',
      features: ['VLAN ajratish', 'QoS va tezlik nazorati', 'Site-to-Site VPN', 'Xavfsiz Wi-Fi Mesh'],
    },
  ];

  async findAll() {
    return this.services;
  }

  async findOne(id: string) {
    const service = this.services.find(s => s.id === id || s.code === id);
    if (!service) throw new NotFoundException('Xizmat topilmadi');
    return service;
  }

  async create(dto: any) {
    const newService: ITServiceItem = {
      id: 'srv-' + (this.services.length + 1),
      ...dto,
    };
    this.services.push(newService);
    return newService;
  }
}
