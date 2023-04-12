
 

const mongoose = require('mongoose');
const dbHelpers= require('../utils/db');
const { Schema} = mongoose
const UserSchema = new mongoose.Schema(
    {
        id: { type: Schema.Types.Number, default: null },
        // name: { type: String, default: null },
        lt: { type: Schema.Types.Decimal128, get: dbHelpers.getDecimal,default: 0 },
        la: { type: Schema.Types.Decimal128,get: dbHelpers.getDecimal, default: 0 },
        speed: { type: Schema.Types.Decimal128,get:dbHelpers.getDecimal, default: 0 },
        acceleration: { type: Schema.Types.Decimal128,get:dbHelpers.getDecimal, default: 0 },
        isActive: { type: Boolean, default: true},
    },
    { timestamps: true,toJSON: { getters: true } },
);

module.exports = mongoose.model('User', UserSchema);