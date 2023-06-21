const User = require('../models/userModel');
const jwt = require('jsonwebtoken')
const createToken = (_id) =>{
  return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'});


}

module.exports.login = async (req,res) => {
    const {username, password} = req.body;
    try{
      const user = await User.login(username,password);
      //create jwt token
      const token = createToken(user._id);
      res.status(200).json({username,token})
    }catch(error){
      res.status(400).json({error: error.message});
    }


    


}
module.exports.signup=async (req,res) => {
    const {username,password,email} = req.body
    
    try {
      const user= await User.signup(username,password,email)
      //creating jwt 
      const token = createToken(user._id)
     res.status(200).json({username,token})
   } catch (error) {
    res.status(400).json({error: error.message})
    
   }
    
    

}