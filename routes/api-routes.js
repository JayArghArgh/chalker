const router = require("express").Router();
const Match = require("../models/match.js");
const path = require('path');

// Get Tournaments
router.get("/api/tournament/:tournamentNo?", (req, res) => {
  res.render("tournament");
})

// Get Matches
router.get("/api/match/:matchNo?", (req, res) => {
  Match.find()
    .then(dbMatch => {
      res.json(dbMatch);
    })
    .catch(err => res.status(400).json(err));
});

// Get Sets
router.get("/api/set/:setNo?", (req, res) => {
  res.render("set");
})

// Get legs
router.get("/api/leg/:legNo?", (req, res) => {
  res.render("leg");
})

module.exports = router;