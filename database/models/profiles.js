'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profiles.belongsTo(models.Users, {as: 'user', foreignKey: 'user_id'})
      // Profiles.belongsTo(models.Roles, {as: 'rol', foreignKey: 'role_id'})
      // Profiles.belongsTo(models.Countries, {as: 'country', foreignKey: 'country_id'})
    }
  }
  Profiles.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INT,
      allowNull: false,
    },
    country_id: {
      type: DataTypes.INT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    code_phone: {
      type: DataTypes.INT,
    },
    phone: {
      type: DataTypes.INT,
    },
  }, {
    sequelize,
    modelName: 'Profiles',
    tableName: 'profiles',
    underscored: true,
    timestamps: true,
    // scopes: {
    //   public_view: {
    //     attributes: ['id', 'country_id']
    //   },
    //   no_timestamps: {
    //     attributes: {exclude: ['created_at', 'updated_at']}
    //   }
    // }
  })
  return Profiles
}