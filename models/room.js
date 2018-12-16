'use strict';
module.exports = (sequelize, DataTypes) => {
  const ROOM = sequelize.define('ROOM', {
    room_number: DataTypes.INTEGER,
    hotel_name: DataTypes.STRING,
    hotel_location: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.FLOAT,
    available: DataTypes.BOOLEAN
  }, {});
  ROOM.associate = function(models) {
    // associations can be defined here
  };
  return ROOM;
};