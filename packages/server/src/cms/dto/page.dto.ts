import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreatePageReq {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  keyword: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsOptional()
  sort: number;

  @IsBoolean()
  @IsOptional()
  disable: boolean;

  @IsString()
  @IsOptional()
  meta: string;
  @IsString()
  @IsOptional()
  publish: string;
  @IsString()
  @IsOptional()
  content: string;
  @IsString()
  @IsOptional()
  template: string;
}

export class EditPageReq {
  id: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  keyword: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsOptional()
  sort: number;

  @IsBoolean()
  @IsOptional()
  disable: boolean;

  @IsString()
  @IsOptional()
  meta: string;
  @IsString()
  @IsOptional()
  publish: string;
  @IsString()
  @IsOptional()
  content: string;
  @IsString()
  @IsOptional()
  template: string;
}

export class PageRes {
  id: string;
  name: string;
  title: string;
  description: string;
  sort: number;
  publish: string;
  disable: boolean;
  meta: string;
  content: string;
  template: string;
}

export const PageResponseFields = [
  'id',
  'name',
  'title',
  'description',
  'sort',
  'disable',
  'publish',
  'meta',
  'content',
  'template',
];

export declare interface PaginatePage {
  error?: Error;
  list: PageRes[];
  total: number;
}
