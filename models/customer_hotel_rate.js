'use strict';
module.exports = (sequelize, DataTypes) => {
  const CUSTOMER_HOTEL_RATE = sequelize.define('CUSTOMER_HOTEL_RATE', {
    customer_username:{
      types:DataTypes.STRING,
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
    rate: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  CUSTOMER_HOTEL_RATE.associate = function(models) {
    CUSTOMER_HOTEL_RATE.belongsTo(models.CUSTOMER, {foreignKey: 'customer_username', targetKey: 'customer_username'});
    CUSTOMER_HOTEL_RATE.belongsTo(models.HOTEL, {foreignKey: 'hotel_name', targetKey: 'hotel_name'});
    CUSTOMER_HOTEL_RATE.belongsTo(models.HOTEL, {foreignKey: 'hotel_location', targetKey: 'hotel_location'});
    // associations can be defined here
  };
  return CUSTOMER_HOTEL_RATE;
};