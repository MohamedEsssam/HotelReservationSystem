'use strict';
module.exports = (sequelize, DataTypes) => {
  const HOTEL_OWNER = sequelize.define('HOTEL_OWNER', {
    name: DataTypes.STRING,
    ssn: DataTypes.INTEGER,
    telephone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    hotel_owner_username:{
      types:DataTypes.STRING,
      primaryKry:true
    } ,
    password: DataTypes.STRING
  }, {});
  HOTEL_OWNER.associate = function(models) {
    // associations can be defined here
  };
  return HOTEL_OWNER;
};