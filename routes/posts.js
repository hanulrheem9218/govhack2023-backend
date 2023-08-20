// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Post = require('../models/post');
const User = require("../models/user");

// @route GET api/post/all
// @description Get all posts
// @access Public
router.get("/all", (_, res) => {
    Post.find()
        .populate({ path: "user_id" })
        .populate({ path: "comments", populate: "user_id" })
        .then((posts) => {
            res.json(posts);
        })
        .catch(e => {
            console.log(e);
            res.status(404).json({ message: "No posts found" });
    });
});

// @route GET api/post/
// @description Create new post
// @access Public
router.post("/", (req, res) => {
    if(req.authorizationContext == null) {
        res.status(403).json({ message: "User unauthorized." });
    } else {
        User.findOne({ user_id: req.authorizationContext.user_id })
        .then(user => {
            Post.create({...req.body, user_id: user._id, timestamp: Date(), likes: 0, comments: []})
            .then(post => res.status(201).json({ message: "Post added successfully", post: post }))
            .catch(err =>{
                console.log(err);
                res.status(400).json({ message: "Unable to create a post." })});
        })
        .catch(err =>{
            console.log(err);
            res.status(400).json({ message: "Unable to create a post." })});
    }
});

// @route GET api/post/:id
// @description Load post
// @access Public
router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>{ 
        console.log(err);
        res.status(404).json({ message: "No post with given ID." })});
});

// @route GET api/post/:id
// @description Update post
// @access Public
router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
        .then(post => res.json({ message: "Post updated successfully." }))
        .catch(err =>{ 
            console.log(err);
            res.status(400).json({ message: "Unable to update post." })});
});

// @route GET api/post/:id
// @description Delete post by id
// @access Public
router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id)
        .then(post => res.json({ message: "Successfully deleted post." }))
        .catch(err => {
            console.log(err);
            res.status(404).json({ message: "No post with given ID." })});
});

// @route GET api/post/:id/like
// @description Like post
// @access Public
router.put('/:id/like', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } })
        .then(post => res.json({ message: "Post updated successfully." }))
        .catch(err =>{ 
            console.log(err);
            res.status(400).json({ message: "Unable to update post." })});
});

// @route GET api/post/:id/comment
// @description Like post
// @access Public
router.post('/:id/comment', (req, res) => {
    if(req.authorizationContext == null) {
        res.status(403).json({ message: "User unauthorized." });
    } else {
        User.findOne({ user_id: req.authorizationContext.user_id })
        .then(user => {
            Post.findByIdAndUpdate(req.params.id, { $push: { comment: {...req.body, user_id: user._id, timestamp: Date()} } })
            .then(post => res.json({ message: "Comment updated successfully." }))
            .catch(err =>{ 
                console.log(err);
                res.status(400).json({ message: "Unable to add comment." })});
        })
        .catch(err =>{
            console.log(err);
            res.status(400).json({ message: "Unable to create a post." })});
    }
});

module.exports = router;
