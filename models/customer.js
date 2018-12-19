'use strict';
module.exports = (sequelize, DataTypes) => {
  const CUSTOMER = sequelize.define('CUSTOMER', {
    name: DataTypes.STRING,
    ssn: DataTypes.INTEGER,
    email: DataTypes.STRING,
    credit_card: DataTypes.STRING,
    star_member: DataTypes.BOOLEAN,
    customer_username:{
      type:DataTypes.STRING,
      primaryKey:true
    } ,
    password: DataTypes.STRING,
    blacklist: DataTypes.BOOLEAN
  }, {});
  CUSTOMER.associate = function(models) {
    // associations can be defined here
  };
  return CUSTOMER;
};