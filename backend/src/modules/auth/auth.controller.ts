import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Autentifikatsiya (Auth)')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Yangi mijozni ro\'yxatdan o\'tkazish' })
  async register(@Body() dto: any) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Tizimga kirish (Login)' })
  async login(@Body() dto: any) {
    return this.authService.login(dto);
  }

  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Joriy foydalanuvchi profilini olish' })
  async getProfile(@Request() req: any) {
    return {
      id: 'mock-user-id',
      email: 'admin@itxizmatlari.uz',
      fullName: 'Yashnar Jumaqulov',
      role: 'SUPER_ADMIN',
    };
  }
}
