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

module.exports = {
  addPost,
};
