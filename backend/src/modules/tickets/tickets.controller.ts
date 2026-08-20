import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('ITSM & Ticket Boshqaruvi')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  @ApiOperation({ summary: 'Barcha ticketlar ro\'yxati' })
  async findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Bitta ticket ma\'lumotlari' })
  async findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Yangi IT so\'rov / ticket yaratish' })
  async create(@Body() dto: any) {
    return this.ticketsService.create(dto);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Ticket statusini yangilash' })
  async updateStatus(@Param('id') id: string, @Body('status') status: any) {
    return this.ticketsService.updateStatus(id, status);
  }
}
