import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('IT Xizmatlar Katalogi')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  @ApiOperation({ summary: 'Barcha IT xizmatlari ro\'yxati' })
  async findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Bitta IT xizmati tafsilotlari' })
  async findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Yangi IT xizmat turini qo\'shish' })
  async create(@Body() dto: any) {
    return this.servicesService.create(dto);
  }
}
