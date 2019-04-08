import { IsString, IsJSON } from 'class-validator';

export class CreateRoleReq {
    name: string;
    description: string;
    permissions: string[];
}

export class EditRoleReq {
    id: string;
    name: string;
    description: string;
    permissions: string[];
}

export class RoleRes {
    id: string;
    name: string;
    description: string;
    permissions: string[];
}
