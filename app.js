import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./data/database.js";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

 export const app = express();

 config({
     path: "./data/config.env"
 })

//The Use of middleware
app.use(express.json())  //since we are using post man and not getting any form data
app.use(cookieParser())
app.use(cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET","POST","PUT","DELETE"],
      credentials:true,
}))
//Using Routes
app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouter)





app.get("/",(req,res)=>{
    res.send("Nice Working")
})




//using Error Middleware
  
app.use(errorMiddleware)

