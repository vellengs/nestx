import { IsString, IsEmail, IsOptional, IsArray } from 'class-validator';

export class CreateUserReq {
    @IsString()
    username: string;

    @IsString()
    password: string;
}

export class EditUserReq {
    @IsString()
    name: string;
    @IsString()
    mobile: string;
    @IsArray()
    @IsOptional()
    roles?: string[];
    @IsEmail()
    @IsOptional()
    email?: string;
    company?: string;
    siteUrl?: string;
    address?: string;
}
