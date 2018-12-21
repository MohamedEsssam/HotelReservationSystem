const path = require('path')

module.exports = async (req, res) => {

    console.log('************************')
   const db = require('../models/index')
  //customerModel =  require('../models').CUSTOMER
  const customerModel = db['CUSTOMER']

    await customerModel.findOne({ where: {username : req.params.username}}).then(customer => {

        console.log(customer.username + " " + customer.password)
        //render with the data
        //res.render('CustomerHomePage', {customer})
        res.redirect('/')

    })
   
};