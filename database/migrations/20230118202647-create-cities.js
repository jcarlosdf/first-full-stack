'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('cities', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        state_id: {
          type: Sequelize.INTEGER,
          references: {
            key: 'id',
            model: 'states'
          },
          onUpdate: 'RESTRICT',
          onDelete: 'CASCADE',
        },
        name: {
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
    try {
      await queryInterface.dropTable('cities', { transaction })
      await transaction.commit()
    }
    catch(error){
      await transaction.rollback()
      throw error  
    }
  }
}