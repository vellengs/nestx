import {
  IsString,
  IsEmail,
  IsOptional,
  IsArray,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class CreateUserReq {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  mobile: string;

  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;

  @IsOptional()
  @IsBoolean()
  isApproved?: boolean;

  @IsOptional()
  @IsBoolean()
  isDisable?: boolean;

  @IsOptional()
  @IsNumber()
  expired?: number;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  siteUrl?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString({ each: true })
  groups?: string[];

  @IsOptional()
  @IsString({ each: true })
  roles?: string[];
}

export class EditUserReq {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  mobile: string;

  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;

  @IsOptional()
  @IsBoolean()
  isApproved?: boolean;

  @IsOptional()
  @IsBoolean()
  isDisable?: boolean;

  @IsOptional()
  @IsNumber()
  expired?: number;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  siteUrl?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString({ each: true })
  groups?: string[];

  @IsOptional()
  @IsString({ each: true })
  roles?: string[];
}

export class EditProfileReq {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  mobile?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  siteUrl?: string;

  @IsOptional()
  @IsString()
  address?: string;
}

export class UserRes {
  id: string;
  username: string;
  avatar: string;
  email: string;
  name: string;
  mobile: string;
  roles?: string[];
  isAdmin: boolean;
  isApproved: boolean;
  expired: number;
  company?: string;
  siteUrl?: string;
  address?: string;
}

export class UsersOfRole {
  @IsString()
  role: string;

  @IsString({ each: true })
  userIds: string[];
}
