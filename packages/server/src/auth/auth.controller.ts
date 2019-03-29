import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Token } from './interfaces/jwt-payload.interface';
import { ApiResponse } from '@nestjs/swagger';
import { LoginDto } from './dto/Login.dto';
import { RegisterDto } from './dto/Register.dto';
import { Tags } from 'nest-swagger';

@Tags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiResponse({ status: 201, description: 'Successful Login' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async login(@Body() payload: LoginDto): Promise<Token> {
    return this.authService.login(payload);
  }

  @Post('register')
  @ApiResponse({ status: 201, description: 'Successful Registration' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async register(@Body() payload: RegisterDto): Promise<Token> {
    return await this.authService.register(payload);
  }

}
