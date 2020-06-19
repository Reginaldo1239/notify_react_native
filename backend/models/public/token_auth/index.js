const Db = require('../../../../db');

exports.update_code= async (obj)=>{
    let {state}= obj;
    let id_code_social_network = state
    let queryArray = [];
    let query ='SELECT id_code_social_network,social_network from code_auth_social_network;  WHERE id_code_social_network=? AND created_in >(NOW() - INTERVAL 1 HOUR)'
    queryArray.push(id_code_social_network);
    return Db.select(query,queryArray);

}