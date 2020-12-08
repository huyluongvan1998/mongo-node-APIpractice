const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        age: {
            type: String,
            default: 0
        },
        gender: {
            type: String
        },
        tandcs: {
            type: Boolean,
            default: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        }
    }
)

module.exports = User = mongoose.model('User', UserSchema);