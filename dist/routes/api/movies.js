"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _movie = require("../../controllers/movie.controller");

var _middelwares = _interopRequireDefault(require("../../controllers/middelwares"));

var router = _express["default"].Router();

router.get("/list", _movie.MovieController.list);
router.post("/detail", _movie.MovieController.detail);
router.post("/search", _movie.MovieController.listByName);
router.post("/favorites/lists", _movie.MovieController.listFavorite);
router.post("/favorites/store", _middelwares["default"].verifyBeforeAddToFavorites, _movie.MovieController.addToFavorite);
var _default = router;
exports["default"] = _default;