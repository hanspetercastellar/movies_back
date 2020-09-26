/*
@author: Hans Castellar
@Description: Archivo de configuracion para la base de datos
*/

//ORM Para la Abstraccion de Consultas SQL
import {Sequelize} from "sequelize";


const DB_NAME = process.env.DB_NAME || "yaCbkgZd1K";
const DB_USER = process.env.DB_USER || "yaCbkgZd1K";
const DB_PASS = process.env.DB_PASSWORD || "ghGb7TU3bX";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: process.env.DB_HOST || "remotemysql.com",
  dialect: "mysql",
});



export default sequelize;
