const router = require("express").Router();
const mealsController = require("../../controllers/mealsController");

// Matches with "/api/meals"
router.route("/")
  .get(mealsController.findAll)
  .post(mealsController.create);

// Matches with "/api/meals/splash"
router.route("/splash")
  .get(mealsController.findSplash);

// Matches with "/api/meals/splash"
router.route("/splash/:zipcode")
  .get(mealsController.findByZip);

// Matches with "/api/meals/search/:searchQuery"
router.route("/search/:searchQuery")
  .get(mealsController.searchByKeyword);

// Matches with "/api/meals/add/:id"
router.route("/add/:id")
  .get(mealsController.addToCart);

// Matches with "/api/meals/:id"
router
  .route("/:id")
  .get(mealsController.findById)
  .put(mealsController.update)
  .delete(mealsController.remove);

module.exports = router;
