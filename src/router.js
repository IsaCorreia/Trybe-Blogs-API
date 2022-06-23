const router = require('express').Router();

const userController = require('./controllers/userController');
const middlewaresIndex = require('./middlewares/middlewaresIndex');

router.post('/login', middlewaresIndex.validateLogin, userController.getNewToken);
router.post('/user', middlewaresIndex.validateNewUser, userController.addUser);

module.exports = router;