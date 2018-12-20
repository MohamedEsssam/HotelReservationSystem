'use strict';
module.exports = (sequelize, DataTypes) => {
  const HOTEL = sequelize.define('HOTEL', {
    hotel_name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    hotel_location:DataTypes.STRING,
    credit: DataTypes.FLOAT,
    credit_card_number:DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    postal_code: DataTypes.STRING,
    premium: DataTypes.BOOLEAN,
    hotel_owner_username: DataTypes.STRING,
    suspended: DataTypes.BOOLEAN,
    approval: DataTypes.BOOLEAN
  }, {});
  HOTEL.associate = function (models) {
    HOTEL.belongsTo(models.HOTEL_OWNER, {
      foreignKey: 'hotel_owner_username', targetKey: 'username',
      onDelete: 'cascade'
    });
    // associations can be defined here
  };
  return HOTEL;
};