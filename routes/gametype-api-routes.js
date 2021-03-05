"use strict";

const db = require("../models");

module.exports = app => {
  app.get("/gametypes", (req, res) => {
    db.GameType.findAll({}).then(dbGameTypes => {
      const gameDetails = dbGameTypes.map(gametype => gametype.toJSON());
      res.render("gametype", {
        data: gameDetails
      });
    });
  });
};
