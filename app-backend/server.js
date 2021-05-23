import express from "express";
import mongoose  from "mongoose";
import cors from "cors";


//App config

const app = express();
const port = process.env.PORT||5001;
const connetion_Url = "mongodb+srv://admin-Tzuriel:Qa123456@cluster0.nlmek.mongodb.net/Vapp?retryWrites=true&w=majority";
//Middlewares

// DB config
mongoose.connect(connetion_Url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("mongoDB Connected... "));


//API Endpoints
app.get("/",(req,res)=> res.status(200).send("Hello there"));

//Listener
app.listen(port, () => console.log("server started on port "+port));