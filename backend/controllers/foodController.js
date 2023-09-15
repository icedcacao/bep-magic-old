const { foodRepo } = require("../repositories/index");
const client = require("../utils/imgurConnection");
const format_url_name = require("../utils/formatUrlName");

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
    const food = await foodRepo.findOneById(id, {});
    res.status(200).json(food);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const get_food_by_foodUrl = async (req, res) => {
  try {
    const foodUrl = req.params.foodUrl;
    const food = await foodRepo.findOne({ foodUrl: foodUrl });
    res.status(200).json(food);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const modify_food = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    // Modifying images
    if (req.file && req.file.size !== 0) {
      const deleteHash = await foodRepo.findOneById(id, { deleteHashImage: 1 });
      client.deleteImage(deleteHash);
      const fileBuffer = req.file.buffer;
      const base64image = fileBuffer.toString("base64");
      const response = await client.upload({
        image: base64image,
        type: "base64",
      });
      data.image = response.data.link;
      data.deleteHashImage = response.data.deletehash;
    }
    const food = await foodRepo.updateById(id, data, {
      new: true,
      select: { _id: 1 },
    });
    res.status(200).json(food);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const delete_food = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await foodRepo.deleteById(id, { _id: 1, deleteHashImage: 1 });
    client.deleteImage(food.deleteHashImage);
    res.status(200).json({ message: "Sucessfully deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

const add_food = async (req, res) => {
  try {
    const raw_data = req.body;
    const fileBuffer = req.file.buffer;
    const base64image = fileBuffer.toString("base64");
    const response = await client.upload({
      image: base64image,
      type: "base64",
    });
    const foodUrl = format_url_name(raw_data.name);
    const data = {
      name: raw_data.name,
      foodUrl: foodUrl,
      image: response.data.link,
      deleteHashImage: response.data.deletehash,
      price: parseInt(raw_data.price),
      isDisplay: false,
      nutrition: {
        calories: parseInt(raw_data.calories),
        protein: parseInt(raw_data.protein),
        fat: parseInt(raw_data.fat),
        carb: parseInt(raw_data.carb),
        fiber: parseInt(raw_data.fiber),
        vitamins: raw_data.vitamins,
        others: raw_data.others,
      },
    };
    const food = await foodRepo.insert(data);
    res.status(200).json(food);
  } catch (error) {
    console.error(error);
    res
      .status(errorMessages.INTERNAL_SERVER_ERROR.code)
      .json({ Error: errorMessages.INTERNAL_SERVER_ERROR.message });
  }
};

module.exports = {
  get_all_foods,
  get_food_by_Id,
  get_food_by_foodUrl,
  modify_food,
  delete_food,
  add_food,
};
