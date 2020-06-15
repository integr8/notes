'use strict';
module.exports = (sequelize, DataTypes) => {
  const tags = sequelize.define('tags', {
    tag_name: DataTypes.STRING
  }, {});

  return tags;
};