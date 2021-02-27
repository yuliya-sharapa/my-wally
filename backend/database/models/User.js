module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
        id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        name: {
			type: DataTypes.STRING,
			allowNull: false
		},
        lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
        email: {
			type: DataTypes.STRING,
			allowNull: false
		},
        password: {
            type: DataTypes.STRING,
			allowNull: false
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.hasMany(models.Operation, {
            as: "operations",
            foreignKey: "userId"
        })
    }

    return User;
}