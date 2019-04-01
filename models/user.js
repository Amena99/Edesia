
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
        email: DataTypes.STRING,
        phone_number: DataTypes.INTEGER(10),
        username: DataTypes.STRING,
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
    });

    User.associate = function (models) {

        //CREATE ASSOC W/ MEAL THRU USERMEAL
        //CREATES FIELD NAMED "CUSTOMERID"
        User.belongsToMany(models.Meal, {
            through: "UserMeal",
            foreignKey: "CustomerId",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        User.hasMany(models.Meal, {
            onDelete: "cascade"
        });

        // User.hasMany(models.UserMeal, {
        //     onDelete: "cascade"
        // });
    }

    return User;
}

