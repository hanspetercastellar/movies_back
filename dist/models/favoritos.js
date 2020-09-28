"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Favoritos = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

var _movi = require("./movi");

var _user = require("./user");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Favoritos = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Favoritos, _Model);

  var _super = _createSuper(Favoritos);

  function Favoritos() {
    (0, _classCallCheck2["default"])(this, Favoritos);
    return _super.apply(this, arguments);
  }

  return Favoritos;
}(_sequelize.Model);

exports.Favoritos = Favoritos;
Favoritos.init({
  id_favorito: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  movi_id: {
    type: _sequelize.DataTypes.INTEGER(5),
    references: {
      model: _movi.Movi,
      key: "id_movi"
    },
    allowNull: false
  },
  user_id: {
    type: _sequelize.DataTypes.INTEGER(5),
    references: {
      model: _user.User,
      key: "id_usuario"
    },
    allowNull: false
  }
}, {
  sequelize: _database["default"],
  tableName: "favoritos",
  timestamps: false
});