const express = require("express");

const {
  categoryController,
  foodController,
  userController,
} = require("../controllers/indexController");

const authCheck = require("../utils/authCheck");

const router = express.Router();

// Login Routes
router.post("/login", userController.login);
router.get("/auth", authCheck, userController.auth);

// Food Routes
router
  .route("/san-pham")
  .get(foodController.get_all_foods)
  .post(authCheck, foodController.add_food);
router.get("/san-pham/:urlName", foodController.get_food_by_urlName);
router
  .route("/san-pham/:id")
  .put(authCheck, foodController.modify_food)
  .delete(authCheck, foodController.delete_food);
