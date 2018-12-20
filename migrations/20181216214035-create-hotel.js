'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HOTELs', {

      hotel_name: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      },
      hotel_location: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      },
      credit: {
        type: Sequelize.FLOAT
      },
      credit_card_number:{
        type:Sequelize.STRING
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
      type:{
        type:Sequelize.STRING
      },
      premium: {
        type: Sequelize.BOOLEAN
      },
      hotel_owner_username: {
        type: Sequelize.STRING
      },
      suspended:{
        type:Sequelize.BOOLEAN
      },
      approval:{
        type:Sequelize.BOOLEAN
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