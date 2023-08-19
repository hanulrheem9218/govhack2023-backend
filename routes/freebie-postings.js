// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Post model
const FreebiePosting = require('../models/freebie-posting');
const freebiePosting = require('../models/freebie-posting');

// @route GET api/freebie-posting/all
// @description Get all posts
// @access Public
router.get("/all", (_, res) => {
    FreebiePosting.find()
        .then(freebiePostings => res.json(freebiePostings))
        .catch(_ => res.status(404).json({ message: "No freebie postings found" }));
});

//location: String
//title: String
//description: String
//image_urls: List[String]
//is_listing_closed: Bool


// @route GET api/freebie-postings/
// @description Create new post
// @access Public
router.post("/", (req, res) => {
    // you can setup the default values here.
    FreebiePosting.create({...req.body,image_urls: new Array(), is_listing_closed : false})
        .then(freebiePosting => res.status(201).json({ message: "Freebie posting added successfully", freebiePosting: freebiePosting }))
        .catch(err =>{
            console.log(err);
            res.status(400).json({ message: "Unable to create a freebie posting." })});
});

// @route GET api/freebie-posting/:id
// @description Load freebie-posting
// @access Public
router.get("/:id", (req, res) => {
    FreebiePosting.findById(req.params.id)
    .then(freebiePosting => res.json(freebiePosting))
    .catch(err =>{ 
        console.log(err);
        res.status(404).json({ message: "No freebie posting with given ID." })});
});

// @route GET api/freebie-posting/:id
// @description Update freebie-posting
// @access Public
router.put('/:id', (req, res) => {
    FreebiePosting.findByIdAndUpdate(req.params.id, req.body)
        .then(freebiePosting => res.json({ message: "Freebie posting updated successfully.", freebiePosting: freebiePosting }))
        .catch(err =>{ 
            console.log(err);
            res.status(400).json({ message: "Unable to update freebie posting." })});
});

// @route GET api/freebie-posting/:id
// @description Delete freebie-posting by id
// @access Public
router.delete('/:id', (req, res) => {
    FreebiePosting.findByIdAndRemove(req.params.id)
        .then(freebiePosting => res.json({ message: "Successfully deleted freebiePosting." }))
        .catch(err => {
            console.log(err);
            res.status(404).json({ message: "No freebie posting with given ID." })});
});

module.exports = router;
