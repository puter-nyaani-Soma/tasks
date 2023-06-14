const express = require('express');
const router = express.Router();
const Task=require('../models/taskModel');
const taskController = require('../controllers/taskController');

router.get('/',taskController.get_All_Tasks);



router.get('/:id',taskController.get_Task);

router.post('/',taskController.createTask);
    
router.delete('/:id',taskController.delete_Task);
router.patch('/:id',taskController.update_Task);

module.exports = router