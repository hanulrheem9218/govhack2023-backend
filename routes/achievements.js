// routes/api/achievement.js

const express = require('express');
const router = express.Router();

// Load achievement model
const Achievement = require('../models/achievement');

// @route GET api/achievements/
// @description Retrieve all achievements
// @access Public
router.get("/", (_, res) => {
    Achievement.find()
        .then(achievements => res.status(201).json({ message: "achievement added successfully", achievements: achievements }))
        .catch(err =>{
            console.log(err);
            res.status(400).json({ message: "Unable to retrieve achievements." })});
});

module.exports = router;
