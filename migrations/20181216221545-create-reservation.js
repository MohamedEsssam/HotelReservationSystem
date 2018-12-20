'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RESERVATIONs', {
      
      customer_username: {
        type: Sequelize.STRING,
        
      },
      room_number: {
        type: Sequelize.INTEGER,
       
      },
      hotel_name: {
        type: Sequelize.STRING,
        
      },
      hotel_location: {
        type: Sequelize.STRING,
        
      },
      check_in_date: {
        type: Sequelize.DATE
      },
      check_out_date: {
        type: Sequelize.DATE
      },
      appear: {
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
    return queryInterface.dropTable('RESERVATIONs');
  }
};