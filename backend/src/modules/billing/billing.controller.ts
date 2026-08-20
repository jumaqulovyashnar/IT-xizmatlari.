import { Controller, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Billing va Invoyslar')
@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get('invoices')
  @ApiOperation({ summary: 'Barcha hisob-fakturalar (invoices)' })
  async getInvoices() {
    return this.billingService.getInvoices();
  }
}
