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

AchievementSchema.virtual("achievement_id").get(function() {
    if(this._id != null) {
        return this._id;
    } else {
        return null;
    }
});

module.exports = Achievement = mongoose.model("Achievement", AchievementSchema);
