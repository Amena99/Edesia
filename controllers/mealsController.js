const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Defining methods for the mealsController
module.exports = {
  findAll: function(req, res) {
    console.log("Inside findAll");
    db.Meal.findAll({
      where: {
        date_available: {
          [Op.gte]: new Date()
        }
      }
    })
      .then(function(meals){
         res.json(meals)
      }); 
  },

  findSplash: function(req, res){
    console.log("Inside findSplash");
    db.Meal.findAll({
      where: {
        date_available: {
          [Op.gte]: new Date()
        }
      },
      limit: 5
    }).then(function (meals){
      res.json(meals)
    });
  },
  
  findByZip: function(req, res){
    console.log("Inside find by zip");
    console.log("res in findByZip", req.params.zipcode);
    let zipcode = req.params.zipcode;
    db.Meal.findAll({
      where: {
        [Op.and] : [
          {
            date_available: {
            [Op.gte]: new Date()
            }
          },
          {
            [Op.or]: [{zipcode1: zipcode},
                  {zipcode2: zipcode},
                  {zipcode3: zipcode},
                  {zipcode4: zipcode},
                  {zipcode5: zipcode},
                  {zipcode6: zipcode},
                  {zipcode7: zipcode},
                  {zipcode8: zipcode},
                  {zipcode9: zipcode},
                  {zipcode10: zipcode}] 
          }]
      },
      include: [db.User],
      limit: 5
    }).then(meals=>{
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
        console.log(mealDetails.toJSON());
      })
      .catch(err => res.status(422).json(err));
  },

  //change to after current time  
  searchByKeyword: function(req, res){
    console.log("Inside controller.searchByKeyword");
    const keyword = req.params.searchQuery;
    console.log("keyword:"+ keyword);
    console.log("req.params", req.params.searchQuery);
    db.Meal.findAll({
      // logging: console.log,
       where: {
        [Op.and] : [
          {
            date_available: {
              [Op.gte]: new Date()
            }
          },
          {[Op.or]: [
            {name: {
              [Op.like]: [`%${keyword}%`]
              }
            },
            {type: {
              [Op.like]: [`%${keyword}%`]
              }
            },
            {description: {
              [Op.like]: [`%${keyword}%`]
              }
            }
          ]}
        ]
          }
        }).then(searchMeals => {
        console.log(searchMeals.length);
        // JSON.parse(searchMeals);
        // console.log(searchMeals[0].toJSON())
        // console.log(searchMeals[1].toJSON())
        res.status(200).json(searchMeals);
        res.end();
        console.log("Inside then contrllr.searchByKeyW");
      }).catch(err => res.status(422).json(err))
  },
  create: (req, res) => {
    const newMeal = req.body;
    console.log(newMeal);

    db.Meal.create(newMeal)
      .then(dbMeal => {
        res.send(dbMeal);
      })
      .catch(err => res.status(422).json(err));
  },
  addToCart: (req, res)=> {
    console.log("Inside addToCart Ctrllr")
    db.Meal.findOne({
       logging: console.log,
      where: {
        id: (req.params.id)
      }
    })
    .then(dbMeal => {
      console.log("inside then of controller addToCart")
      console.log("dbMeal", dbMeal);
      const UserMeal = {
        MealId: dbMeal.id,
        UserId: dbMeal.UserId,
        CatererId: dbMeal.CatererId,
        picked_up: false,
        purchased: false,
        name: dbMeal.name,
        type: dbMeal.type,
        description: dbMeal.description,
        photo_URL: dbMeal.photo_URL
      }
      db.UserMeal.create(UserMeal)
        .then(() => {
          res.status(200).json(UserMeal);
          res.end();
          console.log("then of UserMeal", dbMeal);
        });
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
