module.exports = (sequelize, DataTypes) => {
  const Leg = sequelize.define("Leg", {
    legNumber: DataTypes.INTEGER,
    darts: {
      type: DataTypes.STRING,
      get: () => JSON.parse(this.getDataValue("darts"))
    },
    legScore: DataTypes.DECIMAL(10, 2),
    legScoreInt: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });

  Leg.associate = models => {
    Leg.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
    Leg.belongsTo(models.User, {
      as: "legOwner",
      foreignKey: "userId"
    });
    Leg.hasOne(models.GamePlayer, {
      as: "legThrower",
      foreignKey: "userId"
    });
  };

  return Leg;
};
