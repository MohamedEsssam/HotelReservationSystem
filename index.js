const registerController = require('./controller/registrationController')
const loginController=require('./controller/loginController')
// const HotelOwnerPage=require('./controller/HotelOwnerPage')
// const BrokerOwnerPage=require('./controller/BrokerOwnerPage')
// const UserOwnerPage=require('./controller/UserOwnerPage')

const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/' ,  registerController);

app.post('/home',loginController);

app.listen(3000)
