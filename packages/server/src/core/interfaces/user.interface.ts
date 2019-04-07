import { Document } from 'mongoose';

export interface User {
  id: string;
  username: string;
  password?: string;
  name: string; // 姓名
  keyword?: string;
  avatar: string; // 照片
  type: string; // 类型
  groups: string[];
  roles: string[];
  email: string; // 邮箱
  mobile: string; // 手机号码
  profile?: any;
  isDisable: boolean; // 是否禁用
  isAdmin: boolean; // 是否管理员
  isApproved: boolean; // 是否审核
  secret: string; // 密保
  expired: Date; // 有效期
  comparePassword: (password: string, cb: any) => void;
}

export type UserModel = User & Document;