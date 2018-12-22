const path = require('path')
const sequelize = require('sequelize')

const bodyParser = require('body-parser')

module.exports = (req, res) => {

    const { username, password } = req.body;
    const userType = req.body.selectedType;
    const db = require('../models/index')
    //const UserModel = sequelize['import'](path.join(__dirname, userType));
    //console.log(UserModel)
    const UserModel = db[userType]
       
    //btroo7 lel page 2li feeha 7aaccess 2l database
    UserModel.findOne({ where: { username : username, password:password } }).then(user => {
       if (user) {
                req.session.username=user.username
                console.log(req.session)
                res.redirect('/' + userType + '/' + user.username)
        }
            // redirect to home -->Password is wrong
            // redirect to home -->Password is wrong
        else {
            console.log("erreoeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee \n")
            req.flash('loginError','Incorrect username or password')
            res.redirect('/')
        }
    })
};



