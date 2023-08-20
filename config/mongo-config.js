// MongoDB connection via mongoose4
const mongoose = require("mongoose");
require("dotenv").config()


const connectMongoDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
        });
        console.log("Successfully connected to MongoDB.");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectMongoDB;
