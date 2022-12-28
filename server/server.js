import express from 'express';

import mongoose from 'mongoose';
import cors from "cors"
const PORT = 4000;

const app = express();

app.use(cors());

await mongoose.connect("mongodb+srv://jony:hazel07@expensor01.csj3sek.mongodb.net/?retryWrites=true&w=majority");

console.log("MongoDB Connected Successfull http://localhost:4000/");

app.get('/',(req,res)=>[
    res.send("hello world")
]);

app.listen(PORT,()=>{
    console.log("App is running on ");
})