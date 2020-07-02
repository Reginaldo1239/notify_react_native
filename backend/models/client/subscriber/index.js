const Db = require('../../../db');

exports.listSubscribers = async (obj)=>{
    let {id_user,page,limit} = obj;
   // var query = connection.query('SELECT * FROM table WHERE id = ?', [12], function (error, results, fields) {
    let query = 'SELECT * FROM subscriber WHERE id_user_subscriber=? LIMIT ? OFFSET ?';
    let queryArray = [id_user, limit,page*limit];
    return await Db.select(query,queryArray);
}
  
exports.subscriberSocialnetwork= async(obj)=>{
    let {id_user,id_social_network} = obj;
    let table = 'subscriber';
    let post ={
        id_user_subscriber:id_user,
        id_social_network}
        return await Db.insert(table,post);
}

exports.unsubscribeSocial = async(obj)=>{
    let {id_user,id_social_network}=obj;
    let table = 'subscriber';
    let post = {
        id_user_subscriber:id_user,
    }
    let query = `DELETE FROM subscriber WHERE id_social_network =${id_social_network} AND id_user_subscriber =${id_user}`;
    return await Db.delete(query);
}