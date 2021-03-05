"use strict";
module.exports = (sequelize, DataTypes) => {
  const GamePlayer = sequelize.define("GamePlayer", {
    playerOrder: DataTypes.INTEGER,
    currentScore: DataTypes.DECIMAL(10, 2)
  });

  GamePlayer.associate = models => {
    GamePlayer.belongsTo(models.Game, {
      foreignKey: "GameId"
    });
    GamePlayer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return GamePlayer;
};
