const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const getNewToken = async ({ email, password }) => {
  const userInfo = await User.findOne({ where: { email, password } });

  return userInfo
    ? jwt.sign(
        { data: userInfo.dataValues.email },
        process.env.JWT_SECRET,
        jwtConfig,
      )
    : null;
};

module.exports = {
  getNewToken,
};
