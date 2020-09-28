"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

require("../models/asociations");

var _cors = _interopRequireDefault(require("cors"));

var _database = _interopRequireDefault(require("./database"));

//instanciamos el objeto Express para acceder a todos sus metodos
var app = (0, _express["default"])(); //setiamos variables globales

app.set("port", process.env.PORT || "8002");
app.set('public', _path["default"].join(__dirname, 'public'));
app.use(_express["default"].urlencoded({
  extended: true
})); //Entender datos de formularios

app.use(_express["default"].json()); //Log de rquest en consola

app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])()); //Static Files

app.use(_express["default"]["static"]("public"));
var _default = app;
exports["default"] = _default;