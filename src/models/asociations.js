import {Movi} from "./movi";
import {User} from "./user";
import {Favoritos} from "./favoritos";
import {MoviDetail} from "./movi_detail";


Movi.belongsToMany(User, {through: 'favoritos'})
User.belongsToMany(Movi, {through: 'favoritos'})


Movi.hasOne(MoviDetail, {foreignKey:"movi_id"})
MoviDetail.belongsTo(Movi,{ foreignKey:"movi_id"})
