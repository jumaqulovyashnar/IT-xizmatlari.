import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ServicesModule } from './modules/services/services.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { BillingModule } from './modules/billing/billing.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [
    AuthModule,
    ServicesModule,
    TicketsModule,
    BillingModule,
    ProjectsModule,
  ],
})
export class AppModule {}
