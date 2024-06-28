'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cycles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.DOUBLE
      },
      type: {
        type: Sequelize.STRING
      },
      growth: {
        type: Sequelize.DOUBLE
      },
      biomass: {
        type: Sequelize.DOUBLE
      },
      lipid: {
        type: Sequelize.DOUBLE
      },
      carbs: {
        type: Sequelize.DOUBLE
      },
      protein: {
        type: Sequelize.DOUBLE
      },
      inVolume: {
        type: Sequelize.DOUBLE
      },
      outVolume: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cycles');
  }
};