const router = require('express').Router();
const middlewaresIndex = require('../middlewares/middlewaresIndex');
const postController = require('../controllers/postController.js');

router.get('/', middlewaresIndex.validateToken, postController.getAllPosts);
router.get('/:id', middlewaresIndex.validateToken, postController.getPostById);
router.post(
  '/',
  middlewaresIndex.validateToken,
  middlewaresIndex.validateNewPost,
  postController.addPost,
);

module.exports = router;
