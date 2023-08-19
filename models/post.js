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
    user: {
        type: String,
        required: true
    }
});

PostSchema.virtual("post_id").get(function() {
    if(this._id != null) {
        return this._id;
    } else {
        return null;
    }
});

module.exports = Post = mongoose.model("Post", PostSchema);
