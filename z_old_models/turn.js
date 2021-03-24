module.exports = (sequelize, DataTypes) => {
  const Turn = sequelize.define("Turn", {
    turnTarget: DataTypes.JSON
  });

  Turn.associate = models => {
    Turn.belongsTo(models.Leg, {
      as: "legTurn",
      foreignKey: "legId"
    });
    Turn.hasMany(models.Dart, {
      // Technically called a "throw but throw is a reserved keyword for js.
      as: "turnDart",
      foreignKey: "turnId"
    });
  };

  return Turn;
};
