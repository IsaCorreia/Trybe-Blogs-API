const { BlogPost, User, Category } = require('../database/models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return posts;
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
