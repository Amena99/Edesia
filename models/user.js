const userSeeds = require("../scripts/userSeeds");

module.exports = function(sequelize, DataTypes) {
    //Defining User Table
    let User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        phone_number: DataTypes.INTEGER(10),
        city: DataTypes.STRING,
        zipcode: DataTypes.INTEGER(5),
        credit_card_number: {
            type: DataTypes.INTEGER,
            validate: {
                isCreditCard: true
            }
        },
        cc_expiration: {
            type: DataTypes.DATE,
            validate: {
                isAfter: "2019-04-01"
            }
        },
        validation_code: DataTypes.INTEGER, 
        caterer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        zipcode_served1: DataTypes.CHAR(5),
        zipcode_served2: DataTypes.CHAR(5),
        zipcode_served3: DataTypes.CHAR(5),
        zipcode_served4: DataTypes.CHAR(5),
        zipcode_served5: DataTypes.CHAR(5),
        zipcode_served6: DataTypes.CHAR(5),
        zipcode_served7: DataTypes.CHAR(5),
    });

    User.associate = function (models) {

        //CREATE ASSOC W/ MEAL THRU USERMEAL
        //CREATES FIELD NAMED "CUSTOMERID"
        // User.belongsToMany(models.Meal, {
        //     through: "UserMeal",
        //     foreignKey: "CustomerId",
        //     onDelete: "CASCADE",
        //     onUpdate: "CASCADE"
        // });

        User.hasMany(models.Meal, {
            onDelete: "cascade"
        });

        // User.hasMany(models.UserMeal, {
        //     onDelete: "cascade"
        // });
    }
    // Insert the user seed data
    User.realSync = async () => {
        await User.sync()
        return await User.bulkCreate(userSeeds, {
            ignoreDuplicates: true
        });
    };

    return User;
}

