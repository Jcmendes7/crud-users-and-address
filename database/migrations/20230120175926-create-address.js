'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addressTable = queryInterface.createTable('Address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      district: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      state: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      house_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      fk_user: {
        type: Sequelize.INTEGER,
      },
      

    })

    return addressTable;
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
