import express from "express";
import morgan from "morgan";
import  path from 'path';
import '../models/asociations'
import cors from 'cors'
import sequelize from "./database";
//instanciamos el objeto Express para acceder a todos sus metodos
const app = express();

//setiamos variables globales
app.set("port", process.env.PORT || "8002");
app.set('public', path.join(__dirname, 'public'));

app.use(express.urlencoded({extended: true})); //Entender datos de formularios

app.use(express.json());

//Log de rquest en consola
app.use(morgan("dev"));
app.use(cors())

async function async() {
    await sequelize.sync({alter: true })
}
async()

//Static Files
app.use(express.static("public"));

export default app;
