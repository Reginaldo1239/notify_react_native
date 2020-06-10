const Db = require('../../../db');


exports.register_user = async (obj)=>{
    let {name,email,date_of_birth,country,password} = obj;
    let table='user';
    let post = {
                name,
                email,date_of_birth,
                country,password
    }
  let resultInsert= Db.insert(table,post).then(result=>{
            return result
    }) 
  return resultInsert;

} 
