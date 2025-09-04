const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDB = require('./config/connectDB');
//config dotenv file
dotenv.config();
//db connection
connectDB();

//rest object
const app=express();


//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors());
 

//routes
//user routes
app.use('/api/v1/user',require('./routes/user-routes'))

//transaction routes
app.use('/api/v1/transactions',require('./routes/transaction-routes'))

//port
const PORT=8000||process.env.PORT;

//listen server 
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})




