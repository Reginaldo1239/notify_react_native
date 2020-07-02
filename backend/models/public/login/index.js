    const Db=   require('../../../db/index');

exports.infoUser = async (obj)=>{
    let {email,type_profile} = obj;

    let query = 'SELECT u.password,u.id_user,t.type_profile from user u INNER JOIN type_profile t ON u.id_user=t.id_user WHERE u.email=? AND t.type_profile=? LIMIT 3';
    let queryArray =[email,type_profile];

    let emailExist = await Db.select(query,queryArray);   
    
                return emailExist;


}