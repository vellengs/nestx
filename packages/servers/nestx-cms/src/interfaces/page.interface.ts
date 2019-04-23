import { Document } from 'mongoose';

export interface Page {
  id: string;
  name: string;   // 页面名称
  title: string;  // 页面标题
  keyword: string;  // 关键词
  description: string; // 描述
  sort: number;     // 排序
  disable: boolean; // 是否禁用
  meta: string;     // 扩展元信息
  publish: string;  // 发布时间
  content: string;  // 页面内容
  template: string;  // 页面模版
}

export type PageModel = Page & Document;