"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

/*
@author: Hans Castellar
@Description: Archivo de configuracion para la base de datos
*/
//ORM Para la Abstraccion de Consultas SQL
var DB_NAME = process.env.DB_NAME || "yaCbkgZd1K";
var DB_USER = process.env.DB_USER || "yaCbkgZd1K";
var DB_PASS = process.env.DB_PASSWORD || "ghGb7TU3bX";
var sequelize = new _sequelize.Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: process.env.DB_HOST || "remotemysql.com",
  dialect: "mysql"
});
var _default = sequelize;
exports["default"] = _default;