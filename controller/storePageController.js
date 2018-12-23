const path = require('path')

module.exports = (req, res) => {

    console.log('************************')
   const db = require('../models/index')
   
   const { username,name,ssn,email,phone,password,credit} = req.body;
   console.log("GSDGSDG");
   console.log(username+ ' ' + name+ ' ' + ssn+ ' ' + email+ ' ' + phone+ ' ' + password + ' ' + credit)
   
   const UserModel = db[req.body.selectedType]

   UserModel.create(req.body).then(customer => {
    // you can now access the newly created task via the variable task
    res.redirect('/')
  })

   
};