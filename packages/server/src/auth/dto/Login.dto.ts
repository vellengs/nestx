import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginReq {
    @IsNotEmpty()
    @IsString()
    readonly username: string;
    readonly type?: string;

    @IsNotEmpty()
    @MinLength(5, {
        message: 'Your password is too short! It must be 5 characters or more!',
    })
    readonly password: string;
}
