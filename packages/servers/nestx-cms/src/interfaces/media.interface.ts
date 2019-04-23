import { Document } from 'mongoose';

export interface Media {
  id: string;
  name: string;             // 名称
  caption: string;          // 标题
  description: string;      // 详细描述
  ext: any;                 // 扩展信息 如: 文件格式, 大小等
  url: string;              // 外部访问地址
  uri: string;              // 物理存储地址
}

export type MediaModel = Media & Document;