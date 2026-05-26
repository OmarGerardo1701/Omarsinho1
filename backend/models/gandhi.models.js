import {Schema, model} from "mongoose";

const esquemaProducto = new Schema({
    Producto : String,
    Stock : Number,
    Precio : Number
}) //Esqueleto o campos de una tabla


export const Gandhi = new model("Gandhi", esquemaProducto)//Creacion de tabla en la base de datos