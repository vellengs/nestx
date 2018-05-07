import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
const option: SchemaOptions = {};
option.timestamps = true;

export const schema = new Schema({
    name: {
        type: t.String
    },
    operator: {
        type: t.String
    },
    operatorIp: {
        type: t.String
    },
    operation: {
        type: t.String
    },
    comment: {
        type: t.String
    }
}, option);
