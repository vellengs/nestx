
import { Schema, SchemaTypes as t } from 'mongoose';

export const GroupSchema = new Schema({
    outid: { type: t.Number },
    name: { type: t.String },
    icon: { type: t.String },
    isRegion: { type: t.Boolean },
    order: { type: t.Number },
    parent: { type: t.ObjectId, ref: 'Group' },
    paths: [{ type: t.ObjectId, ref: 'Group' }],
    director: { type: t.ObjectId, ref: 'User' },
    description: { type: t.String }
},
    { timestamps: true }); 