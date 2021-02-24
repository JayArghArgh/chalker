module.exports = (sequelize, DataTypes) => {
	const GameTypes = sequelize.define('GameTypes', {
		game_name: DataTypes.STRING,
		game_description: DataTypes.STRING,
		game_rules: DataTypes.STRING,
	});

	GameTypes.associate = (models) => {
		GameTypes.hasMany(models.GameTypes, {
			as: "variant_of",
		});
	};

	return GameTypes;
};