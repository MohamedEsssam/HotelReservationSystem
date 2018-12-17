'use strict';
module.exports = (sequelize, DataTypes) => {
  const ROOM = sequelize.define('ROOM', {
    room_number:{
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
    type: DataTypes.STRING,
    price: DataTypes.FLOAT,
    available: DataTypes.BOOLEAN
  }, {});
  ROOM.associate = function(models) {
    ROOM.belongsTo(models.HOTEL, {foreignKey: 'hotel_name', targetKey: 'hotel_name'});
    ROOM.belongsTo(models.HOTEL, {foreignKey: 'hotel_location', targetKey: 'hotel_location'});
    // associations can be defined here
  };
  return ROOM;
};