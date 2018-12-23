const path = require('path')
module.exports = (req, res) => {
    const { username, password,accountType } = req.body;
  
   res.sendFile(path.resolve(__dirname,"../views/RegistrationForm.html"))
    //res.render('register')
   // res.sendFile(path.resolve(__dirname, '../views/RegistrationForm.html'))
    
};