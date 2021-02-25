"use strict";
// TODO add game statistics.
module.exports = (sequelize, DataTypes) => {
	const Members = sequelize.define('Members', {
		username: DataTypes.STRING,
	});

	return Members;
};
