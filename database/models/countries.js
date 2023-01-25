'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Countries.hasMany(models.Profiles, {foreignKey: 'country_id'})
      Countries.hasMany(models.States, {foreignKey: 'country_id'})
    }
  }
  Countries.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Countries',
    tableName: 'countries',
    underscored: true,
    timestamps: true,
  })
  return Countries
}