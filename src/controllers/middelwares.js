import jwt from "jsonwebtoken";
import {User} from "../models/user";
import sequelize from "../config/database";



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
  verifyBeforeAddToFavorites: (req, res, next) => {
      const {id_movie, id_user} = req.body;
      try{
      sequelize.query(`SELECT * from favoritos where movi_id = ${id_movie} and user_id = ${id_user}`,{type: sequelize.QueryTypes.SELECT}).then(
            (resp)=> {
                console.log(resp, "sdsdfsdfsdfsdfsdf")
                if(!resp.length){
                    console.log(resp)
                    next()
                }else{
                    console.log(resp)
                    res.status(200).json({success:false, message:"Ya esta Peli se Encuentra en tus Favoritos"})
                }
            }
        )

      }catch(e){
          console.log(e)
          res.status(500).json({success:false, message:"Ya"})
      }
  }
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
