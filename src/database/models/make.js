'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Make extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Make.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    originId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Make',
  });
  return Make;
};