const Db = require('../../../db');
exports.detailInfluencer=async (obj)=>{
    let {id_social_network,id_user}=obj;
    console.log(id_user)
    console.log(id_social_network)
    let query = 'SELECT s.id_social_network ,s.name_social_network,s.id_profile_social_network, s.title,s.subscribers,s.img_profile_small,s.img_profile_medium,s.img_profile_large,subs.id_subscriber,subs.notify FROM social_network s LEFT join subscriber subs on (s.id_social_network=subs.id_social_network AND subs.id_user_subscriber=? ) WHERE s.id_social_network=? LIMIT 1';
    let queryArray = [id_social_network,id_user];
    return await Db.select(query,queryArray);
} 
    