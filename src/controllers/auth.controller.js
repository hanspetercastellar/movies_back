import {User} from "../models/user";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
export class AuthController {
    async login(req, res) {
        const {user_email, user_password} = req.body;
console.log(req.body)
        const exists = await User.findOne({
           where:{
               email:user_email,
               //password:pass
           }
        });
        console.log(exists)
        if (exists) {
            let user = await User.findByPk(exists.id_usuario);
            const isMatch = this.matchPass(user.getDataValue('password'),user_password);
            if(isMatch){
                const token = jwt.sign({id: user._id}, 'secret', {
                    expiresIn: 60 * 60 * 24,
                });
                res.json({auth: true, user, token,status:200});
            }else{
                res.json({auth: false});
            }


        } else {
            res.status(404).json({status: 404, message: 'El usuario no existe'});

        }

    }
    async matchPass(dbPass, reqPass){
    return await bcrypt.compare(dbPass, reqPass)
}
}
