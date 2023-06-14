const { response } = require('express');
const mongoose = require('mongoose');
const Task = require('../models/taskModel');

module.exports.get_All_Tasks=async (req,res)=>{
    const tasks = await Task.find().sort({created_at:-1})
    res.status(200).json({tasks});
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
    res.status(200).json({task});
}


module.exports.createTask = async (req,res)=>{
    const {title,time,description,finished} = req.body
    try{
        const task =await Task.create({title,time,description,finished})
        res.status(200).json(task)


    }catch(e){
        res.status(400).json({error:e.message})
    }
}