import { IsString } from 'class-validator';

export class CreateNoticeReq {
    @IsString()
    title: string;
    @IsString()
    description: string;
    @IsString()
    extra: string;
    @IsString()
    status: string;
    @IsString()
    type: string;
}

export class EditNoticeReq {
    @IsString()
    id: string;
    @IsString()
    title: string;
    @IsString()
    description: string;
    @IsString()
    extra: string;
    @IsString()
    status: string;
    @IsString()
    type: string;
}

export class NoticeRes {
    title: string;
    description: string;
    extra: string;
    status: string;
    type: string;
}
