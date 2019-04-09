import { Document } from 'mongoose';

export interface Appearance {
  name: string;
  options: any;
  data: any;
}

export type AppearanceModel = Appearance & Document;