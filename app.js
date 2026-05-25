import mongoose from "mongoose"; //Libreria para conectarse con mongo DB//
import dotenv from "dotenv"; //Libreria para poder llamar mi archivo . env//
import express from "express"; //Libreria para crear servidores//
import cors from "cors"; //Libreria para seguridad en el server //
import { test } from "./backend/controllers/nissan.controllers.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log("Funciono la base de datos"))

.catch((error) => console.log("No jalo esta mmd"))

//creando un servidor local//
const app = express();
app.use (cors());

app.listen(4000, ()=> console.log("Funciona el servidor"))