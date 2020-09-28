"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = require("../models/user");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var AuthController = {
  login: function () {
    var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, user_email, user_password, exists, user, isMatch, token;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, user_email = _req$body.user_email, user_password = _req$body.user_password;
              console.log(req.body);
              _context.next = 4;
              return _user.User.findOne({
                where: {
                  email: user_email //password:pass

                }
              });

            case 4:
              exists = _context.sent;
              console.log(exists);

              if (!exists) {
                _context.next = 14;
                break;
              }

              _context.next = 9;
              return _user.User.findByPk(exists.id_usuario);

            case 9:
              user = _context.sent;
              isMatch = AuthController.matchPass(user.getDataValue('password'), user_password);

              if (isMatch) {
                token = _jsonwebtoken["default"].sign({
                  id: user._id
                }, 'secret', {
                  expiresIn: 60 * 60 * 24
                });
                res.json({
                  auth: true,
                  user: user,
                  token: token,
                  status: 200
                });
              } else {
                res.json({
                  auth: false
                });
              }

              _context.next = 15;
              break;

            case 14:
              res.status(404).json({
                status: 404,
                message: 'El usuario no existe'
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function login(_x, _x2) {
      return _login.apply(this, arguments);
    }

    return login;
  }(),
  matchPass: function () {
    var _matchPass = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(dbPass, reqPass) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _bcryptjs["default"].compare(dbPass, reqPass);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function matchPass(_x3, _x4) {
      return _matchPass.apply(this, arguments);
    }

    return matchPass;
  }()
};
exports.AuthController = AuthController;