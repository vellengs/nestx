import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterReq {
    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @MinLength(11)
    @IsString()
    readonly mobile: string;
}