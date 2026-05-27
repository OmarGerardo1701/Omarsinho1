import {Schema, module} from "mongose";

const esquemaAlumno = new Schema({
    Alumno : Number,    
    Calificacion: String,
    Materia : Number,
}) //Esqueleto o campos de una tabla


export const metropolitana = new model("Metro", EsquemaAlumno)//Creacion de tabla en la base de datos