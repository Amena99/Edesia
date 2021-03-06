"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  //'sequelize' is now a new instance of the Sequelize class that is linked with the parameter process.env[] or config. 
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  }) 
  
  .forEach(function(file) { 
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

  //dynamic associate, uses file code
Object.keys(db).forEach(function(modelName) {
  console.log(modelName);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }

});


const syncDB = async () => {
   await db['User'].realSync();
   await db['Meal'].realSync();
  //  await db['UserMeal'].realSync();
}

syncDB();
 

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

