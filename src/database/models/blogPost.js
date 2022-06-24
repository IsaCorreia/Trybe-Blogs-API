"use strict";

const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {type: DataTypes.INTEGER, foreignKey: true},
    published: DataTypes.DATE,
  });
  return BlogPost;
};

module.exports = BlogPost;
