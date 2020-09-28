"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Movi = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

var _movi_detail = require("./movi_detail");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Movi = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Movi, _Model);

  var _super = _createSuper(Movi);

  function Movi() {
    (0, _classCallCheck2["default"])(this, Movi);
    return _super.apply(this, arguments);
  }

  return Movi;
}(_sequelize.Model);

exports.Movi = Movi;
Movi.init({
  id_movi: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    utoIncrement: true
  },
  nombre: {
    type: _sequelize.DataTypes.STRING(100),
    allowNull: false
  },
  imagen: {
    type: _sequelize.DataTypes.STRING(100),
    allowNull: false
  },
  duracion: {
    type: _sequelize.DataTypes.STRING(20),
    allowNull: false
  }
}, {
  sequelize: _database["default"],
  tableName: "movi",
  timestamps: false
});