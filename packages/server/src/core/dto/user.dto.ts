import { IsString, IsEmail, IsOptional, IsArray } from 'class-validator';
import { Optional } from '@nestjs/common';

export class CreateUserReq {
    @IsString()
    username: string;

    @IsString()
    password: string;
}

export class EditUserReq {
    @IsString()
    id: string;
    @IsString()
    readonly name: string;
    @IsString()
    readonly username: string;
    @IsString()
    readonly mobile: string;
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
