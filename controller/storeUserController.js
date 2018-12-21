const path = require('path')

module.exports = (req, res) => {

    console.log('************************')
   const db = require('../models/index')
   
   const { username,name,ssn,email,phone,password,credit} = req.body;
  
   console.log(username+ ' ' + name+ ' ' + ssn+ ' ' + email+ ' ' + phone+ ' ' + password + ' ' + credit)
   
   const UserModel = db[req.body.selectedType]

   UserModel.create(req.body).then((error,customer) => {
    if(error){
      console.log(error)
      const registrationErrors=Object.keys(error.errors).map(key=>error.errors[key].message)
      //saving the errors for the next request only
      req.flash('registrationErrors',registrationErrors)
      return res.redirect('/register')
    }

    // you can now access the newly created task via the variable task
    res.redirect('/')
  })

   
};