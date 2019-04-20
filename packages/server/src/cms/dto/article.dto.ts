import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  keyword: string;

  @IsString()
  @IsOptional()
  picture: string;

  @IsString()
  category: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  author: string;

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
  content: string;

  @IsString()
  @IsOptional()
  template: string;
}

export class EditArticleDto {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  keyword: string;

  @IsString()
  @IsOptional()
  picture: string;

  @IsString()
  category: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  author: string;

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
  content: string;

  @IsString()
  @IsOptional()
  template: string;
}

export class ArticleRes {
  id: string;
  name: string;
  title: string;
  picture: string;
  category: string;
  description: string;
  author: string;
  sort: number;
  disable: boolean;
  meta: string;
  content: string;
  template: string;
}
