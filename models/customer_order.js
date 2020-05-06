const mealSeeds = require("../scripts/mealSeeds");

module.exports =  (sequelize, DataTypes) => {
    let Customer_order = sequelize.define("Customer_order", {
        customer_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        order_id: DataTypes.INTEGER,  //populate with id of order
        date_ordered: DataTypes.DATE,
        deliver_date: DataTypes.DATE,
        pick_up_del: DataTypes.STRING,
        meal_name: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        caterer: DataTypes.STRING,
        payment_status: DataTypes.STRING,
        order_status: DataTypes.STRING,
        catererId: {
            field: "CatererId",
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
    })

    //check these relationships
    Customer_order.associate = function (models) {
        //Each meal has many users (as customers) through UserMeal 
        // Meal.belongsToMany(models.User, {
        //     through: "UserMeal",
        //     // foreignKey: "userId",
        //     onDelete: "CASCADE",
        //     onUpdate: "CASCADE"
        // });

    Customer_order.belongsTo(models.User, {
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
            Customer_order.create({
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

    Customer_order.realSync = () => {
        Customer_order.sync()
        .then( ()=>{
            Customer_order.bulkCreate(mealSeeds)
            // seed();
        })
        
    };

    return Customer_order;
}
