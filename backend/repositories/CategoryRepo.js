const Category = require("../models/Category");

// No population due to simplicity (only for admin)
const findAll = async (condition) => {
  try {
    return await Category.find(condition).lean();
  } catch (error) {
    throw new Error(error);
  }
};

// This is for using with admin!!
const findOneById = async (id, options) => {
  try {
    return await Category.findById(id).populate(options).lean();
  } catch (error) {
    throw new Error(error);
  }
};

const findOne = async (condition, options) => {
  try {
    return await Category.findOne(condition).populate(options).lean();
  } catch (error) {
    throw new Error(error);
  }
};

const insert = async (data) => {
  try {
    return await new Category(data).save();
  } catch (error) {
    throw new Error(error);
  }
};

const updateById = async (id, data, options) => {
  try {
    return await Category.findByIdAndUpdate(id, data, options).lean();
  } catch (error) {
    throw new Error(error);
  }
};

const deleteById = async (id, options) => {
  try {
    return await Category.findByIdAndDelete(id, options).lean();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  findAll,
  findOneById,
  findOne,
  insert,
  updateById,
  deleteById,
};
