const Joi = require('joi');
const { HTTP_BAD_REQUEST_STATUS } = require('../helpers/httpStatusCodes');

const schema = Joi.object({
  name: Joi.string().required(),
}).required();

const validateNewCategory = (req, res, next) => {
  const value = schema.validate(req.body);
  if (value.error) {
    const { error: { details: [{ message }] } } = value;
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message });
  }
  next();
};

module.exports = validateNewCategory;