import { Schema, SchemaTypes as t } from 'mongoose';
export const VeryCodeSchema = new Schema({
    mobile: {
        type: t.String
    },
    lastSent: {
        type: t.Decimal128,
        default: Date.now
    },
    code: {
        type: t.String
    },
}, {
        timestamps: true,
        usePushEach: true,
    });

VeryCodeSchema.set('toJSON', {
    transform: function (_doc: any, ret: any, _options: any) {
        ret.id = ret._id;
    }
}); 