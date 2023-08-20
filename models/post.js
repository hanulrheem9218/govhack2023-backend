const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    },
    post_image: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: false
    },
    user_id: {
        type: String,
        required: true
    },
    comments: [{
        user_id: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            required: true
        }
    }]
});

module.exports = Post = mongoose.model("Post", PostSchema);
