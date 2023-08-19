const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    firebase_id: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },

    profile_image: {
        type: String,
        required: true
    },

    points: {
        type: Number, 
        required: true
    },
    achievements_history: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "AchievementHistory" }]
    }
});

UserSchema.virtual("user_id").get(function() {
    if(this._id != null) {
        return this.firebase_id;
    } else {
        return null;
    }
});

module.exports = User = mongoose.model('user', UserSchema);
