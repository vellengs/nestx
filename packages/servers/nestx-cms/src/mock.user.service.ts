import { IUserService, RegisterReq } from "nestx-auth";
import { Result } from "nestx-common";

export class MockUserService implements IUserService {
  async verifyCode(code: string, mobile: string): Promise<boolean> {
    return true;
  }

  async register(payload: RegisterReq) {
    return { username: "string" };
  }

  async sendVeryCode(mobile: string): Promise<Result> {
    return {
      ok: true
    };
  }

  async findOne(conditions?: { [key: string]: any }) {
    return true;
  }

  async login() {
    return {
      username: "hi"
    };
  }
}
