'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Plans extends Model {
    static associate(models) {
      // A plan can have multiple users subscribed
      Plans.hasMany(models.UserPlanRelationship, {
        foreignKey: 'planId',
      });
    }
  }

  Plans.init({
    type: DataTypes.STRING,
    details: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Plans',
  });

  return Plans;
};
