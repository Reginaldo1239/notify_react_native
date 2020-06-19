const Validation = require('../../../global/validation');
const User  = require('../../../global/user');
const Criptography = require('../../../global/cryptography');
var jwt = require('jsonwebtoken');


exports.login= async (req,res)=>{
    let {email,password} =req.body;
    let erros= [];
    let msgErro= {msg:''};    

    if(!Validation.emailValid(email)){
        erros.push({email:'email invalido'});
        }
     let infoUser=await User.getInfoUser(email);
       if(!Criptography.chekHash(password,infoUser.password)){
        msgErro.msg="email ou senha incorretos";
        erros.push({email:'email ou senha incorretos'});
       }

       if(erros.length==0){ 
        jwt.sign({ name: 'reginaldo' ,id_user : infoUser.id_user ,profile:'1,2' }, 'privatssseKey', { algorithm: 'HS512' }, function(err, token) {
        if(typeof token ==='string'){
            res.status(200).send({token:token})
        }else{
            res.status(500).send({msg:'ocorreu um erro'})
        }
    });
    }else{
        res.status(400).send(msgErro);
    }
      
           /*   jwt.verify(token, 'privatssseKey' , { algorithms: ['HS512'] }, function (err, payload) {
   
          });*/
       

}  