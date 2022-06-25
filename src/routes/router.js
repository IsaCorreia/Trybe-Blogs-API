const router = require('express').Router();

router.use('/login', require('./loginRoutes'));
router.use('/user', require('./userRoutes'));
router.use('/categories', require('./categoriesRoutes'));
router.use('/post', require('./postRoutes.js'));

module.exports = router;
