const router = require("express").Router();
const mealRoutes = require("./meals");

// Book routes
router.use("/meals", mealRoutes);

module.exports = router;
