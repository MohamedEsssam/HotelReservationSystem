'use strict';
module.exports = (sequelize, DataTypes) => {
  const HOTEL = sequelize.define('HOTEL', {
    hotel_name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    hotel_location: {
     type: DataTypes.STRING,
  primaryKey:true
    },
    credit: DataTypes.FLOAT,
    credit_card_number:DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    postal_code: DataTypes.STRING,
    premium: DataTypes.BOOLEAN,
    hotel_owner_username: DataTypes.STRING,
    suspended: DataTypes.BOOLEAN,
    approval: DataTypes.BOOLEAN,
    
    hotel_username: {
      type:DataTypes.STRING,
      unique:true
    },
    approval_time:{
      type: DataTypes.DATE
     },
    hotel_password:{
      type:DataTypes.STRING,
      unique:true
      
    }
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