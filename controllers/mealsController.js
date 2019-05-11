const db = require("../models");

// Defining methods for the mealsController
module.exports = {
  findAll: function(req, res) {
    console.log("Inside findAll");
    db.Meal.findAll({})
      .then(function(meals){
         res.json(meals)
      }); 
  },
  findSplash: function(req, res){
    console.log("Inside find splash");
    db.Meal.findAll({
      limit: 5
    }).then(function (meals){
      res.json(meals)
    });
  },
  findById: function(req, res) {
    console.log("inside controller findbyID")
    db.Meal
      .findOne({
        where: {
          id: (req.params.id)
        }
      })
      .then(mealDetails => {
        console.log("inside then of controller findbyID")
        res.json(mealDetails)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const newMeal = req.body;
    console.log(newMeal);

    db.Meal.create(newMeal)
      .then(dbMeal => {
        console.log("dbMeal in controller", dbMeal)
        res.send(dbMeal);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Meal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Meal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
