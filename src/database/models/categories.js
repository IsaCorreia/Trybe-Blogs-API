"use strict";

(sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
    name: DataTypes.STRING,
  });
  return Categories;
};

module.exports = Categories;
