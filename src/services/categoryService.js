const { Category } = require('../database/models');

const addCategory = async ({ name }) => {
  const newCategory = Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories.map(({ dataValues: { id, name } }) => ({ id, name }));
};

module.exports = {
  addCategory,
  getAllCategories,
};