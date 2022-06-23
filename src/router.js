const router = require('express').Router();

const userController = require('./controllers/userController');
const middlewaresIndex = require('./middlewares/middlewaresIndex');

router.post('/login', middlewaresIndex.validateLogin, userController.getNewToken);

module.exports = router;