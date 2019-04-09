
import { Schema, SchemaTypes as t, SchemaOptions, model } from 'mongoose';

export const ProfileSchema = new Schema({
    company: { type: t.String },
    siteUrl: { type: t.String },
    address: { type: t.String },
},
    { timestamps: true });

ProfileSchema.set('toJSON', {
    transform: function (_doc: any, ret: any, _options: any) {
        ret.id = ret._id;
    }
}); 