module.exports = (sequelize, DataTypes) => {
  const Dart = sequelize.define("Dart", {
    dartThrown: DataTypes.JSON
  });

  Dart.associate = models => {
    Dart.belongsTo(models.Turn, {
      as: "turnDart",
      foreignKey: "turnId"
    });
    Dart.belongsTo(models.User, {
      as: "thrownBy",
      foreignKey: "UserId"
    });
  };

  return Dart;
};
