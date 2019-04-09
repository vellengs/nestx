
import { Document } from 'mongoose';

export interface Article {
  id: string;
  name: string;
  title: string;
  picture: string;
  keyword: string;
  category: string;
  description: string;
  author: string;
  sort: number;
  disable: boolean;
  meta: string;
  content: string;
  template: string;
}

export type ArticleModel = Article & Document;