'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cycle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cycle.init({
    duration: DataTypes.DOUBLE,
    type: DataTypes.STRING,
    growth: DataTypes.DOUBLE,
    biomass: DataTypes.DOUBLE,
    lipid: DataTypes.DOUBLE,
    carbs: DataTypes.DOUBLE,
    protein: DataTypes.DOUBLE,
    inVolume: DataTypes.DOUBLE,
    outVolume: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Cycle',
  });
  return Cycle;
};