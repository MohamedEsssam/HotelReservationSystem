//check in for guests
//blacklist customers if didnt check in
//hotel info
//pay for broker
const path = require('path')

module.exports = async (req, res) => {

    console.log('************************')
   const db = require('../models/index')
   const hotelModel = db['HOTEL']
   const customerModel = db['CUSTOMER']
   var commingCustomers = "";
   var customersMustCome = "";
    const hotel=await hotelModel.findOne({ where: {username : req.params.username}})
    var sql =  ("SELECT * FROM CUSTOMERs INNER JOIN RESERVATIONs ON CUSTOMERs.username = RESERVATIONs.customer_username AND RESERVATIONs.check_in_date = " + new Date().toISOString().slice(0,10));
    await db.sequelize.query(sql,{model:customerModel}).then(customers =>{
        commingCustomers = customers;
    })
    sql =  ("SELECT * FROM CUSTOMERs INNER JOIN RESERVATIONs ON CUSTOMERs.username = RESERVATIONs.customer_username AND RESERVATIONs.check_out_date = " + new Date().toISOString().slice(0,10));
    await db.sequelize.query(sql,{model:customerModel}).then(customers =>{
        customersMustCome = customers;
    })
        //console.log(hotel.hotel_name + " " + hotel.hotel_location)
        
        //render with the data
        res.render('HotelManagerPage', {hotel, commingCustomers, customersMustCome})
        
};