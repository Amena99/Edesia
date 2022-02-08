const router = require("express").Router();
const mealRoutes = require("./meals");

// Meal routes
router.use("/meals", mealRoutes);

module.exports = router;
