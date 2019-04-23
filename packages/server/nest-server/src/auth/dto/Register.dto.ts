import { IsNotEmpty, IsString, MinLength, Length, IsEmail, IsOptional } from 'class-validator';

export class RegisterReq {
    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    username: string;

    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    password: string;

    @IsNotEmpty()
    @MinLength(11)
    @IsString()
    mobile: string;

    @Length(5, 50)
    @IsString()
    @IsEmail()
    email: string;

    name?: string;

    @Length(2, 5)
    @IsOptional()
    mobilePrefix?: string;

    @Length(6)
    @IsNotEmpty()
    veryCode: string;
}