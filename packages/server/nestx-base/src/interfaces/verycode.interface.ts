import { Document } from 'mongoose';

export interface VeryCode {
	id: string;
	lastSent: number;
	mobile: string;
	code: string;
}

export type VeryCodeModel = VeryCode & Document;