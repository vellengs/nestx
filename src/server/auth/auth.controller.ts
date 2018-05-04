import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('token')
  @HttpCode(HttpStatus.OK)
  async createToken(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.createToken(loginUserDto);
  }
}
