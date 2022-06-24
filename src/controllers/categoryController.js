const { HTTP_CREATED_STATUS } = require('../helpers/httpStatusCodes');
const categoryService = require('../services/categoryService.js');

const addCategory = async (req, res) => {
  const { dataValues: { id, name } } = await categoryService.addCategory(req.body);
  return res.status(HTTP_CREATED_STATUS).json({ id, name });
};

module.exports = { addCategory };