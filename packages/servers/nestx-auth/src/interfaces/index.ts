import { RegisterReq } from "../dto";

export interface JwtPayload {
  account: string;
}

export interface AccessToken {
  expiresIn: number;
  accessToken: string;
}

export declare class IUserService {
  verifyCode: (code: string, mobile: string) => Promise<boolean>;
  register: (payload: RegisterReq) => Promise<{ username: string }>;
  sendVeryCode: (
    mobile: string
  ) => Promise<{
    ok: boolean;
  }>;
  findOne: (conditions?: { [key: string]: any }) => Promise<any>;
  login: (username: string, password: string) => Promise<any>;
}
