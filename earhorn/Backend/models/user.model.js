const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    password:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: true
    },

    profilePicture: {
        type: String
    }


},  {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User