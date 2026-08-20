import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  async register(dto: any) {
    return {
      message: 'Foydalanuvchi muvaffaqiyatli ro\'yxatdan o\'tdi',
      user: {
        id: 'usr-' + Date.now(),
        email: dto.email,
        fullName: dto.fullName,
        role: 'CLIENT_ADMIN',
      },
      accessToken: 'mock_jwt_access_token_' + Date.now(),
    };
  }

  async login(dto: any) {
    if (!dto.email || !dto.password) {
      throw new UnauthorizedException('Email va parol kiritilishi shart');
    }
    return {
      message: 'Tizimga muvaffaqiyatli kirildi',
      accessToken: 'mock_jwt_access_token_' + Date.now(),
      refreshToken: 'mock_jwt_refresh_token_' + Date.now(),
      user: {
        id: 'usr-1',
        email: dto.email,
        fullName: 'Demo Foydalanuvchi',
        role: 'SUPER_ADMIN',
      },
    };
  }
}
