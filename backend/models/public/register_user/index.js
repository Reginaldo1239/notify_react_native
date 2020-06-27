const Db = require('../../../db');


exports.register_user = async (obj)=>{
    let {name,email,date_of_birth,password} = obj;
    let table='user';
    let post = {
                name,
                email,
                date_of_birth,
                password
    }
  let resultInsert= Db.insert(table,post).then(result=>{
            return result
    }) 
  return resultInsert;

  }

  exports.registerTypeProfile=async (obj)=>{
    let {id_user,type_profile} = obj;
    let table = 'type_profile';
    let post ={
      id_user,
      type_profile
    }
     return await  Db.insert(table,post);
  }