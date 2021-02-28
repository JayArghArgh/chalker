"use strict";
const uniqid = require('uniqid');

const db = require('../models');

module.exports = (app) => {
	app.get("/games", (req, res) => {
		db.Games.findAll({
			order: [
				['id', 'DESC'],
			],
		}).then((dbGames) => {
			const GameDetails = dbGames.map(game => game.toJSON());
			res.render("games", {
				data: GameDetails,
			});
		});
	});

	app.get("/games/:id", (req, res) => {
		db.Games.findOne({
			where: {
				game_id: req.params.id,
			},
		}).then((dbGames) => {
			res.render("game", {
				data: dbGames.dataValues,
			});
		});
	})

	// By default we're just going to create a new Burma road game for now.
	app.post('/api/games', (req, res) => {
		const thisGameId = uniqid();
		const newBurmaGame = {
			game_id: thisGameId,
			GameTypeId: 2,
		}
		res.body = {id: uniqid()};
		// console.log(res.body);

		db.Games.create(newBurmaGame).then((dbGames) => {
			// console.dir(dbGames.id);
			// return res.json(body);
			return res.json({id: dbGames.id});
		});
	});
}