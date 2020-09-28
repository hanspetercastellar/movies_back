"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthController = void 0;

var _user = require("../models/user");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AuthController = {
  login: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var _req$body, user_email, user_password, exists, user, isMatch, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
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

    return function login(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  matchPass: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dbPass, reqPass) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
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

    return function matchPass(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }()
};
exports.AuthController = AuthController;