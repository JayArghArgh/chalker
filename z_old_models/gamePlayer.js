"use strict";
module.exports = (sequelize, DataTypes) => {
  const GamePlayer = sequelize.define("GamePlayer", {
    playerOrder: DataTypes.INTEGER,
    currentScore: DataTypes.DECIMAL(10, 2),
    userId: DataTypes.INTEGER
  });

  GamePlayer.associate = models => {
    GamePlayer.belongsTo(models.Game, {
      foreignKey: "GameId"
    });
    GamePlayer.belongsTo(models.User, {
      foreignKey: "userId",
      as: "player",
      allowNull: false
    });
    GamePlayer.hasMany(models.Leg, {
      foreignKey: "userId",
      as: "playerLegs"
    });
  };

  return GamePlayer;
};
