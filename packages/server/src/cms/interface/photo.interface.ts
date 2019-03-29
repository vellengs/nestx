import { Document } from 'mongoose';

export interface Photo extends Document {
  id: number;
  username: string;
  password: string;
}
