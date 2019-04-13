import { IsString, IsEmail, IsOptional, IsArray, IsBoolean, IsNumber } from 'class-validator';

export class CreateUserReq {
    @IsString()
    username: string;
    @IsString()
    password: string;
    @IsString()
    avatar: string;
    @IsString()
    email: string;
    @IsString()
    name: string;
    @IsString()
    mobile: string;
    @IsBoolean()
    isAdmin: boolean;
    @IsBoolean()
    isApproved: boolean;
    @IsNumber()
    expired: number;

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

export class EditProfileReq {
    @IsString()
    readonly name: string;

    @IsString()
    @IsOptional()
    mobile?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsArray()
    @IsOptional()
    roles?: string[];

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


export class EditUserReq {
    @IsString()
    id: string;
    @IsString()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly mobile?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsArray()
    @IsOptional()
    roles?: string[];

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

    @IsString({each: true})
    userIds: string[];
}
