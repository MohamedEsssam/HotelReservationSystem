const registerController = require('./controller/registrationController')
const loginController=require('./controller/loginController')
const customerPage=require('./controller/customerPageController')
const hotelOwnerPage=require('./controller/hotelOwnerPageController')
const brokerPage=require('./controller/brokerPageController')
const hotelManagerPage=require('./controller/hotelManagerPageController')
const storeController=require('./controller/storeUserController')
const homeController = require('./controller/homePageController')
const hotelInfoController = require('./controller/hotelInfoPageController')

const approveReservationController = require('./controller/approveReservationPageController')
const registrationValidationMiddelware=require('./middelware/registationMiddelware')

const db=require('./models/index')


const authenticateLoggedIn=require('./middelware/authenticateLoggedIn')
const expressSession=require('express-session')
const express = require('express')
const expressEdge = require('express-edge')
const bodyParser = require('body-parser')
const path = require('path')
const connectFlash=require('connect-flash')
//The store that is used in storing the sessions in the database in a table named sessions
const sequelizeStore=require('connect-session-sequelize')(expressSession.Store);


const app = express()

//adds flash function to the request object
app.use(connectFlash());


//initialize the store object
const myStore=new sequelizeStore({
    db:db.sequelize,
    checkExpirationInterval:10*60*1000,//time to remove the expired session's records from the database
    expiration:30*60*1000//the time for the sessions to expire
});
app.use(expressSession({
    secret:"secret",
    store:myStore
}))
//sync the database to create the session's table
myStore.sync()

app.listen(4000)

app.set('views', path.resolve(__dirname,'views'))
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
//hotel home page
app.get('/hotelManager/:username', hotelManagerPage)

//login page
app.post('/login',loginController);

app.get('/', homeController)

app.post('/store/user', storeController)


app.get('/hotelInfo/:hotel_name/:hotel_location', hotelInfoController)

//app.post('/approveReservation', approveReservationController)

app.listen(9000)
