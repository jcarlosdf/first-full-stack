'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try{
      await queryInterface.createTable('users', { 
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email_verified: {
          type: Sequelize.DATEONLY,
        },
        token: {
          type: Sequelize.STRING,
          // ! allowNull: false,
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
  // ? El segundo parametro: Sequelize, es necesario?
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try{
      await queryInterface.dropTable('users', { transaction })
      await transaction.commit()
    }
    catch(error){
      await transaction.rollback()
      throw error
    }
  }
}