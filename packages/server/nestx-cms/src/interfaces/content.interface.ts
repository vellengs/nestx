import { Document } from 'mongoose';

 export interface Content   {
  text: string;
}

export type ContentModel = Content & Document;