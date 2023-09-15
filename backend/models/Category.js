const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: true, // This field is required
  },
  categoryUrl: String,
  foods: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
});

module.exports = model("Category", categorySchema);
