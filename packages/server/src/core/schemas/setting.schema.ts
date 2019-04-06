import { Schema, SchemaTypes as t } from 'mongoose';
export const SettingSchema = new Schema({
    id: {
        type: t.String
    },
    name: {
        type: t.String
    },
    key: {
        type: t.String
    },
    value: {
        type: t.Mixed
    },
    description: {
        type: t.String
    }
}, {
        timestamps: true,
        usePushEach: true,
    });

SettingSchema.set('toJSON', {
    transform: function (_doc: any, ret: any, _options: any) {
        ret.id = ret._id;
    }
}); 