import { IsString, IsOptional } from 'class-validator';

export class CreateMediaDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  caption?: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  ext?: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  uri?: string;
}

export class EditMediaDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  caption?: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  ext?: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  uri?: string;
}

export class MediaRes {
  id: string;
  name: string;
  caption: string;
  description: string;
  ext: any;
  url: string;
  uri: string;
}

export class UploadRes {
  ok: boolean;
  error?: string;
  file?: string;
}

export class UploadMultipleRes {
  ok: boolean;
  error?: string;
  files?: string[];
}

export class MediaFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}
