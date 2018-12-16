'use strict';
module.exports = (sequelize, DataTypes) => {
  const PAYMENT = sequelize.define('PAYMENT', {
    payment_id: DataTypes.INTEGER,
    hotel_name: DataTypes.STRING,
    hotel_location: DataTypes.STRING,
    room_number: DataTypes.INTEGER,
    broker_username: DataTypes.STRING
  }, {});
  PAYMENT.associate = function(models) {
    // associations can be defined here
  };
  return PAYMENT;
};