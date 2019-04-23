import { Controller, Post, Body, Get, Query, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AccessToken } from "./interfaces";
import { LoginReq, LoginRes } from "./dto/Login.dto";
import { RegisterReq } from "./dto/Register.dto";
import { Tags } from "nest-swagger";
@Tags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() payload: LoginReq, @Res() res: any): Promise<LoginRes> {
    const result = await this.authService.login(payload);
    res.cookie("access_token", result.token.accessToken);
    return res.json(result);
  }

  @Post("register")
  async register(@Body() payload: RegisterReq): Promise<AccessToken> {
    return await this.authService.register(payload);
  }

  @Get("logout")
  async logout(
    @Req() request: Express.Request,
    @Res() res: any
  ): Promise<{
    ok: boolean;
  }> {
    await this.authService.logout();
    res.clearCookie("access_token");
    return res.json({
      ok: true
    });
  }

  @Get("captcha")
  async captcha(
    @Query("mobile") mobile: string
  ): Promise<{
    ok: boolean;
  }> {
    await this.authService.captcha(mobile);
    return {
      ok: true
    };
  }
}
