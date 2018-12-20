const path = require('path')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

module.exports = (req, res) => {

    const { username, password } = req.body;
    const userType = req.body.selectedType;
    const db = require('../models/index')
    const UserModel = db[userType]

    //btroo7 lel page 2li feeha 7aaccess 2l database
    UserModel.findOne({ where: { username : username, password:password } }).then(user => {
        if (user) {
                res.redirect('/' + userType + '/' + user.username)
        }
            //redirect to home -->Password is wrong
            else {
                res.redirect('/')
            }
    })
};



