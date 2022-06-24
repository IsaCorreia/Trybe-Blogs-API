const { HTTP_CREATED_STATUS, HTTP_OK_STATUS } = require('../helpers/httpStatusCodes');
const categoryService = require('../services/categoryService.js');

const addCategory = async (req, res) => {
  const { dataValues: { id, name } } = await categoryService.addCategory(req.body);
  return res.status(HTTP_CREATED_STATUS).json({ id, name });
};

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(HTTP_OK_STATUS).json(categories);
};

module.exports = { addCategory, getAllCategories };