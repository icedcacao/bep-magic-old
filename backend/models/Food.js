const { model, Schema } = require("mongoose");

const nutritionSchema = new Schema({
  calories: Number,
  protein: Number,
  fat: Number,
  carb: Number,
  fiber: Number,
  vitamins: String,
  others: String,
});

const foodSchema = new Schema({
  name: String,
  urlName: String,
  image: String,
  price: Number,
  isDisplayed: Boolean,
  nutrition: nutritionSchema,
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

module.exports = model("Food", foodSchema);
