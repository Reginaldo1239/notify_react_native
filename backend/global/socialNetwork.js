const Db = require('../db/index');

exports.existSocialNetwork = async (id_social_network)=>{
    let query = 'select id_social_network from social_network WHERE id_social_network=?'
    let queryArray =[id_social_network];
    try{
    let social_network= await Db.select(query,queryArray);
        if(await social_network.length>0){
            return true
        }else{
            return false
        }
    }catch(e){
        return false;
    }
} 
//verifica se usuario já está inscrito na rede social
exports.checkedIfUserRegisteredSocialNetwork=async (obj)=>{
    let {id_social_network,id_user}= obj;
    let query = 'SELECT id_subscriber FROM subscriber WHERE id_user_subscriber=? AND id_social_network=?';
    let queryArray = [id_user,id_social_network];
    try{
    let iAmRegistered = await Db.select(query,queryArray);
    console.log('iAmRegistered')
    console.log(iAmRegistered)
        if(iAmRegistered.length>0){
            return true;
        }else{
            return false;
        }    
    }catch(e){
        console.log(e);
        return false
    }
} 