import { Injectable, UnauthorizedException, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, AccessToken } from './interfaces/jwt-payload.interface';
import { LoginReq } from './dto/login.dto';
import { RegisterReq } from './dto/Register.dto';
import { UsersService } from './../core/controllers/users.service';
import { Result } from './../common';

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) { }

  async login(payload: LoginReq): Promise<AccessToken> {
    const user = await this.userService.login(payload.username, payload.password);
    if (user) {
      return await this.createToken(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  async logout(): Promise<boolean> {
    return true; // TODO;
  }

  async createToken(payload: { username: string }): Promise<AccessToken> {
    const accessToken = this.jwtService.sign({ account: payload.username });
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async register(payload: RegisterReq): Promise<AccessToken> {
    const validate = await this.userService.verifyCode(payload.veryCode, payload.mobile);
    if (!validate) {
      throw new NotAcceptableException('verycode failure');
    }
    const user = await this.userService.register(payload).catch((error) => {
      throw new NotAcceptableException('register failure might duplicate with username, email or mobile.');
    });
    return await this.createToken(user);
  }

  async captcha(mobile: string): Promise<Result> {
    const code = await this.userService.sendVeryCode(mobile);
    return {
      ok: true
    };
  }

  async validateUser(payload: JwtPayload) {
    return this.userService.findOne({
      username: payload.account
    })
  }
}
