"use strict";

const db = require('../models');

module.exports = (app) => {
	app.get('/api/members', (req, res) => {
		db.Members.findAll({
			// include: [db.Members],
		}).then((dbMember) => res.json(dbMember));
	});
};