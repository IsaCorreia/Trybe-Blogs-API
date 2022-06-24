const router = require('express').Router();
const middlewaresIndex = require('../middlewares/middlewaresIndex');
const userController = require('../controllers/userController');

router.get('/', middlewaresIndex.validateToken, userController.getAllUsers);
router.get('/:id', middlewaresIndex.validateToken, userController.getUserById);
router.post('/', middlewaresIndex.validateNewUser, userController.addUser);

module.exports = router;
