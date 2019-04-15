
export class CreateMediaDto {
  name: string;
  caption: string;
  description: string;
  ext: any;
  url: string;
  uri: string;
}

export class EditMediaDto {
  id: string;
  name: string;
  caption: string;
  description: string;
  ext: any;
  url: string;
  uri: string;
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
