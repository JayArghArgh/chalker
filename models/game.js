"use strict";

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define("Game", {
    gameId: DataTypes.STRING
  });

  Game.associate = models => {
    Game.belongsTo(models.GameType, {
      foreignKey: {
        allowNull: false
      }
    });
    Game.hasMany(models.GamePlayer, {
      foreignKey: "GameId"
    });
  };

  return Game;
};
