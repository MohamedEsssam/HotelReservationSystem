'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('ROOMs','hotel_location')
    queryInterface.addColumn('ROOMs','hotel_location',Sequelize.STRING)
    queryInterface.addConstraint('ROOMs',['room_number','hotel_name','hotel_location']
    ,{
      type:'primary key',
      name:'rooms_primary_constraint'
    })
    queryInterface.removeColumn('PAYMENTs','payement_id')
    queryInterface.addColumn('PAYMENTs','payement_id',Sequelize.INTEGER)
    queryInterface.addConstraint('PAYMENTs',['payment_id','hotel_name','hotel_location']
    ,{
      type:'primary key',
      name:'payements_primary_constraint'
    })

  
    queryInterface.addConstraint('HOTEL_OWNERs',['hotel_owner_username']
    ,{
      type:'primary key',
      name:'hotel_owner_primary_constraint'
    })
    return queryInterface.addConstraint('RESERVATIONs',['customer_username','room_number','hotel_name','hotel_location']
    ,{
      type:'primary key',
      name:'reservation_primary_constraint'
    })
  }
}

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }

