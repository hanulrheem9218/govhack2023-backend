const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    timestamp:{
        type: Date,
        required: true
    },
    post_image:{
        type: String,
        required: false
    },
    content:{
        type: String,
        required: true
    },
    likes:{
        type: Number,
        required: false
    }
});

PostSchema.virtual('post_id').get(function() {
    return this._id;
});

module.exports = Post = mongoose.model('post', PostSchema);
