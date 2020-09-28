"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("./api/users"));

var _movies = _interopRequireDefault(require("./api/movies"));

var _auth = _interopRequireDefault(require("./api/auth"));

var _middelwares = _interopRequireDefault(require("../controllers/middelwares"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
@author: Hans Castellar
@Descripcion: En este documento se declaran todas las rutas de la API

*/
var router = _express["default"].Router();

router.use("/api/user", _middelwares["default"].userExist, _users["default"]);
router.use("/api/movie", _movies["default"]);
router.use("/api/auth", _auth["default"]);
var _default = router;
exports["default"] = _default;