const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

const firebaseAuthenticationMiddleware = require("../middleware/firebase-authentication");
const connectDB = require("./database.js");
const posts = require("../routes/posts");

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

// routes configurations
app.use("/api/post", posts);

console.log("Starting express server...");

module.exports = app;
