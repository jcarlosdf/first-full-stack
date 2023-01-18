'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Roles.hasMany(models.Profiles, {as: 'profile', foreignKey: 'role_id'})
    }
  }
  Roles.init({
    id: {
      type: DataTypes.INT,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'Roles',
    tableName: 'roles',
    underscore: true,
    timestamps: true,
  })
  return Roles
}