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

export declare interface PaginateMedia {
    error?: Error;
    list: MediaRes[];
    total: number;
}

export const MediaResponseFields = [
    'id',
    'name',
    'caption',
    'description',
    'ext',
    'url',
    'uri'
];
