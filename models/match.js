module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define("Match", {
    setsPlayed: DataTypes.JSON,
    matchResults: DataTypes.JSON
  });

  Match.associate = models => {
    Match.belongsTo(models.Tournament, {
      as: "tournamentMatch",
      foreignKey: "tournId"
    });
  };

  return Match;
};
