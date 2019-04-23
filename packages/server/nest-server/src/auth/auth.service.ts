import {
  Injectable,
  UnauthorizedException,
  NotAcceptableException,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, AccessToken } from './interfaces/jwt-payload.interface';
import { LoginReq, LoginRes } from './dto/login.dto';
import { RegisterReq } from './dto/Register.dto';
import { Result } from './../common';

export interface IUserService {
  verifyCode: (code: string, mobile: string) => Promise<boolean>;
  register: (payload: RegisterReq) => Promise<{ username: string }>;
  sendVeryCode: (mobile: string) => Promise<Result>;
  findOne: (conditions?: { [key: string]: any }) => Promise<any>;
  login: (username: string, password: string) => Promise<any>;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('IUserService') private readonly userService: IUserService,
  ) {}

  async login(payload: LoginReq): Promise<LoginRes> {
    const user = await this.userService.login(
      payload.username,
      payload.password,
    );
    if (user) {
      const token = await this.createToken(user);
      const {
        username,
        avatar,
        email,
        name,
        mobile,
        isAdmin,
        isApproved,
        expired,
        roles,
      } = user;
      return {
        token,
        username,
        avatar,
        email,
        name,
        mobile,
        isAdmin,
        isApproved,
        expired,
        roles,
      };
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
    const validate = await this.userService.verifyCode(
      payload.veryCode,
      payload.mobile,
    );
    if (!validate) {
      throw new NotAcceptableException('verycode failure');
    }
    const user = await this.userService.register(payload).catch(error => {
      throw new NotAcceptableException(
        'register failure might duplicate with username, email or mobile.',
      );
    });
    return await this.createToken(user);
  }

  async captcha(mobile: string): Promise<Result> {
    const code = await this.userService.sendVeryCode(mobile);
    return {
      ok: true,
    };
  }

  async validateUser(payload: JwtPayload) {
    return this.userService.findOne({
      username: payload.account,
    });
  }
}
