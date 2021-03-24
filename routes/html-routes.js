const router = require("express").Router();
// const Workout = require("../models/workout.js");
const path = require('path');

// Get index.
router.get("/", (req, res) => {
  res.render("index");
});

// Get Tournaments
router.get("/tournament/:tournamentNo?", (req, res) => {
  res.render("tournament");
})

// Get Matches
router.get("/match/:matchNo?", (req, res) => {
  res.render("match");
})

// Get Sets
router.get("/set/:setNo?", (req, res) => {
  res.render("set");
})

// Get legs
router.get("/leg/:legNo?", (req, res) => {
  res.render("leg");
})

module.exports = router;