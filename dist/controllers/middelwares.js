"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user = require("../models/user");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var middelwares = {
  //comprobar si un usuario ya se encuentra registrado
  userExist: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _user.User.findOne({
                where: {
                  email: req.body.email
                }
              });

            case 2:
              result = _context.sent;

              if (result === null) {
                next();
              } else {
                res.status(300).json({
                  success: false,
                  message: "ya existe un correo similar"
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function userExist(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }(),
  verifyBeforeAddToFavorites: function verifyBeforeAddToFavorites(req, res, next) {
    var _req$body = req.body,
        id_movie = _req$body.id_movie,
        id_user = _req$body.id_user;

    try {
      _database["default"].query("SELECT * from favoritos where movi_id = ".concat(id_movie, " and user_id = ").concat(id_user), {
        type: _database["default"].QueryTypes.SELECT
      }).then(function (resp) {
        console.log(resp, "sdsdfsdfsdfsdfsdf");

        if (!resp.length) {
          console.log(resp);
          next();
        } else {
          console.log(resp);
          res.status(200).json({
            success: false,
            message: "Ya esta Peli se Encuentra en tus Favoritos"
          });
        }
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Ya"
      });
    }
  } // verifyToken: async (req, res, next) => {
  //   jwt.verify(req.token, 'secret', (error, data) => {
  //     if(error){
  //       res.status.(403).json({
  //         error,status:403,message:error.message
  //       })
  //     }else{
  //       next()
  //     }
  //   })
  // }

};
var _default = middelwares;
exports["default"] = _default;