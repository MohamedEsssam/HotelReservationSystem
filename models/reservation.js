'use strict';
module.exports = (sequelize, DataTypes) => {
  const RESERVATION = sequelize.define('RESERVATION', {
    customer_username: DataTypes.STRING,
    room_no: DataTypes.INTEGER,
    hotel_name: DataTypes.STRING,
    hotel_location: DataTypes.STRING,
    check_in_date: DataTypes.DATE,
    check_out_date: DataTypes.DATE,
    appear: DataTypes.BOOLEAN
  }, {});
  RESERVATION.associate = function(models) {
    // associations can be defined here
  };
  return RESERVATION;
};