"use strict";
module.exports = (sequelize, DataTypes) => {
	const GamePlayers = sequelize.define('GamePlayers', {
		player_order: DataTypes.INTEGER,
		current_score: DataTypes.DECIMAL(10,2),
	});

	GamePlayers.associate = (models) => {
		GamePlayers.belongsTo(models.Games, {
			foreignKey: "GameId",
		});
		GamePlayers.belongsTo(models.Members, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return GamePlayers;

};