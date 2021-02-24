"use strict";

module.exports = (sequelize, DataTypes) => {
	const Games = sequelize.define('Games', {
		game_id: DataTypes.STRING,
	})

	Games.associate = (models) => {
		Games.hasOne(models.GameTypes, {
		});
	} ;

	return Games;
}