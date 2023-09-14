const mongoose = require("mongoose");

const { categoryRepo, foodRepo } = require("../repositories/index");

const errorMessages = require("../utils/error_messages.json");

const get_all_foods = async (req, res) => {
  try {
    const foods = await foodRepo.findAll({});
    res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const get_food_by_Id = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await foodRepo.findOneById(id);
    res.status(200).json(food);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const get_food_by_urlName = async (req, res) => {
  try {
    const urlName = req.params.urlName;
    const food = await foodRepo.findOne({ urlName: urlName });
    res.status(200).json(food);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

// If you have your picture wrong! Just delete and add the item again!
// Too lazy to implement that feature!
const modify_category = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const food = await food
    }
}
