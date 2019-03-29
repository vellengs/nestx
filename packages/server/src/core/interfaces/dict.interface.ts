import { Document } from 'mongoose';

export interface Dict {
  _id: string;
  name: string;
  category: string;
  translate: string;
  expand: any;
}

export type DictModel = Dict & Document;