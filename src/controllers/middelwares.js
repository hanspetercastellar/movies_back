import jwt from "jsonwebtoken";
import {User} from "../models/user";


 const middelwares = {
  //comprobar si un usuario ya se encuentra registrado
  userExist: async (req, res, next) => {
    const result = await User.findOne({where: {email: req.body.email}});
    if (result === null) {
      next();
    } else {
      res.status(300).json({success: false, message: "ya existe un correo similar"});
    }
  },
  // verifyToken: async (req, res, next) => {
  //   jwt.verify(req.token, 'secret', (error, data) => {
  //     if(error){
  //       res.status.(403).json({
  //         error,status:403,message:error.message
  //       })
  //     }else{
  //       next()
  //     }
  //   })
  // }
};
 export default middelwares
