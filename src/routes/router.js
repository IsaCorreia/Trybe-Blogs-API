const router = require('express').Router();

router.use('/login', require('./loginRoutes'));
router.use('/user', require('./userRoutes'));
router.use('/categories', require('./categoriesRoutes'));

module.exports = router;
