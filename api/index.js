const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

const firebaseAuthenticationMiddleware = require("../middleware/firebase-authentication");
const connectDB = require("./database.js");
const posts = require("../routes/posts");
const achievements = require("../routes/achievements");
const users = require('../routes/users');

require('dotenv').config();

// App configurations
app.use(cors({origin:true, credentials: true}));
app.use(bodyParser.json());

if(process.env.IS_AUTH_BYPASS != "false") {
  app.use(firebaseAuthenticationMiddleware.decodeToken);
}

// Listen 8080
app.listen(8080);

// Connect to DB
connectDB();

// Home
app.get("/", (_, res) => {
  res.status(202).json({ message: "Successfully logged in." });
});

// routes configurations
app.use("/api/post", posts);
app.use("/api/achievement",achievements);
app.use("/api/user", users);

console.log("Starting express server...");

module.exports = app;
