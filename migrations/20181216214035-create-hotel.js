'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HOTELs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      credit: {
        type: Sequelize.FLOAT
      },
      telephone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      stars: {
        type: Sequelize.INTEGER
      },
      postal_code: {
        type: Sequelize.STRING
      },
      premium: {
        type: Sequelize.BOOLEAN
      },
      hotel_owner_username: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('HOTELs');
  }
};