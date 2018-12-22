const path = require('path')
module.exports = (req, res) => {
    const { username, password,accountType } = req.body;
  
   res.sendFile(path.resolve(__dirname,"../views/RegistrationForm.html"))
    //res.render('register')
<<<<<<< HEAD
    // res.render('RegistrationForm',{
    //     //flashing the errors to the next request only
    //     errors:req.flash('registrationErrors')
    // })
=======
    res.sendFile(path.resolve(__dirname, '../views/RegistrationForm.html'))
    
>>>>>>> parent of 3594500... added flash messages to display errors
};