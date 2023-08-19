const mongoose = require('mongoose');

const AchievementHistorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    achievement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Achievement"
    },
    achieved_at: {
        type: Date,
        required: true
    },
});

AchievementHistorySchema.virtual("achievement_history_id").get(function() {
    if(this._id != null) {
        return this._id;
    } else {
        return null;
    }
});

module.exports = AchievementHistory = mongoose.model('achievement_history', AchievementHistorySchema);
