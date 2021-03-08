"use strict";
const uniqid = require("uniqid");

const db = require("../models");

module.exports = app => {
  app.get("/games", (req, res) => {
    db.Game.findAll({
      order: [["id", "DESC"]]
    }).then(dbGames => {
      const GameDetails = dbGames.map(game => game.toJSON());
      res.render("games", {
        data: GameDetails
      });
    });
  });

  app.get("/games/:id", (req, res) => {
    db.Game.findOne({
      where: {
        gameId: req.params.id
      },
      include: [
        {
          model: db.GamePlayer,
          as: "players",
          attributes: ["id", "playerOrder", "currentScore"],
          include: [
            {
              model: db.User,
              as: "player",
              attributes: ["id", "username"]
            },
            {
              model: db.Leg,
              as: "playerLegs",
              attributes: ["id", "legNumber", "legScore"]
            }
          ]
        }
      ],
      order: [["players", "playerOrder", "ASC"]],
      raw: false,
      nested: true
    }).then(dbGames => {
      // console.dir(dbGames);

      // Create the handlebars object
      const hbsObject = {
        game: dbGames.dataValues
        // gameId: req.params.id,
        // gamePlayers: dbGames.GamePlayers.map(gamePlayers => gamePlayers.toJSON()),
      };

      // Send it to the template
      res.render("game", hbsObject);
    });
  });

  // By default we're just going to create a new Burma road game for now.
  app.post("/api/games", (req, res) => {
    const thisGameId = uniqid();
    const newBurmaGame = {
      gameId: thisGameId,
      GameTypeId: 1
    };
    res.body = { id: uniqid() };
    // console.log(res.body);

    db.Game.create(newBurmaGame).then(dbGames => {
      // console.dir(dbGames.id);
      // return res.json(body);
      return res.json({ id: dbGames.id });
    });
  });
};
