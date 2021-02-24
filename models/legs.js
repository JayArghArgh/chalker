"user strict";
module.exports = (sequelize, DataTypes) => {
	const Legs = sequelize.define('Legs', {
		leg_number: DataTypes.INTEGER,
		darts: DataTypes.STRING,
		leg_score: DataTypes.DECIMAL(10,2),
	})

	Legs.associate = (models) => {
		Legs.hasOne(models.Games, {});
		Legs.hasOne(models.Members, {});
	};

	return Legs;
}