"use strict";

const Categories = (sequelize, DataTypes) => {
  const Categories = sequelize.define( "Category", {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: DataTypes.STRING,
  });
  return Categories;
};

module.exports = Categories;
