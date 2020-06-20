const Db = require('../../../db');
    //verifica se ja existe algum token para a rede social e usuario,o usuario pode ter 1 token por rede social,
exports.exist_token = async (obj)=>{
    let {id_user,name_social_network} = obj;
    let query = 'SELECT id_user,name_social_network,id_token from token_social_network WHERE id_user=? AND name_social_network=?';
    let queryArray= [id_user,name_social_network];
    return await Db.select(query,queryArray);
}
exports.insertNewToken =async(obj)=>{
    let {id_user,name_social_network,access_token,refresh_token,scope,token_type,expires_in} = obj;
    let table="token_social_network";
    let post = {
        id_user,
        name_social_network,
        access_token, 
        refresh_token,
        scope,
        token_type,
        expires_in
    }
    return await Db.insert(table,post);
}
exports.updateToken = async (obj)=>{
     let {access_token,scope,token_type,expires_in,id_user,name_social_network}=obj;
     let query = 'UPDATE token_social_network SET access_token=? ,scope=? ,token_type=? ,expires_in=? WHERE id_user=? AND name_social_network=? ';
     let queryArray = [access_token,scope,token_type,expires_in,id_user,name_social_network];
     return  await Db.update(query,queryArray);
}

exports.update_code= async (obj)=>{
    let {id_code_social_network}= obj; 
    let queryArray = [];
    let query ='SELECT id_code_social_network,social_network from code_auth_social_network  WHERE id_code_social_network=? AND created_in >(NOW() - INTERVAL 1 HOUR)'
    queryArray.push(id_code_social_network);
    return Db.select(query,queryArray);

}

exports.update_token=async (obj)=>{
    let {access_token,refresh_token,scope,token_type,id_code_social_network} =obj;
    let query;
    let queryArray;
        // verifica se refresh_token existe para atualizar,se não existe é melhor não atualzar
    if(typeof refresh_token =='string'){
        query  = 'update code_auth_social_network set access_token=?,token_type=? WHERE id_code_social_network=?';
        queryArray = [access_token,token_type,id_code_social_network];
    }else{
        query  = 'update code_auth_social_network set access_token=?,refresh_token=?,token_type=? WHERE id_code_social_network=?';
        queryArray = [access_token,refresh_token,token_type,id_code_social_network];
    }
    return Db.update(query,queryArray);
} 