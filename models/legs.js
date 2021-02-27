"user strict";
module.exports = (sequelize, DataTypes) => {
	const Legs = sequelize.define('Legs', {
		leg_number: DataTypes.INTEGER,
		darts: DataTypes.STRING,
		leg_score: DataTypes.DECIMAL(10,2),
	})

	Legs.associate = (models) => {
		Legs.belongsTo(models.Games, {
			foreignKey: {
				allowNull: false,
			},
		});
		Legs.belongsTo(models.Members, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return Legs;
}