import { Gandhi } from "../models/gandhi.models.js";

Gandhi.create({
    Producto: "Cuaderno",
    Stock: "2",
    Precio: "25"
},
              {
    Producto: "Lapiz",
    Stock: "100",
    Precio: "10"
},
              {
    Producto: "Goma",
    Stock: "45",
    Precio: "15"
})

export const test = ()=> {console.log("Productos agregados")}