import { Document } from 'mongoose';

export interface Notice {
    _id: string;
    title: string;
    description: Date;
    type: string;
    extra: string;
    read: boolean;
}

export type NoticeModel = Notice & Document;