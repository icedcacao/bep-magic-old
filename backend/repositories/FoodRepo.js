const Food = require("../models/Food");

const findAll = async (condition) => {
  try {
    return await Food.find(condition).lean();
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (id, options) => {
  try {
    return await Food.findById(id, options).lean();
  } catch (error) {
    throw new Error(error);
  }
};

const findOne = async (condition) => {
  try {
    return await Food.findOne(condition).lean();
  } catch (error) {
    throw new Error(error);
  }
};

const insert = async (data) => {
  try {
    return await new Food(data).save();
  } catch (error) {
    throw new Error(error);
  }
};

const updateById = async (id, data, options) => {
  try {
    return await Food.findByIdAndUpdate(id, data, options).lean();
  } catch (error) {
    throw new Error(error);
  }
};

const updateOne = async (condition, data, options) => {
  try {
    await Food.updateOne(condition, data, options).lean();
  } catch (error) {
    throw new Error(error);
  }
};

const deleteById = async (id, options) => {
  try {
    return await Food.findByIdAndDelete(id, options).lean();
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
  updateOne,
  deleteById,
};
