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
    let query = 'SELECT password,id_user from  user WHERE email=? LIMIT 1';
    let queryArray =[email];
    try{
    let emailExist = await Db.select(query,queryArray);    
            if(emailExist.length>0){
                return emailExist[0];
            }else{
                return false; 
            }
    }catch(e){
        console.log(e) 
        return false;
    }  

}