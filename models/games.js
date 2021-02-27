"use strict";

module.exports = (sequelize, DataTypes) => {
	const Games = sequelize.define('Games', {
		game_id: DataTypes.STRING,
	})

	Games.associate = (models) => {
		Games.belongsTo(models.GameTypes, {
			foreignKey: {
				allowNull: false,
			},
		});
	} ;

	return Games;
}