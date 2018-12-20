const registerController = require('./controller/registrationController')
const loginController=require('./controller/loginController')
const customerPage=require('./controller/customerPageController')
const hotelOwnerPage=require('./controller/hotelOwnerPageController')
const brokerPage=require('./controller/brokerPageController')
const storeController=require('./controller/storePageController')
const homeController = require('./controller/homePageController')


const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//registration page
app.get('/register' ,  registerController);

//Customer home page
app.get('/customer/:username', customerPage)
//hotelOwner home page
app.get('/hotelOwner/:username', hotelOwnerPage)
//broker home page(zmeeri)
app.get('/broker/:username', brokerPage)

//login page
app.post('/login',loginController);

app.get('/', homeController)

app.post('/store/user', storeController)

app.listen(9000)
