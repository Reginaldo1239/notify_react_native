const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const crypto = require('crypto');
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

exports.encript = (value)=>{
  value+='';
  const algorithm = 'aes-192-cbc';
  const password = 'Password used to generate key';
  // Use the async `crypto.scrypt()` instead.
  return new Promise((resolver,reject)=>{
  const key = crypto.scryptSync(password, 'salt', 24);
  // Use `crypto.randomBytes` to generate a random iv instead of the static iv
  // shown here.
  const iv = Buffer.alloc(16, 0); // Initialization vector.

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(value, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
    resolver(encrypted)
    reject(false)
  })


}
exports.decript = (value)=>{
  value+='';
  const algorithm = 'aes-192-cbc';
  const password = 'Password used to generate key';
return new Promise((resolver,reject)=>{
// Use the async `crypto.scrypt()` instead.
const key = crypto.scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = crypto.createDecipheriv(algorithm, key, iv);
// Encrypted using same algorithm, key and iv.
  const encrypted =value;
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  resolver(decrypted)
  reject(false)
}) 
} 

exports.generateTokenJwt = (objectWithValues)=>{
 // { name: 'reginaldo' ,id_user : infoUser.id_user ,profile:'1,2' }
 return new Promise((resolver,reject)=>{
 jwt.sign(objectWithValues, 'privatssseKey', { algorithm: 'HS512' }, function(err, token) {
  if(err){
    console.log(err)
    reject(false);
  }else{
    resolver(token);
  } 

});

 })
}
exports.verifyTokenJwt = (token)=>{
     return  new Promise((resolver,reject)=>{
    jwt.verify(token, 'privatssseKey' , { algorithms: ['HS512'] }, function (err, payload) {
      if(err){
        console.log(err);
        reject(false)
      }
      resolver(payload)
});
   })

}