import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
const option: SchemaOptions = {};
option.timestamps = true;

export const UserSchema = new Schema({
    username: t.String,
    password: t.String,
    avatar: t.String,
    email: t.String,
    nick: t.String,
    type: t.String,
    mobile: t.String,
    groups: [{
        type: t.ObjectId, ref: 'Group'
    }],
    isDisable: {
        type: t.Boolean
    },
    isAdmin: {
        type: t.Boolean
    },
    isApproved: {
        type: t.Boolean
    },
    expired: {
        type: t.Boolean
    },
}, option);
