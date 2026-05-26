import {Schema, model} from "mongoose";

const esquemaAlumno = new Schema({
    Alumno : String,
    Calificacion: Number,
    Materia : String
}) //Esqueleto o campos de una tabla


export const Metropolitana = new model("Metro", esquemaAlumno)//Creacion de tabla en la base de datos