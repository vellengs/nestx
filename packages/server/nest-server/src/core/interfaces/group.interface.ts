import { Document } from 'mongoose';

export interface Group {
    id: string;						// 编号
    outid: number;						// 外部编号
    name: string;						// 名称
    icon: string;						// 图标
    parent: string;                    // 父级分组编号
    paths: any[];						// 路径
    director: string 			        // 分组 leader
    order: number;						// 排序
    isRegion: boolean;                 // 是否大区
    description: string;				// 描述
}

export type GroupModel = Group & Document;