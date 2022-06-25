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

module.exports = {
  getAllPosts,
};
