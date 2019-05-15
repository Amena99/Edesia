module.exports = function(sequelize, DataTypes){
    let UserMeal = sequelize.define("UserMeal", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        picked_up: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        purchased: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
        },
        userId: {
            field: "UserId",
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
});
    UserMeal.associate = (models) => {

        //connect User to UserMeal on 'id' 
        //CREATES FIELD CALLED "USERID", NOT 'CUSTOMERID'
        //WHEN 'FIELD' IS SET TO 'CUSTOMERID' INSIDE FOREIGNKEY OBJECT.  
        //EVEN IF FOREIGNKEY IS SET TO VALUE STRING "CUSTOMERID", THE FIELD IS CALLED 'USERID'
        UserMeal.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        UserMeal.belongsTo(models.Meal, {
            foreignKey: {
                allowNull: false
            }
        })

        
    }
    return UserMeal;
};