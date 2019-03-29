import { Document } from 'mongoose';

export interface Setting {
    id: string;
    name: string;    // 设置项目组
    key: string;	 // 设置项键名
    value: any;			// 设置值
    description: string;   // 设置描述
}

export type SettingModel = Setting & Document;