
const mongoose = require('mongoose');
const Task = require('../models/taskModel');

const handleError = ()=>{

}

module.exports.get_All_Tasks=async (req,res)=>{
    const tasks = await Task.find().sort({created_at:-1})
    res.status(200).json(tasks);
}

module.exports.get_Task=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json("No task for this id (invalid)");
    }
    const task=await Task.findById(id);
    if(!task){
       return res.status(404).json("No Task for this id (not found)");
    }
    res.status(200).json(task);
}


module.exports.createTask = async (req,res)=>{
    const {title,time,description,finished} = req.body
    const emptyFields = []
    if(!title){
        emptyFields.push('title')
    }
    if(!time){
        emptyFields.push('time')
    }
    if(emptyFields.length>0){
            return res.status(400).json({error:"Please enter details in all required fields",emptyFields})
    }
       
    try{
        const task =await Task.create({title,time,description,finished})
        res.status(200).json(task)


    }catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports.delete_Task = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json("No task for this id (invalid)");
    }
    const task=await Task.findOneAndDelete({_id:id});
    if(!task){
       return res.status(404).json("No Task for this id (not found)");
    }
    res.status(200).json(task);

}

module.exports.update_Task=async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json("No task for this id (invalid)");
    }
    console.log(req.body);
    const task = await Task.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true }
      );
      
    if(!task){
       return res.status(404).json("No Task for this id (not found)");
    }
    res.status(200).json(task);

}
