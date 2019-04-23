import { IsString, IsJSON } from 'class-validator';

export class CreateAppearanceReq {
    @IsString()
    readonly name: string;

    @IsString()
    readonly option: string;

    @IsString()
    readonly data: string;
}

export class EditAppearanceReq {
    @IsString()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly option: string;

    @IsString()
    readonly data: string;
}

export class AppearanceRes {
    readonly id: string;
    readonly name: string;
    readonly option: string;
    readonly data: string;
}


