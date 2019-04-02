import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccessToken } from './interfaces/jwt-payload.interface';
import { LoginReq } from './dto/Login.dto';
import { RegisterReq } from './dto/Register.dto';
import { Tags } from 'nest-swagger';
import { Result } from './../common/interfaces/result.interface';

@Tags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() payload: LoginReq): Promise<AccessToken> {
    return this.authService.login(payload);
  }

  @Post('register')
  async register(@Body() payload: RegisterReq): Promise<AccessToken> {
    return await this.authService.register(payload);
  }

  @Get('logout')
  async logout(): Promise<boolean> {
    return this.authService.logout();
  }

  @Get('captcha')
  async captcha(@Query('mobile') mobile: string): Promise<Result> {
    await this.authService.captcha(mobile);
    return {
      ok: true
    };
  }

}
