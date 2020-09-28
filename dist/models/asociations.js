"use strict";

var _movi = require("./movi");

var _user = require("./user");

var _favoritos = require("./favoritos");

var _movi_detail = require("./movi_detail");

_movi.Movi.belongsToMany(_user.User, {
  through: _favoritos.Favoritos
});

_user.User.belongsToMany(_movi.Movi, {
  through: _favoritos.Favoritos
});

_movi.Movi.hasOne(_movi_detail.MoviDetail, {
  foreignKey: "movi_id"
});

_movi_detail.MoviDetail.belongsTo(_movi.Movi, {
  foreignKey: "movi_id"
});