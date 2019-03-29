import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    @ApiModelProperty({
        required: true
    })
    readonly username: string;

    @ApiModelProperty({
        required: true,
    })
    @IsNotEmpty()
    @MinLength(5, {
        message: 'Your password is too short! It must be 5 characters or more!',
    })
    readonly password: string;
}
