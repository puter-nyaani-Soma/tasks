const mongoose = require('mongoose');
const {isEmail,isStrongPassword} = require('validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: 'string',
        required: [true, 'Please enter an Username'],
        unique: true,
    },
    password:{
        type: 'string',
        required:  [true, 'Please enter an Password'],
        minLength: [6, 'Please enter a Password with more than 6 letters'],
        validate:[isStrongPassword,'Please enter a strong password']
    },
    email:{
        type: 'string',
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
    }
},{timestamps:true})


// userSchema .pre('save',async function(next){
//     const salt = await bcrypt.genSalt();
//     this.password = bcrypt.hash(this.password,salt);
//     next();
// })


userSchema.statics.signup = async function (username,password,email) {
    //Validation
    if(!username || !password|| !email){
        throw Error('All Fields must be filled');
    }
    if (await this.findOne({username})){
        throw  Error("User already exists");
    }
    if(await this.findOne({email})){
        throw Error("Email already exists");
    }
    //hashing

    const salt = await bcrypt.genSalt(15);
    const hash = await bcrypt.hash(password,salt);
    const user = await this.create({username: username, email: email,password: hash})
    return user;


}


userSchema .statics.login = async function (username, password) {
    if(!username || !password){
        throw Error('All Fields must be filled');
    }
    const user = await this.findOne({username});
    if(user){
        const auth = await bcrypt.compare(password,user.password)
        if(auth){
            return user;
        }
        throw Error(`Incorrect Password`);
    }
    throw Error(`Incorrect Username`);
}
const User = mongoose.model('User',userSchema);
module.exports=User;