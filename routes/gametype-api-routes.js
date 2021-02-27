"use strict";

const db = require('../models');

module.exports = (app) => {
	app.get("/gametypes", (req, res) => {
		db.GameTypes.findAll({
		}).then((dbGameTypes) => {
			res.render("gametype", {
				data: dbGameTypes.map(gametype => gametype.toJSON()),
			});
		});
	});
}