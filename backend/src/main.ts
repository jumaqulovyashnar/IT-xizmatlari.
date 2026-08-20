import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api/v1');

  // CORS sozlamalari
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger API Hujjatlari
  const config = new DocumentBuilder()
    .setTitle('IT Xizmatlari Platformasi API')
    .setDescription('IT xizmatlari, ITSM helpdesk, billing va loyihalar boshqaruvi API spetsifikatsiyasi')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const PORT = process.env.PORT || 4000;
  await app.listen(PORT);
  console.log(`🚀 IT Services Backend API ishga tushdi: http://localhost:${PORT}/api/v1`);
  console.log(`📖 Swagger API Docs: http://localhost:${PORT}/api/docs`);
}

bootstrap();
