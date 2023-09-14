const mongoose = require("mongoose");

const { categoryRepo, foodRepo } = require("../repositories/index");

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

const get_category_by_urlName = async (req, res) => {
  try {
    const urlName = req.params.urlName;
    const category = await categoryRepo.findOne({ urlName: urlName }, "foods");
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
    const objectIdFoods = [];
    data.foods.forEach((food) => {
      objectIdFoods.push(mongoose.Types.ObjectId(food));
    });
    data.foods = objectIdFoods;
    const category = await categoryRepo.updateById(id, data, {
      new: true,
      select: { _id: 1 },
    });
    for (let i = 0; i < objectIdFoods.length; i++) {
      await foodRepo.updateById(
        objectIdFoods[i],
        {
          $push: { categories: mongoose.Types.ObjectId(category._id) },
        },
        { new: true, select: { _id: 1 } }
      );
    }
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
    const category = await categoryRepo.deleteById(id, {
      _id: 1,
      foods: 1,
    });
    for (let i = 0; i < category.foods.length; i++) {
      await foodRepo.updateById(category.foods[i], {
        $pull: { categories: mongoose.Types.ObjectId(category._id) },
      });
    }
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
    const objectIdFoods = [];
    data.foods.forEach((food) => {
      objectIdFoods.push(mongoose.Types.ObjectId(food));
    });
    data.foods = objectIdFoods;
    const category = await categoryRepo.insert(data);
    for (let i = 0; i < objectIdFoods.length; i++) {
      await foodRepo.updateById(
        objectIdFoods[i],
        {
          $push: { categories: mongoose.Types.ObjectId(category._id) },
        },
        { new: true, select: { _id: 1 } }
      );
    }
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
  get_category_by_urlName,
  modify_category,
  delete_category,
  add_category,
};
