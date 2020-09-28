"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = require("../../controllers/user.controller");

var router = _express["default"].Router();

router.post("/store", _user.UserController.store);
var _default = router;
exports["default"] = _default;