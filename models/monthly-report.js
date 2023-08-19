const mongoose = require('mongoose');


const MonthlyReportSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    emission: {
        transport: {
            type: Number,
            required: true,
            default: 0,
        },
        heating: {
            type: Number,
            required: true,
            default: 0,
        },
        food: {
            type: Number,
            required: true,
            default: 0,
        },
        travel: {
            type: Number,
            required: true,
            default: 0,
        },
        others: {
            type: Number,
            required: true,
            default: 0,
        },
    }
});

module.exports = MonthlyReport = mongoose.model("MonthlyReport", MonthlyReportSchema);
