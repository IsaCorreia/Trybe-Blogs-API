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

const addUser = async ({ displayName, email, password, image }) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
    return jwt.sign(
      { data: newUser.dataValues.email },
      process.env.JWT_SECRET,
      jwtConfig,
    );
  } catch (_e) { return null; }
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users.map(({ dataValues: { id, displayName, email, image } }) => ({
    id,
    displayName,
    email,
    image,
  }));
};

module.exports = {
  getNewToken,
  addUser,
  getAllUsers,
};
