//check in for guests
//blacklist customers if didnt check in
//hotel info
//pay for broker
const path = require('path')

module.exports = async (req, res) => {
    var searchQuery = "select HOTELs.hotel_name,HOTELs.hotel_location,HOTELs.telephone,HOTELs.email,HOTELs.stars,HOTELs.postal_code,HOTELs.type"+
    ",ROOMs.room_number,ROOMs.type,ROOMs.price"+
    ",RESERVATIONs.check_in_date,RESERVATIONs.check_out_date"+ 
    " from HOTELs"
    searchQuery+=" inner join ROOMs on ROOMs.hotel_name=HOTELs.hotel_name and ROOMs.hotel_location=HOTELs.hotel_location"
    searchQuery+=" inner join RESERVATIONs on RESERVATIONs.room_number=ROOMs.room_number and RESERVATIONs.hotel_name=ROOMs.hotel_name and RESERVATIONs.hotel_location=ROOMs.hotel_location" 
        
    +" where 1=1 and HOTELs.approval=1";
   
    console.log('************************')
   const db = require('../models/index')
   const hotelModel = db['HOTEL']
   const hotel=await hotelModel.findOne({ where: {hotel_username : req.params.username}})
        console.log(hotel.hotel_name + " " + hotel.hotel_location)
    
    const customerModel = db['CUSTOMER']
    const customer = await customerModel.findAll({ where: { username: req.params.username } })
    
    const reservationModel=['RESERVATION']
    var searchQuery="SELECT RESERVATIONs.hotel_name,RESERVATIONs.hotel_location,RESERVATIONs.check_in_date,RESERVATIOns.check_out_date"+
    "inner join RESERVATIONs.hotel_name"
    
        
        //render with the data
        res.render('hotelManager', {hotel})
        
};