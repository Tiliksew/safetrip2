
 

const mongoose = require('mongoose');
const { Schema} = mongoose
const UserSchema = new mongoose.Schema(
    {
        id: { type: Schema.Types.Number, default: null },
        name: { type: String, default: null },
        lt: { type: Schema.Types.Decimal128, default: null },
        la: { type: Schema.Types.Decimal128, default: null },
        speed: { type: Schema.Types.Decimal128, default: null },
        acceleration: { type: Schema.Types.Decimal128, default: null },
        isActive: { type: Boolean, default: true},
    },
    { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);