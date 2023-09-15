const mongoose = require("mongoose");

const { categoryRepo } = require("../repositories/index");

const format_url_name = require("../utils/formatUrlName");
const errorMessages = require("../utils/error_messages.json");

const get_all_categories = async (req, res) => {
  try {
    const categories = await categoryRepo.findAll({});
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const get_category_by_Id = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await categoryRepo.findOneById(id, "foods");
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const get_category_by_categoryUrl = async (req, res) => {
  try {
    const categoryUrl = req.params.categoryUrl;
    const category = await categoryRepo.findOne(
      { categoryUrl: categoryUrl },
      "foods"
    );
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

// Something might go wrong in this!!!
const modify_category = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    // Detecting change in name
    if (data.hasOwnProperty("name")) {
      data.categoryUrl = format_url_name(data.name);
    }
    if (data.hasOwnProperty("foods")) {
      const objectIdFoods = [];
      data.foods.forEach((food) => {
        objectIdFoods.push(new mongoose.Types.ObjectId(food));
      });
      data.foods = objectIdFoods;
    }

    const category = await categoryRepo.updateById(id, data, {
      new: true,
      select: { _id: 1 },
    });
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const delete_category = async (req, res) => {
  try {
    const id = req.params.id;
    await categoryRepo.deleteById(id, {
      _id: 1,
    });
    res.status(200).json({ message: "Sucessfully deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const add_category = async (req, res) => {
  try {
    const data = req.body;
    data.categoryUrl = format_url_name(data.name);
    if (data.hasOwnProperty("foods")) {
      const objectIdFoods = [];
      data.foods.forEach((food) => {
        objectIdFoods.push(new mongoose.Types.ObjectId(food));
      });
      data.foods = objectIdFoods;
    }
    const category = await categoryRepo.insert(data);
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

module.exports = {
  get_all_categories,
  get_category_by_Id,
  get_category_by_categoryUrl,
  modify_category,
  delete_category,
  add_category,
};
