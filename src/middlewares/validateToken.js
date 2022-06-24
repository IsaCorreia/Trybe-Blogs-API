const jwt = require('jsonwebtoken');
const { HTTP_UNAUTHORIZED_STATUS } = require('../helpers/httpStatusCodes');

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(HTTP_UNAUTHORIZED_STATUS)
        .json({ message: 'Token not found' });
    }
    jwt.verify(authorization, process.env.JWT_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = validateToken;
