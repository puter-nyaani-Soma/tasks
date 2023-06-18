const mongoose = require('mongoose');
const {isEmail} = require('validator');
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
    },
    email:{
        type: 'string',
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
    }
},{timestamps:true})

userSchema .pre('save',async function(next){
    const salt = await brcypt.genSalt();
    this.password = brcypt.hash(this.password,salt);
    next();
})

userSchema .statics.login = async function (username, password) {
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