const Db = require('../../../db');
exports.initSolicitAuth = async (obj)=>{
    let {id_user,social_network,status} = obj;
    let table ='code_auth_social_network';
    let post = {
        id_user,
        social_network,
        status,
    }

    return await Db.insert(table,post);
}    