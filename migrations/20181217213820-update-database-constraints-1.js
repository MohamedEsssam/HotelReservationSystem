'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   
    queryInterface.removeColumn('PAYMENTs','payement_id')
    return queryInterface.removeColumn('PAYMENTs','payment_id')
    // queryInterface.addColumn('PAYMENTs','payment_id',Sequelize.INTEGER)
    // return queryInterface.addConstraint('PAYMENTs',['payment_id','hotel_name','hotel_location']
    // ,{
    //   type:'primary key',
    //   name:'payements_primary_constraint'
    // })
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
