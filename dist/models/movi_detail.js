"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoviDetail = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

var _movi = require("./movi");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MoviDetail = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(MoviDetail, _Model);

  var _super = _createSuper(MoviDetail);

  function MoviDetail() {
    (0, _classCallCheck2["default"])(this, MoviDetail);
    return _super.apply(this, arguments);
  }

  return MoviDetail;
}(_sequelize.Model);

exports.MoviDetail = MoviDetail;
MoviDetail.init({
  id_detail: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    utoIncrement: true
  },
  movi_id: {
    type: _sequelize.DataTypes.INTEGER(5),
    references: {
      model: _movi.Movi,
      key: "id_movi"
    },
    allowNull: false
  },
  director: {
    type: _sequelize.DataTypes.STRING(50),
    allowNull: true
  },
  reparto: {
    type: _sequelize.DataTypes.STRING(255),
    allowNull: true
  },
  fecha: {
    type: _sequelize.DataTypes.DATE
  },
  descripcion: {
    type: _sequelize.DataTypes.STRING(150)
  }
}, {
  sequelize: _database["default"],
  tableName: "movi_detail",
  timestamps: false
});