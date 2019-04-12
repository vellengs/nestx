import { Schema, SchemaTypes as t } from 'mongoose';
export const AppearanceSchema = new Schema({
    name: { type: t.String },
    options: { type: t.Mixed },
    data: { type: t.Mixed },
}, {
        timestamps: true,
        usePushEach: true
    });

AppearanceSchema.set('toJSON', {
    transform: function (_doc: any, ret: any, _options: any) {
        ret.id = ret._id;
    }
});

