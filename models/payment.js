'use strict';
module.exports = (sequelize, DataTypes) => {
  const PAYMENT = sequelize.define('PAYMENT', {
    payment_id:{
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
    room_number: DataTypes.INTEGER,
    broker_username: DataTypes.STRING
  }, {});
  PAYMENT.associate = function(models) {
    PAYMENT.belongsTo(models.HOTEL, {foreignKey: 'hotel_name', targetKey: 'hotel_name'});
    PAYMENT.belongsTo(models.HOTEL, {foreignKey: 'hotel_location', targetKey: 'hotel_location'});
    PAYMENT.belongsTo(models.ROOM, {foreignKey: 'room_number', targetKey: 'room_number'});
    PAYMENT.belongsTo(models.BROKER, {foreignKey: 'broker_username', targetKey: 'broker_username'});
    // associations can be defined here
  };
  return PAYMENT;
};