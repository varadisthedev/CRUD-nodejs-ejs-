const express = require("express");
const PORT=8000;

const {connectToMongoDb}=require('./connection.js');
const userRouter = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());

// connecting our backend to mongo db 
connectToMongoDb('mongodb://127.0.0.1:27017/CRUD')
.then(()=>console.log('MongoDb sucessfully connected.'))
.catch(err=>console.error("could not connect to your mongoDb. have you started mongosh?",err))

//routes for crud
app.use('/api/user',userRouter);

app.listen(PORT,()=>{
    console.log("###########################################")
    console.log(`server started at: http://localhost:${PORT}`);
})