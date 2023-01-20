'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publications.belongsToMany(models.Profiles, { as: 'votes', through: models.Votes, foreignKey: 'publication_id' })
      Publications.belongsTo(models.Profiles, {as: 'profile', foreignKey: 'profile_id'})
      Publications.belongsTo(models.Publications_types, {as: 'publication_type', foreignKey: 'publication_type_id'})
      Publications.belongsTo(models.Cities, {as: 'city', foreignKey: 'city_id'})

    }
  }
  Publications.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    profile_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    publication_type_id: {
      type: DataTypes.INTEGER,
    },
    city_id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    picture: {
      type:  DataTypes.STRING,
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  }, {
    sequelize,
    modelName: 'Publications',
    tableName: 'publications',
    underscored: true,
    timestamps: true,
  })
  return Publications
}