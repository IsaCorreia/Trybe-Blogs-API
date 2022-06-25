const postService = require('../services/postService.js');
const {
  HTTP_CREATED_STATUS,
  HTTP_OK_STATUS,
  HTTP_NOT_FOUND_STATUS,
} = require('../helpers/httpStatusCodes');

const addPost = async (req, res) => {
  const newPost = await postService.addPost(req.body);
  return res.status(HTTP_CREATED_STATUS).json(newPost);
};

const getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  return res.status(HTTP_OK_STATUS).json(posts);
};

const getPostById = async (req, res) => {
  const post = await postService.getPostById(req.params);
  return post
    ? res.status(HTTP_OK_STATUS).json(post)
    : res.status(HTTP_NOT_FOUND_STATUS).json({
        message: 'Post does not exist',
      });
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
};
