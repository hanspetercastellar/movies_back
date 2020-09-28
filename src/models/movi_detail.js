import {Sequelize, DataType, Model, DataTypes} from "sequelize";
import sequelize from "../config/database";
import {Movi} from "./movi";

export class MoviDetail extends Model {}

MoviDetail.init(
  {
    id_detail: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      utoIncrement: true,
    },
    movi_id: {
      type: DataTypes.INTEGER(5),
      references: {
        model: Movi,
        key: "id_movi",
      },
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    reparto: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    descripcion: {
      type: DataTypes.STRING(150),
    },
  },
  {
      sequelize: sequelize,
    tableName: "movi_detail",
    timestamps: false,
  }
);

