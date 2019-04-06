import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
const option: SchemaOptions = {};
option.timestamps = true;

export const LogSchema = new Schema({
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

LogSchema.set('toJSON', {
    transform: function (_doc: any, ret: any, _options: any) {
        ret.id = ret._id;
    }
}); 