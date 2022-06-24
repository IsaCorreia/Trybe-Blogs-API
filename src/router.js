const router = require('express').Router();

const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController.js');
const middlewaresIndex = require('./middlewares/middlewaresIndex');

router.post('/login', middlewaresIndex.validateLogin, userController.getNewToken);

router.get('/user', middlewaresIndex.validateToken, userController.getAllUsers);
router.get('/user/:id', middlewaresIndex.validateToken, userController.getUserById);
router.post('/user', middlewaresIndex.validateNewUser, userController.addUser);

// CATEGORIES routes
router.get(
  '/categories',
  middlewaresIndex.validateToken,
  categoryController.getAllCategories,
);
router.post(
  '/categories',
  middlewaresIndex.validateToken,
  middlewaresIndex.validateNewCategory,
  categoryController.addCategory,
);

module.exports = router;
