'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('states', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        country_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'countries'
          },
          onUpdate: 'RESTRICT',
          onDelete: 'CASCADE',
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
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
    try {
      await queryInterface.dropTable('states', { transaction })
      await transaction.commit()
    }
    catch(error){
      await transaction.rollback()
      throw error  
    }
  }
}
