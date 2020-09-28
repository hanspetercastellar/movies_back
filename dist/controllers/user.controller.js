"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _user = require("../models/user");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UserController = {
  store: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var _req$body, nickname, email, password, salt, pass, createUser;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, nickname = _req$body.nickname, email = _req$body.email, password = _req$body.password;
              _context.prev = 1;
              _context.next = 4;
              return _bcryptjs["default"].genSalt(10);

            case 4:
              salt = _context.sent;
              _context.next = 7;
              return _bcryptjs["default"].hash(password, salt);

            case 7:
              pass = _context.sent;
              _context.next = 10;
              return _user.User.create({
                nickname: nickname,
                email: email,
                password: pass
              });

            case 10:
              createUser = _context.sent;
              _context.next = 13;
              return console.log(createUser);

            case 13:
              res.status(200).json({
                success: true,
                message: "Usuario creado"
              });
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](1);
              res.status(500).json({
                success: false,
                message: "error",
                error: _context.t0
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 16]]);
    }));

    return function store(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  encryPassword: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(password) {
      var salt;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _bcryptjs["default"].genSalt(10);

            case 2:
              salt = _context2.sent;
              _context2.next = 5;
              return _bcryptjs["default"].hash(password, salt);

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function encryPassword(_x3) {
      return _ref2.apply(this, arguments);
    };
  }()
};
exports.UserController = UserController;