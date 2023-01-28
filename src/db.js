//importamos createPool que es un método del módulo mysql2
//este nos permite conectarnos a una base de datos
import { createPool } from 'mysql2/promise'
//importamos las const que exportamos con los datos de respaldo de la db
import { 
    DB_HOST,
    DB_NAME,
    DB_PORT,
    DB_PASSWORD,
    DB_USER
} from './config.js'

export const pool = createPool({
    //escribimos estos datos, que son los requeridos para 
    //conectarnos nuestra bd
    //reemplamos las const que importamos en los datos de la db
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT, 
    database: DB_NAME
})
