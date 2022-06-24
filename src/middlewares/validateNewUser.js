const Joi = require('joi');
const { HTTP_BAD_REQUEST_STATUS } = require('../helpers/httpStatusCodes');

const schema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
}).required();

const validateNewUser = (req, res, next) => {
  const value = schema.validate(req.body);
  if (value.error) {
    const { error: { details: [{ message }] } } = value;
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message });
  }
  next();
};

module.exports = validateNewUser;
