const User = require("../models/User");

const findOne = async (condition) => {
  try {
    return await User.findOne(condition).lean();
  } catch (error) {
    throw new Error(error);
  }
};

const findById = async (id) => {
  try {
    return await User.findById(id);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { findOne, findById };
