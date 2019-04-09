import { IsString, IsEmail, IsOptional, IsArray } from 'class-validator';

export class CreateSettingReq {
    name: string;
    key: string;
    value: any;
    @IsOptional()
    description: string;
}

export class EditSettingReq {
    id: string;
    name: string;
    key: string;
    value: any;
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
    [key: string]: string;
}