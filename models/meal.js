const mealSeeds = require("../scripts/mealSeeds");

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
        quantity: DataTypes.INTEGER,
        plateprice: DataTypes.DOUBLE,
        zipcode1: DataTypes.INTEGER,
        zipcode2: DataTypes.INTEGER,
        zipcode3: DataTypes.INTEGER,
        zipcode4: DataTypes.INTEGER,
        zipcode5: DataTypes.INTEGER,
        zipcode6: DataTypes.INTEGER,
        zipcode7: DataTypes.INTEGER,
        zipcode8: DataTypes.INTEGER,
        zipcode9: DataTypes.INTEGER,
        zipcode10: DataTypes.INTEGER,
        catererId: {
            field: "CatererId",
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
    })

    Meal.associate = function (models) {
        //Each meal has many users (as customers) through UserMeal 
        // Meal.belongsToMany(models.User, {
        //     through: "UserMeal",
        //     // foreignKey: "userId",
        //     onDelete: "CASCADE",
        //     onUpdate: "CASCADE"
        // });

    Meal.belongsTo(models.User, {
        foreignKey: "catererId",
        targetKey: "id"
    })

        //Each meal has User, named as 'catererId'
        // Meal.belongsTo(models.User, {
        //     foreignKey: "catererId",
        //     targetKey: "id"
        // });
    }

    // // Insert the meal seed data
    // Meal.realSync = async () => {
    //     await Meal.sync()
    //     return await Meal.bulkCreate(mealSeeds, 
    //         {ignoreDuplicates: true}
    //     );
    // };
    const seed = () =>{
        return Promise.all([
            Meal.create({
                name: "Apple Turnover",
                type: "breakfast",
                description: "Great way to start your morning: fruit, pastry, and warmth!",
                photo_URL: "https://i.imgur.com/pi8FgBfm.jpg",
                allergen_dairy: 1,
                allergen_treenuts: 0,
                allergen_peanuts: 0,
                allergen_wheat: 1,
                allergen_fish: 0,
                allergen_crustaceanshellfish: 0,
                allergen_eggs: 1,
                allergen_soya: 0,
                date_available: "2019-04-21",
                time_available: "12:00:00",
                quantity: 7,
                catererId: 2,
                UserId: 2
              })
        ])
        .catch(error => console.log(error));
    };
    // seed();

    Meal.realSync = () => {
        Meal.sync()
        .then( ()=>{
             Meal.bulkCreate(mealSeeds)
            // seed();
        })
        
    };

    return Meal;
}
