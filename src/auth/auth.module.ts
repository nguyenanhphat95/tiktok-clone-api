import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt-strategy/jwt.constants';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      global: true,
    }),
  ],
  providers: [AuthService, PrismaService, ConfigService, JwtService],
  exports: [JwtService, AuthService],
})
export class AuthModule {}
