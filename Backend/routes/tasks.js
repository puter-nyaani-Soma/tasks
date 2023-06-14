const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('all tasks')
})

router.get('/:id',(req,res)=>{
res.send("single task")
})

router.post('/',(req,res)=>{
    res.send('post new task')
})
router.delete('/:id',(req,res)=>{
    res.send('delete  task')
})
router.patch('/:id',(req,res)=>{
    res.send('udpate  task')
})

module.exports = router