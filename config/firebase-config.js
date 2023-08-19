const admin = require("firebase-admin");

require('dotenv').config();

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON))
});

module.exports = admin;
