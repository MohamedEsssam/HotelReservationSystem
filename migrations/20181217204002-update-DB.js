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




// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     queryInterface.removeColumn('ROOMs','id')
//     queryInterface.removeColumn('BROKERs','id')
//     queryInterface.removeColumn('CUSTOMERs','id')
//     queryInterface.removeColumn('CUSTOMER_HOTEL_RATEs','id')
//     queryInterface.removeColumn('HOTEL_OWNERs','id')
//     queryInterface.removeColumn('PAYMENTs','id')
//     queryInterface.removeColumn('RESERVATIONs','id')
//     queryInterface.addConstraint('ROOMs',['room_number','hotel_name','hotel_location']
//     ,{
//       type:'primary key',
//       name:'rooms_primary_constraint'
//     })
//     queryInterface.addConstraint('BROKERs',['broker_username']
//     ,{
//       type:'primary key',
//       name:'broker_primary_constraint'
//     })
//     queryInterface.addConstraint('PAYMENTs',['pay_id','hotel_name','hotel_location']
//     ,{
//       type:'primary key',
//       name:'broker_primary_constraint'
//     })
//     queryInterface.addConstraint('HOTEL_OWNERs',['hotel_owner_username']
//     ,{
//       type:'primary key',
//       name:'broker_primary_constraint'
//     })
//     queryInterface.addConstraint('CUSTOMERs',['customer_username']
//     ,{
//       type:'primary key',
//       name:'broker_primary_constraint'
//     })
//     queryInterface.addConstraint('RESERVATIONs',['customer_username','room_number','hotel_name','hotel_location']
//     ,{
//       type:'primary key',
//       name:'broker_primary_constraint'
//     })
//     return queryInterface.addConstraint('CUSTOMER_HOTEL_RATEs',['customer_username','hotel_name','hotel_location']
//     ,{
//       type:'primary key',
//       name:'broker_primary_constraint'
//     })
    
//     // queryInterface.addConstraint('HOTELs',['hotel_owner_username']
//     // ,{
//     //   type: 'foreign key',
//     //   name: 'hotel_fkey_constraint_name',
//     //   references: { //Required field
//     //   table: 'HOTEL_OWNERs',
//     //   field: 'hotel_owner_username'
//     //   },
//     //   onDelete: 'cascade',
//     //   onUpdate: 'cascade'
//     // })
//     // queryInterface.addConstraint('PAYMENTs',['hotel_name']
//     // ,{
//     //   type: 'foreign key',
//     //   name: 'hotel_fkey_constraint_name',
//     //   references: { //Required field
//     //   table: 'HOTEL_OWNERs',
//     //   field: 'hotel_owner_username'
//     //   },
//     //   onDelete: 'cascade',
//     //   onUpdate: 'cascade'
//     // })
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.createTable('users', { id: Sequelize.INTEGER });
//     */
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.dropTable('users');
//     */
//   }
// };
