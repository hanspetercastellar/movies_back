"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user = require("../models/user");

var _database = _interopRequireDefault(require("../config/database"));

var middelwares = {
  //comprobar si un usuario ya se encuentra registrado
  userExist: function () {
    var _userExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var result;
      return _regenerator["default"].wrap(function _callee$(_context) {
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

    function userExist(_x, _x2, _x3) {
      return _userExist.apply(this, arguments);
    }

    return userExist;
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