const mongoose = require('mongoose');

const FreebieSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    title :{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_urls:{
        type: [String],
        required: true
    },
    is_listing_closed:{
        type: Boolean,
        required: true
    }
});

module.exports = Freebie = mongoose.model("freebie", FreebieSchema);