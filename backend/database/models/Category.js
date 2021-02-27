module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
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
		}
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols, config) ;

    Category.associate = (models) => {
        Category.hasMany(models.Operation, {
            as: "operations",
            foreignKey: "categoryId"
        });
    };

    return Category;
}