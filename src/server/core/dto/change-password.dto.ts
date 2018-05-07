import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @ApiModelProperty()
  @IsString()
  readonly password: string;

  @ApiModelProperty({ type: String })
  @IsString()
  readonly confirm: string;
}
