const { HTTP_BAD_REQUEST_STATUS, HTTP_OK_STATUS } = require('../helpers/httpStatusCodes');
const userService = require('../services/userService.js');

const getNewToken = async (req, res) => {
  const token = await userService.getNewToken(req.body);
  return token
    ? res.status(HTTP_OK_STATUS).json({ token })
    : res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'Invalid fields' });
};

module.exports = {
  getNewToken,
};