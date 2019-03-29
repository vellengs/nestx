import { IsString, IsInt, IsEmail, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

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
    mobile: number;

    @IsEmail()
    @IsOptional()
    email?: string;
    company?: string;
    siteUrl?: string;
    address?: string;
}
