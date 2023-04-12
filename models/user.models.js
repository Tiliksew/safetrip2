
 

const mongoose = require('mongoose');
const { getDecimal,isDecimal,isInteger } = require('../utils/db');
const { Schema} = mongoose
const UserSchema = new mongoose.Schema(
  {
    id: { type: Schema.Types.Number, validate: [isInteger, "Invalid Value"],default: null },
    latitude: {
      type: Schema.Types.Decimal128,
      validate: [isDecimal, "Value must be decimal"],
      get: getDecimal,
      default: 0,
    },
    longitude: {
      type: Schema.Types.Decimal128,
      validate: [isDecimal, "Value must be decimal"],
      get: getDecimal,
      default: 0,
    },
    speed: {
      type: Schema.Types.Decimal128,
      validate: [isDecimal, "Value must be decimal"],
      get: getDecimal,
      default: 0,
    },
    acceleration: {
      type: Schema.Types.Decimal128,
      validate: [isDecimal, "Value must be decimal"],
      get: getDecimal,
      default: 0,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false }, toJSON: { getters: true } }
);

module.exports = mongoose.model('User', UserSchema);