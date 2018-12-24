const path = require('path')

module.exports = (req, res) => {

  console.log('************************')
  const db = require('../models/index')
  const hotelModel = db['HOTEL']
  const { image } = req.files
  console.log(image.name)
  const { hotel_name, hotel_location, hotel_username, hotel_password, telephone, email, postal_code } = req.body
  console.log(hotel_name + " " + hotel_location)
  // console.log("***************** image : " + image)
  //image.mv(path.resolve(__dirname, '..','ui/img/', image.name), (error) => {
  image.mv(path.resolve(__dirname, '../views', image.name))
  console.log("********************************************")
  hotelModel.create({email : email, telephone: telephone, postal_code:postal_code,approval : 0, hotel_owner_username: req.params.hotel_owner_username, username: hotel_username, password: hotel_password, hotel_name: hotel_name, hotel_location: hotel_location, image: '/' + image.name }).then(hotel => {

    // you can now access the newly created task via the variable task
    req.session.username = hotel_username
    req.session.selectedType = "HOTEL"
    res.redirect('/hotel_owner/' + req.params.hotel_owner_username)
  })

};