module.exports = (sequelize, DataTypes) => {
  const Leg = sequelize.define("Leg", {
    legsPlayed: DataTypes.JSON,
    legResults: DataTypes.JSON
  });

  Leg.associate = models => {
    Leg.belongsTo(models.Set, {
      as: "setLeg",
      foreignKey: "setId"
    });
    Leg.hasMany(models.Turn, {
      as: "legTurn",
      foreignKey: "legId"
    });
  };

  return Leg;
};
