'use strict';
module.exports = (sequelize, DataTypes) => {
  const CUSTOMER_HOTEL_RATE = sequelize.define('CUSTOMER_HOTEL_RATE', {
    customer_username: DataTypes.STRING,
    hotel_name: DataTypes.STRING,
    hotel_location: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  CUSTOMER_HOTEL_RATE.associate = function(models) {
    // associations can be defined here
  };
  return CUSTOMER_HOTEL_RATE;
};