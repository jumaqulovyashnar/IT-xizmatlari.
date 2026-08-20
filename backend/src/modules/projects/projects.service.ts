import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  private projects = [
    {
      id: 'prj-01',
      name: 'Korporativ CRM va Mijozlar Portali',
      client: 'Fintech Corp LLC',
      leadEngineer: 'Yashnar Jumaqulov',
      status: 'IN_PROGRESS',
      progress: 68,
      milestones: [
        { title: 'Talablar va Texnik topshiriq', status: 'COMPLETED' },
        { title: 'Tizim arxitekturasi va DB sxemasi', status: 'COMPLETED' },
        { title: 'Backend API va Microservislar', status: 'IN_PROGRESS' },
        { title: 'Frontend UI va Integratsiya', status: 'PENDING' },
        { title: 'QA Test va Production Deploy', status: 'PENDING' },
      ],
    },
    {
      id: 'prj-02',
      name: 'Server Infratuzilmasini AWS ga Migratsiya Qilish',
      client: 'E-commerce Trade',
      leadEngineer: 'Sardor Aliyev',
      status: 'TESTING',
      progress: 90,
      milestones: [
        { title: 'Infratuzilma Auditi', status: 'COMPLETED' },
        { title: 'Terraform & Kubernetes sozlash', status: 'COMPLETED' },
        { title: 'Ma\'lumotlar bazasini ko\'chirish', status: 'COMPLETED' },
        { title: 'Load Testing va Monitoring', status: 'IN_PROGRESS' },
      ],
    },
  ];

  async getProjects() {
    return this.projects;
  }
}
