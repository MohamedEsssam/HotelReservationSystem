'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("ALTER TABLE CUSTOMER_HOTEL_RATEs "+
     "ADD CONSTRAINT FK_HOTEL_RATES_HOTELs"+
     " FOREIGN KEY(hotel_name,hotel_location) REFERENCES HOTELs(hotel_name,hotel_location)"+
     " on delete cascade on update cascade")
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
