const path = require('path')
module.exports = (req, res) => {
    
    console.log(req.session.registrationErrors)
    const { username, password,accountType } = req.body;
  
    //res.render('register')
    res.render('RegistrationForm',{
        //flashing the errors to the next request only
        errors:req.flash('registrationErrors')
    })
};