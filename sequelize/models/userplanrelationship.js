'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserPlanRelationship extends Model {
    static associate(models) {
      UserPlanRelationship.belongsTo(models.User, {
        foreignKey: 'userId',
      });

      UserPlanRelationship.belongsTo(models.Plans, {
        foreignKey: 'planId',
      });
    }
  }

  UserPlanRelationship.init({
    startDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'UserPlanRelationship',
  });

  return UserPlanRelationship;
};
