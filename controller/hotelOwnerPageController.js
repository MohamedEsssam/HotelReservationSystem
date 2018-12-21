const path = require('path')

module.exports = async (req, res) => {

    console.log('************************')
  const db = require('../models/index')
   const HotelOwnerModel = db['HOTEL_OWNER']

   await HotelOwnerModel.findOne({ where: {username : req.params.username}}).then(hotelOwner => {

        console.log(hotelOwner.username + " " + hotelOwner.password)
        //render with the data
        //res.render('HotelOwnerHomePage', {hotelOwner})
        res.redirect('/')

    })
   
};