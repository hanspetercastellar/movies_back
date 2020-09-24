import {Sequelize, DataType, Model, DataTypes} from "sequelize";
import sequelize from "../config/database";
import {MoviDetail} from "./movi_detail";

export class Movi extends Model {}

Movi.init(
  {
    id_movi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      utoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    duracion: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "movi",
    timestamps: false,
  }
);
