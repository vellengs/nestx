export class CreatePhotoDto {
    name: string;
    caption: string;
    description: string;
    ext: string;
    url: string;
    uri: string;
}

export class EditPhotoDto {
    id: string;
    name: string;
    caption: string;
    description: string;
    ext: string;
    url: string;
    uri: string;
}

export class PhotoRes {
    id: string;
    name: string;
    caption: string;
    description: string;
    ext: string;
    url: string;
    uri: string;
}
