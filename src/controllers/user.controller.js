import "../models/user";
import bcrypt from "bcryptjs";
import {User} from "../models/user";

export const UserController = {
  store: async (req, res) => {
    const {nickname, email, password} = req.body;
    try {
      //encripto la contraseña con HASH usando bcrypt
      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(password, salt);
      const createUser = await User.create({
        nickname,
        email,
        password: pass,
      });
      await console.log(createUser);
      res.status(200).json({success: true, message: "Usuario creado"});
    } catch (err) {
      res.status(500).json({success: false, message: "error", error: err});
    }
  },
   encryPassword: async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}
