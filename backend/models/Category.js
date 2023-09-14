const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  name: String,
  categoryUrl: String,
  foods: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
});

module.exports = model("Category", categorySchema);
