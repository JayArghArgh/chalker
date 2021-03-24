module.exports = (sequelize, DataTypes) => {
  const GameType = sequelize.define("GameType", {
    gameName: DataTypes.STRING,
    gameDescription: DataTypes.STRING,
    gameRules: DataTypes.STRING
  });

  // TODO I dont think this is required as a back association.
  GameType.associate = models => {
    GameType.hasMany(models.GameType, {
      as: "variant_of"
    });
  };

  return GameType;
};
