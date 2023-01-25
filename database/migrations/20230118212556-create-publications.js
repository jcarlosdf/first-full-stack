'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('publications', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        profile_id: {
          type: Sequelize.UUID,
          references: {
            key: 'id',
            model: 'profiles'
          },
          onUpdate: 'RESTRICT',
          onDelete: 'CASCADE',
        },
        publication_type_id: {
          type: Sequelize.INTEGER,
          references: {
            key: 'id',
            model: 'publications_types'
          },
          onUpdate: 'RESTRICT',
          onDelete: 'CASCADE',
        },
        city_id: {
          type: Sequelize.INTEGER,
          references: {
            key: 'id',
            model: 'cities'
          },
          onUpdate: 'RESTRICT',
          onDelete: 'CASCADE',
        },
        title: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        content: {
          type: Sequelize.TEXT
        },
        picture: {
          type: Sequelize.STRING
        },
        image_url: {
          type: Sequelize.STRING
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      }, { transaction })

      await transaction.commit()
    }
    catch(error){
      await transaction.rollback()
      throw error
    }
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try{
      await queryInterface.dropTable('publications', { transaction })
      await transaction.commit()
    }
    catch(error){
      await transaction.rollback()
      throw error
    }
  }
}