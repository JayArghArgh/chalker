module.exports = (sequelize, DataTypes) => {
  const Leg = sequelize.define("Leg", {
    legNumber: DataTypes.INTEGER,
    darts: DataTypes.STRING,
    legScore: DataTypes.DECIMAL(10, 2)
  });

  Leg.associate = models => {
    Leg.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
    Leg.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Leg;
};
