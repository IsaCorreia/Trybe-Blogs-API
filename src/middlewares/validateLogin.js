// const Joi = require('joi');
// const schema = Joi.object({
//   email: Joi.string().required(),
//   password: Joi.string().required(),
// }).required();

// const validateLogin = async (req, res, next) => {
//   try {
//     const [error] = schema.validate(req.body);
//     next();
//   } catch (e) {
//     return res.status(400).json({
//       message: "Some required fields are missing",
//     });
//   }
// };

const { HTTP_BAD_REQUEST_STATUS } = require('../helpers/httpStatusCodes');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  return !email || !password
    ? res
        .status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'Some required fields are missing' })
    : next();
};

module.exports = validateLogin;
