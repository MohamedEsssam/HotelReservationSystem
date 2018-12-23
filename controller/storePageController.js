const path = require('path')

module.exports = (req, res) => {

    console.log('************************')
   const db = require('../models/index')
   
<<<<<<< HEAD:controller/storeUserController.js
   const { username,name,ssn,email,telephone,password,credit} = req.body;
  
   console.log(username+ ' ' + name+ ' ' + ssn+ ' ' + email+ ' ' + telephone+ ' ' + password + ' ' + credit + ' '+ req.body.selectedType)
=======
   const { username,name,ssn,email,phone,password,credit} = req.body;
   console.log("GSDGSDG");
   console.log(username+ ' ' + name+ ' ' + ssn+ ' ' + email+ ' ' + phone+ ' ' + password + ' ' + credit)
>>>>>>> 27c336ed27c9dde945780a3f5b42abc611b42dbe:controller/storePageController.js
   
   const UserModel = db[req.body.selectedType]

   UserModel.create(req.body).then(customer => {
    // you can now access the newly created task via the variable task
    res.redirect('/')
  })

   
};