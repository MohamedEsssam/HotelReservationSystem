const db=require('../models/index')

module.exports=(req,res,next)=>{
<<<<<<< HEAD
    db[req.body.selectedType].findOne({ where: { username : req.body.username } }).then(user => {
=======
    const {username} = req.body
    db[req.body.selectedType].findOne({ where: { username : username } }).then(user => {
>>>>>>> 0eb0a5147bc1fb373bb93b2b866896f0fe7d2836
        if (user) {
                res.redirect('/register')
        }
            //redirect to home -->Password is wrong
            else {
                next()
            }
    })
}