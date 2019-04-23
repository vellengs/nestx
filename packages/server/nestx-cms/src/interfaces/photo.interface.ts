import { Document } from 'mongoose';

export interface Photo {
  id: string;
  name: string;
  caption: string;
  description: string;
  ext: any;
  url: string;
  uri: string;
}

export type PhotoModel = Photo & Document;