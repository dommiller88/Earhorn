const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    spotifyUri: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true 
    },

    comment: {
        type: String,
        maxlength: true
    },

    profilePicture: {
        type: String
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;