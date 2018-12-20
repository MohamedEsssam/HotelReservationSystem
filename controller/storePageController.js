const path = require('path')

module.exports = async (req, res) => {

    console.log('************************')
   const db = require('../models/index')
   
   const { username,Fname,Lname,ssn,email,phone,password,credit} = req.body;
   
   const UserModel = db[req.body.selectedType]

   //UserModel.create({ name: 'ddd', username: 'dragon', passwor:'123'}).then(customer => {
    // you can now access the newly created task via the variable task
    res.redirect('/')
  //})

   
};