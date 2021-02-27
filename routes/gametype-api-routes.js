"use strict";

const db = require('../models');

module.exports = (app) => {
	app.get("/gametypes", (req, res) => {
		db.GameTypes.findAll({
		}).then((dbGameTypes) => {
			const gameDetails = dbGameTypes.map(gametype => gametype.toJSON());
			res.render("gametype", {
				data: gameDetails,
			});
		});
	});
}