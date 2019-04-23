import { Document } from 'mongoose';

export interface Widget {
  id: string;
  name: string;
  title: string;
  type: string;
  params: any;
}

export type WidgetModel = Widget & Document;