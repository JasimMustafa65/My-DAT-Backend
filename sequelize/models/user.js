'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // A user can have multiple subscriptions
      User.hasMany(models.UserPlanRelationship, {
        foreignKey: 'userId',
      });
    }
  }

  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    organizationName: DataTypes.STRING,
    industry: DataTypes.STRING,
    phone: DataTypes.STRING,
    organizationSize: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmPassword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
