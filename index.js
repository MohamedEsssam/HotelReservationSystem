const registerController = require('./controller/registrationController')
const loginController=require('./controller/loginController')
const customerPage=require('./controller/customerPageController')
const hotelOwnerPage=require('./controller/hotelOwnerPageController')
const brokerPage=require('./controller/brokerPageController')
const storeController=require('./controller/storePageController')
const homeController = require('./controller/homePageController')
const hotelInfoController = require('./controller/hotelInfoPageController')
const approveReservationController = require('./controller/approveReservationPageController')


const express = require('express')
const expressEdge = require('express-edge')
const bodyParser = require('body-parser')
const path = require('path')
//const db=require('./models/index')

const app = express()

app.set('views', path.resolve(__dirname) + '\\views')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressEdge)

//registration page
app.get('/register' ,  registerController);

//Customer home page
app.get('/customer/:username', customerPage)
//hotelOwner home page
app.get('/hotel_owner/:username', hotelOwnerPage)
//broker home page(zmeeri)
app.get('/broker/:username', brokerPage)

//login page
app.post('/login',loginController);

app.get('/', homeController)

app.post('/store/user', storeController)

app.get('/hotelInfo/:hotel_name/:hotel_location', hotelInfoController)

//app.post('/approveReservation', approveReservationController)

app.listen(9000)
