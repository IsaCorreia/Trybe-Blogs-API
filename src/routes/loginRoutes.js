const router = require('express').Router();
const middlewaresIndex = require('../middlewares/middlewaresIndex');
const userController = require('../controllers/userController');

router.post('/', middlewaresIndex.validateLogin, userController.getNewToken);

module.exports = router;
