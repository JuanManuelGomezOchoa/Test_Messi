import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno_controller.js";

dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("Si esta funcionando")
})
.catch((error)=>{
    console.log("No funciona la conexion", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha el servidor")
})

test()