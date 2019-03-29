import { IsString, IsJSON } from 'class-validator';

export class CreateDictReq {
    @IsString()
    category: string;

    @IsString()
    name: string;

    @IsString()
    translate: string;

    @IsJSON()
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
    expand: object;
}

export class DictRes {
    @IsString()
    category: string;

    @IsString()
    name: string;

    @IsString()
    translate: string;

    @IsJSON()
    expand: object;
}
