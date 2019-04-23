import { IsString } from 'class-validator';

export class ChangePasswordReq {
  @IsString()
  readonly oldPassword: string;

  @IsString()
  newPassword: string;

  @IsString()
  readonly confirm: string;
}
