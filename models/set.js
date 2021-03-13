module.exports = (sequelize, DataTypes) => {
  const Set = sequelize.define("Set", {
    setsPlayed: DataTypes.JSON,
    matchResults: DataTypes.JSON
  });

  Set.associate = models => {
    Set.belongsTo(models.Match, {
      as: "matchSet",
      foreignKey: "matchId"
    });
  };

  return Set;
};
