'use strict';
module.exports = (sequelize, DataTypes) => {
  const RESERVATION = sequelize.define('RESERVATION', {
    customer_username:{
      types:DataTypes.STRING,
      primaryKry:true
    } ,
    room_no:{
      types:DataTypes.INTEGER,
      primaryKry:true
    } ,
    hotel_name:{
      types:DataTypes.STRING,
      primaryKry:true
    } ,
    hotel_location:{
      types:DataTypes.STRING,
      primaryKry:true
    } ,
    check_in_date: DataTypes.DATE,
    check_out_date: DataTypes.DATE,
    appear: DataTypes.BOOLEAN
  }, {});
  RESERVATION.associate = function(models) {
    RESERVATION.belongsTo(models.CUSTOMER, {foreignKey: 'customer_username', targetKey: 'customer_username'});
    RESERVATION.belongsTo(models.HOTEL, {foreignKey: 'hotel_name', targetKey: 'hotel_name'});
    RESERVATION.belongsTo(models.HOTEL, {foreignKey: 'hotel_location', targetKey: 'hotel_location'});
    RESERVATION.belongsTo(models.ROOM, {foreignKey: 'room_number', targetKey: 'room_number'});
    // associations can be defined here
  };
  return RESERVATION;
};