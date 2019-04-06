"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose_1.Schema({
    username: { type: mongoose_1.SchemaTypes.String, unique: true, required: true },
    password: mongoose_1.SchemaTypes.String,
    avatar: mongoose_1.SchemaTypes.String,
    email: { type: mongoose_1.SchemaTypes.String, unique: true, required: false },
    name: mongoose_1.SchemaTypes.String,
    about: mongoose_1.SchemaTypes.String,
    location: {
        country: mongoose_1.SchemaTypes.String,
        province: mongoose_1.SchemaTypes.String,
        district: mongoose_1.SchemaTypes.String,
        address: mongoose_1.SchemaTypes.String,
    },
    type: mongoose_1.SchemaTypes.String,
    mobile: { type: mongoose_1.SchemaTypes.String, unique: true, required: true },
    roles: [{
            type: mongoose_1.SchemaTypes.ObjectId, ref: 'Role'
        }],
    isDisable: {
        type: mongoose_1.SchemaTypes.Boolean
    },
    isAdmin: {
        type: mongoose_1.SchemaTypes.Boolean
    },
    isApproved: {
        type: mongoose_1.SchemaTypes.Boolean
    },
    expired: {
        type: mongoose_1.SchemaTypes.Date
    },
}, {
    timestamps: true,
    usePushEach: true,
});
function preSave(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
}
function preUpdate(next) {
    const updateDoc = this.getUpdate();
    const rawPassword = (updateDoc.$set || updateDoc).password;
    if (rawPassword) {
        const password = bcrypt.hashSync(rawPassword, bcrypt.genSaltSync(10));
        this.findOneAndUpdate({}, { password: password });
    }
    next();
}
exports.UserSchema.pre('save', preSave);
exports.UserSchema.pre('findOneAndUpdate', preUpdate);
exports.UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (cb) {
            cb(err, isMatch);
        }
    });
};
exports.UserSchema.methods.pure = function () {
    const obj = this.toJSON();
    delete obj.password;
    return obj;
};
exports.UserSchema.set('toJSON', {
    transform: function (_doc, ret, _options) {
        ret.id = ret._id;
    }
});
//# sourceMappingURL=user.schema.js.map