import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty()
  @IsString()
  readonly username: string;

  @ApiModelProperty()
  @IsString()
  readonly password: string;

  @ApiModelProperty({ type: String })
  @IsString()
  readonly breed: string;
}
