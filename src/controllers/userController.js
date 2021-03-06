const {
  HTTP_BAD_REQUEST_STATUS,
  HTTP_OK_STATUS,
  HTTP_CREATED_STATUS,
  HTTP_CONFLICT_STATUS,
  HTTP_NOT_FOUND_STATUS,
} = require('../helpers/httpStatusCodes');
const userService = require('../services/userService.js');

const getNewToken = async (req, res) => {
  const token = await userService.getNewToken(req.body);
  return token
    ? res.status(HTTP_OK_STATUS).json({ token })
    : res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'Invalid fields' });
};

const addUser = async (req, res) => {
  const token = await userService.addUser(req.body);
  return token
    ? res.status(HTTP_CREATED_STATUS).json({ token })
    : res.status(HTTP_CONFLICT_STATUS).json({
        message: 'User already registered',
      });
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(HTTP_OK_STATUS).json(users);
};

const getUserById = async (req, res) => {
  const users = await userService.getUserById(req.params);
  return users
    ? res.status(HTTP_OK_STATUS).json(users)
    : res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'User does not exist' });
};

module.exports = {
  getNewToken,
  addUser,
  getAllUsers,
  getUserById,
};
