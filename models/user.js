const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    profile_image: {
        type: String,
        required: false,
    },
    points: {
        type: Number, 
        required: true,
        default: 0,
    },
    achievements_history: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "AchievementHistory" }],
        required: false,
        default: [],
    }
});

module.exports = User = mongoose.model("User", UserSchema);
