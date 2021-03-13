module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define("Tournament", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    entryFee: DataTypes.DECIMAL(10, 2),
    prize: DataTypes.JSON,
    createdBy: DataTypes.INTEGER,
    dateStart: DataTypes.DATE,
    dateFinish: DataTypes.DATE,
    dateEntryBy: DataTypes.DATE
  });

  Tournament.associate = models => {
    Tournament.belongsTo(models.User, {
      as: "tournamentCreator",
      foreignKey: "userId"
    });
  };

  return Tournament;
};
