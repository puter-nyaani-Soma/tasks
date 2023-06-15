const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    time:{
        type:String,

    },
    description:{
        type:String,
    },
    finshed:{
        type: Boolean,
        default: false,
    }

},{timestamps:true});

module.exports = mongoose.model('Task',taskSchema);

