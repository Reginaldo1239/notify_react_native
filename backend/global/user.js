const Db = require('../db/index');
exports.emailIsRegister=(email)=>{
    let query = 'SELECT id_user from  user WHERE email=? LIMIT 1';
    let queryArray =[email];
    try{
    let emailExist = Db.select(query,queryArray).then(resultSelect=>{
        return resultSelect;
    });
        if(emailExist.length>0){
            return true;
        }else{
            return false;
        }
    }catch(e){
        console.log(e);
        return false;
    } 
}