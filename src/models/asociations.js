import {Movi} from "./movi";
import {User} from "./user";
import {Favoritos} from "./favoritos";
import {MoviDetail} from "./movi_detail";


Movi.belongsToMany(User, {through: Favoritos})
User.belongsToMany(Movi, {through: Favoritos})


Movi.hasOne(MoviDetail, {foreignKey:"movi_id"})
MoviDetail.belongsTo(Movi,{ foreignKey:"movi_id"})
