"use strict";

const db = require("../models");

module.exports = app => {
  app.get("/tournament/:tId?", (req, res) => {
    if (!req.params.tId) {
      db.Tournament.findAll().then(allTournaments => {
        const hbsObject = {
          data: allTournaments
        };
        console.log(hbsObject);
        res.render("tournament", hbsObject);
      });
    } else {
      db.Tournament.findOne({
        where: {
          id: req.params.tId
        }
      }).then(tournament => {
        const hbsObject = {
          data: tournament.dataValues
        };
        console.log(hbsObject);
        res.render("tournament_one", hbsObject);
      });
    }
  });
};
