const Joi = require('joi');
const { HTTP_BAD_REQUEST_STATUS } = require('../helpers/httpStatusCodes');
const categoryService = require('../services/categoryService');

const schema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
}).required();

const existingCategory = async ({ categoryIds }) => {
  const categories = await categoryService.getAllCategories();
  const categoriesList = categories.map(({ id }) => id);
  return categoriesList.some((id) => categoryIds.includes(id));
};

const validateNewPost = async (req, res, next) => {
  const value = schema.validate(req.body);
  if (value.error) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'Some required fields are missing' });
  }

  if ((await existingCategory(req.body)) === false) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = validateNewPost;
