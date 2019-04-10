import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
const option: SchemaOptions = {};
option.timestamps = true;

export const WidgetSchema = new Schema({
    name: {
        type: t.String
    }
}, option);
