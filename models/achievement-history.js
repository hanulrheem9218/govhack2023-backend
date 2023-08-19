const mongoose = require('mongoose');

const AchievementHistorySchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    achievement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Achievement",
        required: true,
    },
    achieved_at: {
        type: Date,
        required: true
    },
});

module.exports = AchievementHistory = mongoose.model("AchievementHistory", AchievementHistorySchema);
