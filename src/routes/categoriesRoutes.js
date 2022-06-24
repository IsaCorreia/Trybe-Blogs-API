const router = require('express').Router();
const categoryController = require('../controllers/categoryController.js');
const middlewaresIndex = require('../middlewares/middlewaresIndex');

router.get(
  '/',
  middlewaresIndex.validateToken,
  categoryController.getAllCategories,
);
router.post(
  '/',
  middlewaresIndex.validateToken,
  middlewaresIndex.validateNewCategory,
  categoryController.addCategory,
);

module.exports = router;
