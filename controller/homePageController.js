const path = require('path')
module.exports = (req, res) => {
    const { username, password,accountType } = req.body;
  
    //res.render('register')
    res.sendFile(path.resolve(__dirname, '../Login.html'))
    
};