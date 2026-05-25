import {Schema, model} from "mongoose";

const esquemaEmpleados = new Schema({
    Numero : Number,
    Nombre : String,
    Sueldo : Number
}) //Esqueleto o campos de una tabla


export const Nissan = new model("Nissan", esquemaEmpleados)//Creacion de tabla en la base de datos