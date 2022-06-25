const { BlogPost, User, Category } = require('../database/models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categoryId' },
    ],
  });
  const result = posts.map(({ dataValues: postData }) => {
    const { id, displayName, email, image } = postData.user.dataValues;
    return {
      ...postData,
      user: { id, displayName, email, image },
    };
  });
  return result;
};

const getPostById = async ({ id: postId }) => {
  try {
    const post = await BlogPost.findOne({
      where: { id: postId },
      include: [
        { model: User, as: 'user' },
        // { model: PostCategory, as: 'categories' },
      ],
    });
    const { id, displayName, email, image } = post.dataValues.user.dataValues;
    const result = {
      ...post.dataValues,
      user: { id, displayName, email, image },
    };
    return result;
  } catch (_e) {
    return null;
  }
};

module.exports = {
  getAllPosts,
  getPostById,
};
