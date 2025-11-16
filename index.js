const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xo9mqfg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
const {connectToMongoDb}=require('./connection.js');
const userRouter = require("./routes/userRoutes.js");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

// connecting our backend to mongo db 
connectToMongoDb(uri)
.then(()=>console.log('MongoDb sucessfully connected.'))
.catch(err=>console.error("could not connect to your mongoDb. have you started mongosh?",err))

//routes for crud
app.use('/api/user',userRouter);

app.listen(PORT,()=>{
    console.log("###########################################")
    console.log(`server started at: http://localhost:${PORT}`);
})
//http://localhost:8000/api/user