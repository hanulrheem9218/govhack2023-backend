const admin = require("firebase-admin");

require('dotenv').config();

const accountConfig =JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

admin.initializeApp({
    credential: admin.credential.cert(accountConfig)
});

module.exports = admin;
