const mealSeeds = require("../scripts/mealSeeds");

module.exports =  (sequelize, DataTypes) => {
    let Customer_due = sequelize.define("Customer_order", {
        customer_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        order_id: DataTypes.INTEGER,  //populate with id of order
        incurred_date: DataTypes.DATE,
        amount: DataTypes.DOUBLE,
        paid: DataTypes.STRING
    })

    //check these relationships
    Customer_due.associate = function (models) {
        //Each meal has many users (as customers) through UserMeal 
        // Meal.belongsToMany(models.User, {
        //     through: "UserMeal",
        //     // foreignKey: "userId",
        //     onDelete: "CASCADE",
        //     onUpdate: "CASCADE"
        // });

    Customer_due.belongsTo(models.User, {
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
            Customer_due.create({
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

    Customer_due.realSync = () => {
        Customer_due.sync()
        .then( ()=>{
            Customer_due.bulkCreate(mealSeeds)
            // seed();
        })
        
    };

    return Customer_due;
}
