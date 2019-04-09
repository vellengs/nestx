import { Document } from 'mongoose';

export interface Comment {
  name: string;
  article: string;
  text: string;
}

export type CommentModel = Comment & Document;