'use strict';
module.exports = (sequelize, DataTypes) => {
  const BROKER = sequelize.define('BROKER', {
    name: DataTypes.STRING,
    credit: DataTypes.FLOAT,
    broker_username:{
      types:DataTypes.STRING,
      primaryKry:true
    } ,
    password: DataTypes.STRING
  }, {});
  BROKER.associate = function(models) {
    // associations can be defined here
  };
  return BROKER;
};