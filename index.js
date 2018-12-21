const registerController = require('./controller/registrationController')
const loginController=require('./controller/loginController')
const customerPage=require('./controller/customerPageController')
const hotelOwnerPage=require('./controller/hotelOwnerPageController')
const brokerPage=require('./controller/brokerPageController')
const storeController=require('./controller/storePageController')
const homeController = require('./controller/homePageController')
const registrationValidationMiddelware=require('./middelware/registationMiddelware')
const db=require('./models/index')


const expressSession=require('express-session')
const express = require('express')
const bodyParser = require('body-parser')
//The store that is used in storing the sessions in the database in a table named sessions
const sequelizeStore=require('connect-session-sequelize')(expressSession.Store);


const app = express()
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

app.post('/store/user', registrationValidationMiddelware,storeController)


