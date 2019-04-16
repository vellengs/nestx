import { IsString, IsEmail, IsOptional, IsArray } from 'class-validator';

export class CreateSettingReq {
  @IsString()
  name: string;

  @IsString()
  key: string;

  @IsOptional()
  value: any;
  @IsOptional()
  @IsString()
  description: string;
}

export class EditSettingReq {
  @IsString()
  id: string;
  @IsString()
  name: string;

  @IsString()
  key: string;

  @IsOptional()
  value: any;
  @IsOptional()
  @IsString()
  description: string;
}

export class SettingRes {
  id: string;
  name: string;
  key: string;
  value: any;
  description: string;
}

export class SettingsGroup {
  @IsOptional()
  options: {
    [key: string]: string;
  };
}
