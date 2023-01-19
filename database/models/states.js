'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      States.hasMany(models.Cities, {as: 'state', foreignKey: 'state_id'})
      States.belongsTo(models.Countries, {as: 'country', foreignKey: 'country_id'})
    }
  }
  States.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    country_id: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'States',
    tableName: 'states',
    underscored: true,
    timestamps: true,
  })
  return State
}