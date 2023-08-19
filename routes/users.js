// routes/api/users.js

const express = require('express');
const router = express.Router();

// Load achievement model
const User = require('../models/user');

// @route GET api/users/
// @description Create new user
// @access Public
router.post("/", (req, res) => {
    User.create({...req.body, timestamp: Date(), likes: 0})
        .then(user => res.status(201).json({ message: "User added successfully", user: user }))
        .catch(err =>{
            console.log(err);
            console.log(req.json);
            res.status(400).json({ message: "Unable to create a user." })});
});

// @route GET api/user/:id
// @description Update user
// @access Public
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({ message: "User updated successfully.", user: user }))
        .catch(err =>{ 
            console.log(err);
            console.log(req.json);
            res.status(400).json({ message: "Unable to update user." })});
});



module.exports = router;
