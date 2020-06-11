const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

exports.generateHash=(password)=>{
  return new Promise((resolver,reject)=>{
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
           
            resolver(hash);
        });
    });
  }) 
}
exports.chekHash=async (password,passwordHash)=>{
   return  bcrypt.compare('password', passwordHash, function(err, result) {

        console.log(result)
            return result;
    });
} 