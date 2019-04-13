import { IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';
import { AccessToken } from '../interfaces/jwt-payload.interface';

export class LoginReq {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsOptional()
  readonly type?: string;

  @IsNotEmpty()
  @MinLength(5, {
    message: 'Your password is too short! It must be 5 characters or more!',
  })
  readonly password: string;
}

export class LoginRes {
  username: string;
  avatar: string;
  email: string;
  name: string;
  mobile: string;
  isAdmin: boolean;
  isApproved: boolean;
  expired: number;
  company?: string;
  siteUrl?: string;
  address?: string;
  token: AccessToken;
  roles?: string[];
}
