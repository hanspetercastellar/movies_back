"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieController = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("../models/user");

var _movi = require("../models/movi");

var _movi_detail = require("../models/movi_detail");

var _favoritos = require("../models/favoritos");

var _express = require("express");

var _database = _interopRequireDefault(require("../config/database"));

var _sequelize = require("sequelize");

/*
@author: Hans Castellar
@Descripcion: Este documento contiene las funciones controladoras respectivas para cada endpoin de la entidad movi
*/
var MovieController = {
  list: function () {
    var _list = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _movi.Movi.findAll({
                include: _movi_detail.MoviDetail
              });

            case 3:
              data = _context.sent;
              res.status(200).json({
                success: true,
                data: data,
                message: "listado"
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).json({
                success: false,
                data: null,
                message: "listado",
                error: _context.t0
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function list(_x, _x2) {
      return _list.apply(this, arguments);
    }

    return list;
  }(),
  //Detalle de una pelicula
  detail: function () {
    var _detail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var id_movie, query;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id_movie = req.body.id_movie;
              console.log(id_movie);
              _context2.next = 4;
              return _movi_detail.MoviDetail.findOne({
                where: {
                  movi_id: 1
                }
              });

            case 4:
              query = _context2.sent;

              if (query === null) {
                res.status(200).json({
                  success: true,
                  message: "nada para listar",
                  data: null
                });
              } else {
                res.status(200).json({
                  success: true,
                  message: "recurso encontrado",
                  data: query
                });
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function detail(_x3, _x4) {
      return _detail.apply(this, arguments);
    }

    return detail;
  }(),
  //buscar Por nombre: retorna una lista de peliculas
  listByName: function () {
    var _listByName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var title_movie, query;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              title_movie = req.body.title_movie;
              _context3.next = 3;
              return _movi.Movi.findAll({
                where: {
                  nombre: (0, _defineProperty2["default"])({}, _sequelize.Op.substring, title_movie)
                },
                include: _movi_detail.MoviDetail
              });

            case 3:
              query = _context3.sent;

              if (query === null) {
                res.status(200).json({
                  success: false,
                  message: "nada para listar",
                  data: null
                });
              } else {
                res.status(200).json({
                  success: true,
                  message: "listado",
                  data: query
                });
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function listByName(_x5, _x6) {
      return _listByName.apply(this, arguments);
    }

    return listByName;
  }(),
  //Agregar peliculas a favoritos
  addToFavorite: function () {
    var _addToFavorite = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _req$body, id_movie, id_user, query;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(req.body);
              _req$body = req.body, id_movie = _req$body.id_movie, id_user = _req$body.id_user;
              _context4.prev = 2;
              _context4.next = 5;
              return _favoritos.Favoritos.create({
                movi_id: id_movie,
                user_id: id_user
              });

            case 5:
              query = _context4.sent;

              if (query !== null) {
                res.status(200).json({
                  success: true,
                  status: 200,
                  message: 'Añadido a Favoritos'
                });
              } else {
                res.status(200).json({
                  success: false,
                  status: 200,
                  message: 'Error al Guardar los datos'
                });
              }

              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](2);
              res.status(500).json({
                success: true,
                status: 500,
                message: 'Añadido a Favoritos'
              });

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 9]]);
    }));

    function addToFavorite(_x7, _x8) {
      return _addToFavorite.apply(this, arguments);
    }

    return addToFavorite;
  }(),
  listFavorite: function () {
    var _listFavorite = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var id_user, sql, query;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id_user = req.body.id_user;
              _context5.prev = 1;
              sql = "select mv.id_movi id_movi,mv.duracion duracion, mv.nombre as nombre, mv.imagen imagen\n                                from favoritos as fv\n                                         join movi mv on fv.movi_id = mv.id_movi\n                                where fv.user_id = ".concat(id_user);
              _context5.next = 5;
              return _database["default"].query(sql);

            case 5:
              query = _context5.sent;
              console.log(query);
              console.log(id_user);
              res.status(200).json({
                success: true,
                data: query,
                message: 'lista'
              });
              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](1);
              res.status(500).json({
                success: false,
                error: _context5.t0
              });

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 11]]);
    }));

    function listFavorite(_x9, _x10) {
      return _listFavorite.apply(this, arguments);
    }

    return listFavorite;
  }()
};
exports.MovieController = MovieController;