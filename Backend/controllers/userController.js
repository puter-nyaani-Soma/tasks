const User = require('../models/userModel');


module.exports.login = async (req,res) => {


    


}
module.exports.signup=async (req,res) => {
    const {username,password,email} = req.body
    
    res.send("signup")

}