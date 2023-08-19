const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    full_name:{
        type: String,
        required: true
    },
    profile_picture: {
        type: String,
        required: true
    },
    title_picture:{
        type: String ,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    points:{
        type: Number, 
        required: true
    }
     
});

module.exports = Author = mongoose.model('author', AuthorSchema);