import { IsString, IsJSON } from 'class-validator';

export class CreateNoticeReq {
    @IsString()
    category: string;

    @IsString()
    name: string;

    @IsString()
    translate: string;

    @IsJSON()
    expand: object;
}

export class EditNoticeReq {

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

export class NoticeRes {
    @IsString()
    category: string;

    @IsString()
    name: string;

    @IsString()
    translate: string;

    @IsJSON()
    expand: object;
}
