//importar la variables de entorno
require('dotenv').config()
const express = require('express')

const server = express();


server.use(express.json());

 
//endpoint:url a la que se hace referencia
server.get("/", (request, response) => {
    response.send("Hola esta es API V1.0")
})

let platillos = [
    {
        nombre: 'Tacos', precio: 50
    },
    {
        nombre: 'Mole', precio: 100
    }
]
//verbos o metodos http
/**
 * GET: Obtener datos
 * POST: Crear o realizar un proceso en el servidor
 * PUT: Actualizar datos
 * DELETE: Elilminar datos
 * 
 */
server.get("/platillos", (request, response) => {
    response.json(
        {
            data: platillos,
            count: platillos.length,
            mensaje: "Se obtuvo los platillos de manera exitosa"
        }
    )
})

server.post("/platillos", (request, response) => {
    const { nombre, precio } = request.body
    const platillo = {
        nombre: nombre,
        precio: precio
    };
    platillos.push(platillo);

    response.json(
        {
            data: platillos,
            count: platillos.length,
            mensaje: "Se agregaron los platillos de manera exitosa"
        }
    )
})

server.listen(process.env.PORT, () => {
    console.log("Servidor a iniciado en el puerto ", process.env.PORT);
})


