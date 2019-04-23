import { IsString, IsJSON, IsOptional } from 'class-validator';

export class CreateDictReq {
  @IsString()
  category: string;

  @IsString()
  name: string;

  @IsString()
  translate: string;

  @IsJSON()
  @IsOptional()
  expand: object;
}

export class EditDictReq {
  @IsString()
  id: string;

  @IsString()
  category: string;

  @IsString()
  name: string;

  @IsString()
  translate: string;

  @IsJSON()
  @IsOptional()
  expand: object;
}

export class DictRes {
  category: string;
  name: string;
  translate: string;
  expand: object;
}
