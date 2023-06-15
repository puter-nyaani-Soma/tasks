const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    time:{
        type:String,
        required:true,

    },
    description:{
        type:String,
    },
    finished:{
        type: Boolean,
        default: false,
    },
   
},{timestamps:true});

module.exports = mongoose.model('Task',taskSchema);

