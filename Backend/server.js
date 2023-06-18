require('dotenv').config();
const express= require('express');
const mongoose = require('mongoose');
const app = express();

//import routes
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/tasks');

//middle wares
app.use((req, res, next) => {
    console.log(req.path,req.method)
    next();
})
app.use(express.json())

//routes

app.use('/api/tasks',taskRoutes)
app.use('/api/users',userRoutes)
app.get('/',(req,res)=>{
    res.send("hi")
})

//connenction

mongoose.connect(process.env.MONGO_URI)
.then(
    //listen 
    
    app.listen(process.env.PORT,() => {
        console.log(`listening on port ${process.env.PORT}`);
    })
)
.catch((error)=>{
    console.log(`error: ${error}`)
})
//mongoose.connect('mongodb://127.0.0.1:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true })