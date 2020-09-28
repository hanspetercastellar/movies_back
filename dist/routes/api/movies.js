"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _movie = require("../../controllers/movie.controller");

var _middelwares = _interopRequireDefault(require("../../controllers/middelwares"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var movieC = new _movie.MovieController();
router.get("/list", movieC.list);
router.post("/detail", movieC.detail);
router.post("/search", movieC.listByName);
router.post("/favorites/lists", movieC.listFavorite);
router.post("/favorites/store", _middelwares["default"].verifyBeforeAddToFavorites, movieC.addToFavorite);
var _default = router;
exports["default"] = _default;