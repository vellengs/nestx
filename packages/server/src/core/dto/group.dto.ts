import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateGroupReq {
  @IsNumber()
  @IsOptional()
  outid?: number;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsString()
  @IsOptional()
  parent?: string;

  @IsString({ each: true })
  @IsOptional()
  paths?: any[];

  @IsString()
  @IsOptional()
  director?: string;

  @IsNumber()
  @IsOptional()
  order?: number;

  @IsBoolean()
  @IsOptional()
  isRegion?: boolean;

  @IsString()
  @IsOptional()
  description?: string;
}

export class EditGroupReq {
  @IsString()
  id: string;
  
  @IsNumber()
  @IsOptional()
  outid?: number;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsString()
  @IsOptional()
  parent?: string;

  @IsString({ each: true })
  @IsOptional()
  paths?: any[];

  @IsString()
  @IsOptional()
  director?: string;

  @IsNumber()
  @IsOptional()
  order?: number;

  @IsBoolean()
  @IsOptional()
  isRegion?: boolean;

  @IsString()
  @IsOptional()
  description?: string;
}

export class GroupRes {
  id: string;
  outid?: number;
  name: string;
  icon?: string;
  parent?: string;
  paths?: any[];
  director?: string;
  order: number;
  isRegion?: boolean;
  description?: string;
}
