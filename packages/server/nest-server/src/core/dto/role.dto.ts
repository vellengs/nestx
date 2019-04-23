import { IsString, IsJSON } from 'class-validator';

export class CreateRoleReq {
  @IsString()
  name: string;
  @IsString()
  description: string;

  @IsString({ each: true })
  permissions: string[];
}

export class EditRoleReq {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString({ each: true })
  permissions: string[];
}

export class RoleRes {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}
