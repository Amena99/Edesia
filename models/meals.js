
module.exports =  (sequelize, DataTypes) => {
    let Meal = sequelize.define("Meal", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        description: DataTypes.STRING,
        photo_URL: DataTypes.STRING,
        allergen_dairy: DataTypes.BOOLEAN,
        allergen_treenuts: DataTypes.BOOLEAN,
        allergen_peanuts: DataTypes.BOOLEAN,
        allergen_wheat: DataTypes.BOOLEAN,
        allergen_fish: DataTypes.BOOLEAN,
        allergen_crustaceanshellfish: DataTypes.BOOLEAN,
        allergen_eggs: DataTypes.BOOLEAN,
        allergen_soya: DataTypes.BOOLEAN,
        date_available: DataTypes.DATE,
        time_available: DataTypes.TIME,
        quantity: DataTypes.INTEGER
    })

    Meal.associate = function (models) {
        //Each meal has many users (as customers) through UserMeal 
        Meal.belongsToMany(models.User, {
            through: "UserMeal",
            // foreignKey: "userId",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        //Each meal has User, named as 'catererId'
        Meal.belongsTo(models.User, {
            foreignKey: "catererId",
            targetKey: "id"
        });

    }

    return Meal;
}