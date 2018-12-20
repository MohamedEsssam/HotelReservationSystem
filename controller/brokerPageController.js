const path = require('path')

module.exports = async (req, res) => {

    console.log('************************')
   const db = require('../models/index')
   const BrokerModel = db['BROKER']

//    //btroo7 lel page 2li feeha 7aaccess 2l database
//    UserModel.create({ name: 'dragon', username: 'dragon', passwor:'123'}).then(customer => {
//     // you can now access the newly created task via the variable task
//     res.redirect('/')
//   })

    BrokerModel.findOne({ where: {username : req.params.username}}).then(broker => {

        console.log(broker.username + " " + broker.password)
        res.redirect('/')

    })
   
};