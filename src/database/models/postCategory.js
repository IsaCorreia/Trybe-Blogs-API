"use strict";

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: "category",
      through: PostCategory,
      foreignKey: "id",
      otherKey: "postId",
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: "post",
      through: PostCategory,
      foreignKey: "id",
      otherKey: "categoryId",
    });
  };

  return PostCategory;
};

module.exports = PostCategory;
