// routes/api/users.js

const express = require('express');
const router = express.Router();

// Load achievement model
const User = require('../models/user');

// @route GET api/user/:id
// @description Load freebie-posting
// @access Public
router.get("/:id", (req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => { 
        console.log(err);
        res.status(404).json({ message: "No freebie posting with given ID." })});
});

// @route GET api/users/
// @description Create new user
// @access Public
router.get("/", (req, res) => {
    if(req.authorizationContext == null) {
        res.status(403).json({ message: "User unauthorized." });
    } else {
        User.findOne({ "user_id": req.authorizationContext.user_id })
        .then((user) => {
            if(user == null) {
                User.create({ user_id: req.authorizationContext.user_id, name: "Green Kiwi User", points: 0, profile_image: "", achievements_history: [] })
                .then(user => res.json({ message: "Successfully retrieved user.", user: user }))
                .catch(error => {
                    console.error(error);
                    res.status(500).json({ message: "Failed to retrieve user." })});
            } else {
                res.json({ message: "Successfully retrieved user.", user: user });
            }
        })
        .catch(error => {
            console.error(error);
            console.warn("Failed to retrieve user.. trying to create with given User ID.");
        }); 
    }
});

// @route GET api/user/:id
// @description Update user
// @access Public
router.put('/', (req, res) => {
    if(req.authorizationContext == null) {
        res.status(403).json({ message: "User unauthorized." });
    } else {
        User.findOneAndUpdate({ "user_id": req.authorizationContext.user_id }, req.body )
        .then(_ => res.json({ message: "Successfully updated user." }))
        .catch(error => {
            console.error(error);
            console.warn("Failed to retrieve user. trying to create with given User ID.");

            User.create({ ...req.body, user_id: req.authorizationContext.user_id })
            .then(_ => res.json({ message: "Successfully updated user." }))
            .catch(error => {
                console.error(error);
                res.status(500).json({ message: "Failed to retrieve user." })});
            });
    }
});

module.exports = router;
