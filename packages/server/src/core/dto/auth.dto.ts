import { IsString, IsJSON } from 'class-validator';

export class ChangePasswordReq {
    @IsString()
    readonly password: string;

    @IsString()
    readonly confirm: string;
}

export class ChangeRolesReq {

}


