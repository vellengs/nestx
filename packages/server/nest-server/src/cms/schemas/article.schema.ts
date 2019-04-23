import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
import { transform } from './../../utils';

const option: SchemaOptions = {};
option.timestamps = true;

export const ArticleSchema = new Schema({
    name: { type: t.String },
    title: t.String,
    keyword: t.String,
    picture: t.String,
    description: t.String,
    author: t.String,
    sort: t.Number,
    disable: t.Boolean,
    category: {
        ref: 'Category', type: t.ObjectId
    },
    meta: {
        ref: 'Meta', type: t.ObjectId
    },
    content: {
        ref: 'Content', type: t.ObjectId,
    },
    template: {
        ref: 'Content', type: t.ObjectId
    }
}, option);

ArticleSchema.set('toJSON', {
    transform,
  });