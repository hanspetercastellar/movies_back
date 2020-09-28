"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieController = void 0;

require("../models/user");

var _movi = require("../models/movi");

var _movi_detail = require("../models/movi_detail");

var _favoritos = require("../models/favoritos");

var _express = require("express");

var _database = _interopRequireDefault(require("../config/database"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovieController = /*#__PURE__*/function () {
  function MovieController() {
    _classCallCheck(this, MovieController);
  }

  _createClass(MovieController, [{
    key: "list",
    value: function () {
      var _list = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
    }() //Detalle de una pelicula

  }, {
    key: "detail",
    value: function () {
      var _detail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var id_movie, query;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
    }() //buscar Por nombre: retorna una lista de peliculas

  }, {
    key: "listByName",
    value: function () {
      var _listByName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var title_movie, query;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                title_movie = req.body.title_movie;
                _context3.next = 3;
                return _movi.Movi.findAll({
                  where: {
                    nombre: _defineProperty({}, _sequelize.Op.substring, title_movie)
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
    }() //Agregar peliculas a favoritos

  }, {
    key: "addToFavorite",
    value: function () {
      var _addToFavorite = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var _req$body, id_movie, id_user, query;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
    }()
  }, {
    key: "listFavorite",
    value: function () {
      var _listFavorite = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var id_user, sql, query;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
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
  }]);

  return MovieController;
}();

exports.MovieController = MovieController;