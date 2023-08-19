const bodyParser = require('body-parser');
const express = require('express');
//const cors = require('cors');
const app = express();

const firebaseAuthenticationMiddleware = require("../middleware/firebase-authentication");
const connectMongoDB = require("../config/mongo-config");
const posts = require("../routes/posts");
const achievements = require("../routes/achievements");
const users = require('../routes/users');
const monthlyReports = require('../routes/monthly-reports');

require("dotenv").config();

// App configurations
//app.use(cors({origin:true, credentials: true}));
app.use(bodyParser.json());

if(process.env.IS_AUTH_BYPASS != "true") {
  app.use(firebaseAuthenticationMiddleware.decodeToken);
}

// Listen 8080
app.listen(8080);

// Connect to DB
connectMongoDB();

// Home
app.get("/", (_, res) => {
  res.status(202).json({ message: "Successfully logged in." });
});

// routes configurations
app.use("/api/post", posts);
app.use("/api/achievement",achievements);
app.use("/api/user", users);
app.use("/api/monthly-report", monthlyReports);

console.log("Starting express server...");

module.exports = app;
