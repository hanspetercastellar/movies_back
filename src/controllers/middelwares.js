import {User} from "../models/user";

export const middelwares = {
  //comprobar si un usuario ya se encuentra registrado
  userExist: async (req, res, next) => {
    const result = await User.findOne({where: {email: req.body.email}});
    if (result === null) {
      next();
    } else {
      res.status(300).json({success: false, message: "ya existe un correo similar"});
    }
  },
};
