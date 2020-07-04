const Db = require('../../../db')

exports.searchInfluencer = async(obj)=>{
    let {search,limit}=obj;
    let query = 'SELECT * FROM social_network WHERE title LIKE ? LIMIT ?';
    let queryArray = [search+'%',limit];
    return await Db.select(query,queryArray);
} 