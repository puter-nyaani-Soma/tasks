const express = require('express');
const router = express.Router();
const Task=require('../models/taskModel');
const taskController = require('../controllers/taskController');

router.get('/',taskController.get_All_Tasks);



router.get('/:id',taskController.get_Task);

router.post('/',taskController.createTask);
    
router.delete('/:id',(req,res)=>{
    res.send('delete  task')
})
router.patch('/:id',(req,res)=>{
    res.send('udpate  task')
})

module.exports = router