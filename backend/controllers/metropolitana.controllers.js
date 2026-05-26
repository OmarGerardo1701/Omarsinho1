import { Metropolitana } from "../models/metropolitana.models.js";

Metropolitana.create({
    Alumno: "Omarsinho",
    Calificacion: "10",
    Materia: "Ingles"
},
              {
    Alumno: "Bredny",
    Calificacion: "8",
    Materia: "Proyecto Integrador"
},
              {
    Alumno: "Jhosue",
    Calificacion: "7",
    Materia: "Matematicas"
},
            {
    Alumno: "Fer",
    Calificacion: "9",
    Materia: "Aplicaciones web"
})

export const test = ()=> {console.log("Alumnos agregados")}