'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('votes', {
      publication_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          key: 'id',
          model: 'publications'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'CASCADE',
      },
      profile_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          key: 'id',
          model: 'profiles'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('votes')
  }
}