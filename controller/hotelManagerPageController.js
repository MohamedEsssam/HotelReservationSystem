//check in for guests
//blacklist customers if didnt check in
//hotel info
//pay for broker
const path = require('path')

module.exports = async (req, res) => {

    console.log('************************')
   const db = require('../models/index')
   const hotelModel = db['HOTEL']
   
    const hotel=await hotelModel.findOne({ where: {hotel_username : req.params.username}})
        console.log(hotel.hotel_name + " " + hotel.hotel_location)
        
        //render with the data
        res.render('hotelManagerPage', {hotel})
        
};