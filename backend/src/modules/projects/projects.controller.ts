import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('IT Loyihalar Boshqaruvi')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Barcha faol IT loyihalar ro\'yxati' })
  async getProjects() {
    return this.projectsService.getProjects();
  }
}
