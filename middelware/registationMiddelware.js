const db=require('../models/index')

module.exports=(req,res,next)=>{
    db[req.selectedType].findOne({ where: { username : username } }).then(user => {
        if (user) {
                res.redirect('/register')
        }
            //redirect to home -->Password is wrong
            else {
                next()
            }
    })
}