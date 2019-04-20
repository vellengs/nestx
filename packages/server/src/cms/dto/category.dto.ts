import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsNumber()
  @IsOptional()
  order: number;

  @IsString()
  @IsOptional()
  parent: string;

  @IsString({ each: true })
  @IsOptional()
  paths: string[];

  @IsString()
  @IsOptional()
  description: string;
}

export class EditCategoryDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsNumber()
  @IsOptional()
  order: number;

  @IsString()
  @IsOptional()
  parent: string;

  @IsString({ each: true })
  @IsOptional()
  paths: string[];

  @IsString()
  @IsOptional()
  description: string;
}

export class CategoryRes {
  id: string;
  name: string;
  slug: string;
  order: number;
  parent: string;
  paths: string[];
  description: string;
}

export declare interface PaginateCategory {
  error?: Error;
  list: CategoryRes[];
  total: number;
}

export const CategoryResponseFields = [
  'id',
  'name',
  'slug',
  'order',
  'parent',
  'paths',
  'description',
];
