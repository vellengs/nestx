import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
const option: SchemaOptions = {};
option.timestamps = true;

export const MenuSchema = new Schema({
    name: { type: t.String },
    slug: { type: t.String },
    group: { type: t.Boolean },
    link: { type: t.String },
    externalLink: { type: t.String },
    blank: { type: t.Boolean },
    icon: { type: t.String },
    order: { type: t.Number, default: 100 },
    enable: { type: t.Boolean },
    expanded: { type: t.Boolean },
    acl: { type: t.String },
    paths: [{
        type: t.ObjectId,
        ref: 'Menu'
    }],
    parent: {
        type: t.ObjectId,
        ref: 'Menu'
    },
    permissions: [
        {
            type: t.ObjectId,
            ref: 'Menu'
        }
    ],
    isMenu: {
        type: t.Boolean,
        default: true
    }
}, option);

MenuSchema.set('toJSON', {
    transform: function (_doc: any, ret: any, _options: any) {
        ret.id = ret._id;
    }
}); 