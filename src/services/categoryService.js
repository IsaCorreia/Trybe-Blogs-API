const { Category } = require('../database/models');

const addCategory = async ({ name }) => {
  const newCategory = Category.create({ name });
  return newCategory;
};

module.exports = {
  addCategory,
};