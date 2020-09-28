import {Sequelize, DataType, Model, DataTypes} from "sequelize";
import sequelize from "../config/database";
import {Movi} from "./movi";
import {User} from "./user";

export class Favoritos extends Model {}

Favoritos.init(
  {
    id_favorito: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movi_id: {
      type: DataTypes.INTEGER(5),
      references: {
        model: Movi,
        key: "id_movi",
      },
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER(5),
      references: {
        model: User,
        key: "id_usuario",
      },
      allowNull: false,
    },
  },
  {
      sequelize: sequelize,
    tableName: "favoritos",
    timestamps: false,
  }
);

