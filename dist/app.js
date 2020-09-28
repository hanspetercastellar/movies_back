"use strict";

var _server = _interopRequireDefault(require("./config/server"));

var _routes = _interopRequireDefault(require("./routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
@author: Hans Castellar
@Descripcion: En este documento se declaran todas las rutas de la API 

*/
//Dotenv sirve para usar las variables de entorno en toda nuestro proyecto
require("dotenv").config();

_server["default"].use(_routes["default"]);

_server["default"].listen(_server["default"].get("port"), function () {
  console.log("Sevidor Escuchando en el puerto ".concat(_server["default"].get("port")));
  console.log(process.env.DB_PASSWORD);
});