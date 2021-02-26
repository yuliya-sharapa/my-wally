module.exports = (sequelize, DataTypes) => {
    let alias = "Operation";
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
        amount: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
        date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
        type: {
            type: DataTypes.BOOLEAN,
			allowNull: false
        }
    };
    let config = {
        tableName: 'operations',
        timestamps: false
    }
    
    const Operation = sequelize.define(alias, cols, config) ;

    return Operation
}