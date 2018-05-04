
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { authProviders } from './auth.providers';
import { CryptoModule } from '../crypto/crypto.module';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [CryptoModule, UsersModule],
  providers: [JwtStrategy, AuthService, ...authProviders],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }
