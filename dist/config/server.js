"use strict";

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

var async = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _database["default"].sync({
              alter: true
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function async() {
    return _ref.apply(this, arguments);
  };
}(); //async()
//Static Files


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//instanciamos el objeto Express para acceder a todos sus metodos
var app = (0, _express["default"])(); //setiamos variables globales

app.set("port", process.env.PORT || "8002");
app.set('public', _path["default"].join(__dirname, 'public'));
app.use(_express["default"].urlencoded({
  extended: true
})); //Entender datos de formularios

app.use(_express["default"].json()); //Log de rquest en consola

app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());
app.use(_express["default"]["static"]("public"));
var _default = app;
exports["default"] = _default;