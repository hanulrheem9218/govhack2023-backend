const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    badge_image: {
        type: String,
        required: true
    }
});

module.exports = Achievement = mongoose.model("Achievement", AchievementSchema);
