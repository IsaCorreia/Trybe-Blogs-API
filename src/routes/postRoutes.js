const router = require('express').Router();
const middlewaresIndex = require('../middlewares/middlewaresIndex');
const postController = require('../controllers/postController.js');

router.get('/', middlewaresIndex.validateToken, postController.getAllPosts);

module.exports = router;
