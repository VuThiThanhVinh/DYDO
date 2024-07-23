const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");
const addNewRestaurant = require("../controllers/restaurantController");
router.post("/addNewRestaurant", restaurantController.addNewRestaurant);
router.post("/closeRestaurant", restaurantController.closeRestaurant);
module.exports = router;