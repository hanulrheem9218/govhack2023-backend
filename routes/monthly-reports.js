// routes/api/monthlyreport.js

const express = require('express');
const router = express.Router();

// Load Post model
const MonthlyReport = require('../models/monthly-report');


// @route GET api/monthly-report/?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD
// @description Load monthly-report
// @access Public
router.get("/", (req, res) => {
    if(req.query.start_date != null && req.query.end_date) {
        const startDate = new Date(req.query.start_date);
        const endtDate = new Date(req.query.end_date);

        console.log(startDate + " ~ " + endtDate);

        MonthlyReport.find({ date: { $gte: startDate, $lt: endtDate } })
        .then(monthlyReport => res.json(monthlyReport))
        .catch(err =>{ 
            console.log(err);
            res.status(400).json({ message: "Bad Request" })});
    } else {
        MonthlyReport.find()
        .then(monthlyReport => res.json(monthlyReport))
        .catch(err =>{ 
            console.log(err);
            res.status(400).json({ message: "Bad Request" })});
        }
});

// @route GET api/monthly-report/
// @description Create new post
// @access Public
router.post("/", (req, res) => {
    MonthlyReport.create(req.body)
        .then(monthlyReport => res.status(201).json({ message: "Monthly Report added successfully", monthlyReport: monthlyReport }))
        .catch(err =>{
            console.log(err);
            res.status(400).json({ message: "Unable to create a monthly report." })});
});

// @route GET api/monthly-report/:id
// @description Update monthly-report
// @access Public
router.put('/:date', (req, res) => {
    MonthlyReport.findOneAndUpdate({ date: req.params.date }, req.body)
        .then(monthlyReport => res.json({ message: "Monthly report updated successfully.", monthlyReport: monthlyReport }))
        .catch(err =>{ 
            console.log(err);
            res.status(400).json({ message: "Unable to update monthly report." })});
});

// @route GET api/monthly-report/:id
// @description Delete monthly report by id
// @access Public
router.delete('/:date', (req, res) => {
    MonthlyReport.findOneAndRemove({ date: req.params.date })
        .then(monthlyReport => res.json({ message: "Successfully deleted monthly report." }))
        .catch(err => {
            console.log(err);
            res.status(404).json({ message: "No monthly report with given date." })});
});

module.exports = router;
