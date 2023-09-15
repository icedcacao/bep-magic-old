const express = require("express");
const multer = require("multer");

const {
  categoryController,
  foodController,
  userController,
} = require("../controllers/indexController");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const authCheck = require("../utils/authCheck");

const router = express.Router();

// Login Routes
router.post("/login", userController.login);
router.get("/auth", authCheck, userController.auth);

// Food Routes
router
  .route("/food")
  .get(foodController.get_all_foods)
  .post(authCheck, upload.single("image"), foodController.add_food);
router
  .route("/id/food/:id")
  .get(authCheck, foodController.get_food_by_Id)
  .put(authCheck, upload.single("image"), foodController.modify_food)
  .delete(authCheck, foodController.delete_food);
router.get("/url/food/:foodUrl", foodController.get_food_by_foodUrl);

// Category Routes
router
  .route("/category")
  .get(categoryController.get_all_categories)
  .post(authCheck, categoryController.add_category);
router
  .route("/id/category/:id")
  .get(authCheck, categoryController.get_category_by_Id)
  .put(authCheck, categoryController.modify_category)
  .delete(authCheck, categoryController.delete_category);
router.get(
  "/url/category/:categoryUrl",
  categoryController.get_category_by_categoryUrl
);

module.exports = router;
