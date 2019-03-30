import { Document } from 'mongoose';

export interface Notice {
    _id: string;
    avatar: string;
    title: string;
    datetime: Date;
    type: string;
    read: boolean;
}

export type NoticeModel = Notice & Document;