'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CUSTOMERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      ssn: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      credit_card: {
        type: Sequelize.STRING
      },
      star_member: {
        type: Sequelize.BOOLEAN
      },
      customer_username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      blacklist: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CUSTOMERs');
  }
};