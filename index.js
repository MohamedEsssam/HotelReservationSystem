const db=require('./models/index')
const hotel=db['HOTEL']
const broker=db['BROKER']
const customer_hotel_rate=db['CUSTOMER_HOTEL_RATE']

console.log(customer_hotel_rate.getTableName())
customer_hotel_rate.findAll().then((result)=>{
    console.log(result)
})
