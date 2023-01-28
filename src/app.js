//importamos el módulo de express
import  express from "express";
//importamos el método pool del archivo db.js
import { pool } from "./db.js";
//importamos la const de PORT del archivo config.js
import { PORT } from "./config.js";

const app = express()

//ruta inicial del localhost/3000
app.get('/', async (req, res) => {
    const [rows] = await pool.query(`select * from user`)
    res.json(rows)
})

//ruta /pin, cuando ingresemos a el nos devolverá la consulta sql
//las funciones que requieren datos a una api o bd son async
app.get('/pin', async(req, res) => {
    //query permite hacer consultas sql
    const [result] = await pool.query(`select id, name from user`)
    console.log(result)
    //hacemos que el servidor nos devuelva la consulta sql
    res.json(result)
})

//cuando desplegamos nuestra app a un servicio de hosting
//los servicios nos dan un número de puerto
app.listen(PORT)
console.log('Server on port 3000', PORT)