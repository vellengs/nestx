import { Document } from 'mongoose';

export interface Role {
	_id: string;
	name: string;
	role: string;
	description: string;
	permissions: string[];
}

export type RoleModel = Role & Document;