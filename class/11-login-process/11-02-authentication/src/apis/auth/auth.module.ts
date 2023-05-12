import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}), //
    UsersModule,
  ], // UsersService가 담겨져있음

  providers: [
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModule {}
