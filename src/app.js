/*
@author: Hans Castellar
@Descripcion: En este documento se declaran todas las rutas de la API 

*/

//Dotenv sirve para usar las variables de entorno en toda nuestro proyecto
require("dotenv").config();

import app from "./config/server";
import routes from "./routes/routes";

app.use(routes);
app.listen(app.get("port"), () => {
  console.log(`Sevidor Escuchando en el puerto ${app.get("port")}`);
  console.log(process.env.DB_PASSWORD);
});
