import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterDto {
    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    @ApiModelProperty({
        required: true
    })
    readonly username: string;

    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    @ApiModelProperty({
        required: true
    })
    readonly password: string;

    @IsNotEmpty()
    @MinLength(11)
    @IsString()
    @ApiModelProperty({
        required: true
    })
    readonly mobile: string;
}