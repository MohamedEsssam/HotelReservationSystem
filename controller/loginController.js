const path = require('path')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

module.exports = (req, res) => {

    const { username, password} = req.body;
    console.log(username + " " + password + "botato  " + req.body.selectedtypee)
        
    const User = require('./models/'+req.body.selectedtypee)

    //btroo7 lel page 2li feeha 7aaccess 2l database
    User.findOne({ where: {username} }).then(user => {
        if (user) {
            if(user.password==password) 
            {
                res.redirect('/'+type+'/'+user.username)
            }
                //redirect to home -->Password is wrong
                else {
                    res.redirect('/home')
                }
            
        }
        else{
            return res.redirect('/')
        }
    })



};



