"use strict";

const db = require('../models');

module.exports = (app) => {
	app.get("/games", (req, res) => {
		db.Games.findAll({
		}).then((dbGames) => {
			const GameDetails = dbGames.map(game => game.toJSON());
			res.render("game", {
				data: GameDetails,
			});
		});
	});
}