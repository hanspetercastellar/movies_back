import  bcrypt from 'bcryptjs';
import sequel from "../config/database";
import {Sequelize, DataType, Model, DataTypes} from "sequelize";
import sequelize from "../config/database";



export class User extends Model {}

User.init(
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
      sequelize: sequelize,
    tableName: "user",
    createdAt: false,
    updatedAt: false,
  }
);

User.prototype.matchPass = async (dbPass, reqPass) => {
    const isMatch = await bcrypt.compare(dbPass, reqPass);
    return isMatch
}
