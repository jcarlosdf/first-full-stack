'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      /*references: {
        key: 'id',
        model: 'users'
      }*/
    },
    role_id: {
      type: DataTypes.INT,
      allowNull: false,
      /*references: {
        key: 'id',
        model: 'roles'
      }*/
    },
    country_id: {
      type: DataTypes.INT,
      allowNull: false,
      /*references: {
        key: 'id',
        model: 'country'
      }*/
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
  });
  return Profiles;
};