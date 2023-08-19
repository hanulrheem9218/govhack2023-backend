// routes/api/achievement.js

const express = require('express');
const router = express.Router();

// Load achievement model
const Achievement = require('../models/achievement');

// @route GET api/achievements/
// @description Create new achievement
// @access Public
router.post("/", (req, res) => {
    Achievement.create({...req.body, timestamp: Date(), likes: 0})
        .then(achievement => res.status(201).json({ message: "achievement added successfully", achievement: achievement }))
        .catch(err =>{
            console.log(err);
            res.status(400).json({ message: "Unable to create a achievement." })});
});

// @route GET api/achievement/:id
// @description Update post
// @access Public
router.put('/:id', (req, res) => {
    Achievement.findByIdAndUpdate(req.params.id, req.body)
        .then(achievement => res.json({ message: "Achievement updated successfully.", achievement: achievement }))
        .catch(err =>{ 
            console.log(err);
            res.status(400).json({ message: "Unable to update achievement." })});
});



module.exports = router;
