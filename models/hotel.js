'use strict';
module.exports = (sequelize, DataTypes) => {
  const HOTEL = sequelize.define('HOTEL', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    credit: DataTypes.FLOAT,
    telephone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    postal_code: DataTypes.STRING,
    premium: DataTypes.BOOLEAN,
    hotel_owner_username: DataTypes.STRING,
    suspended: DataTypes.BOOLEAN,
    approval:DataTypes.BOOLEAN
  }, {});
  HOTEL.associate = function(models) {
    // associations can be defined here
  };
  return HOTEL;
};