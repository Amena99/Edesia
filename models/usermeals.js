module.exports = function(sequelize, DataTypes){
    let UserMeal = sequelize.define("UserMeal", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        picked_up: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
});
    UserMeal.associate = (models) => {

        //connect User to UserMeal on 'id' 
        //CREATES FIELD CALLED "USERID", NOT 'CUSTOMERID'
        //WHEN 'FIELD' IS SET TO 'CUSTOMERID' INSIDE FOREIGNKEY OBJECT.  
        //EVEN IF FOREIGNKEY IS SET TO VALUE STRING "CUSTOMERID", THE FIELD IS CALLED 'USERID'
        // UserMeal.belongsTo(models.User, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });

        // UserMeal.belongsTo(models.Meal, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // })
    }
    return UserMeal;
};