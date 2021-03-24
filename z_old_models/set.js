module.exports = (sequelize, DataTypes) => {
  const Set = sequelize.define("Set", {
    setsPlayed: DataTypes.JSON,
    setResults: DataTypes.JSON
  });

  Set.associate = models => {
    Set.belongsTo(models.Match, {
      as: "matchSet",
      foreignKey: "matchId"
    });
    Set.hasMany(models.Leg, {
      as: "setLeg",
      foreignKey: "setId"
    });
  };

  return Set;
};
