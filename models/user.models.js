
 

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        id: { type: String, default: null },
        name: { type: String, default: null },
        isActive: { type: Boolean, default: true},
    },
    { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);