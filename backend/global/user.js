const Db = require('../db/index');
exports.emailIsRegister= async (email)=>{
    let query = 'SELECT id_user from  user WHERE email=? LIMIT 1';
    let queryArray =[email];
    try{
    let emailExist = await Db.select(query,queryArray);    
            if(emailExist.length>0){
                return true;
            }else{
                return false;
            }
    }catch(e){
        console.log(e)
        return false;
    }  
}
exports.getInfoUser = async (email)=>{
    let query = 'SELECT u.password,u.id_user,t.type_profile from user u INNER JOIN type_profile t ON u.id_user=t.id_user WHERE u.email=? LIMIT 100';
    let queryArray =[email];
    try{
    let emailExist = await Db.select(query,queryArray);   
    
                return emailExist;
       
    }catch(e){
        console.log(e) 
        
    }  

}
    // type_profile  = influencer or follower
