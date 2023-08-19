// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Post = require('../models/post');

// @route GET api/post/all
// @description Get all posts
// @access Public
router.get("/all", (_, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(_ => res.status(404).json({ nobooksfound: "No posts found" }));
});

// @route GET api/post/
// @description Create new post
// @access Public
router.post("/", (req, res) => {
    Post.create({...req.body, timestamp: Date(), likes: 0})
        .then(post => res.json({ msg: "Post added successfully", post: post }))
        .catch(err =>{
            console.log(err);
            res.status(400).json({ error: "Unable to add this post" })});
});

// @route GET api/post/:id
// @description Load post
// @access Public
router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>{ 
        console.log(err);
        res.status(404).json({ nopostfound: 'No post found' })});
});

// @route GET api/post/:id
// @description Update post
// @access Public
router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
        .then(post => res.json({ msg: 'Updated successfully' }))
        .catch(err =>{ 
            console.log(err);
            console.log(req.json);
            res.status(400).json({ error: 'Unable to update the Database' })});
       
});

module.exports = router;
