'use strict'
const uuid = require('uuid').v4
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasMany(models.Profile, {as: 'user', foreignKey: 'user_id'})
    }
  }
  Users.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email_verified: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      },
    },
    token: {
      type: DataTypes.STRING,
      // ! allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    underscored: true,
    timestamps: true,
    scopes: {
      public_view: {
        attributes: ['id', 'first_name']
      },
      no_timestamps: {
        attributes: {exclude: ['created_at', 'updated_at']}
      }
    }
  })
  return Users
}